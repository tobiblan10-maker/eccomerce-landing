# MÉLANGE Run — Protectores de silicona (landing Tiendanube)

| Archivo | Para qué sirve |
|---|---|
| `landing.js` | Código fuente legible de la landing (HTML, CSS y JS). |
| `resenas.js` | **Reseñas reales.** Se cargan acá, en texto plano. |
| `build.js` | `node build.js` genera `tiendanube-snippet.html`. |
| `tiendanube-snippet.html` | Bloque para pegar en la descripción del producto (reemplaza el anterior). |
| `tiendanube-snippet-DEMO-oculto.html` | Igual que el anterior pero con reseñas ficticias marcadas DEMO. **Solo para un producto oculto o en borrador.** |
| `preview.html` | Vista previa local. Si le agregás `?resenas=preview` ves el diseño vacío, y con `?resenas=demo` ves reseñas ficticias de ejemplo (`resenas-demo.js`, nunca se publica). |

## Sección de reseñas
- Se ubica después de "Cómo se usa" y antes de "Elegí tu pack": la prueba social aparece justo antes de que el cliente vea los precios, y después siguen la garantía y las preguntas frecuentes.
- **Si no hay reseñas cargadas, la sección no se muestra.** No tiene nombres, puntajes ni textos inventados.
- La puntuación general, las estrellas, la distribución de valoraciones y el % de 4–5★ se calculan solos con las reseñas cargadas.
- Los filtros ("Con fotos", "5 estrellas"), el botón "Ver más" (de a 6), la tira de fotos y la vista ampliada de fotos aparecen solos cuando corresponden.

### Cargar una reseña real
Agregá un objeto en `resenas.js` (o directamente en el primer `<script>` del snippet ya pegado en Tiendanube; ahí no hace falta recompilar):

```js
window.MR_REVIEWS = [
  { nombre: 'Nombre A.', fecha: '2026-11-03', estrellas: 5,
    titulo: 'Opcional', texto: 'Texto tal cual lo escribió el cliente',
    perfil: 'Opcional', pack: 'Pack x20',
    fotos: ['https://...jpg'],   // opcional, fotos enviadas por el cliente
    verificada: true,            // solo si es compra confirmada
    destacada: false }           // opcional: la muestra primero, en tarjeta oscura
];
```
