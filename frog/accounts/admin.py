from django.contrib import admin
from .models import AuthUser
from django.contrib.auth.admin import UserAdmin
from django.forms import Textarea
from django.db import models


class UserAdminConfig(UserAdmin):
    model = AuthUser
    search_fields = ('email', 'user_name',)
    list_filter = ('email', 'user_name')
    list_display = ('email', 'id', 'user_name')
    ordering = ('id',)
    fieldsets = (
        (None, {'fields': ('email', 'user_name',)}),
    )
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 20, 'cols': 60})},
    }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'user_name', 'password1', 'password2')}
         ),
    )


admin.site.register(AuthUser, UserAdminConfig)