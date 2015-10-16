# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import blog.models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('Title', models.CharField(max_length=30)),
                ('datetime', models.DateTimeField()),
                ('Image', models.ImageField(null=True, upload_to=blog.models.get_image_path, blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('Title', models.CharField(max_length=30)),
                ('Content_Text', models.CharField(max_length=255)),
                ('Images', models.ForeignKey(to='blog.Image')),
            ],
        ),
    ]
