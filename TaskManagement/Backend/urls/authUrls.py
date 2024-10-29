from Backend.views.userAuthViews import userRegistrationViews , login_details, get_user_session
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('register/', userRegistrationViews, name = 'user_registration'),
    path('login/', login_details, name = 'login_details'),
    path('getUserSession/', get_user_session, name='get_user_session'),
    
]