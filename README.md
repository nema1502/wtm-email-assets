# wtm-email-assets

Imágenes usadas por los correos automatizados de **Women Techmakers Santa Cruz**
(bootcamp y voluntariado). Se sirven por CDN vía jsDelivr, porque los clientes de
correo no muestran imágenes incrustadas en el HTML.

**URL base**

```
https://cdn.jsdelivr.net/gh/nema1502/wtm-email-assets@main
```

Ejemplo: `https://cdn.jsdelivr.net/gh/nema1502/wtm-email-assets@main/wtm-lockup-white.png`

## Contenido

| Archivo | Uso |
|---|---|
| `hero-bootcamp.jpg` · `hero-wtm.jpg` | Cabeceras de cada correo |
| `bar-*.png` · `rule-*.png` | Barras y filetes de gradiente |
| `chip-*.png` | Iconos circulares de las grillas de datos |
| `wtm-lockup-white.png` · `wtm-mark-color.png` | Marca Women Techmakers Santa Cruz |
| `bootcamp-bracket-gradient.png` | Isotipo `[>]` del Women Tech Bootcamp |

## Importante

- El repo debe seguir siendo **público**: jsDelivr no sirve repos privados.
- Los nombres de archivo **no se cambian**: las plantillas los referencian tal cual.
- Se regenera desde el proyecto principal con `python pack_assets.py`.

Marca © Women Techmakers Santa Cruz. Women Techmakers es un programa de Technovation.
