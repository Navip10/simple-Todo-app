# todo_api/urls.py
from django.urls import path
from .views import TodoListCreate, TodoDetail, home_redirect

urlpatterns = [
    path('', home_redirect, name='home-redirect'),  # Redirects the root path to /api/todos/
    path('todos/', TodoListCreate.as_view(), name='todo-list-create'),
    path('todos/<int:pk>/', TodoDetail.as_view(), name='todo-detail'),
]
