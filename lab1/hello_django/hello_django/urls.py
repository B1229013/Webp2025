from django.contrib import admin # type: ignore
from django.urls import path, include # type: ignore

urlpatterns = [
    path('admin/', admin.site.urls),
    path('myhello/', include('myhello.urls')),  # Add 'myhello/' as the URL prefix
]

