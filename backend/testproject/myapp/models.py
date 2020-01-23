from django.db import models
from django.utils import timezone
from datetime import timedelta 
import datetime
from django.contrib.auth.models import User
from django.utils import timezone
from django.utils.timezone import now
"""
def tomorrow(): 
	now  = datetime.date.today()
	return  now + timedelta(days = 1)
"""
 
class FoodItem(models.Model):
	name = models.CharField(max_length=30,blank=False)


	def __str__(self):
		return "{}".format(self.name)


class Menu(models.Model):

	food_item = models.ManyToManyField(FoodItem) 
	date =  models.DateField()

	def __str__(self):
		return "{}".format(self.food_item)
		return "{}".format(self.date)

	
class Order(models.Model):

	menu_item = models.ForeignKey(FoodItem, related_name='Order',on_delete=models.CASCADE)
	date = models.DateField() 
	user = models.ForeignKey(User, related_name='Order', null=True ,on_delete=models.CASCADE)

	def __str__(self):
		return "{}".format(self.menu_item)
		return "{}".format(self.user)






    

 
 
 
	
	      

       