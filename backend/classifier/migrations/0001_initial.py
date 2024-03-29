# Generated by Django 4.1.4 on 2023-01-02 12:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Label",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("text", models.CharField(max_length=32)),
                ("accuracy", models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name="Image",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("image", models.ImageField(upload_to="images")),
                ("created", models.DateTimeField(auto_now=True)),
                ("updated", models.DateTimeField(auto_now_add=True)),
                ("labels", models.ManyToManyField(to="classifier.label")),
            ],
        ),
    ]
