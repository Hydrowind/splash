---
path: /ujangwahyu-card
author: Herdhiantoko Fathani
date: 13-10-2018
title: Card - Ujang Wahyu
cover: /assets/ujangwahyu-card.png
tags:
  - html
  - scss
  - css
---
![cover](/assets/ujangwahyu-card.png)

# **Card - Ujang Wahyu**

Sebuah deskripsi singkat untuk mengenai card ini.\
<br>

## **Layout Design**

Desain _Card_ ini dapat dibuat menjadi 2 bagian yaitu _**Head**_ dan _**Body**_. Dimana pada bagian _head_ terdapat _**photo profile**_ dan _**cover photo**_, sedangkan pada _body_ terdapat _**title**_, _**subtitle**_, _**text**_, dan _**social links**_.

![layout-1](/assets/ujangwahyu-layout1.png)

 

![layout-2](/assets/ujangwahyu-layout2.png)


<br><br>

## **Implementation**

Bahan-bahan yang diperlukan sudah ditentukan melalui _**Layout Design**_. Apa saja yang dibutuhkan adalah:

* Head
* Body
* Cover Photo
* Photo Profile
* Title
* Subtitle
* Text
* Social icons

Dari semua hal yang dibutuhkan ini masing-masing dari mereka perlu dibuatkan script HTML untuk menampungnya:

```html
<div  class='card-ujangwahyu'>
	<div  class="head">
		<img  class='cover'  src='assets/haze.jpg'/>
		<img  class='photo'  src='assets/ujangwahyu.jpg'/>
	</div>

	<div  class="body">
		<p  class='title'>Ujang Wahyu</p>
		<p  class='subtitle'>android developer</p>
		<p  class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel imperdiet sapien. Vestibulum rutrum fermentum.</p>

		<ul  class='social-icons'>
			<li><img  src='assets/fb.png'  alt='social'/></li>
			<li><img  src='assets/tw.png'  alt='social'/></li>
			<li><img  src='assets/in.png'  alt='social'/></li>
		</ul>
	</div>
</div>
```

<br><br>
Setelah itu buatkan css untuk memberikan desain pada HTML itu. Desain yang dibuat diawali dengan _class_ **.card-ujangwahyu**. _Card_ ini memiliki tampilan dasar _rounded_ _rectangle_ dengan _aspect ratio_ 4:6 sehingga dapat ditetapkan **_width_ = 300px** dan **_height_ = 450px** yang memenuhi _aspect ratio_ 4:6.

Kemudian untuk layouting digunakan _**Display Grid**_ dengan **2 _row_** dan **1 _column_**. _Row_ dibagi 2 untuk memisahkan antara _Head_ dan _Body_. Berikan _effect shadow_ untuk membuat _card_ terlihat lebih elegan.

```scss
.card-ujangwahyu {
	border-radius: 1.5rem;
	background-color: rgb(230, 228, 224);
	width: 30rem;
	height: 45rem;
	overflow: hidden;
	box-shadow: black  0  0  1rem;

	display: grid;
	grid-template: 'head'  50% 'body'  50% / 100% ;
}
```

![card](/assets/ujangwahyu-container.png)

Selanjutnya bagian **Head**. Pada _class_ **.head** terapkan **grid-area** dengan **“head”** sesuai dengan yang telah didefinisikan pada **grid-template** sebelumnya. Sepertinya hanya itu yang diperlukan _class_ **.head**.

_Class_ **.cover** memiliki _height_ setengah dari **Head**, sehingga dapat diberi nilai **50%** dari _height_ _parent_ nya. Berikan _attribute_ _**object-fit: cover**_ supaya gambar dapat menyesuaikan ukuran penampungnya

```scss
.cover{
	width: 100%;
	height: 50%;
	object-fit: cover;
}
```

Class **.photo** pada _layout_ berada di posisi di tengah-tengah dari dari **Head**, untuk memposisikan _class_ ini bisa menggunakan metode _**position: absolute**_. Karena _class_ .photo menggunakan _position absolute_, _**posisition relative**_ harus diterapkan pada parent dari _class_ **.photo** yaitu _class_ **.head**.

Berikan _**border-radius: 50%**_ untuk membuat _class_ ini berbentuk lingkaran. Berikan juga warna _background_ yang sama dengan warna dasar _Card_, kemudian berikan _**padding**_ supaya photo yang tampil berukuran lebih kecil dari penampungnya untuk memberikan _effect stroke_ pada _photo profile_.

