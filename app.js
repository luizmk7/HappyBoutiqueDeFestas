const C=window.rentalConfig,$=s=>document.querySelector(s),money=n=>'Sob consulta',esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fallbackUrls={
  paineis:'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85',
  mesas:'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=85',
  bandejas:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85',
  estantes:'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=800&q=85',
  rusticos:'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=85',
  infantil:'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=85',
  temas:'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=85',
  herois:'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=800&q=85'
};
const cart=new Map();let category='Todos',favoritesOnly=false,favorites=new Set();try{const data=JSON.parse(localStorage.getItem('happy-favorites')||'[]');if(Array.isArray(data))favorites=new Set(data);}catch{}
const today=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
function rentalDays(){const start=$('#start').value,end=$('#end').value;if(!start||!end)return 1;return Math.max(1,Math.round((Date.parse(end+'T12:00:00Z')-Date.parse(start+'T12:00:00Z'))/86400000));}
function calc(){return [...cart].reduce((t,[id,n])=>t+C.products.find(p=>p.id===id).price*n,0)*rentalDays();}
function toast(text){$('#toast').innerHTML=`<span>${esc(text)}</span>`;$('#toast').classList.add('visible');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('#toast').classList.remove('visible'),1900);}
const isDesktop=()=>window.innerWidth>760;
const desktopTopics=[
  {key:'todos',title:'Todos',match:()=>true},
  {key:'paineis',title:'Painéis',match:p=>p.category==='Painéis'},
  {key:'moveis',title:'Móveis',match:p=>p.category==='Móveis'},
  {key:'mesa',title:'Mesa e detalhes',match:p=>p.category==='Mesa & detalhes'},
  {key:'infantis',title:'Temas infantis',match:p=>p.category==='Temas infantis'}
];
function cardHtml(p){
  const qty=cart.get(p.id)||0,inCart=qty>0,fb=fallbackUrls[p.id]||'';
  return `<article class="card ${inCart?'in-cart-active':''}"><div class="card-media-wrap"><button class="card-photo" data-detail="${p.id}" aria-label="Ver ${esc(p.name)}"><img src="assets/${p.id}.jpg?v=2026_real" onerror="this.onerror=null;if('${fb}')this.src='${fb}';" alt="${esc(p.name)} — acervo Happy" width="500" height="400" loading="lazy" referrerpolicy="no-referrer"></button>${inCart?`<span class="card-qty-badge" aria-label="${qty} no orçamento"><strong>${qty}</strong> no orçamento</span>`:''}<button class="heart ${favorites.has(p.id)?'active':''}" data-favorite="${p.id}" aria-label="Favoritar ${esc(p.name)}" aria-pressed="${favorites.has(p.id)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></button></div><div class="card-top"><p class="category">${esc(p.category)}</p></div><div class="card-body"><h3><button data-detail="${p.id}">${esc(p.name)}</button></h3><p class="description"><span class="desc-text">${esc(p.description)}</span><button type="button" class="learn-more" data-detail="${p.id}">Saiba mais</button></p><div class="card-action-row"><div class="price"><strong>${money(p.price)}</strong></div>${inCart?`<div class="qty-stepper" role="group" aria-label="Quantidade de ${esc(p.name)}"><button type="button" class="stepper-btn minus" data-quantity="${p.id}" data-delta="-1" aria-label="Diminuir ${esc(p.name)}">−</button><div class="stepper-display"><span class="stepper-num">${qty}</span></div><button type="button" class="stepper-btn plus" data-quantity="${p.id}" data-delta="1" aria-label="Aumentar ${esc(p.name)}">+</button></div>`:`<button class="add" data-add="${p.id}" aria-label="Incluir ${esc(p.name)} na minha festa"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg><span>Incluir<span class="add-rest"> na minha festa</span></span></button>`}</div></div></article>`;
}
function initDesktopCarousels(){
  const tracks=document.querySelectorAll('.topic-carousel-track');
  tracks.forEach(track=>{
    const update=()=>{
      const prev=document.querySelector(`[data-carousel-prev="${track.id}"]`);
      const next=document.querySelector(`[data-carousel-next="${track.id}"]`);
      if(!prev||!next)return;
      const atStart=track.scrollLeft<=6;
      const atEnd=Math.ceil(track.scrollLeft+track.clientWidth)>=track.scrollWidth-6;
      prev.disabled=atStart;
      next.disabled=atEnd;
    };
    track.removeEventListener('scroll',track._updateArrows);
    track._updateArrows=update;
    track.addEventListener('scroll',update,{passive:true});
    update();
    setTimeout(update,120);
  });
}
function render(){
  const term=$('#search').value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const list=C.products.filter(p=>(category==='Todos'||category===p.category)&&(!favoritesOnly||favorites.has(p.id))&&(p.name+' '+p.category).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(term));
  $('#categories').innerHTML=['Todos',...new Set(C.products.map(p=>p.category))].map(c=>`<button data-category="${esc(c)}" class="${category===c?'active':''}" aria-pressed="${category===c}">${esc(c)}</button>`).join('');
  $('#result-count').textContent=`${favoritesOnly?'Seus favoritos · ':''}${list.length} artigos`;

  const grid=$('#grid');
  if(isDesktop()){
    grid.classList.add('desktop-carousels');
    const scrollMap={};
    document.querySelectorAll('.topic-carousel-track').forEach(t=>{scrollMap[t.id]=t.scrollLeft;});
    let html='';
    let totalItems=0;
    desktopTopics.forEach(topic=>{
      const items=C.products.filter(p=>topic.match(p)&&(!favoritesOnly||favorites.has(p.id))&&(p.name+' '+p.category).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(term));
      if(items.length>0){
        totalItems+=items.length;
        html+=`<section class="topic-row" id="row-${topic.key}" aria-labelledby="heading-${topic.key}">
          <div class="topic-header">
            <div class="topic-title-wrap">
              <h3 class="topic-title" id="heading-${topic.key}">${esc(topic.title)}</h3>
              <span class="topic-count">${items.length} ${items.length===1?'artigo':'artigos'}</span>
            </div>
            <div class="topic-nav-btns" aria-label="Navegar no carrossel de ${esc(topic.title)}">
              <button type="button" class="carousel-arrow prev" data-carousel-prev="track-${topic.key}" aria-label="Voltar no carrossel de ${esc(topic.title)}">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button type="button" class="carousel-arrow next" data-carousel-next="track-${topic.key}" aria-label="Avançar no carrossel de ${esc(topic.title)}">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>
          <div class="topic-carousel-track" id="track-${topic.key}" role="region" aria-label="Carrossel horizontal de ${esc(topic.title)}">
            ${items.map(cardHtml).join('')}
          </div>
        </section>`;
      }
    });
    grid.innerHTML=html;
    $('#empty').hidden=totalItems>0;
    Object.entries(scrollMap).forEach(([id,pos])=>{
      const t=document.getElementById(id);
      if(t&&pos>0)t.scrollLeft=pos;
    });
    initDesktopCarousels();
  } else {
    grid.classList.remove('desktop-carousels');
    grid.innerHTML=list.map(cardHtml).join('');
    $('#empty').hidden=!!list.length;
  }
  $('#favorites').setAttribute('aria-pressed',favoritesOnly);
  updateCart();
}
function updateCart(){const count=[...cart.values()].reduce((a,b)=>a+b,0);$('#count').textContent=count;const fl=$('#floating');if(fl){fl.hidden=!count;if(count){fl.classList.add('visible');const fit=$('#floating-items-text');if(fit)fit.innerHTML=`<b id="floating-count">${count}</b> ${count===1?'item no orçamento':'itens no orçamento'}`;}else{fl.classList.remove('visible');}}$('#floating-total').textContent=money(calc());$('#days').textContent=`${rentalDays()} diária${rentalDays()>1?'s':''} estimada${rentalDays()>1?'s':''}`;$('#total').textContent=money(calc());$('#preview').disabled=!count;$('#cart-items').innerHTML=[...cart].map(([id,n])=>{const p=C.products.find(p=>p.id===id),fb=fallbackUrls[p.id]||'';return `<div class="cart-row"><div class="cart-item-info-wrap"><button type="button" class="cart-item-thumb-card" data-detail="${p.id}" aria-label="Ver detalhes de ${esc(p.name)}"><img src="assets/${p.id}.jpg?v=2026_real" onerror="this.onerror=null;if('${fb}')this.src='${fb}';" alt="${esc(p.name)}" width="64" height="64" loading="lazy" referrerpolicy="no-referrer"></button><div class="cart-item-text"><span class="cart-item-cat">${esc(p.category)}</span><strong class="cart-item-title">${esc(p.name)}</strong><small class="cart-item-price">${money(p.price)}</small></div></div><div class="quantity" role="group" aria-label="Quantidade de ${esc(p.name)}"><button type="button" data-quantity="${id}" data-delta="-1" aria-label="Diminuir ${esc(p.name)}">−</button><span aria-label="Quantidade">${n}</span><button type="button" data-quantity="${id}" data-delta="1" aria-label="Aumentar ${esc(p.name)}">+</button></div></div>`;}).join('')||'<p class="note">Seu orçamento está vazio. Adicione artigos do catálogo para começar.</p>';}
function openCart(){$('#start').min=today();$('#end').min=$('#start').value||today();updateCart();$('#cart').showModal();}
function validDates(){const start=$('#start'),end=$('#end');start.setCustomValidity(start.value&&start.value<today()?'Escolha uma data a partir de hoje.':'');end.min=start.value||today();end.setCustomValidity(end.value&&start.value&&end.value<start.value?'A devolução deve ser no mesmo dia ou depois do início.':'');updateCart();}
function quote(){const date=s=>s.split('-').reverse().join('/');return `${C.demo?'[ORÇAMENTO DEMONSTRATIVO]\n\n':''}Olá, ${C.name}! Gostaria de um orçamento para minha festa.\n\nNome: ${$('#name').value.trim()}\nEvento: ${$('#event').value}\nLocal: ${$('#location').value.trim()}\nPeríodo: ${date($('#start').value)} a ${date($('#end').value)}\nLogística: ${$('#delivery').value}\n${$('#guests').value?'Convidados: '+$('#guests').value+'\n':''}\nArtigos:\n${[...cart].map(([id,n])=>{const p=C.products.find(p=>p.id===id);return `• ${n} × ${p.name}`;}).join('\n')}\n\nPeríodo estimado: ${rentalDays()} diária(s)\nValor: ${money(calc())}\nEntrega, montagem e condições a combinar.\n${$('#notes').value.trim()?'\nObservações: '+$('#notes').value.trim()+'\n':''}\nPodem confirmar a disponibilidade, o valor final e as condições de locação?`;}
let currentDetailId=null;
function renderDetailModal(id){
  const p=C.products.find(p=>p.id===id);
  if(!p)return;
  currentDetailId=id;
  const qty=cart.get(p.id)||0, inCart=qty>0;
  const totalItems=[...cart.values()].reduce((a,b)=>a+b,0);
  $('#detail-content').innerHTML=`
    <div class="detail-media-box">
      <img class="detail-photo" src="assets/${p.id}.jpg?v=2026_real" onerror="this.onerror=null;if(fallbackUrls['${p.id}'])this.src=fallbackUrls['${p.id}'];" alt="${esc(p.name)} — acervo Happy" width="600" height="400" referrerpolicy="no-referrer">
      ${inCart?`<span class="detail-photo-badge" aria-label="${qty} no orçamento">✓ ${qty} no orçamento</span>`:''}
    </div>
    <div class="detail-info-block">
      <p class="eyebrow">${esc(p.category)}</p>
      <h2>${esc(p.name)}</h2>
      <p class="detail-desc">${esc(p.detail)}</p>
      <div class="detail-pricing-row">
        <span class="detail-pricing-lbl">Diária estimada</span>
        <strong class="detail-pricing-val">${money(p.price)}</strong>
      </div>
      <div class="detail-action-container">
        ${inCart?`
          <div class="detail-in-cart-panel" role="region" aria-label="Controle de quantidade no orçamento">
            <div class="detail-in-cart-status">
              <span class="status-check-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              <div class="status-text-wrap">
                <strong>No seu orçamento</strong>
                <span>${qty} ${qty===1?'artigo selecionado':'artigos selecionados'}</span>
              </div>
            </div>
            <div class="detail-qty-stepper" role="group" aria-label="Quantidade de ${esc(p.name)}">
              <button type="button" class="detail-stepper-btn minus" data-quantity="${p.id}" data-delta="-1" aria-label="Remover 1 ${esc(p.name)}">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14"/></svg>
              </button>
              <div class="detail-stepper-display">
                <strong class="detail-stepper-num">${qty}</strong>
                <span class="detail-stepper-unit">${qty===1?'unidade':'unidades'}</span>
              </div>
              <button type="button" class="detail-stepper-btn plus" data-quantity="${p.id}" data-delta="1" aria-label="Adicionar mais 1 ${esc(p.name)}">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
              </button>
            </div>
          </div>
          <button type="button" class="detail-cart-link" data-open-cart="true">Ver orçamento completo (${totalItems} ${totalItems===1?'item':'itens'}) →</button>
        `:`
          <button class="primary wide detail-add-btn" data-add="${p.id}" aria-label="Incluir ${esc(p.name)} na minha festa">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            <span>Incluir na minha festa</span>
          </button>
        `}
      </div>
    </div>
  `;
}
document.addEventListener('click',e=>{
  const b=e.target.closest('button');
  if(!b)return;
  if(b.dataset.close){$('#'+b.dataset.close).close();return;}
  if(b.dataset.openCart){$('#detail').close();currentDetailId=null;openCart();return;}
  if(b.dataset.carouselPrev){
    const track=$('#'+b.dataset.carouselPrev);
    if(track){
      const amt=Math.max(290,track.clientWidth*0.75);
      track.scrollBy({left:-amt,behavior:'smooth'});
    }
    return;
  }
  if(b.dataset.carouselNext){
    const track=$('#'+b.dataset.carouselNext);
    if(track){
      const amt=Math.max(290,track.clientWidth*0.75);
      track.scrollBy({left:amt,behavior:'smooth'});
    }
    return;
  }
  if(b.dataset.category){
    category=b.dataset.category;
    if(isDesktop()){
      const map={'Todos':'todos','Painéis':'paineis','Móveis':'moveis','Mesa & detalhes':'mesa','Temas infantis':'infantis'};
      const targetKey=map[category];
      const targetEl=targetKey?$('#row-'+targetKey):null;
      if(targetEl){
        document.querySelectorAll('#categories button').forEach(btn=>{
          const active=btn.dataset.category===category;
          btn.classList.toggle('active',active);
          btn.setAttribute('aria-pressed',active?'true':'false');
        });
        targetEl.scrollIntoView({behavior:'smooth',block:'start'});
        return;
      }
    }
    render();
    return;
  }
  if(b.dataset.add){const id=b.dataset.add;cart.set(id,(cart.get(id)||0)+1);render();if($('#detail').open&&currentDetailId===id){renderDetailModal(id);}toast('Artigo adicionado ao orçamento.');return;}
  if(b.dataset.quantity){const id=b.dataset.quantity,n=cart.get(id)+Number(b.dataset.delta);if(n<=0)cart.delete(id);else cart.set(id,n);render();if($('#detail').open&&currentDetailId===id){renderDetailModal(id);}return;}
  if(b.dataset.favorite){const id=b.dataset.favorite;favorites.has(id)?favorites.delete(id):favorites.add(id);try{localStorage.setItem('happy-favorites',JSON.stringify([...favorites]));}catch{}render();return;}
  if(b.dataset.detail){if($('#cart').open)$('#cart').close();renderDetailModal(b.dataset.detail);$('#detail').showModal();return;}
});
let lastIsDesktop=isDesktop();
window.addEventListener('resize',()=>{
  const current=isDesktop();
  if(current!==lastIsDesktop){
    lastIsDesktop=current;
    render();
  }
},{passive:true});
$('#detail').addEventListener('close',()=>{currentDetailId=null;});
$('#open-cart').onclick=openCart;$('#floating').onclick=openCart;$('#search').oninput=render;$('#favorites').onclick=()=>{favoritesOnly=!favoritesOnly;render();$('#catalogo').scrollIntoView();};$('#reset').onclick=()=>{category='Todos';favoritesOnly=false;$('#search').value='';render();};$('#start').onchange=validDates;$('#end').onchange=validDates;
for(const id of ['name','location'])$('#'+id).oninput=()=>$('#'+id).setCustomValidity('');
$('#quote-form').onsubmit=e=>{e.preventDefault();validDates();for(const id of ['name','location'])$('#'+id).setCustomValidity($('#'+id).value.trim()?'':'Preencha este campo.');if(!cart.size||!$('#quote-form').reportValidity())return;$('#message-text').textContent=quote();const configured=/^\d{10,15}$/.test(C.whatsapp);$('#send').hidden=!configured;$('#contact-note').textContent=configured?'Revise a mensagem antes de enviá-la. A reserva depende de confirmação.':'WhatsApp da locadora ainda não configurado. Você pode copiar a solicitação abaixo.';$('#message').showModal();};
$('#send').onclick=()=>{if(/^\d{10,15}$/.test(C.whatsapp))window.open('https://wa.me/'+C.whatsapp+'?text='+encodeURIComponent($('#message-text').textContent),'_blank','noopener,noreferrer');};
$('#copy').onclick=async()=>{try{await navigator.clipboard.writeText($('#message-text').textContent);$('#copy').textContent='Solicitação copiada ✓';setTimeout(()=>$('#copy').textContent='Copiar solicitação',2500);}catch{const r=document.createRange();r.selectNodeContents($('#message-text'));const s=window.getSelection();s.removeAllRanges();s.addRange(r);$('#contact-note').textContent='Texto selecionado. Use Copiar no seu navegador.';}};

