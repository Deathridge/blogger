from django.db import models
import os
import datetime
from django.utils import timezone

# Create your models here.
class Post(models.Model):
	Title = models.CharField(max_length=30)
	Content_Text = models.CharField(max_length=255)
	created = models.DateTimeField(editable=False, null=True)
	modified = models.DateTimeField(null=True)

	def save(self, *args, **kwargs):
		''' On save, update timestamp '''
		if not self.id:
			self.created = timezone.now()
		self.modified = timezone.now()
		return super(Post, self).save(*args, **kwargs)

def get_image_path(instance, filename):
	return os.path.join('', filename)

class Image(models.Model):
	Title = models.CharField(max_length=30)
	datetime = models.DateTimeField(auto_now_add=True)
	Image = models.ImageField(upload_to=get_image_path, blank=True, null=True)
	Post = models.ForeignKey(Post, blank=True, null=True)

