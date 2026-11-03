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
