from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.forms import ValidationError 
from django.core.exceptions import ObjectDoesNotExist


class userRegistrationClass(BaseUserManager):
    # for creating user table 
    def create_user(self, email, password = None, **otherfields):
        if not email:
            raise ValueError('Email is Required')
        
        email = self.normalize_email(email)
        print('email why using normalization ===<<<>>>', email)
        user = self.models(email = email, **otherfields)
        user.set_password(password)  # Use Django's password hashing
        user.save(using=self._db)
        return user 
    # for super user and faculty 
    def create_superuser(self, email, password=None, **otherfields):
        otherfields.setdefault('is_staff', True)
        otherfields.setdefault('is_superuser', True)

        return self.create_user(email, password, **otherfields)

    

class UserDetails(AbstractBaseUser): 
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=254, unique=True)
    mobile_no = models.CharField(max_length=15, unique=True)
    password = models.CharField(max_length=15)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True)
    created_by = models.CharField(max_length=255, default='Ankit')
    modified_date = models.DateTimeField(auto_now=True)
    modified_by = models.CharField(max_length=255, default='Ankit')

    objects = userRegistrationClass()
    print('object in models ===<<<>>>', models)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    class Meta:
        db_table = 'users' 





#  function for check if user and password exist or not 

def getUserDetails(email, password):
    print('Checking email and password ===>>>', email, password)
    try:
        user = UserDetails.objects.get(email=email)
        # password = UserDetails.objects.get(password=password)
        print('User found ===>>>', user)
        
        if password:
            # Returning user details as a dictionary
            user_data = {
                'username': user.first_name +' ' + user.last_name,
                'email': user.email,
                'mobile_no': user.mobile_no,
                'is_active': user.is_active,
                'is_staff': user.is_staff,
                'is_superuser': user.is_superuser,
                'created_date': user.created_date,
                'created_by': user.created_by,
                'modified_date': user.modified_date,
                'modified_by': user.modified_by
            }
            print('User details retrieved:', user_data)
            return user_data
        else:
            print("Invalid password.")
            return None
    except ObjectDoesNotExist:
        print("User not found.")
        return None


