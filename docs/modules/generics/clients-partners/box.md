# Clientes Partners Box

## Campos del módulo

## HTML + HubL

```jinja-html

<section class="enterprises-clients buk-py-6 buk-py-lg-5">
  <div class="boxer">
    
    <div class="buk-grid">
      <div class="buk-col txt-center">
        <h3 class="font-color-primary">{{ module.title_section.text_drop_principal }}</h3>
        <h2 class="font-color-primary buk-mt-1"><span class="outstanding">{{ module.title_section.text_outstanding }}</span> {{ module.title_section.text_drop_secondary }}</h2>
      </div>
      {% for image in module.companys_images %}
      <div class="buk-col-2 buk-col-md-3 buk-col-lg-2  buk-mt-md-2 buk-mt-lg-3 {% if loop.index==5 %}buk-col-st-md-4{% endif %}">
        <div class="shadow-box buk-p-1 ds-flex jc-center hi-100 ai-center">
          <figure><img src="{{ image.src }}" alt="{{ image.alt }}" ></figure>
        </div>
      </div>
      {% endfor %}
      {% if module.show_button %}
      <div class="buk-col txt-center buk-mt-2">
        {% cta guid="{{ module.cta_field }}" %}
      </div>
      {% endif %}
    </div>
    
  </div>
</section>

```