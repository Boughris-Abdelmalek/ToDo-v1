from django.db import models

# Create your models here.
class Users(models.Model):
    username = models.CharField(max_length=30)
    email = models.EmailField()
    password = models.CharField(max_length=30)

    def __str__(self):
        return self.username

class Task(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    completed = models.BooleanField(default=False, blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['title']