# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0008_auto_20151019_1512'),
    ]

    operations = [
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('Latitude', models.DecimalField(null=True, max_digits=12, decimal_places=10, blank=True)),
                ('Longitude', models.DecimalField(null=True, max_digits=12, decimal_places=10, blank=True)),
                ('Landmark', models.CharField(max_length=255)),
            ],
        ),
    ]
