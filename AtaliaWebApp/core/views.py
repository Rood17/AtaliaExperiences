from django.shortcuts import render

# Create your views here.
def coming_soon(request):
    return render(request, 'core/coming_soon.html')

def index(request):
    return render(request, 'core/index.html')

def qr(request):
    return render(request, 'core/qr.html')

def prueba(request):
    return render(request, 'core/components/auto_type.html')