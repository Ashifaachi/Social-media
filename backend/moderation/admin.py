from django.contrib import admin
from .models import ReportedPost,ReportedUser,ModerationAction
# Register your models here.
admin.site.register(ReportedUser)
admin.site.register(ReportedPost)
admin.site.register(ModerationAction)