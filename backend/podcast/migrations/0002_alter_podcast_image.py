# Generated by Django 4.1.7 on 2023-03-12 02:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("podcast", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="podcast",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to="podcast/images"),
        ),
    ]