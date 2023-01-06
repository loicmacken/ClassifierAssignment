from django.db import models

# Create your models here.
# class Image(models.Model):
#     image = models.ImageField(upload_to='images', null=False)
#     labels = models.CharField(max_length=256, null=False)

#     def __str__(self):
#         return str(self.id)
    
class Prediction(models.Model):
    labels = models.JSONField()
    image = models.ImageField()

    def __str__(self):
        return str(self.id)