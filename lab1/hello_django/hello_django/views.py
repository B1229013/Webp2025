# hello_django/views.py
from django.http import HttpResponse # type: ignore

# Define the home view
def myIndex(request):
    return HttpResponse("Hello CGU")
    
