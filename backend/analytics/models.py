from django.db import models
from django.contrib.auth.models import User
from posts.models import Post

# Create your models here.
class PostAnalytics(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='analytics')
    views = models.PositiveIntegerField(default=0)
    shares = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

class UserActivity(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    action = models.CharField(max_length=50)
    timestamp = models.DateTimeField(auto_now_add=True)