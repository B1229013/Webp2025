from django.contrib import admin # type: ignore
from django.urls import path, include # type: ignore
from myhello import views

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('myhello/', include('myhello.urls')),  # Add 'myhello/' as the URL prefix
    path('courselist/', views.course_list, name='course_list'),
    path('addcourse/', views.add_course, name='add_course'),
]




