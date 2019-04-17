from django.urls import path
from api import views

urlpatterns = [
    path('api/task_lists/', views.task_lists),
    path('api/task_lists/<int:pk>/', views.task_list),
    path('api/task_lists/<int:pk>/tasks/', views.task_lists_tasks),
    path('api/tasks/', views.tasks),
    path('api/tasks/<int:pk>/', views.task),
]