


"""
from .models import User, Menu , Item , UserOrder
from rest_framework import viewsets, permissions
from .serializers import UserSerializer,MenuSerializer,ItemSerializer,UserOrderSerializer

class UserviewSet(viewsets.ModelViewSet) :
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer

class ItemviewSet(viewsets.ModelViewSet) :
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class UserOrder(viewsets.ModelViewSet) :
    queryset = User.objects.all()
"""