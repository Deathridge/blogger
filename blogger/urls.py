from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework import routers, serializers, viewsets
from blog.views import ImageViewSet, UserViewSet, PostViewSet, LocationViewSet
from django.conf import settings
from django.conf.urls.static import static


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'images', ImageViewSet)
router.register(r'posts', PostViewSet)
router.register(r'locations', LocationViewSet)

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'blogger.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^admin/', include(admin.site.urls)),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) +  static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
