# Generated by Django 4.1.4 on 2023-01-02 14:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("classifier", "0002_remove_image_created_remove_image_updated_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="image",
            name="labels",
            field=models.CharField(max_length=256),
        ),
    ]