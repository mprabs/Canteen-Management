from django.contrib import admin
from django.urls import path,include 
from rest_framework_jwt.views import obtain_jwt_token
 

urlpatterns = [
  
    path('admin/', admin.site.urls),
    path('token-auth/', obtain_jwt_token),
    path('myapp/', include('myapp.urls')),
  
]
"""re_path('testproject/(?P<version>(v1|v2))/', include('myapp.urls'))"""



 

 
 
