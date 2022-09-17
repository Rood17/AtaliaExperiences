from django.urls import path
from . import views as core_views


urlpatterns = [

    # Core View
    path('', core_views.index, name="index"),
    path('qr', core_views.qr, name="qr"),
    path('prueba', core_views.prueba, name="prueba"),
    
]
