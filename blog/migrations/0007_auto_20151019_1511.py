# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_auto_20151019_1406'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='Content_Text',
            field=models.CharField(max_length=10000),
        ),
    ]
