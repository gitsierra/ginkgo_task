# Generated by Django 3.1.5 on 2021-01-14 02:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DNA',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sequence', models.CharField(max_length=100)),
                ('checked_at', models.DateField(auto_now_add=True)),
            ],
        ),
    ]
