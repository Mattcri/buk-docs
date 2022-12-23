# Banner Static Solid

## Campos del módulo


## HTML + HubL

```jinja-html

<section class="buk-pt-2 buk-pb-2 buk-pt-md-0 buk-pb-md-0 banner-static-solid">
  <div class="boxer">
    <div class="buk-grid">
      <div class="buk-col buk-col-md-5 buk-col-lg-5 buk-col-st-md-2 buk-col-st-lg-2">
        <div class="banner-static-solid__content">
            <h1 class="buk-mb-3 txt-center txt-md-left">{{ module.banner_title }}</h1>
            <p class="buk-mb-3 buk-px-2 buk-pl-md-0 buk-pr-md-4 buk-pr-lg-5 txt-center txt-md-left">
              {{ module.banner_text }}
            </p>
            {% if module.show_button %}
            <div class="txt-center txt-md-left">
              {% cta guid="{{ module.cta_button }}" %}
            </div>
            {% endif %}
        </div>
        
      </div>
      <div class="buk-col buk-col-md-5 buk-col-lg-5 ">
        <div class="banner-static-solid__img">
          <figure class="txt-center"><img src="{{ module.banner_image.src }}" alt="{{ module.banner_image.alt }}"></figure>
        </div>
      </div>
      
    </div>
  </div>
</section>

```

## CSS

```css
.banner-static-solid {
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 15%, rgba(244,247,254,1) 21%);
}

.banner-static-solid__content p {
  font-size: 1.063rem;
}

@media only screen and (min-width: 540px) {
  .banner-static-solid__img img {
    max-width: 450px;
  }
  
}

@media only screen and (min-width: 767px) {
  .banner-static-solid {
    background: var(--bg-banner-static-solid);
    display: flex;
    align-items: center;
    height: 66vh;
    max-height: 560px;
  }
  .banner-static-solid .buk-grid {
    place-items: center;
  }
  .banner-static-solid__img {
    margin-top: initial;
    
  }
  .banner-static-solid__img img {
    max-width: 100%;
  }
}

@media only screen and (min-width: 1020px) {
  .banner-static-solid__content p {
    font-size: 1.125rem;
  }
  .banner-static-solid__img img {
    width: 450px;
  }
}
```