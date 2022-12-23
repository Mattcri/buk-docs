# Banner Static Curva

## Campos del módulo

## HTML + HubL

```jinja-html

<section class="banner-static buk-pt-6 buk-pb-4 buk-pt-md-8 buk-pb-md-0">
  <div class="boxer">
  <div class="buk-grid ai-center">
    <div class="buk-col buk-col-md-6 buk-col-lg-4 buk-col-st-lg-2">
        <h1>{{ module.titulo_principal }}</h1>
        <p class="buk-my-3">{{ module.texto_bajada }}</p>
        {#<a href="{{ module.enlace_boton }}" class="btn btn--1 buk-mt-2">{{ module.texto_boton }}</a>  #}
        {% cta guid="{{ module.cta_field }}" %}
    </div>
    <div class="buk-col buk-col-md-6 buk-col-lg-5 ds-flex jc-center buk-col-st-lg-7">
        <figure class="ds-flex jc-center">
            <img src="{{ module.image_field.src }}" alt="{{ module.image_field.alt }}">
        </figure>
    </div>
  </div> 
</div>
<svg class="v-desktop curva {% if module.rotar_curva_180_ %}rotate180{% endif %}" xmlns="http://www.w3.org/2000/svg" width="1943.421" height="89.711" viewBox="0 0 1943.421 89.711"><path d="M-2982-762.965s327.01-96.63,961.589-37.954,981.833-9.477,981.833-9.477v80.281H-2982Z" transform="translate(2982 819.826)" fill="#fff"/></svg> 
</section>

```

## CSS

```css
.banner-static {background:var(--gradient-1);}

@media screen and (min-width: 767px) {
  .banner-static {height: auto;}
  .banner-static svg.curva {width:100%; height: auto;}
  .banner-static svg.curva.rotate180 {transform: rotateY(180deg);}
}
```