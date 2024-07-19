from django.shortcuts import redirect
from rest_framework import generics
from .models import Todo
from .serializers import TodoSerializer

# Redirect view for the root URL
def home_redirect(request):
    return redirect('/api/todos/')

# View for listing and creating Todo items
class TodoListCreate(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

# View for retrieving, updating, and deleting Todo items
class TodoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
