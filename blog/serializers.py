from rest_framework import serializers
from blog.models import Image, Post,Location
from django.contrib.auth.models import User

class ImageSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Image


class PostSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Post
			
# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')

class LocationSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Location