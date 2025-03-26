from django.contrib import admin
from django.contrib.auth import get_user_model
from .models import UserProfile,Follower,BlockedUser

# Register your models here.

admin.site.register(UserProfile)
admin.site.register(Follower)
admin.site.register(BlockedUser)