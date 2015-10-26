# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_auto_20151016_1652'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='image',
            name='Post',
        ),
        migrations.AddField(
            model_name='post',
            name='Images',
            field=models.ForeignKey(blank=True, to='blog.Image', null=True),
        ),
    ]
