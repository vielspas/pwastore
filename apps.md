---
layout: page
title: Apps
permalink: /apps/
---

Here all the fancy PWAs

{% for app in site.apps %}
  <h2>
    <a href="{{ app.url }}">
      {{ app.title }}
    </a>
  </h2>
{% endfor %}
