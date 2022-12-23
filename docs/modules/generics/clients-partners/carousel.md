# Clientes Partners con Carrusel

## Campos del módulo

## HTML + HubL + JS

::: code-group

```jinja-html
<section class="enterprises-clients buk-py-6 buk-py-lg-6">
  <div class="boxer">
    <div class="">
      <div class="buk-col txt-center">
        <h2 class="font-color-primary buk-mb-3"><span class="outstanding">{{ module.title_section.text_drop_principal }}</span></h2>
      </div>
      
      <div class="swiper six-col_carousel ">

        <div class="swiper-wrapper buk-mb-1 buk-mb-md-2 buk-mb-lg-2">
      {% for image in module.companys_images %}
      <div class="swiper-slide ">
      
       <div class="slide{{loop.index}} buk-py-2 buk-py-md-2 buk-py-lg-2">
         <div class="shadow-box-fluid buk-p-1 buk-mx-1 buk-mx-md-2 txt-center">
           <figure><img src="{{ image.src }}" alt="{{ image.alt }}" ></figure>
         </div>
       </div>
        
      </div>
      {% endfor %}
      
        </div>
        <div class="swiper-pagination "></div>
      </div>
          
      {% if module.show_button %}
      {#<div class="buk-col txt-center buk-mt-2">
         <a href="{{ module.button_group.link }}" class="btn btn--1">{{ module.button_group.text }}</a> 
      </div>#}
      {% endif %}
    </div>
    
  </div>
</section>

```

```js
const partners_clientes = new Swiper(".six-col_carousel", {
  slidesPerView: 2,
  spaceBetween: 16,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2.5,
    },
    767: {
      slidesPerView: 3.5,
    },
    1020: {
      slidesPerView: 5,
    }
  }
})

```

:::
