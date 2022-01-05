from django.urls import path
from .views import frog_cross_river

urlpatterns = [
    path('', frog_cross_river, name='test'),
]
