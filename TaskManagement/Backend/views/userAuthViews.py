from functools import cache
from venv import logger
from django.shortcuts import get_object_or_404, render, redirect
from django.contrib import messages
from django.db.models import Q
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from Backend.utils.tokenUtils import generate_access_token, generate_refresh_token
import json
from django.views.decorators.http import require_POST
import logging
from Backend.models.userAuth import  UserDetails, getUserDetails
from rest_framework_simplejwt.views import TokenObtainPairView
from Backend.forms import UserRegistrationForm

from django.contrib.auth import login
from Backend.utils.redis import redis_client, redis_connect
from rest_framework import generics, permissions
from rest_framework.response import Response
# from .serializers import InventorySerializer 
from rest_framework.decorators import api_view 
from rest_framework import status
from Backend.utils.utils import get_redis_data, set_redis_data
from django.contrib.auth.decorators import login_required


#  for user registration 
@api_view(['POST', 'OPTIONS']) 
def userRegistrationViews(request):
    if request.method == 'OPTIONS':
        return Response(status=status.HTTP_200_OK) 

    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            print('data comming from frontend ===<<>>', data)
            register_data = data
            print('register_data ===<<<>>>>', register_data)

            if not register_data:
                return JsonResponse({'status': 'Error', 'message': 'No registration data provided.'}, status=400)

            email = register_data.get('email')
            mobile_no = register_data.get('mobileNo')
            print('email ===<<>>>', email)
            print('mobile_no ===<<>>>', mobile_no)

            print('UserDetails ===<<<>>>', UserDetails)
            # Check for existing user
            if UserDetails.objects.filter(Q(email=email) | Q(mobile_no=mobile_no)).exists():
                return JsonResponse({'status': 'Done', 'message': 'A user with this email or mobile number is already registered.'}, status=200)

            # Populate form with extracted data
            form = UserRegistrationForm({
                'first_name': register_data.get('firstname'),
                'last_name': register_data.get('lastname'),
                'email': email,
                'mobile_no': mobile_no,
                'password': register_data.get('password')
            })

            print('form ===<<>>>', form)

            if form.is_valid():
                print('i am inside form validation ===<<<>>>')
                user = form.save(commit=False)
                user.save()
                return JsonResponse({'status': 'Done', 'message': 'User registered successfully.'}, status=200)
            else:
                return JsonResponse({'status': 'Error', 'errors': form.errors.as_json()}, status=400)

        except json.JSONDecodeError:
            return JsonResponse({'status': 'Error', 'message': 'Invalid JSON data provided.'}, status=400)
        except Exception as e:
            return JsonResponse({'status': 'Error', 'message': str(e)}, status=500)

    return JsonResponse({'status': 'Error', 'message': 'Invalid request method.'}, status=400)




@csrf_exempt  # For API POST requests
@require_POST
def login_details(request):
    # Parse request body
    data = json.loads(request.body)
    email = data.get('email')
    password = data.get('password')
    print('Login data received:', data)

    # Authenticate user
    user = getUserDetails(email, password)
    print('User details:', user)

    if user:
        # Retrieve username from user data
        username = user['username']
        print('User authenticated. Username:', username)
        set_redis_data(username, {'username': username, 'status': 200})


        # Set session
        request.session['username'] = username
        print('Session username set:', request.session['username'])

        # Set Redis session key (using email as the unique identifier)
        redis_key = f"user_session:{username}"
        redis_client.set(redis_key, username, ex=3600)  # 1-hour expiry
        print('Redis session set for:', username)

        # Generate access and refresh tokens
        access_token = generate_access_token(username)
        refresh_token = generate_refresh_token(username)
        print('Access and refresh tokens generated:', access_token, refresh_token)

        # Store tokens in Redis
        redis_client.set(f"user:{username}:access_token", access_token, ex=3600)
        redis_client.set(f"user:{username}:refresh_token", refresh_token, ex=3600)

        # Prepare response with tokens in cookies
        response = JsonResponse({
            'status': 'Done',
            'message': f'User {username} logged in successfully!',
            'accessToken': access_token,
            'refreshToken': refresh_token
        })

        # Set tokens as secure HttpOnly cookies
        response.set_cookie('access_token', access_token, httponly=True, secure=True)
        response.set_cookie('refresh_token', refresh_token, httponly=True, secure=True)
        print('Response ready for user login:', response)
        
        return response
    else:
        return JsonResponse({'status': 'Error', 'message': 'Invalid email or password.'}, status=401)






@login_required
def get_user_session(request):
    user_id = request.user.id 
    print('user_id ===<<<>>>', user_id)
    session_key = f"user_session:{user_id}"
    session_data = cache.get(session_key)

    if session_data is None:
        return JsonResponse({"message": "Session not found"}, status=404)

    return JsonResponse({"message": "Session retrieved successfully", "session_data": session_data})