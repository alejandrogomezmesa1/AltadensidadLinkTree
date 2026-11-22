# AltadensidadLinkTree

Página de enlaces de **Fragancias de Alta Densidad** para la bio de Instagram y TikTok.

Es un sitio estático: no se instala ni se compila nada. Sirve en la raíz de un dominio o en una subcarpeta.

| Archivo | Qué tiene |
|---|---|
| `index.html` | Textos, enlaces y redes. Aquí se agregan, quitan o reordenan |
| `styles.css` | Diseño Haute Parfumerie, en modo claro y oscuro |
| `tema.js` | Botón de tema y año del footer (hora de Colombia) |
| `vercel.json` | Cabeceras de seguridad al publicar en Vercel |
| `assets/` | Iconos de la marca |

## Publicación

- **Link oficial:** https://altadensidad.vercel.app
- Cada push a `main` lo publica solo en Vercel (proyecto `altadensidad`) y también en GitHub Pages, que queda de respaldo.

## Al editar

- WhatsApp lleva siempre el indicativo: `wa.me/573046477694`.
- TikTok es `@fragancias_altadensidad` e Instagram `@fragancias_alta_densidad`.
- Al mover un enlace, corrige la numeración (01, 02…).
- La tienda tiene una copia en `/enlaces` (repo AltaDensidadPAGE): un cambio aquí no se refleja allá.
- Los enlaces llevan `utm_source=linktree`, pero la tienda todavía no tiene analítica que lo mida.
- **El repositorio es público y todo lo que se suba queda visible:** nada de claves, respaldos, costos ni datos de clientes.

## Verlo en local

```bash
python3 -m http.server 4391 --bind 127.0.0.1
```
