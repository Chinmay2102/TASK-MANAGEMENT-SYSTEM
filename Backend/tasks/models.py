from django.db import models

# Create your models here.
class Task(models.Model):
    PRIORITY_CHOICES=[('regular','Regular'),('medium','Medium'),('high','High')]

    STATUS_CHOICES=[('pending','Pending'),('completed','Completed')]

    title=models.CharField(max_length=225)
    description=models.CharField(null=True,blank=True)
    priority=models.CharField(max_length=20,choices=PRIORITY_CHOICES,default='regular')
    status=models.CharField(max_length=20,choices=STATUS_CHOICES,default='pending')
    due_date=models.DateField(blank=True,null=True)

    def __str__(self):
        return self.title