# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_auto_20151019_1511'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='Images',
            field=models.ManyToManyField(to='blog.Image', blank=True),
        ),
    ]
