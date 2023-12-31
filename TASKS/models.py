from django.db import models

# Create your models here.
class Task(models.Model):
    #DJANGO LE ASIGNA UN ID IMPLICITO COMO MONGO
    title= models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title