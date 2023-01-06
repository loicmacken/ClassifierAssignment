# Generated by Django 4.1.4 on 2023-01-02 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("classifier", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="image",
            name="created",
        ),
        migrations.RemoveField(
            model_name="image",
            name="updated",
        ),
        migrations.RemoveField(
            model_name="image",
            name="labels",
        ),
        migrations.DeleteModel(
            name="Label",
        ),
        migrations.AddField(
            model_name="image",
            name="labels",
            field=models.CharField(default="", max_length=256),
        ),
    ]
