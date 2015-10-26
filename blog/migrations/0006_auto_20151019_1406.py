# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_auto_20151019_1402'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='Images',
        ),
        migrations.AddField(
            model_name='post',
            name='Images',
            field=models.ManyToManyField(to='blog.Image', null=True, blank=True),
        ),
    ]
