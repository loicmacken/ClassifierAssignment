# Generated by Django 4.1.4 on 2023-01-03 13:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("classifier", "0003_alter_image_labels"),
    ]

    operations = [
        migrations.CreateModel(
            name="Prediction",
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
                ("labels", models.JSONField()),
                ("image", models.ImageField(upload_to="")),
            ],
        ),
        migrations.DeleteModel(
            name="Image",
        ),
    ]