function initStepsCarousel() {
  const carousel = $('#steps-carousel');
  const dots = Array.from(document.querySelectorAll('.step-dot'));
  const cards = carousel ? Array.from(carousel.querySelectorAll('.step-card')) : [];
  if (!carousel || !cards.length) return;

  let current = 0;
  let timer = null;
  let isHovered = false;

  function updateActiveState(idx) {
    current = idx;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
      dot.setAttribute('aria-current', i === current ? 'true' : 'false');
    });
  }

  function goToStep(index, smooth = true) {
    const nextIdx = (index + cards.length) % cards.length;
    const target = cards[nextIdx];
    if (target) {
      const scrollPos = target.offsetLeft - carousel.offsetLeft;
      carousel.scrollTo({
        left: scrollPos,
        behavior: smooth ? 'smooth' : 'auto'
      });
    }
    updateActiveState(nextIdx);
  }

  function startAutoPlay() {
    stopAutoPlay();
    timer = setInterval(() => {
      if (!isHovered) {
        goToStep(current + 1);
      }
    }, 3200);
  }

  function stopAutoPlay() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  let scrollTimeout;
  carousel.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const scrollPos = carousel.scrollLeft;
      let closest = 0;
      let minDiff = Infinity;
      cards.forEach((card, i) => {
        const pos = card.offsetLeft - carousel.offsetLeft;
        const diff = Math.abs(pos - scrollPos);
        if (diff < minDiff) {
          minDiff = diff;
          closest = i;
        }
      });
      if (closest !== current) {
        updateActiveState(closest);
      }
    }, 60);
  }, { passive: true });

  carousel.addEventListener('mouseenter', () => { isHovered = true; });
  carousel.addEventListener('mouseleave', () => { isHovered = false; });
  carousel.addEventListener('touchstart', () => { isHovered = true; }, { passive: true });
  carousel.addEventListener('touchend', () => {
    setTimeout(() => { isHovered = false; }, 1500);
  }, { passive: true });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      goToStep(idx);
      startAutoPlay();
    });
  });

  startAutoPlay();
}

render();
initStepsCarousel();
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced && 'IntersectionObserver' in window){const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');obs.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.info,.visit,.section-heading,.steps-container').forEach(el=>{el.classList.add('reveal');obs.observe(el)});}
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}}));
