# Generated by Django 3.0.6 on 2020-07-21 05:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('full_crud', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='grade',
            name='grade_num',
            field=models.IntegerField(choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'), ('6', '6'), ('7', '7'), ('8', '8'), ('9', '9'), ('10', '10'), ('11', '11')]),
        ),
    ]
