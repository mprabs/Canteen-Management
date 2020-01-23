from .serializers import *
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from .models import *
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework import mixins
from django.utils.timezone import now
from datetime import timedelta
from django.core.exceptions import ValidationError
from rest_framework import status

 
@api_view(['GET'])
def get_current_user(request):
    
    serializer = GetFullUserSerializer(request.user)
    
    return Response(serializer.data)


class CreateUserView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self,request):
        user = request.data.get('user')
        if not user:
            return Response({'response' : 'error', 'message' : 'No data found'})
        serializer = UserSerializerWithToken(data = user)

        if serializer.is_valid():
            saved_user = serializer.save()
        else:
            return Response({"response" : "error", "message" : serializer.errors})

        return Response({"response" : "success", "message" : "user created succesfully"})

 


class ListFoodItemView(generics.ListCreateAPIView):
   # permission_classes = (permissions.AllowAny, )
     
    queryset = FoodItem.objects.all()
    serializer_class = FoodItemSerializer
    

class ListFoodItemDetailView(generics.RetrieveUpdateDestroyAPIView):
   # permission_classes = (permissions.AllowAny, )
     
    queryset = FoodItem.objects.all()
    serializer_class = FoodItemSerializer


class MenuView(generics.ListCreateAPIView):
    queryset = Menu.objects.all() 
    serializer_class = MenuSerializer

    def perform_create(self, serializer):
        san = self.get_queryset()
        if san.exists():
            raise ValidationError('You have already made menu for that date')
        serializer.save()

class OrderView(generics.ListCreateAPIView):
    
    serializer_class = OrderSerializer
    def create(self, request, *args, **kwargs):
        # print("sanee")
         #print(request.data)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def perform_create(self, serializer):
        # print("manee")
        # print(self.request.data.getlist("menu_item")[0])
       
        queryset = Menu.objects.filter(date=self.request.data.getlist("date")[0], food_item=self.request.data.getlist("menu_item")[0])
        if not queryset.exists():
            raise ValidationError('not available')
        serializer.save()

     
 

        

 

        
class MenuDetailView(generics.RetrieveUpdateDestroyAPIView):
   # permission_classes = (permissions.AllowAny, )
     
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer





"""
    def get_queryset(self):
        tomorrow = now() + timedelta(days=1)
        return Menu.objects.filter(date=tomorrow)
"""






"""
class OrderView(generics.ListCreateAPIView):
   # permission_classes = (permissions.AllowAny, )
     
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def create(self, request, *args, **kwargs):
        serializer = MenuSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
     
        return Response(serializer.data, status=status.HTTP_201_CREATED )

    
    def perform_create(self, serializer):
        queryset = Menu.objects.filter(food_item=self.request.food_item)
        if queryset.exists():
            serializer.save()
        raise ValidationError('there is no menu for that day')
    
"""
    
 




  

    
    
 

        
    
    



 
   
   
   




      
 