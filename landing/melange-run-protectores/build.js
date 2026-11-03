// Genera el bloque para pegar en Tiendanube: node build.js
// - resenas.js queda en texto plano (para cargar reseñas reales sin recompilar)
// - landing.js se codifica en base64 igual que el snippet original
var fs = require('fs'), path = require('path');
var dir = __dirname;
var src = fs.readFileSync(path.join(dir, 'landing.js'), 'utf8');
var rev = fs.readFileSync(path.join(dir, 'resenas.js'), 'utf8').trim();
var b64 = Buffer.from(src, 'utf8').toString('base64');
var out = '<div class="mr-root mr-demo">&nbsp;</div>\n<p>\n<script>' + rev.replace(/\n/g, ' ') + '</script>\n'
  + '<script>(function(){try{new Function(decodeURIComponent(escape(atob("' + b64 + '"))))()}catch(e){console.log("mr",e)}})();</script>\n</p>\n';
fs.writeFileSync(path.join(dir, 'tiendanube-snippet.html'), out);
console.log('tiendanube-snippet.html', out.length, 'bytes');

// Versión DEMO: solo para un producto OCULTO / en borrador. Nunca en un producto publicado.
var demo = fs.readFileSync(path.join(dir, 'resenas-demo.js'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').trim();
var outDemo = '<!-- DEMO: reseñas ficticias. Usar SOLO en un producto oculto o en borrador. No publicar. -->\n'
  + '<div class="mr-root mr-demo">&nbsp;</div>\n<p>\n<script>window.MR_FORCE_DEMO = true; ' + demo.replace(/\n\s*/g, ' ') + '</script>\n'
  + '<script>(function(){try{new Function(decodeURIComponent(escape(atob("' + b64 + '"))))()}catch(e){console.log("mr",e)}})();</script>\n</p>\n';
fs.writeFileSync(path.join(dir, 'tiendanube-snippet-DEMO-oculto.html'), outDemo);
console.log('tiendanube-snippet-DEMO-oculto.html', outDemo.length, 'bytes');
