# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20151016_1618'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='created',
            field=models.DateTimeField(null=True, editable=False),
        ),
        migrations.AddField(
            model_name='post',
            name='modified',
            field=models.DateTimeField(null=True),
        ),
    ]
