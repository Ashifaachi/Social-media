# from django.urls import path
# from .views import PostListCreateView, PostRetrieveUpdateDestroyView

# urlpatterns = [
#     path('', PostListCreateView.as_view(), name='post-list-create'),
#     path('<int:pk>/', PostRetrieveUpdateDestroyView.as_view(), name='post-detail'),
# ]


from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, LikeViewSet, CommentViewSet, PostMediaViewSet

router = DefaultRouter()
router.register(r'posts', PostViewSet, basename='post')
router.register(r'likes', LikeViewSet, basename='like')
router.register(r'comments', CommentViewSet, basename='comment')
router.register(r'postsmedia', PostMediaViewSet, basename='postmedia')

urlpatterns = [
    path('', include(router.urls)),
]
