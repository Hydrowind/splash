---
path: /navigation-mediumlike
author: Herdhiantoko Fathani
date: 18-10-2018
title: Navigation - Medium Like
cover: /assets/navigation-mediumlike.png
tags:
  - html
  - css
---
![navigation-mediumlike](/assets/navigation-mediumlike.png)

## Implementation

bahan yang diperlukan untuk membuat navigation ini hanya menggunakan:

* nav
* ul
* li

Dari semua hal yang dibutuhkan ini masing-masing dari mereka perlu dibuatkan script HTML untuk menampungnya:

```html
<nav>
    <ul class="navigation">
        <li><a href="#">Profile</a></li>
        <li><a href="#">Claps</a></li>
        <li class="active"><a href="#">Highlights</a></li>
        <li><a href="#">Responses</a></li>
    </ul>
</nav>
```

Kemudian tambahkan pesona menggunakan css:

```css
nav{
    margin: 0; padding: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

ul.navigation{
    display: block;
    margin: 0; padding: 0;
    list-style: none;
    padding-bottom: 5px;
}

ul.navigation li a{
    text-decoration: none;
    color: gray;
}

ul.navigation li a:hover{
    color: black;
}

ul.navigation li{
    margin: 0 10px;
    display: inline-block;
}

ul.navigation li.active a{
    color: black;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
}
```

\# penjelasan lebih lanjut akan ditambahkan di lain waktu



Navigation selesai dibuat dengan hasil seperti:

![navigation-mediumlike](/assets/navigation-mediumlike.png)
