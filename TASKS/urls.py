from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from TASKS import views

#ESTO GENERA EL CRUD. (GET, POST, PUT, DELETE)

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')

urlpatterns = [
    path("api/v1/", include(router.urls)),  #ACÁ DEFINO EL SEGUNDO PARAMS http://localhost:8000/firstTasks/api/v1/tasks
    path("docs/", include_docs_urls(title="Tasks API")) #ACA DOCUMENTO EL CRUD http://localhost:8000/firstTasks/docs/
]