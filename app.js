
async function loadData(){
  const local=localStorage.getItem("snd_data");
  if(local){try{return JSON.parse(local)}catch(e){}}
  const r=await fetch("site-data.json?"+Date.now()); return await r.json();
}
function imgOrPlaceholder(src,label){
  if(src) return `<img src="${escapeHtml(src)}" alt="${escapeHtml(label||'Hình ảnh')}">`;
  return `<div style="height:180px;border-radius:11px;background:#eef2f6;display:grid;place-items:center;color:#667085">Chưa có ảnh</div>`;
}
function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function nav(d){return `<header class="site-header"><div class="nav"><a href="index.html"><img class="logo" src="assets/logo.png"></a><div class="navlinks"><a href="index.html">Trang chủ</a><a href="products.html">Sản phẩm</a><a href="colors.html">Bảng màu</a><a href="projects.html">Công trình</a><a href="quote.html">Báo giá</a><a href="contact.html">Liên hệ</a><a href="admin.html">Quản trị</a></div></div></header>`}
function footer(d){return `<footer><div class="wrap"><h3>${escapeHtml(d.brand)}</h3><p>${escapeHtml(d.tagline)} • ${escapeHtml(d.address)}</p>${d.phone?`<p>☎ ${escapeHtml(d.phone)}</p>`:""}</div></footer>`}
