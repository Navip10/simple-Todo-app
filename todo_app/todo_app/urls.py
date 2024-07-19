# todo_project/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('todo_api.urls')),
    path('', include('todo_api.urls')),  # This line will handle the root path
]
