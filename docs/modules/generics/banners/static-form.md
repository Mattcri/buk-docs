# Banner con Formulario

## Campos del módulo

## HTML + HubL

```jinja-html

<section class="banner_form buk-py-5 buk-py-lg-5">
  <div class="boxer buk-grid">
    <div class="buk-col-4 buk-col-md-6 txt-center txt-md-left">
      <h1 class="buk-mb-2 buk-mb-lg-1 buk-mt-1 buk-mt-lg-6 txt-center txt-md-left">{{ module.ttitulo }}</h1>
      <h3 class="buk-mb-2 buk-mb-lg-2">{{ module.texto }}</h3>
      {% if module.imagen.src %}{% set sizeAttrs = 'width="{{ module.imagen.width }}" height="{{ module.imagen.height }}"' %}{% if module.imagen.size_type == 'auto' %}{% set sizeAttrs = 'width="{{ module.imagen.width }}" height="{{ module.imagen.height }}" style="max-width: 100%; height: auto;"' %}{% elif module.imagen.size_type == 'auto_custom_max' %}{% set sizeAttrs = 'width="{{ module.imagen.max_width }}" height="{{ module.imagen.max_height }}" style="max-width: 100%; height: auto;"' %}{% endif %}{% set loadingAttr = module.imagen.loading != 'disabled' ? 'loading="{{ module.imagen.loading }}"' : '' %}
	      <img src="{{ module.imagen.src }}" alt="{{ module.imagen.alt }}" {{ loadingAttr }} {{ sizeAttrs }}>
      {% endif %}
    </div>
    <div class="buk-col-4 buk-col-md-6">
      <div class="formulario buk-py-2 buk-py-lg-2">
         <div class="txt-center buk-mb-2 buk-mb-lg-2">{{ module.texto_form }}</div> 
        
         {% form
          	form_to_use="{{ module.form_field.form_id }}"
          	response_response_type="{{ module.form_field.response_type }}"
          	response_message="{{ module.form_field.message }}"
          	response_redirect_id="{{ module.form_field.redirect_id }}"
          	response_redirect_url="{{module.form_field.redirect_url}}"
          	gotowebinar_webinar_key="{{ module.form_field.gotowebinar_webinar_key }}"
         %}
      </div>
    </div>
  </div>
</section>

```

