# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='Images',
        ),
        migrations.AddField(
            model_name='image',
            name='Post',
            field=models.ForeignKey(blank=True, to='blog.Post', null=True),
        ),
    ]
