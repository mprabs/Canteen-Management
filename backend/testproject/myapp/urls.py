from django.urls import path
from django.conf.urls import url
from .views import * 
 

urlpatterns = [
    path('current_user/', get_current_user),
    path('users/create', CreateUserView.as_view()),
    path('fooditem/', ListFoodItemView.as_view(), name="FoodItem-all"),
    path('menu/', MenuView.as_view(), name="Menu-all"),
    url(r'^menu/(?P<pk>[0-9]+)$', MenuDetailView.as_view()),
    url(r'^fooditem/(?P<pk>[0-9]+)$', ListFoodItemDetailView.as_view()),
    path('order/', OrderView.as_view(), name="Order-all"),
 ]





 
