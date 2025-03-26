from django.contrib import admin
from .models import PostAnalytics,UserActivity

# Register your models here.

admin.site.register(PostAnalytics)
admin.site.register(UserActivity)
