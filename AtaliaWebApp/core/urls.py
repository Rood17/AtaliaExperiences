from django.urls import path
from . import views as core_views


urlpatterns = [

    # Core View
    path('', core_views.coming_soon, name="coming_soon"),
    
]
