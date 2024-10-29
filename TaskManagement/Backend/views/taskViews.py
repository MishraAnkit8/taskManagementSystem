from django.http import JsonResponse
from django.contrib.auth.decorators import login_required

def homepage_view(request):
    # This view is protected with @login_required, so only logged-in users can access it
    user = request.user  # This is the currently logged-in user
    response_data = {
        'message': 'Welcome to the React and Django Project!',
        'username': user.username,  # Or any other user info
    }

    # Print or log the username and other details
    print(f"Current logged-in user: {user}")
    print(f"User ID: {user.id}")
    
    # Return a JSON response with user information
    return JsonResponse(response_data)
