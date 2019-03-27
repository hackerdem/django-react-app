from django.db import models


class Tag(models.Model):
    tag = models.CharField(max_length=100)
    slug = models.SlugField(primary_key=True, max_length=150)
    objects = models.Manager()

    def __str__(self):
        return self.tag

    class Meta:
        ordering = ('tag',)
