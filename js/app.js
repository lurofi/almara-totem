/* ═══════════════════════════════════════════════════════════
   ALMARA SÃO MANOEL · totem touch
   Conteúdo integralmente extraído do Book impresso, jul/2026.
   ═══════════════════════════════════════════════════════════ */
(function(){
'use strict';

const $  = (s,r)=> (r||document).querySelector(s);
const $$ = (s,r)=> Array.prototype.slice.call((r||document).querySelectorAll(s));
const IMG = n => 'img/'+n+'.jpg';
const THU = n => 'thumb/'+n+'.jpg';

/* ─────────────────────────────────────────────────────────
   1 · CONTEÚDO
   ───────────────────────────────────────────────────────── */

const ATRAIR = ['rio-fim-de-tarde','agua-estar','aba-aerea','rdf-borda-infinita','fechamento','par-tenis'];

const ATRAIR_LINHAS = [
  'Existem histórias que não começam em um endereço.',
  'Elas estão na família que se reúne. Na casa que recebe.',
  'Porque morar bem não é apenas chegar a algum lugar.',
  'Algumas histórias não cabem em qualquer endereço.'
];

const MANIFESTO = [
  'Existem histórias que não começam em um endereço.\nComeçam no tempo. No trabalho de muitos anos.',
  'Carregam escolhas. Escolhas que constroem, que sustentam,\nque revelam, aos poucos, o que realmente importa.',
  'Porque morar bem não é apenas chegar a algum lugar.\nÉ reconhecer quando um lugar corresponde ao que foi vivido até aqui.',
  'Ao que se construiu. Ao que se deseja preservar.\nAo que ainda está por vir.',
  'Algumas histórias não cabem em qualquer endereço.\nElas pedem um lugar à altura.'
];

const LUGAR = [
  { img:'sorriso-aerea',
    caps:['Sorriso amadureceu.','O morar também.'],
    copy:['Construída por trabalho, produção e visão de futuro, Sorriso alcançou uma nova dimensão.',
          'O Almara nasce desse momento: para quem já reconhece o valor de escolher bem e procura, dentro da própria cidade, uma forma mais completa de morar.'] },

  { img:'agua-teal',
    caps:['Um projeto nasce','de uma'], script:'visão.',
    copy:['À frente da Epicentro Empreendimentos, Thiago Alves Silva e Osmar Mello reúnem experiências construídas em diferentes setores da economia de Sorriso e do Centro-Oeste.',
          'Engenharia, energia, conectividade e agronegócio formam uma experiência multissetorial que amplia a leitura sobre a cidade e a região.'],
    faces:[['thiago','Thiago Alves Silva'],['osmar','Osmar Mello']] },

  { img:'inspiracao',
    caps:['Inspirado no mundo.','Feito para'], script:'Sorriso.',
    copy:['Xangri-Lá, Miami e endereços argentinos compartilham uma ideia: a água, a arquitetura e a paisagem podem se organizar para que a casa tenha uma relação contínua com o seu entorno.',
          'No Almara, esse repertório ganha uma interpretação própria, desenhada para Sorriso e para a vida cotidiana de quem escolhe morar aqui.'] },

  { img:'referencias',
    caps:['Quatro referências'], script:'brasileiras.',
    copy:['Os nomes dos lagos foram escolhidos a partir de espelhos d\u2019água que se tornaram parte da identidade de diferentes cidades brasileiras.'],
    refs:[['Pampulha','A água integrada à arquitetura e à identidade de Belo Horizonte.'],
          ['Paranoá','A paisagem que acompanha a escala e os eixos de Brasília.'],
          ['Rodrigo de Freitas','A convivência entre cidade, água e movimento no Rio de Janeiro.'],
          ['Abaeté','A força da paisagem natural e das águas da Bahia.']] },

  { img:'caminho-lagos',
    caps:['A paisagem','começa no'], script:'desenho.',
    copy:['Arquitetura e paisagismo foram pensados para criar unidade sem apagar a individualidade de cada residência.',
          'O resultado é um lugar em que a arquitetura não se impõe à paisagem. Ela passa a fazer parte dela.'],
    faces:[['time-1','Maristela Fedrizzi · urbanismo, arquitetônico e interiores'],
           ['time-2','Ronaldo Moraes · paisagismo'],
           ['time-3','Eduarda Lucini · infraestrutura']] }
];

/* Pontos de toque no masterplan. Obtidos por segmentação de cor da lâmina
   d'água seguida de transformada de distância — cada ponto é o lugar mais
   interno do lago, e não o centroide (que num lago em arco cai em terra).
   Coordenadas em fração da largura/altura do render. */
const ORLAS = [
  { id:'abaete', letra:'F', nome:'Abaeté', area:'30.300,63 m²',
    hot:{x:0.5639,y:0.4292},
    ref:'A força da paisagem natural e das águas da Bahia.',
    titulo:'Quadras de areia, praça de eventos e contemplação',
    itens:['4 quadras de areia','Gourmet Lago Abaeté','Playground Lago Abaeté','Praça de eventos','Estar contemplação','Guarda-barcos'],
    fotos:['aba-aerea','aba-orla','aba-deck','aba-gourmet','aba-praca','aba-convivencia'] },

  { id:'rdf', letra:'E', nome:'Rodrigo de Freitas', area:'23.123,18 m²',
    hot:{x:0.8005,y:0.6596},
    ref:'A convivência entre cidade, água e movimento no Rio de Janeiro.',
    titulo:'Piscinas, jogos, bar e academia',
    itens:['Piscina semi-olímpica','Piscina orgânica com borda infinita','Bar','Sala de poker','Sala de jogos','Banheiros e vestiário','Academia','Praça kids'],
    fotos:['rdf-aerea','rdf-borda-infinita','rdf-ilha','rdf-lago','rdf-poker','rdf-jogos','rdf-aquario',
           'rdf-bar-2','rdf-bar','rdf-cozinha','rdf-lavanderia','rdf-academia-2','rdf-academia','rdf-kids-2','rdf-kids'] },

  { id:'paranoa', letra:'D', nome:'Paranoá', area:'24.972,31 m²',
    hot:{x:0.8282,y:0.8619},
    ref:'A paisagem que acompanha a escala e os eixos de Brasília.',
    titulo:'Tênis, gourmet e estar à beira da água',
    itens:['Quadras de tênis','Gourmet Lago Paranoá','Playground Lago Paranoá','Pergolados e estar'],
    fotos:['par-aerea','par-gourmet','par-deck','par-tenis'] },

  { id:'pampulha', letra:'C', nome:'Pampulha', area:'6.595,01 m²',
    hot:{x:0.3911,y:0.8259},
    ref:'A água integrada à arquitetura e à identidade de Belo Horizonte.',
    titulo:'Campo, quadra e mini golf',
    itens:['Gourmet Lago Pampulha','Mini golf','Quadra poliesportiva','Futmesa','Quadra de futebol','Bancos de arquibancada com pergolados'],
    fotos:['pam-campo','pam-orla','pam-gourmet','contemplacao'] }
];

const LOTE_STEPS = [
  ['Rua',    'A chegada acontece pela frente do lote, com paisagismo e arquitetura que comunicam que o alto padrão começa antes da casa.'],
  ['Casa',   'A residência ocupa a frente do terreno. Terrenos de 620 a 2.900 m² permitem implantações generosas, sem disputa por espaço.'],
  ['Jardim', 'O recuo de fundos vira jardim. É ele que faz a transição entre a arquitetura e a paisagem — e que garante privacidade entre vizinhos.'],
  ['Deck',   'O deck é a extensão da sala para fora. É onde a casa passa a receber, e onde a rotina encontra a água.'],
  ['Lago',   'O fundo do lote encosta no lago. Não é uma vista emprestada: é uma condição de moradia presente na própria implantação.']
];

const EXTERNOS = [
  { img:'ce-salao', titulo:'Centro de eventos',
    itens:['Espaço climatizado com mais de 2.000 m²','Estacionamento com porte-cochère','Docas de carga e descarga','Três camarins com vestiário','Cozinha industrial','Deck externo com vista para o lago'],
    fotos:['ce-salao','ce-externo','ce-porte','ce-deck','ce-hall'] },
  { img:'marina', titulo:'Marina',
    itens:['Rampa de acesso ao rio Teles Pires','Deck','Restaurante flutuante'],
    fotos:['marina'] }
];

const RAIL = [
  ['lugar','O lugar'], ['plano','A implantação'], ['orla','As orlas'],
  ['lote','O lote'], ['externos','Externos'], ['contato','Contato']
];

/* ─────────────────────────────────────────────────────────
   2 · ROTEADOR DE TELAS
   ───────────────────────────────────────────────────────── */

let atual = 'attract';

function ir(nome, opt){
  if(nome === atual && nome !== 'orla') return;
  const de = $('#s-'+atual), para = $('#s-'+nome);
  if(!para) return;
  if(de) de.classList.remove('is-on');
  para.classList.add('is-on');
  atual = nome;
  fecharTudo();
  marcarRail(nome);

  if(nome === 'attract'){ atrair.start(); } else { atrair.stop(); }
  if(nome === 'abertura'){ abertura.start(); } else { abertura.stop(); }
  if(nome === 'plano') plano.ajustar(true);
  if(nome === 'orla') orla.mostrar(opt && opt.orla != null ? opt.orla : orla.i);
  if(nome === 'lugar') lugar.ir(0);
  if(nome === 'lote') lote.reset();

  sessao.reiniciar();
}

function marcarRail(nome){
  $$('.rail button[data-nav]').forEach(b=>{
    b.classList.toggle('on', b.dataset.nav === nome);
  });
}

function montarRails(){
  ['#rail','#rail2','#rail3','#rail4','#rail5'].forEach(sel=>{
    const r = $(sel); if(!r) return;
    r.innerHTML = RAIL.map(([id,rot])=>`<button data-nav="${id}">${rot}</button>`).join('');
  });
  $$('.rail button[data-nav]').forEach(b=>{
    b.addEventListener('click', ()=> ir(b.dataset.nav));
  });
}

/* ─────────────────────────────────────────────────────────
   3 · MODO ATRAIR
   ───────────────────────────────────────────────────────── */

const atrair = (function(){
  const bg = $('#attractBg'), linha = $('#attractLine');
  let i = 0, t1 = null, t2 = null, montado = false;

  function montar(){
    if(montado) return;
    bg.innerHTML = ATRAIR.map(n=>`<img src="${IMG(n)}" alt="">`).join('');
    montado = true;
  }
  function passo(){
    const imgs = $$('img', bg);
    const k = i;                       /* fixa o passo: o texto entra depois,
                                          e não pode ler o contador já avançado */
    imgs.forEach((im,j)=> im.classList.toggle('on', j === k % imgs.length));
    linha.classList.remove('on');
    t2 = setTimeout(()=>{
      linha.textContent = ATRAIR_LINHAS[k % ATRAIR_LINHAS.length];
      linha.classList.add('on');
    }, 900);
    i++;
    t1 = setTimeout(passo, 9000);
  }
  return {
    start(){ montar(); clearTimeout(t1); clearTimeout(t2); i = 0; passo(); },
    stop(){ clearTimeout(t1); clearTimeout(t2); }
  };
})();

$('#s-attract').addEventListener('click', ()=> ir('abertura'));

/* ─────────────────────────────────────────────────────────
   4 · ABERTURA
   ───────────────────────────────────────────────────────── */

const abertura = (function(){
  const el = $('#abText'), ticks = $('#abTicks');
  let i = 0, t = null, rodando = false;

  ticks.innerHTML = MANIFESTO.map(()=>'<i></i>').join('');

  function pintar(){
    el.classList.remove('on');
    setTimeout(()=>{
      el.textContent = MANIFESTO[i];
      el.classList.add('on');
      $$('i', ticks).forEach((n,k)=> n.classList.toggle('on', k <= i));
    }, 520);
  }
  function avancar(){
    if(!rodando) return;
    if(i >= MANIFESTO.length - 1){ ir('plano'); return; }
    i++; pintar(); agendar();
  }
  function agendar(){ clearTimeout(t); t = setTimeout(avancar, 6200); }

  return {
    start(){ rodando = true; i = 0; pintar(); agendar(); },
    stop(){ rodando = false; clearTimeout(t); },
    proximo(){ clearTimeout(t); avancar(); }
  };
})();

$('#s-abertura').addEventListener('click', e=>{
  if(e.target.closest('.ab-skip')) return;
  abertura.proximo();
});

/* ─────────────────────────────────────────────────────────
   5 · O LUGAR
   ───────────────────────────────────────────────────────── */

const lugar = (function(){
  const track = $('#lugarTrack'), dots = $('#lugarDots'), pos = $('#lugarPos');
  let i = 0;

  track.innerHTML = LUGAR.map(p=>{
    const caps = (p.caps||[]).map(c=>`<span class="stack-caps">${c}</span>`).join('');
    const scr  = p.script ? `<span class="stack-script">${p.script}</span>` : '';
    const copy = (p.copy||[]).map(c=>`<p class="lugar-copy">${c}</p>`).join('');
    const faces = p.faces ? `<div class="faces">${p.faces.map(([f,n])=>
      `<div class="face"><img src="${THU(f)}" alt="${n}"><span>${n}</span></div>`).join('')}</div>` : '';
    const refs = p.refs ? `<div class="refs">${p.refs.map(([n,d])=>
      `<div class="ref"><b>${n}</b><span>${d}</span></div>`).join('')}</div>` : '';
    return `<div class="lugar-panel">
      <div class="lugar-fig"><img src="${IMG(p.img)}" alt=""></div>
      <div class="lugar-txt"><p class="stack">${caps}${scr}</p>${copy}${faces}${refs}</div>
    </div>`;
  }).join('');

  dots.innerHTML = LUGAR.map(()=>'<i></i>').join('');

  function ir_(n){
    i = Math.max(0, Math.min(LUGAR.length - 1, n));
    track.style.transform = `translateX(${-i * 100}%)`;
    $$('i', dots).forEach((d,k)=> d.classList.toggle('on', k === i));
    pos.textContent = i + 1;
  }
  gesto(track.parentElement, {
    esquerda: ()=> ir_(i + 1),
    direita:  ()=> ir_(i - 1)
  });
  $$('i', dots).forEach((d,k)=> d.addEventListener('click', ()=> ir_(k)));

  return { ir: ir_ };
})();

/* ─────────────────────────────────────────────────────────
   6 · MASTERPLAN INTERATIVO
   ───────────────────────────────────────────────────────── */

const plano = (function(){
  const stage = $('#planoStage'), canvas = $('#planoCanvas'),
        img = $('#planoImg'), capa = $('#planoHots'), hint = $('#planoHint');

  let iw = 3027, ih = 1137;         // dimensões naturais do render
  let s = 1, tx = 0, ty = 0, s0 = 1;
  const pts = new Map();
  let arrastou = false, pinca = 0;

  img.addEventListener('load', ()=>{
    iw = img.naturalWidth || iw;
    ih = img.naturalHeight || ih;
    canvas.style.width = iw + 'px';
    canvas.style.height = ih + 'px';
    img.style.width = iw + 'px';
    ajustar(true);
  });

  /* pontos de toque — camada fixa, tamanho constante em qualquer zoom */
  capa.innerHTML = ORLAS.map((o,k)=>
    `<div class="hot" data-k="${k}"><span class="hot-dot"></span><span class="hot-lbl">${o.nome}</span></div>`
  ).join('');
  $$('.hot', capa).forEach(h=>{
    h.addEventListener('click', e=>{
      e.stopPropagation();
      if(arrastou) return;
      ir('orla', { orla: +h.dataset.k });
    });
  });

  function limites(){
    const W = stage.clientWidth, H = stage.clientHeight;
    const w = iw * s, h = ih * s;
    const mx = w > W ? [W - w, 0] : [(W - w) / 2, (W - w) / 2];
    const my = h > H ? [H - h, 0] : [(H - h) / 2, (H - h) / 2];
    tx = Math.min(mx[1], Math.max(mx[0], tx));
    ty = Math.min(my[1], Math.max(my[0], ty));
  }

  function pintar(){
    limites();
    canvas.style.transform = `translate(${tx}px,${ty}px) scale(${s})`;
    $$('.hot', capa).forEach(h=>{
      const o = ORLAS[+h.dataset.k];
      h.style.left = (tx + o.hot.x * iw * s) + 'px';
      h.style.top  = (ty + o.hot.y * ih * s) + 'px';
    });
  }

  function ajustar(reset){
    const W = stage.clientWidth, H = stage.clientHeight;
    if(!W || !H) return;
    s0 = Math.min(W / iw, H / ih);
    if(reset){ s = s0; tx = (W - iw * s) / 2; ty = (H - ih * s) / 2; }
    pintar();
  }

  function zoom(fator, cx, cy){
    const W = stage.clientWidth, H = stage.clientHeight;
    if(cx == null){ cx = W / 2; cy = H / 2; }
    /* teto duplo: 4,5× o enquadramento, mas nunca além de 1,8× a resolução
       real do render — passar disso só entrega borrão. Se o masterplan for
       substituído por um arquivo maior, este limite se abre sozinho. */
    const teto = Math.min(s0 * 4.5, 1.8);
    const novo = Math.max(s0 * 0.98, Math.min(teto, s * fator));
    const r = novo / s;
    tx = cx - (cx - tx) * r;
    ty = cy - (cy - ty) * r;
    s = novo;
    pintar();
  }

  /* gestos */
  stage.addEventListener('pointerdown', e=>{
    /* marcadores e controles tratam o próprio toque — capturar o ponteiro
       aqui faria o navegador engolir o clique deles */
    if(e.target.closest('.hot, .plano-tools')) return;
    stage.setPointerCapture(e.pointerId);
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    arrastou = false;
    if(pts.size === 2) pinca = dist();
    hint.classList.add('off');
  });

  stage.addEventListener('pointermove', e=>{
    if(!pts.has(e.pointerId)) return;
    const p = pts.get(e.pointerId);
    const dx = e.clientX - p.x, dy = e.clientY - p.y;

    if(pts.size === 1){
      if(Math.abs(dx) + Math.abs(dy) > 6) arrastou = true;
      tx += dx; ty += dy;
      p.x = e.clientX; p.y = e.clientY;
      pintar();
    } else if(pts.size === 2){
      p.x = e.clientX; p.y = e.clientY;
      const d = dist();
      if(pinca > 0){
        const c = centro();
        const r = stage.getBoundingClientRect();
        zoom(d / pinca, c.x - r.left, c.y - r.top);
      }
      pinca = d; arrastou = true;
    }
  });

  ['pointerup','pointercancel','pointerleave'].forEach(ev=>{
    stage.addEventListener(ev, e=>{
      pts.delete(e.pointerId);
      if(pts.size < 2) pinca = 0;
      setTimeout(()=>{ if(pts.size === 0) arrastou = false; }, 60);
    });
  });

  function dist(){
    const a = Array.from(pts.values());
    return Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y);
  }
  function centro(){
    const a = Array.from(pts.values());
    return { x:(a[0].x + a[1].x) / 2, y:(a[0].y + a[1].y) / 2 };
  }

  $('#zoomIn').addEventListener('click', ()=> zoom(1.45));
  $('#zoomOut').addEventListener('click', ()=> zoom(1/1.45));
  $('#zoomReset').addEventListener('click', ()=> ajustar(true));

  /* lista lateral de lagos */
  $('#lakeList').innerHTML = ORLAS.map((o,k)=>
    `<li data-k="${k}"><i></i><b>${o.nome}</b><span>${o.area}</span></li>`
  ).join('');
  $$('#lakeList li').forEach(li=>{
    const k = +li.dataset.k;
    li.addEventListener('click', ()=> ir('orla', { orla:k }));
    li.addEventListener('pointerenter', ()=> destaque(k, true));
    li.addEventListener('pointerleave', ()=> destaque(k, false));
  });
  function destaque(k, on){
    const h = $(`.hot[data-k="${k}"]`, capa);
    if(h) h.style.filter = on ? 'drop-shadow(0 0 1.4vh rgba(169,148,95,.95))' : '';
  }

  window.addEventListener('resize', ()=> ajustar(true));
  return { ajustar };
})();

/* ─────────────────────────────────────────────────────────
   7 · ORLAS
   ───────────────────────────────────────────────────────── */

const orla = (function(){
  const heroImg = $('#orlaHeroImg'), cap = $('#orlaCap'), strip = $('#orlaStrip'),
        title = $('#orlaTitle'), ref = $('#orlaRef'), prog = $('#orlaProg'),
        barT = $('#orlaBarTitle'), area = $('#orlaArea'),
        prev = $('#orlaPrev'), next = $('#orlaNext'), mid = $('#orlaMid');
  let i = 0, f = 0;

  function mostrar(k){
    i = (k + ORLAS.length) % ORLAS.length;
    const o = ORLAS[i];
    barT.textContent = 'Orla Lago ' + o.nome;
    area.textContent = o.area;
    ref.textContent = o.ref;
    title.textContent = o.titulo;
    prog.innerHTML = o.itens.map(t=>`<li>${t}</li>`).join('');
    strip.innerHTML = o.fotos.map((n,j)=>
      `<img src="${THU(n)}" data-j="${j}" alt="">`).join('');
    $$('img', strip).forEach(t=> t.addEventListener('click', ()=> foto(+t.dataset.j)));
    const a = ORLAS[(i - 1 + ORLAS.length) % ORLAS.length];
    const b = ORLAS[(i + 1) % ORLAS.length];
    prev.textContent = '‹ orla lago ' + a.nome;
    next.textContent = 'orla lago ' + b.nome + ' ›';
    mid.textContent = o.nome + ' · ' + (i + 1) + ' de ' + ORLAS.length;
    foto(0);
  }

  function foto(j){
    const o = ORLAS[i];
    f = (j + o.fotos.length) % o.fotos.length;
    const nome = o.fotos[f];
    const primeira = !heroImg.getAttribute('src');
    if(primeira){                       /* nada a substituir: entra direto */
      heroImg.src = IMG(nome);
      heroImg.style.opacity = 1;
      cap.textContent = LEGENDAS[nome] || '';
    } else {
      heroImg.style.opacity = 0;
      setTimeout(()=>{
        heroImg.src = IMG(nome);
        heroImg.style.opacity = 1;
        cap.textContent = LEGENDAS[nome] || '';
      }, 180);
    }
    $$('img', strip).forEach((t,k)=> t.classList.toggle('on', k === f));
  }

  prev.addEventListener('click', ()=> mostrar(i - 1));
  next.addEventListener('click', ()=> mostrar(i + 1));
  $('#orlaZoom').addEventListener('click', ()=> lb.abrir(ORLAS[i].fotos, f));
  $('#orlaHero').addEventListener('click', e=>{
    if(e.target.closest('.btn')) return;
    if(deslizouAgora($('#orlaHero'))) return;
    lb.abrir(ORLAS[i].fotos, f);
  });
  gesto($('#orlaHero'), { esquerda:()=> foto(f + 1), direita:()=> foto(f - 1) });

  return { mostrar, get i(){ return i; } };
})();

/* ─────────────────────────────────────────────────────────
   8 · O LOTE — corte esquemático
   ───────────────────────────────────────────────────────── */

const lote = (function(){
  const box = $('#corte');
  const svg = `
  <svg viewBox="0 0 1000 420" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%">
    <defs>
      <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3F7C79"/><stop offset="1" stop-color="#14403F"/>
      </linearGradient>
    </defs>
    <!-- terreno -->
    <path d="M0 300 L1000 300 L1000 420 L0 420 Z" fill="#5E4638"/>
    <!-- lago -->
    <path d="M760 300 Q820 296 1000 300 L1000 420 L760 420 Z" fill="url(#ag)"/>
    <path d="M760 300 Q820 296 1000 300" fill="none" stroke="#A9945F" stroke-width="1.5" opacity=".55"/>
    <!-- rua -->
    <rect x="0" y="300" width="150" height="14" fill="#3A2A22"/>
    <!-- casa -->
    <path d="M210 300 L210 196 L300 150 L390 196 L390 300 Z" fill="#F5EEE3" opacity=".92"/>
    <rect x="252" y="232" width="40" height="68" fill="#4C362D" opacity=".55"/>
    <!-- jardim -->
    <path d="M400 300 q40 -22 80 0" fill="none" stroke="#8FA37C" stroke-width="3" opacity=".7"/>
    <circle cx="440" cy="278" r="16" fill="#6E8760" opacity=".65"/>
    <circle cx="560" cy="284" r="12" fill="#6E8760" opacity=".5"/>
    <!-- deck -->
    <rect x="640" y="292" width="120" height="10" fill="#8B6F52"/>
    <g stroke="#5E4638" stroke-width="1" opacity=".6">
      <line x1="660" y1="292" x2="660" y2="302"/><line x1="690" y1="292" x2="690" y2="302"/>
      <line x1="720" y1="292" x2="720" y2="302"/><line x1="750" y1="292" x2="750" y2="302"/>
    </g>
    <!-- linha de leitura -->
    <line x1="60" y1="352" x2="900" y2="352" stroke="#A9945F" stroke-width="1" opacity=".35"/>
    ${LOTE_STEPS.map((st,k)=>{
      const x = 75 + k * 200;
      return `<g class="step-hit" data-k="${k}">
        <circle cx="${x}" cy="352" r="26" fill="transparent"/>
        <circle class="step-node" cx="${x}" cy="352" r="6" fill="#C9B896"/>
        <text class="step-lbl" x="${x}" y="386" text-anchor="middle">${st[0]}</text>
      </g>`;
    }).join('')}
  </svg>
  <p class="step-desc" id="stepDesc"></p>`;
  box.innerHTML = svg;

  const desc = $('#stepDesc');
  function sel(k){
    $$('.step-hit', box).forEach((g,j)=> g.classList.toggle('on', j === k));
    desc.classList.remove('on');
    setTimeout(()=>{ desc.textContent = LOTE_STEPS[k][1]; desc.classList.add('on'); }, 160);
  }
  $$('.step-hit', box).forEach(g=> g.addEventListener('click', ()=> sel(+g.dataset.k)));

  return { reset(){ sel(4); } };
})();

/* ─────────────────────────────────────────────────────────
   9 · EXTERNOS
   ───────────────────────────────────────────────────────── */

$('#extBody').innerHTML = EXTERNOS.map((e,k)=>`
  <div class="ext-card" data-k="${k}">
    <img src="${IMG(e.img)}" alt="">
    <div class="ext-shade"></div>
    <div class="ext-txt">
      <span class="kicker">externo ao empreendimento</span>
      <h2>${e.titulo}</h2>
      <ul class="ext-list">${e.itens.map(i=>`<li>${i}</li>`).join('')}</ul>
    </div>
  </div>`).join('');
$$('.ext-card').forEach(c=>{
  c.addEventListener('click', ()=> lb.abrir(EXTERNOS[+c.dataset.k].fotos, 0));
});

/* ─────────────────────────────────────────────────────────
   10 · GALERIA EM TELA CHEIA
   ───────────────────────────────────────────────────────── */

const lb = (function(){
  const el = $('#lb'), im = $('#lbImg'), cap = $('#lbCap'), strip = $('#lbStrip');
  let lista = [], i = 0;

  function abrir(fotos, k){
    lista = fotos; i = k || 0;
    strip.innerHTML = lista.map((n,j)=>`<img src="${THU(n)}" data-j="${j}" alt="">`).join('');
    $$('img', strip).forEach(t=> t.addEventListener('click', ()=> pintar(+t.dataset.j)));
    pintar(i);
    el.classList.add('is-on');
    sessao.reiniciar();
  }
  function pintar(k){
    i = (k + lista.length) % lista.length;
    const n = lista[i];
    im.src = IMG(n);
    cap.textContent = LEGENDAS[n] || '';
    $$('img', strip).forEach((t,j)=> t.classList.toggle('on', j === i));
  }
  function fechar(){ el.classList.remove('is-on'); }

  $('.lb-close', el).addEventListener('click', fechar);
  gesto(im, { esquerda:()=> pintar(i + 1), direita:()=> pintar(i - 1) });

  return { abrir, fechar };
})();

/* ─────────────────────────────────────────────────────────
   11 · SOBREPOSIÇÕES
   ───────────────────────────────────────────────────────── */

$$('[data-ovl]').forEach(b=>{
  b.addEventListener('click', ()=>{
    const id = b.dataset.ovl === 'ficha' ? '#ovlFicha' : '#ovlSeguranca';
    $(id).classList.add('is-on');
    sessao.reiniciar();
  });
});
$$('.ovl [data-close]').forEach(b=>{
  b.addEventListener('click', ()=> b.closest('.ovl').classList.remove('is-on'));
});
$$('.ovl').forEach(o=>{
  o.addEventListener('click', e=>{ if(e.target === o) o.classList.remove('is-on'); });
});
function fecharTudo(){
  $$('.ovl').forEach(o=> o.classList.remove('is-on'));
  lb.fechar();
}

/* ─────────────────────────────────────────────────────────
   12 · SESSÃO — inatividade e trava
   ───────────────────────────────────────────────────────── */

const sessao = (function(){
  const aviso = $('#idle'), botao = $('#lock');
  const OCIOSO = 90000, GRACA = 10000;
  let t1 = null, t2 = null, travado = false;

  function reiniciar(){
    clearTimeout(t1); clearTimeout(t2);
    aviso.classList.remove('is-on');
    if(travado || atual === 'attract') return;
    t1 = setTimeout(()=>{
      aviso.classList.add('is-on');
      t2 = setTimeout(()=>{ aviso.classList.remove('is-on'); ir('attract'); }, GRACA);
    }, OCIOSO);
  }
  $('#idleStay').addEventListener('click', e=>{ e.stopPropagation(); reiniciar(); });
  botao.addEventListener('click', e=>{
    e.stopPropagation();
    travado = !travado;
    botao.classList.toggle('on', travado);
    botao.title = travado ? 'Sessão travada — toque para destravar' : 'Travar sessão';
    reiniciar();
  });
  ['pointerdown','wheel','keydown'].forEach(ev=>
    document.addEventListener(ev, reiniciar, { passive:true }));

  return { reiniciar };
})();

/* ─────────────────────────────────────────────────────────
   13 · UTILITÁRIOS
   ───────────────────────────────────────────────────────── */

/* deslize horizontal. Um deslize NÃO pode virar toque: o navegador dispara
   um "click" logo depois do arraste, e sem isto trocar de foto abriria a
   galeria junto. Marcamos o instante do deslize e barramos o clique seguinte. */
function gesto(el, acoes){
  let x0 = 0, y0 = 0, ativo = false;
  el.__deslize = 0;

  el.addEventListener('pointerdown', e=>{ x0 = e.clientX; y0 = e.clientY; ativo = true; });
  el.addEventListener('pointerup', e=>{
    if(!ativo) return; ativo = false;
    const dx = e.clientX - x0, dy = e.clientY - y0;
    if(Math.abs(dx) < 55 || Math.abs(dy) > Math.abs(dx)) return;
    el.__deslize = Date.now();
    (dx < 0 ? acoes.esquerda : acoes.direita)();
  });
  el.addEventListener('pointercancel', ()=>{ ativo = false; });
  el.addEventListener('click', e=>{
    if(deslizouAgora(el)){ e.stopPropagation(); e.preventDefault(); }
  }, true);
}
function deslizouAgora(el){ return Date.now() - (el.__deslize || 0) < 400; }

/* legendas das imagens — geradas na extração do Book */
const LEGENDAS = {
"agua-textura":"Textura de água","agua-teal":"Lâmina d'água","sorriso-aerea":"Sorriso, Mato Grosso",
"thiago":"Thiago Alves Silva","osmar":"Osmar Mello","inspiracao":"Repertório internacional",
"rio-fim-de-tarde":"Perspectiva dos lagos","referencias":"Quatro referências brasileiras",
"time-1":"Maristela Fedrizzi","time-2":"Ronaldo Moraes","time-3":"Eduarda Lucini",
"implantacao-aerea":"Vista aérea da implantação","ficha-capa":"Almara São Manoel",
"chegada":"Chegada e portaria","caminho-lagos":"Caminho entre os lagos",
"caminho-lagos-2":"Caminho entre os lagos","marca-agua":"Almara São Manoel",
"agua-encontros":"A água dá forma aos encontros","rdf-lago":"Orla Lago Rodrigo de Freitas",
"rdf-aerea":"Vista aérea da Orla Lago Rodrigo de Freitas","rdf-ilha":"Piscina orgânica · ilha e spa",
"rdf-borda-infinita":"Piscina orgânica com borda infinita",
"rdf-aquario":"Sala de jogos · aquário com peixes de água doce do Mato Grosso",
"rdf-jogos":"Sala de jogos","rdf-poker":"Sala de poker","rdf-bar":"Salão do bar","rdf-bar-2":"Salão do bar",
"rdf-cozinha":"Cozinha do bar","rdf-lavanderia":"Lavanderia do bar","rdf-academia":"Academia",
"rdf-academia-2":"Academia · equipamentos Technogym","rdf-kids":"Praça kids","rdf-kids-2":"Praça kids",
"agua-estar":"A água acompanha diferentes formas de estar","par-aerea":"Orla Lago Paranoá",
"par-gourmet":"Gourmet da Orla Lago Paranoá","par-deck":"Deck do gourmet da Orla Lago Paranoá",
"par-tenis":"Quadra de tênis de saibro","pam-orla":"Orla Lago Pampulha","pam-campo":"Campo de futebol",
"pam-gourmet":"Gourmet da Orla Lago Pampulha","contemplacao":"Entre o movimento e a contemplação · fotomontagem",
"aba-orla":"Orla Lago Abaeté","aba-deck":"Deck gourmet da Orla Lago Abaeté",
"aba-gourmet":"Gourmet da Orla Lago Abaeté","aba-aerea":"Vista aérea da Orla Lago Abaeté",
"aba-praca":"Praça de eventos","aba-convivencia":"A convivência ganha outra dimensão",
"ce-externo":"Centro de eventos","ce-salao":"Centro de eventos",
"ce-porte":"Porte-cochère do centro de eventos","ce-deck":"Deck do centro de eventos",
"ce-hall":"Hall de entrada","marina":"Marina · rio Teles Pires","fechamento":"À altura da sua história"
};

/* ─────────────────────────────────────────────────────────
   14 · INICIALIZAÇÃO
   ───────────────────────────────────────────────────────── */

montarRails();
$('#qrBox').innerHTML = '<img src="brand/qr.svg" alt="almarasaomanoel.com.br">';
$$('[data-go]').forEach(b=> b.addEventListener('click', e=>{ e.stopPropagation(); ir(b.dataset.go); }));

document.addEventListener('contextmenu', e=> e.preventDefault());
document.addEventListener('dragstart', e=> e.preventDefault());
document.addEventListener('gesturestart', e=> e.preventDefault());

/* modo quiosque: some com o cursor quando só há toque */
if(window.matchMedia('(pointer:coarse)').matches) document.body.classList.add('kiosk');

/* pré-carga discreta das primeiras imagens de cada seção */
['sorriso-aerea','rdf-aerea','aba-aerea','par-aerea','pam-campo','ce-salao','marina','fechamento']
  .forEach(n=>{ const i = new Image(); i.src = IMG(n); });

atrair.start();
sessao.reiniciar();

})();
