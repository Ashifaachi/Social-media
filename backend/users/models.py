from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    phone = models.CharField(max_length=15, unique=True)

    groups = models.ManyToManyField(
        Group,
        related_name="customuser_groups",  # Avoid conflict with auth.User.groups
        blank=True
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="customuser_permissions",  # Avoid conflict with auth.User.user_permissions
        blank=True
    )

    def __str__(self):
        return self.username