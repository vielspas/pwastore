---
layout: page
title: Apps
permalink: /apps/
---

Here all the fancy PWAs

<div class="app-list">
  {% for app in site.apps %}
    <div class="app-list__app">
      <a href="{{ app.url }}">
        {{ app.title }}
      </a>
    </div>
  {% endfor %}
</div>
