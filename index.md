---
layout: page
title: PWA Store
redirect_from:
  - /apps/
  - /apps
  - /categories/
  - /categories
---

<div class="categories-list">
  {% for category in site.categories %}
    <div class="categories-list__category">
      <div class="category__title-row">
        <a class="category__title" href="{{ category.url | relative_url }}">
          <h2>{{ category.title }}</h2>
        </a>
      </div>
      
      <div class="category__apps">
        {% for app in site.apps %}
          {% if app.categories contains category.title %}
            {% include app_badge.html app=app %}
          {% endif %}
        {% endfor %}
      </div>
    </div>
  {% endfor %}
</div>
