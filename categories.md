---
layout: page
title: Browse apps
permalink: /categories/
---

Here all the categories

<div class="category-list">
  {% for category in site.categories %}
    <div class="category-list__category">
      <a href="{{ category.url }}">
        {{ category.title }}
      </a>
    </div>
  {% endfor %}
</div>
