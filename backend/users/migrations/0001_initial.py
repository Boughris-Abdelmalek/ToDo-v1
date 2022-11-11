# Generated by Django 4.1.3 on 2022-11-11 10:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Users",
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
                ("username", models.CharField(max_length=30)),
                ("email", models.EmailField(max_length=254)),
                ("password", models.CharField(max_length=30)),
            ],
        ),
    ]