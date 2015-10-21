from django.shortcuts import render
from rest_framework import viewsets
from blog.serializers import ImageSerializer, PostSerializer, UserSerializer, LocationSerializer
from blog.models import Image, Post, Location
from django.contrib.auth.models import User
# Create your views here.
class ImageViewSet(viewsets.ModelViewSet):
	"""
	API endpoint to view/change images

	"""
	queryset = Image.objects.all().order_by('datetime')
	serializer_class = ImageSerializer

class PostViewSet(viewsets.ModelViewSet):
	"""
	API endpoint to view/modify posts 
	"""
	queryset = Post.objects.all()
	serializer_class = PostSerializer



# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class LocationViewSet(viewsets.ModelViewSet):
	queryset = Location.objects.all()
	serializer_class = LocationSerializer