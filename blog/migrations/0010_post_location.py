# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0009_location'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='Location',
            field=models.ForeignKey(blank=True, to='blog.Location', null=True),
        ),
    ]
