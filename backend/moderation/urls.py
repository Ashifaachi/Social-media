from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import  ModerationLogViewSet,ReportedPostViewSet,ReportUserViewSet

router = DefaultRouter()
router.register(r'reportpost', ReportedPostViewSet, basename='reportpost')
router.register(r'reportuser', ReportUserViewSet, basename='reportuser')
router.register(r'moderation-logs', ModerationLogViewSet, basename='moderation-log')

urlpatterns = [
    path('', include(router.urls)),
]
