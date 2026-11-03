(function landing(){
if (window.__mrRun) { try { window.__mrRun(); } catch (e) {} return; }
var U = function (id, w, h, fx) { return 'https://images.unsplash.com/photo-' + id + '?auto=format&fit=crop&w=' + w + '&h=' + h + '&q=70' + (fx ? '&crop=focalpoint&fp-y=0.5&fp-x=' + fx : ''); };
var CDN = 'https://acdn-us.mitiendanube.com/stores/004/057/463/products/';
var I = {
  toes: CDN + 'g1_p7-ce8111e3669b748f9317919043542934-1024-1024.webp',
  colocar: CDN + 'g2_p5-ce83468fcae1ef2e0417919043538233-1024-1024.webp',
  medidas: CDN + 'g4_p8-56301cc6c4136f8dfd17919043535533-1024-1024.webp',
  sincon: CDN + 'melange_galeria_4-bbeb8c5165024d5bf217936590574510-1024-1024.webp',
  mapa: CDN + 'g6_mapa-07c9cd72558d504a9b17919043533699-1024-1024.webp',
  parches: CDN + 'g5_parches-25c33cc1ce576186a317919043533319-1024-1024.webp',
  hero: U('1571008887538-b36bb32f4571', 1400, 1000, 0.62),
  atandose: U('1483721310020-03333e577078', 1000, 760, 0.6),
  corredor: U('1571008887538-b36bb32f4571', 700, 900, 0.62),
  piernas: U('1590333748338-d629e4564ad9', 700, 900),
  trail: U('1530143311094-34d807799e8f', 700, 900, 0.62),
  trail2: U('1594882645126-14020914d58d', 900, 680),
  camino: U('1580058572462-98e2c0e0e2f0', 700, 900),
  maraton: U('1452626038306-9aae5e071dd3', 1400, 900),
  grupo: U('1520877880798-5ee004e3f11e', 1400, 900)
};
var PACKS = [
  { v: 'Pack x10 (10 fundas)', q: 'Pack x10', u: '10 protectores', list: '$78.900', price: '$57.900', per: '$57.900 cada 10', save: 'Ahorrás $21.000', c: '6 cuotas sin interés de $9.650', t: 'o $52.110 por transferencia', gift: false, tag: '' },
  { v: 'Pack x20 + Parches y Manual de regalo', q: 'Pack x20', u: '20 protectores', list: '$157.800', price: '$81.060', per: '$40.530 cada 10', save: 'Ahorrás $76.740', c: '6 cuotas sin interés de $13.510', t: 'o $72.954 por transferencia', gift: true, tag: 'Más elegido' },
  { v: 'Pack x30 + Parches y Manual de regalo', q: 'Pack x30', u: '30 protectores', list: '$236.700', price: '$95.530', per: '$31.843 cada 10', save: 'Ahorrás $141.170', c: '6 cuotas sin interés de $15.921,67', t: 'o $85.977 por transferencia', gift: true, tag: 'Mejor precio' }
];
var CK = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F1A2B" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>';
var GIFT = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12v9H4v-9M2 7h20v5H2zM12 21V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z"/></svg>';
var F = '"Barlow Condensed",Impact,"Arial Narrow",sans-serif';
var COVER = 'https://images.unsplash.com/photo-1590333748338-d629e4564ad9?auto=format&fit=crop&w=500&h=700&q=70';
var BOOK = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>';
var MINIBOOK = '<div class="mr-mini" style="background-image:url(' + COVER + ')"><b>Manual del deportista <i>y corredor</i></b></div>';
var CSS = [
'.mr-root{margin:0 0 24px;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#0F1A2B;line-height:1.5;text-align:left;clear:both}',
'.mr-root *{box-sizing:border-box}',
'.mr-root img{max-width:100%;height:auto;display:block;border:0}',
'.mr-root p{margin:0 0 12px;font-size:16px;line-height:1.6;color:#3D4859}',
'.mr-d{font-family:' + F + '!important;font-weight:800!important;text-transform:uppercase;letter-spacing:.4px;line-height:.95!important;margin:0 0 14px!important;color:inherit}',
'.mr-h1{font-size:46px!important}.mr-h2{font-size:40px!important}.mr-h3{font-size:28px!important}',
'.mr-eye{font-size:13px;font-weight:800;letter-spacing:2px;text-transform:uppercase;margin:0 0 10px;display:block}',
'.mr-sec{padding:44px 22px;border-radius:22px;margin:0 0 14px;background:#F4F5F1}',
'.mr-dark{background:#0F1A2B;color:#fff}.mr-dark p{color:#D5DAE3}.mr-dark .mr-eye{color:#C8F031}',
'.mr-white{background:#fff;border:1px solid #E3E5DE}',
'.mr-c{text-align:center}',
'.mr-lime{color:#C8F031}',
'.mr-hero{position:relative;overflow:hidden;border-radius:22px;margin:0 0 14px;background:#0F1A2B center/cover no-repeat;color:#fff;padding:56px 24px 40px}',
'.mr-hero:before{content:"";position:absolute;inset:0;background:linear-gradient(100deg,rgba(15,26,43,.96) 0%,rgba(15,26,43,.85) 45%,rgba(15,26,43,.35) 100%)}',
'.mr-hero>*{position:relative}',
'.mr-hero p{color:#E3E7EE;font-size:17px;max-width:460px}',
'.mr-chips{display:flex;flex-direction:column;gap:8px;margin:18px 0}',
'.mr-chip{display:inline-flex;align-items:center;gap:10px;align-self:flex-start;background:#fff;color:#0F1A2B;border-radius:999px;padding:8px 16px 8px 8px;font-weight:800;font-size:14px;text-transform:uppercase;letter-spacing:.3px}',
'.mr-ck{flex:0 0 24px;width:24px;height:24px;border-radius:999px;background:#C8F031;display:inline-flex;align-items:center;justify-content:center}',
'.mr-offer{display:inline-flex;align-items:center;gap:8px;background:#C8F031;color:#0F1A2B;font-weight:800;font-size:14px;border-radius:10px;padding:10px 14px;text-transform:uppercase;letter-spacing:.3px}',
'.mr-btn{display:flex!important;align-items:center;justify-content:center;gap:8px;width:100%;min-height:58px;border:0!important;border-radius:14px!important;background:#C8F031!important;color:#0F1A2B!important;font-family:' + F + '!important;font-weight:800!important;font-size:24px!important;letter-spacing:1px;text-transform:uppercase;text-decoration:none!important;cursor:pointer;box-shadow:0 5px 0 #0F1A2B;margin:18px 0 6px;padding:0 16px!important;line-height:1!important}',
'.mr-dark .mr-btn,.mr-hero .mr-btn,.mr-offers .mr-btn,.mr-end .mr-btn{box-shadow:0 5px 0 #fff}',
'.mr-lines p{font-size:18px;margin:0 0 10px}',
'.mr-big{font-size:46px!important;margin-top:18px!important}',
'.mr-photo{border-radius:18px;overflow:hidden;margin:20px 0 0}',
'.mr-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px}',
'.mr-pain{position:relative;border-radius:18px;overflow:hidden;background:#0F1A2B;aspect-ratio:3/4;color:#fff}',
'.mr-pain img{width:100%;height:100%!important;object-fit:cover;opacity:.75}',
'.mr-pain div{position:absolute;left:0;right:0;bottom:0;padding:18px;background:linear-gradient(to top,rgba(15,26,43,.97),rgba(15,26,43,0))}',
'.mr-pain b{display:block;font-family:' + F + ';font-weight:800;text-transform:uppercase;font-size:30px;line-height:1;color:#C8F031;margin-bottom:6px}',
'.mr-pain span{font-size:14px;line-height:1.45;color:#fff}',
'.mr-fails{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:16px 0}',
'.mr-fail{background:#fff;border:1px solid #E3E5DE;border-radius:999px;padding:8px 14px;font-size:14px;font-weight:700}',
'.mr-fail i{font-style:normal;color:#9A2E16;font-weight:800;margin-right:6px}',
'.mr-hl{background:#C8F031;padding:1px 6px;color:#0F1A2B;font-weight:800}',
'.mr-two{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:0 0 18px}',
'.mr-two .mr-wide{grid-column:span 2}',
'.mr-two>div{border-radius:16px;overflow:hidden;background:#F3EFE9}',
'.mr-two img{width:100%;height:100%!important;object-fit:cover}',
'.mr-checks{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:8px 14px;margin:14px 0}',
'.mr-checks span{display:flex;align-items:center;gap:8px;font-weight:700;font-size:15px}',
'.mr-crop{position:relative;overflow:hidden;border-radius:18px;background:#F3EFE9;aspect-ratio:903/520;margin:16px 0 0}',
'.mr-crop img{position:absolute;max-width:none!important;width:113.4%!important;left:-6.87%;top:-54.8%}',
'.mr-tbl{overflow-x:auto;border:2px solid #0F1A2B;border-radius:16px;background:#fff;margin:16px 0 0}',
'.mr-tbl table{width:100%;min-width:440px;border-collapse:collapse;font-size:15px;margin:0}',
'.mr-tbl th,.mr-tbl td{padding:13px 12px;border:0;border-top:1px solid #E3E5DE;text-align:center;vertical-align:middle}',
'.mr-tbl th{border-top:0;background:#F4F5F1;font-weight:700;color:#3D4859;font-size:14px}',
'.mr-tbl th.mr-me{background:#0F1A2B;color:#C8F031;font-family:' + F + ';font-size:22px;font-weight:800;letter-spacing:1px}',
'.mr-tbl td:first-child,.mr-tbl th:first-child{text-align:left;font-weight:700;color:#0F1A2B}',
'.mr-tbl td.mr-me{background:#F4FADF}',
'.mr-yes{display:inline-flex;width:28px;height:28px;border-radius:999px;background:#C8F031;align-items:center;justify-content:center}',
'.mr-no{color:#9A2E16;font-weight:800;font-size:19px}',
'.mr-aud{border-radius:18px;overflow:hidden;background:#fff;border:1px solid #E3E5DE}',
'.mr-aud img{width:100%;aspect-ratio:4/3;object-fit:cover;height:auto!important}',
'.mr-aud div{padding:16px 18px}',
'.mr-aud b{display:block;font-family:' + F + ';font-weight:800;text-transform:uppercase;font-size:28px;line-height:1;margin-bottom:6px}',
'.mr-aud span{font-size:14px;color:#3D4859;line-height:1.5}',
'.mr-step{display:flex;gap:14px;align-items:flex-start;margin:0 0 14px}',
'.mr-num{flex:0 0 44px;width:44px;height:44px;border-radius:12px;background:#0F1A2B;color:#C8F031;font-family:' + F + ';font-weight:800;font-size:24px;display:flex;align-items:center;justify-content:center}',
'.mr-step b{display:block;font-size:17px}.mr-step span{font-size:15px;color:#3D4859}',
'.mr-offers{position:relative;overflow:hidden;border-radius:22px;margin:0 0 14px;background:#0F1A2B center/cover no-repeat;color:#fff;padding:40px 16px}',
'.mr-offers:before{content:"";position:absolute;inset:0;background:rgba(15,26,43,.86)}',
'.mr-offers>*{position:relative}',
'.mr-pks{display:flex;flex-direction:column;gap:14px;margin:18px 0 0}',
'.mr-pk{position:relative;display:flex!important;align-items:center;gap:14px;width:100%;text-align:left;background:#fff!important;color:#0F1A2B!important;border:2px solid #D9DCD3!important;border-radius:16px!important;padding:18px 16px!important;cursor:pointer;font-family:inherit!important;margin:0!important;box-shadow:none;text-transform:none;letter-spacing:0;line-height:1.3;min-height:0;height:auto}',
'.mr-pk:hover{border-color:#0F1A2B!important}',
'.mr-pk.mr-sel{border:3px solid #0F1A2B!important;background:#F4FADF!important;box-shadow:0 0 0 4px #C8F031}',
'.mr-rad{flex:0 0 24px;width:24px;height:24px;border-radius:999px;border:2px solid #0F1A2B;display:flex;align-items:center;justify-content:center}',
'.mr-rad i{width:12px;height:12px;border-radius:999px;background:transparent}',
'.mr-sel .mr-rad i{background:#0F1A2B}',
'.mr-pk-mid{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:3px}',
'.mr-pk-q{font-family:' + F + ';font-weight:800;text-transform:uppercase;font-size:28px;line-height:1}',
'.mr-pk-u{font-size:13px;font-weight:700;color:#3D4859;text-transform:uppercase;letter-spacing:.4px}',
'.mr-pk-g{display:inline-flex;align-items:center;gap:6px;align-self:flex-start;background:#0F1A2B;color:#C8F031;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.3px;border-radius:6px;padding:4px 8px;margin-top:4px}',
'.mr-pk-ng{font-size:12px;color:#5B6575;margin-top:4px}',
'.mr-pk-r{flex:0 0 auto;display:flex;flex-direction:column;align-items:flex-end;gap:2px;text-align:right}',
'.mr-pk-p{font-family:' + F + ';font-weight:800;font-size:32px;line-height:1}',
'.mr-pk-r s{font-size:13px;color:#5B6575}',
'.mr-pk-s{font-size:11px;font-weight:800;background:#EEF6D2;padding:2px 6px;border-radius:4px}',
'.mr-pk-tag{position:absolute;top:-12px;right:14px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.5px;padding:4px 9px;border-radius:6px;background:#0F1A2B;color:#C8F031}',
'.mr-pk-tag.mr-alt{background:#C8F031;color:#0F1A2B}',
'.mr-sum{background:#fff;color:#0F1A2B;border-radius:14px;padding:12px 14px;margin:16px 0 0;font-size:14px;line-height:1.5}',
'.mr-sum b{font-size:15px}',
'.mr-giftbar{display:flex;gap:14px;align-items:center;background:#C8F031;color:#0F1A2B;border-radius:16px;padding:10px;margin:16px 0 0}',
'.mr-giftbar img{flex:0 0 72px;width:72px;height:72px!important;object-fit:cover;border-radius:10px;background:#fff}',
'.mr-giftbar b{display:block;font-family:' + F + ';font-weight:800;text-transform:uppercase;font-size:22px;line-height:1.05}',
'.mr-giftbar span{font-size:13px;font-weight:600}',
'.mr-guar{display:flex;flex-wrap:wrap;gap:20px;align-items:center;border:3px solid #0F1A2B;border-radius:22px;padding:24px;margin:0 0 14px;background:#fff}',
'.mr-seal{flex:0 0 116px;width:116px;height:116px;border-radius:999px;background:#0F1A2B;color:#C8F031;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}',
'.mr-seal b{font-family:' + F + ';font-weight:800;font-size:52px;line-height:.9}',
'.mr-seal span{font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:#fff}',
'.mr-faq details{border-top:1px solid #E3E5DE;padding:0}',
'.mr-faq details:first-of-type{border-top:0}',
'.mr-faq summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:58px;font-weight:800;font-size:16px;color:#0F1A2B}',
'.mr-faq summary::-webkit-details-marker{display:none}',
'.mr-faq summary:after{content:"+";flex:0 0 32px;width:32px;height:32px;border-radius:999px;background:#F1F2EE;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:400;transition:transform .2s}',
'.mr-faq details[open] summary:after{transform:rotate(45deg);background:#C8F031}',
'.mr-faq details p{margin:0 0 16px;font-size:15px}',
'.mr-end{position:relative;overflow:hidden;border-radius:22px;background:#0F1A2B center/cover no-repeat;color:#fff;padding:64px 22px;text-align:center}',
'.mr-end:before{content:"";position:absolute;inset:0;background:rgba(15,26,43,.72)}',
'.mr-end>*{position:relative}',
'.mr-pulse{animation:mrPulse 1s ease 3!important}',
'@keyframes mrPulse{0%,100%{box-shadow:0 0 0 0 rgba(200,240,49,0)}50%{box-shadow:0 0 0 12px rgba(200,240,49,.95)}}',
'.mr-bar{position:fixed;left:0;right:0;bottom:0;z-index:9990;background:#0F1A2B;color:#fff;padding:10px 14px;display:none;align-items:center;justify-content:space-between;gap:12px;box-shadow:0 -6px 20px rgba(0,0,0,.25);font-family:Inter,system-ui,sans-serif}',
'.mr-bar.mr-on{display:flex}',
'.mr-bar b{display:block;font-size:15px}.mr-bar span{font-size:12px;color:#C5CCD8}',
'.mr-bar button{flex:0 0 auto;min-height:46px;border:0;border-radius:12px;background:#C8F031;color:#0F1A2B;font-family:' + F + ';font-weight:800;font-size:19px;letter-spacing:1px;text-transform:uppercase;padding:0 16px;cursor:pointer}',
'.mr-pk-gs{display:flex;flex-wrap:wrap;align-items:center;gap:5px;margin-top:5px}','.mr-pk-gs .mr-pk-g{margin-top:0}','.mr-pk-g2{background:#C8F031!important;color:#0F1A2B!important}','.mr-pk-gt{font-size:11px;font-weight:800;text-transform:uppercase;color:#0F1A2B}','.mr-gb-imgs{flex:0 0 auto;display:flex;align-items:center;gap:6px}','.mr-mini{width:52px;height:72px;border-radius:3px 6px 6px 3px;background:#0F1A2B center/cover;position:relative;overflow:hidden;box-shadow:3px 4px 0 rgba(15,26,43,.35);flex:0 0 auto}','.mr-mini:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(15,26,43,.2),rgba(15,26,43,.95) 70%)}','.mr-mini b{position:absolute;left:5px;right:4px;bottom:6px;font-family:' + F + ';font-weight:800;text-transform:uppercase;font-size:9px!important;line-height:.95;color:#fff}','.mr-mini b i{font-style:normal;color:#C8F031}','.mr-man{display:flex;flex-wrap:wrap;gap:26px;align-items:center}','.mr-book{flex:0 0 auto;width:170px;margin:6px auto 10px;perspective:900px}','.mr-book-c{position:relative;width:170px;height:241px;border-radius:4px 10px 10px 4px;background:#0F1A2B center/cover;overflow:hidden;transform:rotateY(-14deg);box-shadow:14px 16px 0 -4px #C8F031,18px 22px 30px rgba(0,0,0,.45);border-left:7px solid #0A1320}','.mr-book-c:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(15,26,43,.15) 0%,rgba(15,26,43,.5) 40%,rgba(15,26,43,.97) 72%)}','.mr-book-c>*{position:absolute;left:12px;right:10px}','.mr-book-b{top:11px;font-family:' + F + ';font-weight:800;letter-spacing:3px;font-size:11px;color:#C8F031}','.mr-book-t{bottom:30px;font-family:' + F + ';font-weight:800;text-transform:uppercase;font-size:27px;line-height:.92;color:#fff}','.mr-book-t em{font-style:normal;color:#C8F031}','.mr-book-s{bottom:12px;white-space:nowrap;font-size:8.5px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;color:#D5DAE3}','.mr-book-badge{position:absolute;top:-10px;right:-14px;width:66px;height:66px;border-radius:50%;background:#C8F031;color:#0F1A2B;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:' + F + ';font-weight:800;text-transform:uppercase;line-height:.95;font-size:12px;transform:rotate(10deg);z-index:2;text-align:center}','.mr-book-badge b{font-size:16px}','.mr-man-txt{flex:1 1 260px;min-width:0}','.mr-facts{display:flex;flex-wrap:wrap;gap:6px;margin:12px 0}','.mr-facts span{background:#0F1A2B;color:#C8F031;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.3px;border-radius:6px;padding:5px 9px}','.mr-parts{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-top:18px}','.mr-part{background:#fff;border:1px solid #E3E5DE;border-radius:14px;padding:14px}','.mr-part i{display:inline-block;font-style:normal;background:#0F1A2B;color:#C8F031;font-family:' + F + ';font-weight:800;font-size:14px;border-radius:6px;padding:2px 7px;margin-bottom:6px}','.mr-part b{display:block;font-family:' + F + ';font-weight:800;text-transform:uppercase;font-size:21px;line-height:1;margin-bottom:5px}','.mr-part span{font-size:13px;color:#3D4859;line-height:1.45}','.mr-plans{background:#0F1A2B;color:#fff;border-radius:16px;padding:16px;margin-top:14px}','.mr-plans b{display:block;font-family:' + F + ';font-weight:800;text-transform:uppercase;font-size:20px;color:#C8F031;margin-bottom:8px}','.mr-plans div{display:flex;flex-wrap:wrap;gap:6px}','.mr-plans span{border:1px solid rgba(255,255,255,.4);border-radius:99px;padding:5px 10px;font-size:12.5px;font-weight:700}','.mr-pat{display:flex;flex-wrap:wrap;gap:22px;align-items:center}','.mr-pat-img{flex:1 1 220px;min-width:0;border-radius:18px;overflow:hidden;background:#fff}','.mr-pat-img img{width:100%;height:auto}','.mr-pat-txt{flex:1 1 280px;min-width:0}','.mr-zones{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin:14px 0}','.mr-zone{background:#0F1A2B;color:#fff;border-radius:12px;padding:12px 10px;text-align:center}','.mr-zone b{display:block;font-family:' + F + ';font-weight:800;text-transform:uppercase;font-size:20px;color:#C8F031;line-height:1;margin-bottom:4px}','.mr-zone span{font-size:12px;color:#D5DAE3;line-height:1.35}','.mr-combo{display:grid;grid-template-columns:1fr auto 1fr;gap:10px;align-items:center;background:#fff;border:2px solid #0F1A2B;border-radius:16px;padding:14px;margin-top:16px}','.mr-combo div{text-align:center}','.mr-combo b{display:block;font-family:' + F + ';font-weight:800;text-transform:uppercase;font-size:20px;line-height:1}','.mr-combo span{font-size:12.5px;color:#3D4859}','.mr-combo i{font-style:normal;font-family:' + F + ';font-weight:800;font-size:30px;color:#0F1A2B}','@media (max-width:480px){.mr-zones{grid-template-columns:1fr}.mr-combo{grid-template-columns:1fr}.mr-combo i{display:none}}','@media (min-width:768px){.mr-bar{display:none!important}}',
'@media (max-width:480px){.mr-h1{font-size:40px!important}.mr-h2{font-size:34px!important}.mr-big{font-size:40px!important}.mr-sec{padding:36px 16px}.mr-hero{padding:44px 18px 32px}.mr-pk{padding:16px 12px!important;gap:10px}.mr-pk-q{font-size:24px}.mr-pk-p{font-size:27px}}'
].join('');
var CHK = function (t) { return '<span class="mr-chip"><span class="mr-ck">' + CK + '</span>' + t + '</span>'; };
var YES = '<span class="mr-yes">' + CK + '</span>';
function packsHTML() {
  return '<div class="mr-pks">' + PACKS.map(function (p, i) {
    return '<button type="button" class="mr-pk" data-mr-pack="' + p.v + '">'
      + (p.tag ? '<span class="mr-pk-tag' + (i === 2 ? ' mr-alt' : '') + '">' + p.tag + '</span>' : '')
      + '<span class="mr-rad"><i></i></span>'
      + '<span class="mr-pk-mid"><span class="mr-pk-q">' + p.q + '</span><span class="mr-pk-u">' + p.u + ' · ' + p.per + '</span>'
      + (p.gift ? '<span class="mr-pk-gs"><span class="mr-pk-g">' + GIFT + 'Parches anti-ampollas</span><span class="mr-pk-g mr-pk-g2">' + BOOK + 'Manual del corredor</span><span class="mr-pk-gt">de regalo</span></span>' : '<span class="mr-pk-ng">Sin regalos</span>')
      + '</span>'
      + '<span class="mr-pk-r"><span class="mr-pk-p">' + p.price + '</span><s>' + p.list + '</s><span class="mr-pk-s">' + p.save + '</span></span>'
      + '</button>';
  }).join('') + '</div>'
  + '<div class="mr-giftbar"><div class="mr-gb-imgs"><img src="' + I.parches + '" alt="Parches anti-ampollas de regalo" loading="lazy">' + MINIBOOK + '</div><span><b>Desde el Pack x20: 2 regalos</b><span>Parches anti-ampollas para talón, planta y costados + el Manual del Deportista y Corredor (52 páginas, digital).</span></span></div>'
  + '<div class="mr-sum" data-mr-sum="1"></div>'
  + '<a href="#" class="mr-btn" data-mr-cart="1">Ir a agregar al carrito <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F1A2B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg></a>';
}
var H = ''
+ '<div class="mr-hero" style="background-image:url(' + I.hero + ')">'
+ '<span class="mr-eye mr-lime">Mélange Run · Hecho para fondos largos</span>'
+ '<h2 class="mr-d mr-h1">Cuidá tus dedos<br><span class="mr-lime">en cada kilómetro</span></h2>'
+ '<p>Fundas de silicona que frenan el roce y protegen tus uñas. No se despegan con el sudor y no cambian el calce de tus zapatillas.</p>'
+ '<div class="mr-chips">' + CHK('Cuidá tus uñas') + CHK('Frená el roce que causa ampollas') + CHK('Hecho para fondos largos') + CHK('Lavás, corrés, repetís') + '</div>'
+ '<span class="mr-offer">' + GIFT + 'Pack x20 y x30: parches + manual de regalo</span>'
+ '</div>'

+ '<div class="mr-offers" style="background-image:url(' + I.grupo + ')">'
+ '<div class="mr-c"><span class="mr-eye mr-lime">Elegí tu pack</span><h2 class="mr-d mr-h2">Más kilómetros, mejor precio</h2><p style="color:#E3E7EE;margin:0">Tocá un pack y te llevamos al botón de compra con ese pack elegido.</p></div>'
+ packsHTML()
+ '<p class="mr-c" style="color:#C5CCD8;font-size:13px;margin:8px 0 0">3 y 6 cuotas sin interés · 10% OFF extra pagando por transferencia</p>'
+ '</div>'

+ '<div class="mr-sec mr-white" id="mr-manual">'+ '<div class="mr-man">'+ '<div class="mr-book"><div style="position:relative"><div class="mr-book-badge"><span>Regalo</span><b>x20 · x30</b></div><div class="mr-book-c" style="background-image:url(' + COVER + ')"><span class="mr-book-b">MÉLANGE</span><span class="mr-book-t">Manual del<br>deportista<br><em>y corredor</em></span><span class="mr-book-s">Hábitos · Planes · Pies</span></div></div></div>'+ '<div class="mr-man-txt"><span class="mr-eye" style="color:#3D4859">' + GIFT + ' De regalo con el Pack x20 y x30</span>'+ '<h2 class="mr-d mr-h2">Manual del Deportista y Corredor</h2>'+ '<p>No es un folleto: es una guía completa para correr, caminar y entrenar mejor. Hábitos, planes semana a semana y todo para que tus pies aguanten cada kilómetro.</p>'+ '<div class="mr-facts"><span>52 páginas</span><span>Digital · PDF</span><span>Planes 5K · 10K · 21K</span><span>Plan 10.000 pasos</span></div>'+ '<p style="margin:0;font-weight:700;color:#0F1A2B">Lo recibís junto con tu compra y lo tenés siempre en el celular.</p>'+ '</div></div>'+ '<div class="mr-parts">'+ '<div class="mr-part"><i>01</i><b>La base</b><span>Hábitos que no se abandonan, sueño y recuperación, qué comer antes y después, hidratación en verano y una rutina de fuerza de 15 minutos.</span></div>'+ '<div class="mr-part"><i>02</i><b>Pies a prueba de todo</b><span>Ampollas y uña negra, cómo elegir zapatillas y medias, el truco del último ojal y cómo usar tu protector y los parches.</span></div>'+ '<div class="mr-part"><i>03</i><b>Para correr</b><span>Cómo aguantar más, respiración y técnica, la cabeza en carrera, trail y bajadas, y checklist del día de carrera.</span></div>'+ '<div class="mr-part"><i>04</i><b>Para caminar</b><span>Técnica, de 0 a 10.000 pasos, caminar para sentirte mejor, senderismo, viajes y jornadas de pie.</span></div>'+ '<div class="mr-part"><i>05</i><b>Herramientas</b><span>Registro semanal, objetivos, hoja de fuerza y elongación para la heladera y checklist de carrera para imprimir.</span></div>'+ '</div>'+ '<div class="mr-plans"><b>Planes incluidos, semana a semana</b><div><span>De 0 a 5K · 8 semanas</span><span>De 5K a 10K · 8 semanas</span><span>Base 21K · 12 semanas</span><span>De 0 a 10.000 pasos · 6 semanas</span><span>Caminata · 4 semanas</span></div></div>'+ '<a href="#" class="mr-btn" data-mr-pack="Pack x20 + Parches y Manual de regalo">Quiero el Pack x20 con regalos</a>'+ '</div>'

+ '<div class="mr-sec" id="mr-parches">'+ '<div class="mr-pat">'+ '<div class="mr-pat-img"><img src="' + I.parches + '" alt="Parches anti-ampollas colocados en el talón y los costados del pie" loading="lazy"></div>'+ '<div class="mr-pat-txt"><span class="mr-eye" style="color:#3D4859">' + GIFT + ' De regalo con el Pack x20 y x30</span>'+ '<h2 class="mr-d mr-h2">Parches anti-ampollas: para qué sirven</h2>'+ '<p>Las fundas cuidan tus dedos. Los parches cuidan <strong style="color:#0F1A2B">el resto del pie</strong>: se pegan donde la zapatilla roza y hacen de segunda piel, para que el roce no te levante una ampolla. Son resistentes al agua y al sudor.</p>'+ '</div></div>'+ '<div class="mr-zones">'+ '<div class="mr-zone"><b>Talón</b><span>Donde roza el contrafuerte, sobre todo con zapatillas nuevas y en subidas.</span></div>'+ '<div class="mr-zone"><b>Planta</b><span>Donde aparecen las ampollas por calor en fondos largos y carreras.</span></div>'+ '<div class="mr-zone"><b>Costados</b><span>El costado del dedo gordo y del pie, donde aprieta la capellada.</span></div>'+ '</div>'+ '<h3 class="mr-d mr-h3" style="margin-top:18px!important">Cómo y cuándo usarlos</h3>'+ '<div class="mr-step"><span class="mr-num">1</span><span><b>Piel limpia y seca</b><span>Sin cremas ni humedad, así se adhieren bien.</span></span></div>'+ '<div class="mr-step"><span class="mr-num">2</span><span><b>Pegalo unos minutos antes de salir</b><span>En la zona donde sentís que empieza a calentar o donde siempre te sale la ampolla.</span></span></div>'+ '<div class="mr-step"><span class="mr-num">3</span><span><b>Presioná unos segundos</b><span>Con la palma de la mano, para que quede bien pegado. Después, medias y zapatillas como siempre.</span></span></div>'+ '<p style="margin:6px 0 0"><strong style="color:#0F1A2B">Ideales para:</strong> fondos largos, carreras, días de calor, zapatillas nuevas y caminatas o jornadas largas.</p>'+ '<div class="mr-combo"><div><b>Fundas</b><span>Dedos: roce, golpe y uña negra</span></div><i>+</i><div><b>Parches</b><span>Talón, planta y costados</span></div></div>'+ '<p class="mr-c" style="margin:12px 0 0;font-weight:700;color:#0F1A2B">Juntos cubren todo el pie. Por eso van de regalo con el Pack x20 y x30.</p>'+ '</div>'

+ '<div class="mr-sec mr-dark">'
+ '<span class="mr-eye">El problema</span>'
+ '<h2 class="mr-d mr-h2">Cuando correr empieza a castigar tus dedos</h2>'
+ '<div class="mr-lines">'
+ '<p>Tus zapatillas se sienten perfectas al principio.</p>'
+ '<p>Pero kilómetro tras kilómetro, tus dedos se mueven, rozan y empujan contra la puntera.</p>'
+ '<p>Y en las bajadas es peor: <strong style="color:#fff">el pie se va para adelante, los dedos chocan y la uña recibe el golpe.</strong></p>'
+ '<p>Si entrenás varias veces por semana, o vas por tu 21K o tu 42K, ese roce se acumula.</p>'
+ '</div>'
+ '<h3 class="mr-d mr-big">No es un paso.<br><span class="mr-lime">Son miles.</span></h3>'
+ '<div class="mr-photo"><img src="' + I.atandose + '" alt="Corredor atándose las zapatillas antes de salir a correr" loading="lazy"></div>'
+ '</div>'

+ '<div class="mr-sec">'
+ '<div class="mr-c"><span class="mr-eye" style="color:#9A2E16">¿Te suena?</span><h2 class="mr-d mr-h2">El roce que te frena justo cuando más importa</h2></div>'
+ '<div class="mr-grid" style="margin-top:18px">'
+ '<div class="mr-pain"><img src="' + I.corredor + '" alt="Corredor en plena zancada sobre el asfalto" loading="lazy"><div><b>El km que arde</b><span>Sabés en qué kilómetro te empieza a doler el dedo. Bajás el ritmo o cortás el fondo.</span></div></div>'
+ '<div class="mr-pain"><img src="' + I.piernas + '" alt="Piernas de corredores en una carrera de calle" loading="lazy"><div><b>La uña negra</b><span>Después de cada semana de muchos kilómetros, la uña pega contra la puntera y se pone negra.</span></div></div>'
+ '<div class="mr-pain"><img src="' + I.trail + '" alt="Corredor de trail subiendo una loma" loading="lazy"><div><b>Las bajadas</b><span>El pie se desliza hacia adelante y los dedos chocan una y otra vez contra la zapatilla.</span></div></div>'
+ '<div class="mr-pain"><img src="' + I.camino + '" alt="Caminantes en un sendero de montaña" loading="lazy"><div><b>Caminatas largas</b><span>Salís a hacer tus pasos o un sendero y volvés con una ampolla o el dedo rojo.</span></div></div>'
+ '</div>'
+ '<div class="mr-photo" style="background:#fff"><img src="' + I.mapa + '" alt="Mapa de los puntos donde el calzado lastima cuando corrés" loading="lazy"></div>'
+ '<div class="mr-fails"><span class="mr-fail"><i>✗</i>Curitas que se despegan</span><span class="mr-fail"><i>✗</i>Cinta que irrita</span><span class="mr-fail"><i>✗</i>Vaselina que dura 3 km</span></div>'
+ '<p class="mr-c" style="font-size:18px;font-weight:700;color:#0F1A2B;margin:0">Hay una forma mejor. <span class="mr-hl">Que el roce lo reciba la silicona.</span></p>'
+ '</div>'

+ '<div class="mr-sec mr-white">'
+ '<span class="mr-eye" style="color:#3D4859">La solución</span>'
+ '<h2 class="mr-d mr-h2">Protección que se mueve con vos</h2>'
+ '<div class="mr-two">'
+ '<div class="mr-wide" style="aspect-ratio:16/11"><img src="' + I.toes + '" alt="Dedos del pie con las fundas de silicona puestas" loading="lazy" style="object-position:center 20%"></div>'
+ '<div style="aspect-ratio:1/1"><img src="' + I.colocar + '" alt="Colocando la funda de silicona en el dedo" loading="lazy"></div>'
+ '<div style="aspect-ratio:1/1;background:#fff"><img src="' + I.medidas + '" alt="Medidas de la funda: largo 2 cm, espesor 0,2 cm, diámetro interno 1 cm" loading="lazy" style="object-fit:contain"></div>'
+ '</div>'
+ '<p>Cada dedo lleva su propia funda de silicona suave. Queda entre tu piel, tu uña y la zapatilla: <strong style="color:#0F1A2B">el roce y la presión los recibe la silicona, no tu dedo.</strong></p>'
+ '<p>Es fina (0,2 cm), así que no cambia el calce. Te la ponés en segundos, la lavás y la volvés a usar en el próximo fondo.</p>'
+ '<div class="mr-checks">'
+ ['Silicona suave', 'Fina: no cambia el calce', 'No se despega con el sudor', 'Tiene orificios: respira', 'Talle único, se estira', 'Lavable y reutilizable'].map(function (t) { return '<span><span class="mr-ck">' + CK + '</span>' + t + '</span>'; }).join('')
+ '</div>'
+ '<p style="font-weight:700;color:#0F1A2B;margin:0">Tu salida diaria, tu semana de más kilómetros o tu preparación para la maratón: tus pies hacen el trabajo. Dales la protección para seguir.</p>'
+ '</div>'

+ '<div class="mr-sec mr-dark mr-c">'
+ '<span class="mr-eye">Cómo funciona</span>'
+ '<h2 class="mr-d mr-h2">El roce lo recibe la silicona, no tu piel</h2>'
+ '<div class="mr-crop"><img src="' + I.sincon + '" alt="Comparación: dedo rozando el calzado sin protector y dedo protegido con la funda Mélange" loading="lazy"></div>'
+ '</div>'

+ '<div class="mr-sec">'
+ '<h2 class="mr-d mr-h2 mr-c">Por qué Mélange le gana a correr sin protección</h2>'
+ '<p class="mr-c">Fondos largos, entrenamiento diario y bajadas generan roce y presión repetidos en tus dedos y uñas.</p>'
+ '<div class="mr-tbl"><table><thead><tr><th></th><th class="mr-me">MÉLANGE</th><th>Curitas o cinta</th><th>Sin protección</th></tr></thead><tbody>'
+ ['Protege las uñas', 'Amortigua la presión', 'Protección en bajadas', 'No se despega con el sudor', 'Reutilizable y lavable'].map(function (t) { return '<tr><td>' + t + '</td><td class="mr-me">' + YES + '</td><td class="mr-no">✗</td><td class="mr-no">✗</td></tr>'; }).join('')
+ '</tbody></table></div>'
+ '</div>'

+ '<div class="mr-sec mr-white">'
+ '<h2 class="mr-d mr-h2 mr-c">Para cada kilómetro que hacés</h2>'
+ '<div class="mr-grid" style="margin-top:16px">'
+ '<div class="mr-aud"><img src="' + I.maraton + '" alt="Pelotón de corredores en una maratón de calle" loading="lazy"><div><b>Running de calle</b><span>Salidas diarias, semanas de muchos kilómetros y carreras de 10K, 21K y 42K.</span></div></div>'
+ '<div class="mr-aud"><img src="' + I.trail2 + '" alt="Corredora de trail en la montaña al atardecer" loading="lazy"><div><b>Trail</b><span>Bajadas largas donde el pie se va para adelante y la uña recibe el golpe.</span></div></div>'
+ '<div class="mr-aud"><img src="' + I.camino + '" alt="Caminantes en un sendero" loading="lazy"><div><b>Caminantes</b><span>Caminatas diarias, tus 10.000 pasos, senderismo, viajes y jornadas largas de pie.</span></div></div>'
+ '</div>'
+ '</div>'

+ '<div class="mr-sec">'
+ '<span class="mr-eye" style="color:#3D4859">Cómo se usa</span>'
+ '<h2 class="mr-d mr-h2">Listo en 5 segundos. Sin pegamento.</h2>'
+ '<div class="mr-step"><span class="mr-num">1</span><span><b>Estirala y colocala</b><span>Poné la funda sobre el dedo que te roza: dedo gordo, segundo dedo o meñique.</span></span></div>'
+ '<div class="mr-step"><span class="mr-num">2</span><span><b>Calzate como siempre</b><span>Con tus medias y zapatillas de siempre. Salí a correr o a caminar.</span></span></div>'
+ '<div class="mr-step"><span class="mr-num">3</span><span><b>Lavala y reusala</b><span>Agua y jabón, se seca al aire y queda lista para la próxima.</span></span></div>'
+ '</div>'

+ '%%REV%%'
+ '<div class="mr-offers" style="background-image:url(' + I.maraton + ')">'
+ '<div class="mr-c"><span class="mr-eye mr-lime">Corré con tu team</span><h2 class="mr-d mr-h2">Elegí tu pack</h2><p style="color:#E3E7EE;margin:0">Cuantos más llevás, menos pagás cada 10. Y desde el Pack x20, los parches y el manual van de regalo.</p></div>'
+ packsHTML()
+ '</div>'

+ '<div class="mr-guar"><div class="mr-seal"><b>60</b><span>días</span></div><div style="flex:1 1 260px;min-width:0"><h2 class="mr-d mr-h3">Probalo en tus fondos largos</h2><p style="margin:0">Corré con Mélange. Si no te sirve, tenés 60 días para pedir el cambio o la devolución. Tu compra está protegida y tenés el botón de arrepentimiento.</p></div></div>'

+ '<div class="mr-sec mr-white mr-faq">'
+ '<h2 class="mr-d mr-h2 mr-c">Preguntas frecuentes</h2>'
+ [
  ['¿Qué pack me conviene?', 'Si corrés seguido o querés tener repuesto, el Pack x20 es el más elegido: pagás $40.530 cada 10 y te llevás los parches y el manual de regalo. Si compartís con tu running team o tu familia, el Pack x30 es el mejor precio: $31.843 cada 10, también con parches y manual.'],
  ['¿Qué regalos vienen con cada pack?', 'Con el Pack x20 y el Pack x30 te llevás de regalo los parches anti-ampollas y el Manual del Deportista y Corredor. El Pack x10 no incluye regalos.'],
  ['¿Cómo recibo el manual?', 'Es digital, en PDF de 52 páginas. Te lo enviamos con tu compra para que lo tengas siempre en el celular, y si querés lo podés imprimir.'],
  ['¿Qué tiene el manual?', 'Hábitos para entrenar mejor, cómo aguantar más corriendo, alimentación e hidratación, rutina de fuerza, cuidado de pies, cómo usar tu protector, día de carrera y planes semana a semana: de 0 a 5K, de 5K a 10K, base para 21K y de 0 a 10.000 pasos.'],
  ['¿Lo voy a sentir dentro de la zapatilla?', 'Es silicona suave y fina (0,2 cm) que se ajusta al dedo. Con las medias y las zapatillas puestas, queda discreto y cómodo.'],
  ['¿Se sale o se mueve cuando corro?', 'No es adhesivo: se sostiene por elasticidad, así que el sudor no lo despega. Queda firme durante todo el fondo.'],
  ['¿Por qué sirve en las bajadas?', 'En las bajadas el pie se desliza hacia adelante y aumentan la presión y el roce sobre dedos y uñas. La funda suma una capa protectora justo ahí.'],
  ['¿Qué talle uso?', 'Es talle único: la silicona se estira y se adapta al dedo gordo, al segundo dedo o al meñique.'],
  ['¿Es reutilizable? ¿Cómo se lava?', 'Sí. Se lava con agua y jabón neutro, se seca al aire y queda lista para el próximo entrenamiento.'],
  ['¿Y si no me sirve?', 'Tenés 60 días para cambios o devoluciones, compra protegida y botón de arrepentimiento.']
].map(function (q, i) { return '<details' + (i === 0 ? ' open' : '') + '><summary>' + q[0] + '</summary><p>' + q[1] + '</p></details>'; }).join('')
+ '</div>'

+ '<div class="mr-end" style="background-image:url(' + I.hero + ')">'
+ '<h2 class="mr-d mr-h1">Volvé a correr<br><span class="mr-lime">sin pensar en tus pies</span></h2>'
+ '<p style="color:#E3E7EE;margin:0 auto;max-width:460px">Desde $57.900 · Parches + manual de regalo desde el Pack x20 · 6 cuotas sin interés</p>'
+ '<a href="#" class="mr-btn" data-mr-cart="1" style="max-width:420px;margin-left:auto;margin-right:auto">Quiero mis protectores</a>'
+ '</div>';

function visible(el) { var r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; }
function cartBtn() {
  var els = document.querySelectorAll('.js-addtocart');
  for (var i = 0; i < els.length; i++) { if (visible(els[i])) return els[i]; }
  return null;
}
function selects() { return Array.prototype.slice.call(document.querySelectorAll('select.js-variation-option, select[name="variation[0]"]')); }
function current() { var s = selects(); for (var i = 0; i < s.length; i++) { if (s[i].value) return s[i].value; } return PACKS[0].v; }
function goCart(e) {
  if (e) e.preventDefault();
  var b = cartBtn();
  if (!b) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  b.scrollIntoView({ behavior: 'smooth', block: 'center' });
  setTimeout(function () { b.classList.remove('mr-pulse'); void b.offsetWidth; b.classList.add('mr-pulse'); }, 450);
}
function choose(v) {
  selects().forEach(function (s) {
    var has = Array.prototype.some.call(s.options, function (o) { return o.value === v; });
    if (!has) return;
    s.value = v;
    s.dispatchEvent(new Event('change', { bubbles: true }));
    if (window.jQuery) { try { window.jQuery(s).trigger('change'); } catch (err) {} }
  });
  var links = document.querySelectorAll('.js-mobile-vars-property');
  for (var i = 0; i < links.length; i++) { if (links[i].getAttribute('data-option') === v) { links[i].classList.add('selected'); } else { links[i].classList.remove('selected'); } }
  mark();
}
function mark() {
  var v = current(), p = PACKS[0];
  for (var i = 0; i < PACKS.length; i++) { if (PACKS[i].v === v) p = PACKS[i]; }
  var cards = document.querySelectorAll('.mr-pk');
  for (var j = 0; j < cards.length; j++) { if (cards[j].getAttribute('data-mr-pack') === p.v) cards[j].classList.add('mr-sel'); else cards[j].classList.remove('mr-sel'); }
  var sums = document.querySelectorAll('[data-mr-sum]');
  for (var k = 0; k < sums.length; k++) { sums[k].innerHTML = 'Elegiste: <b>' + p.q + ' · ' + p.price + '</b>' + (p.gift ? ' + parches y manual de regalo' : '') + '<br>' + p.c + ' · ' + p.t; }
  var bt = document.querySelector('.mr-bar b'); if (bt) bt.textContent = p.q + ' · ' + p.price;
}
if (!document.getElementById('mr-css')) {
  var st = document.createElement('style'); st.id = 'mr-css'; st.textContent = CSS; document.head.appendChild(st);
  var lk = document.createElement('link'); lk.rel = 'stylesheet'; lk.href = 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Inter:wght@400;600;700;800&display=swap'; document.head.appendChild(lk);
}
/* =====================================================================
   RESEÑAS DE CLIENTES
   ---------------------------------------------------------------------
   Las reseñas se cargan en window.MR_REVIEWS (bloque de texto plano que
   va antes de este script en el snippet de Tiendanube). Formato:

   { nombre: 'Nombre A.',            // como lo autorizó el cliente
     fecha: 'AAAA-MM-DD',            // fecha real de publicación
     estrellas: 5,                   // 1 a 5, la que dio el cliente
     titulo: 'Opcional',
     texto: 'Texto tal cual lo escribió el cliente',
     perfil: 'Opcional · ej. Corredora 21K',
     pack: 'Opcional · ej. Pack x20',
     fotos: ['https://...jpg'],      // opcional, fotos enviadas por el cliente
     verificada: true,               // solo si es compra confirmada
     destacada: false }              // opcional, la muestra primero

   Sin reseñas cargadas la sección NO se muestra a los clientes.
   Para ver el diseño vacío: agregar ?resenas=preview a la URL.
   ===================================================================== */
function rwList() {
  var src = window.MR_REVIEWS;
  if (!src || !src.length) return [];
  var out = [];
  for (var i = 0; i < src.length; i++) {
    var r = src[i] || {};
    var s = Math.round(Number(r.estrellas));
    if (!r.nombre || !r.texto || !(s >= 1 && s <= 5)) continue;
    out.push({ n: String(r.nombre), d: String(r.fecha || ''), s: s, t: r.titulo ? String(r.titulo) : '', x: String(r.texto), p: r.perfil ? String(r.perfil) : '', k: r.pack ? String(r.pack) : '', f: (r.fotos || []).filter(function (u) { return /^https?:\/\//.test(String(u)); }), v: !!r.verificada, h: !!r.destacada });
  }
  out.sort(function (a, b) { if (a.h !== b.h) return a.h ? -1 : 1; return a.d < b.d ? 1 : a.d > b.d ? -1 : 0; });
  return out;
}
function rwEsc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
var RW_STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.4l2.95 6.3 6.85.75-5.1 4.65 1.45 6.75L12 17.4l-6.15 3.45 1.45-6.75-5.1-4.65 6.85-.75z"/></svg>';
var RW_5 = RW_STAR + RW_STAR + RW_STAR + RW_STAR + RW_STAR;
function rwStars(v, cls) {
  var pct = Math.max(0, Math.min(100, v / 5 * 100));
  return '<span class="mr-rw-stars' + (cls ? ' ' + cls : '') + '" role="img" aria-label="' + String(v).replace('.', ',') + ' de 5 estrellas"><span class="mr-rw-st-bg">' + RW_5 + '</span><span class="mr-rw-st-fg" style="width:' + pct + '%">' + RW_5 + '</span></span>';
}
var RW_MES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
function rwDate(d) { var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(d); if (!m) return rwEsc(d); return parseInt(m[3], 10) + ' ' + RW_MES[parseInt(m[2], 10) - 1] + ' ' + m[1]; }
function rwInitials(n) { var p = n.replace(/[^A-Za-zÀ-ÿ\s]/g, '').trim().split(/\s+/); return ((p[0] || '').charAt(0) + (p.length > 1 ? p[p.length - 1].charAt(0) : '')).toUpperCase() || '·'; }
var RW_CHECK = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>';
var RW_CAM = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h3l2-3h8l2 3h3v11H3z"/><circle cx="12" cy="13" r="3.5"/></svg>';
function rwCard(r, idx) {
  var cls = 'mr-rw-card';
  if (r.f.length) cls += ' mr-rw-has-ph';
  if (r.h || (idx === 0 && r.s === 5 && !r.f.length && r.x.length > 120)) cls += ' mr-rw-feat';
  var ph = '';
  if (r.f.length) {
    ph = '<div class="mr-rw-ph mr-rw-ph' + Math.min(r.f.length, 3) + '">' + r.f.slice(0, 3).map(function (u, j) {
      return '<button type="button" class="mr-rw-phb" data-mr-rw-photo="' + rwEsc(u) + '" aria-label="Ver foto ' + (j + 1) + ' de ' + rwEsc(r.n) + '"><img src="' + rwEsc(u) + '" alt="Foto de ' + rwEsc(r.n) + ' usando Mélange" loading="lazy">' + (j === 2 && r.f.length > 3 ? '<span class="mr-rw-more-ph">+' + (r.f.length - 3) + '</span>' : '') + '</button>';
    }).join('') + '</div>';
  }
  return '<article class="' + cls + '" data-s="' + r.s + '" data-f="' + (r.f.length ? 1 : 0) + '">'
    + ph
    + '<div class="mr-rw-body">'
    + '<div class="mr-rw-top">' + rwStars(r.s) + (r.d ? '<time class="mr-rw-date" datetime="' + rwEsc(r.d) + '">' + rwDate(r.d) + '</time>' : '') + '</div>'
    + (r.t ? '<h3 class="mr-rw-t">' + rwEsc(r.t) + '</h3>' : '')
    + '<p class="mr-rw-x">' + rwEsc(r.x) + '</p>'
    + '<div class="mr-rw-who"><span class="mr-rw-av" aria-hidden="true">' + rwEsc(rwInitials(r.n)) + '</span><span class="mr-rw-nm"><b>' + rwEsc(r.n) + '</b>'
    + (r.v ? '<span class="mr-rw-ver">' + RW_CHECK + 'Compra verificada</span>' : '')
    + ((r.p || r.k) ? '<small>' + rwEsc([r.p, r.k].filter(Boolean).join(' · ')) + '</small>' : '')
    + '</span></div>'
    + '</div></article>';
}
function rwSkeleton(i) {
  var hasPh = i === 1 || i === 4;
  var lines = [3, 5, 2, 4, 3, 6][i % 6];
  var l = ''; for (var k = 0; k < lines; k++) l += '<i style="width:' + (k === lines - 1 ? 55 : 92 - (k % 3) * 6) + '%"></i>';
  return '<article class="mr-rw-card mr-rw-skel' + (i === 0 ? ' mr-rw-feat' : '') + (hasPh ? ' mr-rw-has-ph' : '') + '" aria-hidden="true">'
    + (hasPh ? '<div class="mr-rw-ph mr-rw-ph1"><span class="mr-rw-phb mr-rw-sk-ph">' + RW_CAM + '<em>Foto del cliente</em></span></div>' : '')
    + '<div class="mr-rw-body"><div class="mr-rw-top">' + rwStars(0) + '<span class="mr-rw-date">Fecha</span></div>'
    + '<div class="mr-rw-sk-l">' + l + '</div>'
    + '<div class="mr-rw-who"><span class="mr-rw-av"></span><span class="mr-rw-nm"><b>Nombre del cliente</b><small>Perfil · Pack</small></span></div>'
    + '</div></article>';
}
function reviewsHTML() {
  var list = rwList();
  var preview = /[?&#]resenas=preview/.test(location.search + location.hash);
  if (!list.length && !preview) return '';
  var n = list.length, sum = 0, dist = [0, 0, 0, 0, 0, 0], photos = [];
  list.forEach(function (r) { sum += r.s; dist[r.s]++; r.f.forEach(function (u) { photos.push({ u: u, n: r.n }); }); });
  var avg = n ? Math.round(sum / n * 10) / 10 : 0;
  var rec = n ? Math.round((dist[4] + dist[5]) / n * 100) : 0;
  var withPh = list.filter(function (r) { return r.f.length; }).length;
  var h = '<section class="mr-sec mr-white mr-rw" id="mr-resenas" aria-labelledby="mr-rw-h">';
  if (!n) h += '<div class="mr-rw-note">Vista previa interna del diseño · Sin reseñas publicadas · Esta sección no se muestra a los clientes hasta cargar reseñas reales</div>';
  h += '<header class="mr-rw-head"><span class="mr-eye" style="color:#3D4859">Reseñas de clientes</span><h2 class="mr-d mr-h2" id="mr-rw-h">Experiencias reales,<br><span class="mr-rw-hl">kilómetro a kilómetro</span></h2><p>Opiniones de quienes ya entrenan, corren y caminan con Mélange.</p></header>';
  h += '<div class="mr-rw-sum">'
    + '<div class="mr-rw-score"><b>' + (n ? String(avg.toFixed(1)).replace('.', ',') : '–') + '</b><div>' + rwStars(avg, 'mr-rw-lg') + '<span>' + (n ? 'Basado en ' + n + (n === 1 ? ' reseña' : ' reseñas') : 'Sin reseñas todavía') + '</span></div></div>'
    + '<div class="mr-rw-dist">' + [5, 4, 3, 2, 1].map(function (s) {
      var pct = n ? Math.round(dist[s] / n * 100) : 0;
      return '<div class="mr-rw-row"><span class="mr-rw-rl">' + s + RW_STAR + '</span><span class="mr-rw-track"><span style="width:' + pct + '%"></span></span><span class="mr-rw-rc">' + (n ? dist[s] : '–') + '</span></div>';
    }).join('') + '</div>'
    + (n ? '<div class="mr-rw-rec"><b>' + rec + '%</b><span>de los clientes lo califica con 4 o 5 estrellas</span></div>' : '')
    + '</div>';
  if (photos.length) {
    h += '<div class="mr-rw-strip"><span class="mr-rw-strip-t">' + RW_CAM + 'Fotos de clientes</span><div class="mr-rw-strip-r">' + photos.slice(0, 12).map(function (p) {
      return '<button type="button" class="mr-rw-phb" data-mr-rw-photo="' + rwEsc(p.u) + '" aria-label="Ver foto de ' + rwEsc(p.n) + '"><img src="' + rwEsc(p.u) + '" alt="Foto de ' + rwEsc(p.n) + '" loading="lazy"></button>';
    }).join('') + '</div></div>';
  }
  if (n > 3) {
    h += '<div class="mr-rw-filters" role="group" aria-label="Filtrar reseñas">'
      + '<button type="button" data-mr-rw-filter="all" aria-pressed="true">Todas <em>' + n + '</em></button>'
      + (withPh ? '<button type="button" data-mr-rw-filter="ph" aria-pressed="false">Con fotos <em>' + withPh + '</em></button>' : '')
      + (dist[5] && dist[5] < n ? '<button type="button" data-mr-rw-filter="5" aria-pressed="false">5 estrellas <em>' + dist[5] + '</em></button>' : '')
      + '</div>';
  }
  h += '<div class="mr-rw-grid">' + (n ? list.map(rwCard).join('') : [0, 1, 2, 3, 4, 5].map(rwSkeleton).join('')) + '</div>';
  if (n > RW_PAGE) h += '<button type="button" class="mr-rw-morebtn" data-mr-rw-more="1">Ver más reseñas</button>';
  h += '</section>';
  return h;
}
var RW_PAGE = 6;
function rwApply(sec) {
  var f = sec.getAttribute('data-rw-f') || 'all', lim = parseInt(sec.getAttribute('data-rw-n') || RW_PAGE, 10), shown = 0, match = 0;
  var cards = sec.querySelectorAll('.mr-rw-card:not(.mr-rw-skel)');
  for (var i = 0; i < cards.length; i++) {
    var c = cards[i], ok = f === 'all' || (f === 'ph' && c.getAttribute('data-f') === '1') || (f === '5' && c.getAttribute('data-s') === '5');
    if (ok) match++;
    if (ok && shown < lim) { c.hidden = false; shown++; } else c.hidden = true;
  }
  var mb = sec.querySelector('[data-mr-rw-more]'); if (mb) mb.hidden = match <= shown;
  var fb = sec.querySelectorAll('[data-mr-rw-filter]');
  for (var j = 0; j < fb.length; j++) fb[j].setAttribute('aria-pressed', fb[j].getAttribute('data-mr-rw-filter') === f ? 'true' : 'false');
}
function rwInit(root) { var s = root.querySelectorAll('.mr-rw'); for (var i = 0; i < s.length; i++) rwApply(s[i]); }
function rwLightbox(src) {
  var lb = document.getElementById('mr-rw-lb');
  if (!lb) {
    lb = document.createElement('div'); lb.id = 'mr-rw-lb'; lb.className = 'mr-rw-lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Foto del cliente');
    lb.innerHTML = '<button type="button" class="mr-rw-lbx" data-mr-rw-close="1" aria-label="Cerrar">×</button><img alt="Foto del cliente">';
    document.body.appendChild(lb);
  }
  lb.querySelector('img').src = src; lb.classList.add('mr-on'); lb.querySelector('.mr-rw-lbx').focus();
}
function rwClose() { var lb = document.getElementById('mr-rw-lb'); if (lb) lb.classList.remove('mr-on'); }
document.addEventListener('click', function (e) {
  var t = e.target && e.target.closest ? e.target : null; if (!t) return;
  var ph = t.closest('[data-mr-rw-photo]'); if (ph) { e.preventDefault(); rwLightbox(ph.getAttribute('data-mr-rw-photo')); return; }
  if (t.closest('[data-mr-rw-close]') || t.id === 'mr-rw-lb') { rwClose(); return; }
  var fl = t.closest('[data-mr-rw-filter]'), mo = t.closest('[data-mr-rw-more]'), sec = t.closest('.mr-rw');
  if (fl && sec) { sec.setAttribute('data-rw-f', fl.getAttribute('data-mr-rw-filter')); sec.setAttribute('data-rw-n', RW_PAGE); rwApply(sec); return; }
  if (mo && sec) { sec.setAttribute('data-rw-n', parseInt(sec.getAttribute('data-rw-n') || RW_PAGE, 10) + RW_PAGE); rwApply(sec); }
});
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') rwClose(); });
var G = '#E9B53D';
var RWCSS = [
'.mr-rw{container-type:inline-size;container-name:mrrw;padding-top:48px;padding-bottom:48px}',
'.mr-rw-note{background:#FFF8E1;border:1.5px dashed #C99A2E;color:#6B4E00;border-radius:12px;padding:10px 14px;font-size:12.5px;font-weight:700;text-align:center;margin:0 0 22px;line-height:1.45}',
'.mr-rw-head{text-align:center;max-width:560px;margin:0 auto 26px}',
'.mr-rw-head p{margin:0 auto!important;max-width:440px}',
'.mr-rw-hl{white-space:nowrap;color:#0F1A2B;background:linear-gradient(180deg,transparent 58%,#C8F031 58%,#C8F031 92%,transparent 92%);display:inline;padding:0 4px;-webkit-box-decoration-break:clone;box-decoration-break:clone}',
'.mr-rw-stars{position:relative;display:inline-flex;vertical-align:middle;line-height:0}',
'.mr-rw-stars svg{width:16px;height:16px;flex:0 0 16px;margin-right:2px}',
'.mr-rw-st-bg svg{fill:#DEDFD6}',
'.mr-rw-st-fg{position:absolute;left:0;top:0;bottom:0;overflow:hidden;white-space:nowrap;display:inline-flex}',
'.mr-rw-st-fg svg{fill:' + G + ';filter:drop-shadow(0 1px 0 rgba(150,100,0,.25))}',
'.mr-rw-lg svg{width:22px;height:22px;flex-basis:22px;margin-right:3px}',
'.mr-rw-sum{display:grid;grid-template-columns:1fr;gap:20px;background:#0F1A2B;color:#fff;border-radius:20px;padding:22px;margin:0 0 18px;box-shadow:0 18px 40px -24px rgba(15,26,43,.7)}',
'.mr-rw-score{display:flex;align-items:center;gap:16px}',
'.mr-rw-score>b{font-family:' + F + ';font-weight:800;font-size:68px;line-height:.85;color:#fff;letter-spacing:-1px}',
'.mr-rw-score>div{display:flex;flex-direction:column;gap:6px}',
'.mr-rw-score span{font-size:13px;color:#C5CCD8;font-weight:600}',
'.mr-rw-sum .mr-rw-st-bg svg{fill:rgba(255,255,255,.18)}',
'.mr-rw-dist{display:flex;flex-direction:column;gap:7px;min-width:0}',
'.mr-rw-row{display:grid;grid-template-columns:30px 1fr 30px;align-items:center;gap:10px;font-size:13px;font-weight:700;color:#D5DAE3}',
'.mr-rw-rl{display:inline-flex;align-items:center;gap:3px}',
'.mr-rw-rl svg{width:11px;height:11px;fill:' + G + '}',
'.mr-rw-track{height:8px;border-radius:99px;background:rgba(255,255,255,.14);overflow:hidden}',
'.mr-rw-track span{display:block;height:100%;border-radius:99px;background:linear-gradient(90deg,#D9A12C,' + G + ')}',
'.mr-rw-rc{text-align:right;color:#9AA4B5;font-weight:600}',
'.mr-rw-rec{display:flex;align-items:center;gap:12px;border-top:1px solid rgba(255,255,255,.12);padding-top:16px}',
'.mr-rw-rec b{font-family:' + F + ';font-weight:800;font-size:40px;line-height:1;color:#C8F031}',
'.mr-rw-rec span{font-size:13px;color:#D5DAE3;line-height:1.4;max-width:190px}',
'.mr-rw-strip{margin:0 0 18px}',
'.mr-rw-strip-t{display:flex;align-items:center;gap:6px;font-size:12px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#3D4859;margin:0 0 10px}',
'.mr-rw-strip-r{display:flex;gap:8px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:4px;-webkit-overflow-scrolling:touch;scrollbar-width:none}',
'.mr-rw-strip-r::-webkit-scrollbar{display:none}',
'.mr-rw-strip-r .mr-rw-phb{flex:0 0 84px;height:84px;scroll-snap-align:start}',
'.mr-rw-phb{position:relative;display:block;padding:0!important;margin:0!important;border:0!important;border-radius:12px;overflow:hidden;background:#ECEDE6;cursor:zoom-in;min-height:0;box-shadow:none}',
'.mr-rw-phb img{width:100%;height:100%!important;object-fit:cover;transition:transform .35s ease}',
'.mr-rw-phb:hover img{transform:scale(1.04)}',
'.mr-rw-filters{display:flex;gap:8px;margin:0 0 16px;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch}','.mr-rw-filters::-webkit-scrollbar{display:none}','.mr-rw-filters button{flex:0 0 auto;white-space:nowrap}',
'.mr-rw-filters button{display:inline-flex;align-items:center;gap:6px;min-height:40px;padding:0 16px!important;margin:0!important;border:1.5px solid #DADCD3!important;border-radius:999px!important;background:#fff!important;color:#0F1A2B!important;font:700 13.5px/1 Inter,system-ui,sans-serif!important;cursor:pointer;text-transform:none;letter-spacing:0;box-shadow:none}',
'.mr-rw-filters button em{font-style:normal;font-weight:600;color:#5B6575}',
'.mr-rw-filters button[aria-pressed="true"]{background:#0F1A2B!important;border-color:#0F1A2B!important;color:#fff!important}',
'.mr-rw-filters button[aria-pressed="true"] em{color:#C8F031}',
'.mr-rw-grid{column-count:1;column-gap:14px}',
'.mr-rw-card{break-inside:avoid;-webkit-column-break-inside:avoid;display:inline-block;width:100%;margin:0 0 14px;background:#FBFBF8;border:1px solid #E6E7E0;border-radius:18px;overflow:hidden;box-shadow:0 1px 2px rgba(15,26,43,.04),0 10px 28px -18px rgba(15,26,43,.28);transition:transform .25s ease,box-shadow .25s ease;vertical-align:top}',
'.mr-rw-card[hidden]{display:none}',
'@media (hover:hover){.mr-rw-card:hover{transform:translateY(-3px);box-shadow:0 2px 4px rgba(15,26,43,.05),0 20px 36px -20px rgba(15,26,43,.38)}}',
'.mr-rw-body{padding:18px 18px 16px}',
'.mr-rw-top{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 0 10px}',
'.mr-rw-date{font-size:12px;color:#7A8392;font-weight:600;white-space:nowrap}',
'.mr-rw-t{font-family:' + F + '!important;font-weight:800!important;text-transform:uppercase;font-size:21px!important;line-height:1.05!important;letter-spacing:.2px;margin:0 0 8px!important;color:#0F1A2B!important}',
'.mr-root .mr-rw-x{font-size:15px;line-height:1.62;color:#3D4859;margin:0 0 16px;white-space:pre-line}',
'.mr-rw-who{display:flex;align-items:center;gap:11px;border-top:1px solid #E9EAE3;padding-top:13px}',
'.mr-rw-av{flex:0 0 40px;width:40px;height:40px;border-radius:50%;background:#0F1A2B;color:#C8F031;font-family:' + F + ';font-weight:800;font-size:16px;letter-spacing:.5px;display:flex;align-items:center;justify-content:center}',
'.mr-rw-nm{display:flex;flex-direction:column;gap:2px;min-width:0}',
'.mr-rw-nm b{font-size:14.5px;color:#0F1A2B;line-height:1.2}',
'.mr-rw-nm small{font-size:12px;color:#6A7383;font-weight:600;line-height:1.3}',
'.mr-rw-ver{display:inline-flex;align-items:center;gap:4px;font-size:11.5px;font-weight:700;color:#2F6B1F}',
'.mr-rw-ver svg{background:#C8F031;color:#0F1A2B;border-radius:50%;padding:2px;width:15px;height:15px}',
'.mr-rw-ph{display:grid;gap:3px}',
'.mr-rw-ph1 .mr-rw-phb{aspect-ratio:4/3.4;border-radius:0}',
'.mr-rw-ph2{grid-template-columns:1fr 1fr}.mr-rw-ph2 .mr-rw-phb{aspect-ratio:1/1;border-radius:0}',
'.mr-rw-ph3{grid-template-columns:2fr 1fr;grid-template-rows:1fr 1fr;aspect-ratio:4/3}.mr-rw-ph3 .mr-rw-phb{border-radius:0}.mr-rw-ph3 .mr-rw-phb:first-child{grid-row:span 2}',
'.mr-rw-more-ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(15,26,43,.55);color:#fff;font-family:' + F + ';font-weight:800;font-size:26px}',
'.mr-rw-feat{background:#0F1A2B;border-color:#0F1A2B}',
'.mr-rw-feat .mr-rw-t{color:#fff!important;font-size:25px!important}',
'.mr-root .mr-rw-feat .mr-rw-x{color:#DCE1EA;font-size:16.5px}',
'.mr-rw-feat .mr-rw-who{border-color:rgba(255,255,255,.14)}',
'.mr-rw-feat .mr-rw-av{background:#C8F031;color:#0F1A2B}',
'.mr-rw-feat .mr-rw-nm b{color:#fff}.mr-rw-feat .mr-rw-nm small,.mr-rw-feat .mr-rw-date{color:#AEB7C6}',
'.mr-rw-feat .mr-rw-ver{color:#C8F031}',
'.mr-rw-feat .mr-rw-st-bg svg{fill:rgba(255,255,255,.2)}',
'.mr-rw-morebtn{display:flex!important;align-items:center;justify-content:center;width:100%;max-width:340px;min-height:52px;margin:6px auto 0!important;padding:0 20px!important;border:2px solid #0F1A2B!important;border-radius:14px!important;background:#fff!important;color:#0F1A2B!important;font-family:' + F + '!important;font-weight:800!important;font-size:19px!important;letter-spacing:1px;text-transform:uppercase;cursor:pointer;box-shadow:none}',
'.mr-rw-morebtn:hover{background:#0F1A2B!important;color:#C8F031!important}',
'.mr-rw-morebtn[hidden]{display:none!important}',
'.mr-rw-skel .mr-rw-st-bg svg{fill:#E4E5DD}',
'.mr-rw-skel .mr-rw-date,.mr-rw-skel .mr-rw-nm b,.mr-rw-skel .mr-rw-nm small{color:transparent;background:#ECEDE6;border-radius:6px}',
'.mr-rw-skel .mr-rw-nm b{width:130px}.mr-rw-skel .mr-rw-nm small{width:90px}',
'.mr-rw-skel .mr-rw-av{background:#E4E5DD}',
'.mr-rw-sk-l{margin:4px 0 16px}.mr-rw-sk-l i{display:block;height:11px;border-radius:6px;background:#ECEDE6;margin:0 0 9px}',
'.mr-rw-skel.mr-rw-feat .mr-rw-sk-l i,.mr-rw-skel.mr-rw-feat .mr-rw-nm b,.mr-rw-skel.mr-rw-feat .mr-rw-nm small,.mr-rw-skel.mr-rw-feat .mr-rw-date{background:rgba(255,255,255,.12)}',
'.mr-rw-skel.mr-rw-feat .mr-rw-st-bg svg{fill:rgba(255,255,255,.18)}','.mr-rw-skel.mr-rw-feat .mr-rw-av{background:rgba(200,240,49,.35)}',
'.mr-rw-sk-ph{display:flex!important;flex-direction:column;align-items:center;justify-content:center;gap:6px;color:#8C93A0;cursor:default;background:repeating-linear-gradient(135deg,#ECEDE6 0 12px,#F2F3EE 12px 24px)}',
'.mr-rw-sk-ph em{font-style:normal;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px}',
'.mr-rw-lb{position:fixed;inset:0;z-index:99999;background:rgba(10,16,28,.92);display:none;align-items:center;justify-content:center;padding:24px}',
'.mr-rw-lb.mr-on{display:flex}',
'.mr-rw-lb img{max-width:min(92vw,900px);max-height:86vh;border-radius:14px;box-shadow:0 30px 60px rgba(0,0,0,.5)}',
'.mr-rw-lbx{position:absolute;top:14px;right:14px;width:46px;height:46px;border:0;border-radius:50%;background:#fff;color:#0F1A2B;font-size:28px;line-height:1;cursor:pointer}',
'@container mrrw (min-width:560px){.mr-rw-grid{column-count:2}.mr-rw-sum{grid-template-columns:auto 1fr;align-items:center;gap:22px 32px;padding:26px 28px}.mr-rw-rec{grid-column:1/-1}}',
'@container mrrw (min-width:880px){.mr-rw-grid{column-count:3;column-gap:16px}.mr-rw-card{margin-bottom:16px}.mr-rw-sum{grid-template-columns:auto 1fr auto}.mr-rw-rec{grid-column:auto;border-top:0;border-left:1px solid rgba(255,255,255,.12);padding:0 0 0 28px;flex-direction:column;align-items:flex-start;gap:6px}}',
'@media (max-width:480px){.mr-rw{padding-top:38px;padding-bottom:38px}.mr-rw-sum{padding:20px 18px;border-radius:18px}.mr-rw-score>b{font-size:58px}.mr-rw-body{padding:16px 16px 14px}.mr-rw-feat .mr-rw-t{font-size:23px!important}}'
].join('');
if (!document.getElementById('mr-rw-css')) { var rwst = document.createElement('style'); rwst.id = 'mr-rw-css'; rwst.textContent = RWCSS; document.head.appendChild(rwst); }
function render() {
  var roots = document.querySelectorAll('.mr-root');
  for (var i = 0; i < roots.length; i++) {
    if (roots[i].getAttribute('data-mr') === '7') continue;
    roots[i].innerHTML = H.split('%%REV%%').join(reviewsHTML()); roots[i].setAttribute('data-mr', '7');
    rwInit(roots[i]);
  }
  mark();
}
document.addEventListener('click', function (e) {
  var t = e.target && e.target.closest ? e.target : null; if (!t) return;
  var pk = t.closest('[data-mr-pack]');
  if (pk) { e.preventDefault(); choose(pk.getAttribute('data-mr-pack')); setTimeout(goCart, 150); return; }
  var c = t.closest('[data-mr-cart]');
  if (c) { goCart(e); }
});
document.addEventListener('change', function (e) { if (e.target && e.target.matches && e.target.matches('select.js-variation-option, select[name="variation[0]"]')) setTimeout(mark, 50); });
var bar = document.createElement('div');
bar.className = 'mr-bar';
bar.innerHTML = '<div><b>Pack x10 · $57.900</b><span>Parches + manual de regalo desde el Pack x20</span></div><button type="button" data-mr-cart="1">Comprar</button>';
document.body.appendChild(bar);
function upd() {
  var b = cartBtn(); if (!b) return;
  var r = b.getBoundingClientRect();
  if (r.bottom < 0) bar.classList.add('mr-on'); else bar.classList.remove('mr-on');
}
window.addEventListener('scroll', upd, { passive: true });
window.__mrRun = render;
render();
document.addEventListener('DOMContentLoaded', render);
setTimeout(render, 600); setTimeout(render, 1600); setTimeout(render, 3500);
})();