```scss
.photo{
	position: absolute;
	top: 50%; left: 50%;
	transform: translate(-50%, -50%);
	width: 15rem; height: 15rem;
	padding: 1rem;
	background: rgb(224, 229, 230);
	border-radius: 50%;
	object-fit: cover;
}
```

Sejauh ini, apa saja yang telah diimplementasi terlihat seperti berikut:

```scss
.card-ujangwahyu {
	border-radius: 1.5rem;
	background-color: rgb(230, 228, 224);
	width: 300px;
	height: 450px;
	overflow: hidden;
	box-shadow: black  0  0  1rem;

	display: grid;
	grid-template: 'head'  50% 'body'  50% / 100% ;

	.head{
		position: relative;
		grid-area: head;

		.cover{
			width: 100%;
			height: 50%;
			object-fit: cover;
		}

		.photo{
			position: absolute;
			top: 50%; left: 50%;
			transform: translate(-50%, -50%);
			width: 15rem; height: 15rem;
			padding: 1rem;
			background: rgb(224, 229, 230);
			border-radius: 50%;
			object-fit: cover;
		}
	}
}
```

![head-finished ](/assets/ujangwahyu-head-finished.png)

Bagian **Head** sudah selesai, selanjutnya adalah bagian **Body**. Pada _class_ **.body** terapkan **grid-area** dengan **“body”** sesuai dengan yang telah didefinisikan pada **grid-template** sebelumnya.

Berikan _attribute_ _**text-align: center**_ untuk membuat semua _text_ yang ada di bagian **Body** menjadi rata tengah, lalu berikan _padding_ supaya _Card_ terlihat lebih rapi.

_Class_ **.title**, **.subtitle**, dan **.text** hanya perlu menyesuaikan ukuran, warna, jarak, dan ketebalan _font_.

_Class_ **.social-icons** tidak akan terpengaruh oleh _**text-align: center**_ sehingga harus dilakukan dengan cara lain. Salah satunya dapat menggunakan metode _**Display Flex**_ yang akan membuat seluruh _list icon_ berada di tengah. Berikan sedikit _margin_ pada **<li>** dan atur ukuran gambar (pastikan _width_ & _height_ memiliki ukuran yang sama).

```scss
<![endif]-->

.body{
	grid-area: body;
	text-align: center;
	padding: 1rem;
	-webkit-text-stroke: .05rem;

	.title{
		font-size: 2.8rem;
		font-weight: bold;
		color: rgb(28, 32, 51);
		line-height: 2.5rem;
	}

	.subtitle{
		font-size: 1.6rem;
		color: green;
	}

	.text{
		margin: 1.5rem  0;
		font-size: 1.2rem;
		color: rgb(100, 105, 125);
		line-height: 1.5rem;
	}

	ul.social-icons{
		display: flex;
		flex-flow: row;
		justify-content: center;

		li{
		list-style: none;
		margin: 1rem;

			img{
			width: 3.5rem; height: 3.5rem;
			}
		}
	}
}
```

Seluruh bagian telah selesai, hasilnya akan terlihat seperti ini:

```scss
.card-ujangwahyu {
	border-radius: 1.5rem;
	background-color: rgb(230, 228, 224);
	width: 300px;
	height: 450px;
	overflow: hidden;
	box-shadow: black  0  0  1rem;

	display: grid;
	grid-template: 'head'  50% 'body'  50% / 100% ;

	.head{
		position: relative;
		grid-area: head;

		.cover{
			width: 100%;
			height: 50%;
			object-fit: cover;
		}

		.photo{
			position: absolute;
			top: 50%; left: 50%;
			transform: translate(-50%, -50%);
			width: 15rem; height: 15rem;
			padding: 1rem;
			background: rgb(224, 229, 230);
			border-radius: 50%;
			object-fit: cover;
		}
	}
	
	.body{
		grid-area: body;
		text-align: center;
		padding: 1rem;
		-webkit-text-stroke: .05rem;

		.title{
			font-size: 2.8rem;
			font-weight: bold;
			color: rgb(28, 32, 51);
			line-height: 2.5rem;
		}

		.subtitle{
			font-size: 1.6rem;
			color: green;
		}

		.text{
			margin: 1.5rem  0;
			font-size: 1.2rem;
			color: rgb(100, 105, 125);
			line-height: 1.5rem;
		}

		ul.social-icons{
			display: flex;
			flex-flow: row;
			justify-content: center;

			li{
			list-style: none;
			margin: 1rem;

				img{
				width: 3.5rem; height: 3.5rem;
				}
			}
		}
	}
}
```

![ujangwahyu-card](/assets/ujangwahyu-card.png)
