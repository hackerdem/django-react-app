from rest_framework import permissions
from backend.settings import CORS_ORIGIN_WHITELIST
class IsRequestFromFrontend(permissions.BasePermission):
    def has_permission(self,request,view):
        if request.META['REMOTE_ADDR'] in CORS_ORIGIN_WHITELIST:
            return True