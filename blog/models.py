from django.db import models
import os
import datetime
from django.utils import timezone

# Create your models here.
def get_image_path(instance, filename):
	return os.path.join('', filename)


class Image(models.Model):
	Title = models.CharField(max_length=30)
	datetime = models.DateTimeField(auto_now_add=True)
	Image = models.ImageField(upload_to=get_image_path, blank=True, null=True)

class Location(models.Model):
	Latitude = models.DecimalField(max_digits=12,decimal_places=10, blank=True,null=True)
	Longitude = models.DecimalField(max_digits=12,decimal_places=10, blank=True,null=True)
	Landmark = models.CharField(max_length=255)

class Post(models.Model):
	Title = models.CharField(max_length=30)
	Content_Text = models.CharField(max_length=10000)
	created = models.DateTimeField(editable=False, null=True)
	modified = models.DateTimeField(null=True)
	Images = models.ManyToManyField(Image, blank=True)
	Location = models.ForeignKey(Location,blank=True, null=True)
	def save(self, *args, **kwargs):
		''' On save, update timestamp '''
		if not self.id:
			self.created = timezone.now()
		self.modified = timezone.now()
		return super(Post, self).save(*args, **kwargs)

