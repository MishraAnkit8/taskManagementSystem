from django import forms
from django.core.exceptions import ValidationError
from Backend.models.userAuth import UserDetails 


class UserRegistrationForm(forms.ModelForm):
    mobile_no = forms.CharField(max_length=15, required=True)

    class Meta:
        model = UserDetails
        fields = ['first_name', 'last_name', 'email', 'mobile_no', 'password']  # Remove first_name and last_name
        widgets = {
            'password': forms.PasswordInput(),
        }

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if UserDetails.objects.filter(email=email).exists():
            raise ValidationError("A user with this email already exists.")
        return email

    # def clean_mobile_no(self):
    #     mobile_no = self.cleaned_data.get('mobile_no')
    #     if UserProfile.objects.filter(mobile_no=mobile_no).exists():
    #         raise ValidationError("A user with this mobile number already exists.")
    #     return mobile_no

    # def save(self, commit=True):
    #     user = super(UserRegistrationForm, self).save(commit=False)
    #     if commit:
    #         user.save()
    #         UserProfile.objects.create(user=user, mobile_no=self.cleaned_data['mobile_no'])
    #     return user