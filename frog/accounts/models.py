from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class CustomAccountManager(BaseUserManager):
    def create_superuser(self, email, password, **other_fields):
        other_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **other_fields)

    def create_user(self, email, password, **other_fields):
        if not email:
            raise ValueError('You must provide an email address')
        email = self.normalize_email(email)
        user = self.model(email=email,  **other_fields)
        user.set_password(password)
        user.save()
        return user


class AuthUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField('email address', unique=True)
    user_name = models.CharField(max_length=150, unique=True)

    objects = CustomAccountManager()
    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.user_name
