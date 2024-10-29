from Backend.views.taskViews import homepage_view 
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('homepage/', homepage_view, name='homepage_view'),
]