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
  { img:'sorriso-aerea', aba:'Sorriso',
    caps:['Sorriso amadureceu.','O morar também.'],
    copy:['Construída por trabalho, produção e visão de futuro, Sorriso alcançou uma nova dimensão.',
          'O Almara nasce desse momento: para quem já reconhece o valor de escolher bem e procura, dentro da própria cidade, uma forma mais completa de morar.'] },

  { img:'loc-mapa', zoom:true, aba:'Localização',
    caps:['O morar mais'], script:'exclusivo', capsFim:['do Centro-Oeste'],
    copy:['O Almara fica na margem do rio, a poucos minutos do centro de Sorriso — perto do que a cidade oferece, longe do que ela tem de barulho.',
          'Praça das Fontes, Igreja Matriz e a sede da Epicentro Empreendimentos ficam no mesmo eixo de deslocamento.'] },

  { img:'loc-acessos', zoom:true, aba:'Acessos', video:'trajeto', videoRot:'ver o trajeto',
    caps:['Dois acessos','para'], script:'chegar.',
    copy:['O empreendimento é servido por duas rotas independentes, que ligam o Almara à malha urbana de Sorriso por caminhos distintos.',
          'A redundância de acesso preserva a chegada tranquila em qualquer horário e em qualquer condição de tráfego.'],
    refs:[['Acesso 01','Pela MT-560, contornando a área de plantio a oeste.','#E0812B'],
          ['Acesso 02','Pelo eixo urbano a leste, ligando ao centro da cidade.','#2BD46B']] },

  { img:'implantacao-aerea', zoom:true, aba:'Vista aérea',
    caps:['O lugar,','visto de'], script:'cima.',
    copy:['Cinquenta e seis hectares desenhados entre a mata nativa e o rio, com a silhueta de Sorriso no horizonte.',
          'A escala do projeto aparece inteira: as faixas de terrenos, os quatro lagos e a mata preservada que fecha o conjunto.'] },

  { img:'epicentro-socios', aba:'Epicentro', zoom:true,
    caps:['Um projeto nasce','de uma'], script:'visão.',
    copy:['À frente da Epicentro Empreendimentos, Thiago Alves Silva e Osmar Mello reúnem experiências construídas em diferentes setores da economia de Sorriso e do Centro-Oeste.',
          'Engenharia, energia, conectividade e agronegócio formam uma experiência multissetorial que amplia a leitura sobre a cidade e a região.'],
  },

  { img:'inspiracao', aba:'Inspiração',
    caps:['Inspirado no mundo.','Feito para'], script:'Sorriso.',
    copy:['Xangri-Lá, Miami e endereços argentinos compartilham uma ideia: a água, a arquitetura e a paisagem podem se organizar para que a casa tenha uma relação contínua com o seu entorno.',
          'No Almara, esse repertório ganha uma interpretação própria, desenhada para Sorriso e para a vida cotidiana de quem escolhe morar aqui.'] },

  { img:'referencias', aba:'Referências', zoom:true,
    caps:['Quatro referências'], script:'brasileiras.',
    copy:['Os nomes dos lagos foram escolhidos a partir de espelhos d\u2019água que se tornaram parte da identidade de diferentes cidades brasileiras.',
          'Cada referência carrega uma relação própria entre água, arquitetura, paisagem e vida cotidiana. No Almara, elas ganham uma nova interpretação, reunidas em um projeto residencial pensado para Sorriso.'] },

  { img:'caminho-lagos', aba:'Projetistas',
    caps:['A paisagem','começa no'], script:'desenho.',
    copy:['Arquitetura e paisagismo foram pensados para criar unidade sem apagar a individualidade de cada residência.',
          'O resultado é um lugar em que a arquitetura não se impõe à paisagem. Ela passa a fazer parte dela.'],
    faces:[['time-1','Maristela Fedrizzi','Maristela Fedrizzi Arquitetura','Urbanismo, arquitetônico e interiores'],
           ['time-2','Ronaldo Moraes','Forma Garden Arquitetura Paisagística','Paisagismo'],
           ['time-3','Eduarda Lucini','Lucini Infra e Urbanismo','Infraestrutura']] }
];

/* Pontos de toque no masterplan. Obtidos por segmentação de cor da lâmina
   d'água — cada ponto fica na borda esquerda de cada lago (não mais no
   centro geométrico), para não cobrir a lâmina d'água nem os terrenos. */
const ORLAS = [
  { id:'abaete', letra:'F', nome:'Abaeté', area:'30.300,63 m²',
    hot:{x:0.4265,y:0.3474},
    ref:'A força da paisagem natural e das águas da Bahia.',
    titulo:'Quadras de areia, praça de eventos e contemplação',
    itens:['4 quadras de areia','Gourmet Lago Abaeté','Playground Lago Abaeté','Praça de eventos','Estar contemplação','Guarda-barcos'],
    fotos:['aba-aerea','aba-orla','aba-deck','aba-gourmet','aba-praca'] },

  { id:'rdf', letra:'E', nome:'Rodrigo de Freitas', area:'23.123,18 m²',
    hot:{x:0.4054,y:0.5233},
    ref:'A convivência entre cidade, água e movimento no Rio de Janeiro.',
    titulo:'Piscinas, jogos, bar e academia',
    itens:['Piscina semi-olímpica','Piscina orgânica com borda infinita','Bar','Sala de poker','Sala de jogos','Banheiros e vestiário','Academia','Praça kids'],
    fotos:['rdf-aerea','rdf-borda-infinita','rdf-ilha','rdf-lago','rdf-poker','rdf-jogos','rdf-aquario',
           'rdf-bar-2','rdf-bar','rdf-cozinha','rdf-lavanderia','rdf-academia-2','rdf-academia','rdf-kids-2','rdf-kids'] },

  { id:'paranoa', letra:'D', nome:'Paranoá', area:'24.972,31 m²',
    hot:{x:0.4080,y:0.7045},
    ref:'A paisagem que acompanha a escala e os eixos de Brasília.',
    titulo:'Tênis, gourmet e estar à beira da água',
    itens:['Quadras de tênis','Gourmet Lago Paranoá','Playground Lago Paranoá','Pergolados e estar'],
    fotos:['par-aerea','par-gourmet','par-deck','par-tenis'] },

  { id:'pampulha', letra:'C', nome:'Pampulha', area:'6.595,01 m²',
    hot:{x:0.3911,y:0.8259},
    ref:'A água integrada à arquitetura e à identidade de Belo Horizonte.',
    titulo:'Campo, quadra e mini golf',
    itens:['Gourmet Lago Pampulha','Mini golf','Quadra poliesportiva','Futmesa','Quadra de futebol','Bancos de arquibancada com pergolados'],
    fotos:['pam-campo','pam-orla','pam-gourmet'] }
];

/* Pontos do masterplan que não são orlas de lago. O marcador dourado
   significa "não é orla" — o aviso de externo ao empreendimento aparece
   no conteúdo, e só onde se aplica (Centro de Eventos e Marina). */
/* Pontos do masterplan que não são orlas de lago. Marcador dourado
   significa "não é orla"; o aviso de externo ao empreendimento aparece
   no conteúdo, e só onde se aplica (Centro de Eventos e Marina).
   Usam a MESMA tela das orlas — muda só o rótulo da barra e a
   navegação do rodapé, que percorre os pontos em vez dos lagos. */
const PONTOS = [
  { id:'portaria', nome:'Portaria e Centro de Eventos',
    hot:{x:0.345,y:0.935},
    ref:'A chegada e o espaço de receber, no acesso ao empreendimento.',
    titulo:'Acesso controlado e centro de eventos',
    fotos:['chegada','aba-convivencia','ce-salao','ce-externo','ce-porte','ce-deck','ce-hall'],
    grupos:[
      { titulo:'Portarias', itens:[
          'Portaria social','Portaria de serviços',
          'Acessos organizados para moradores, visitantes e equipes','Controle de acesso',
          'Reconhecimento facial','Monitoramento por câmeras',
          'Vigilância patrimonial','Perímetro protegido por muro'] },
      { titulo:'Centro de Eventos', nota:'Centro de Eventos é externo ao empreendimento.', itens:[
          'Espaço climatizado com mais de 2.000 m²','Estacionamento com porte-cochère',
          'Docas de carga e descarga','Três camarins com vestiário',
          'Cozinha industrial','Deck externo com vista para o lago'] }
    ] },

  { id:'bosque', nome:'Rua do Bosque',
    hot:{x:0.7572,y:0.4011},
    ref:'O encontro entre a alameda arborizada e a mata preservada.',
    titulo:'Alameda, trilha e mata nativa',
    fotos:['bosque-alameda','bosque-entardecer','caminho-lagos-2','contemplacao'],
    grupos:[
      { itens:[
          'Alameda arborizada entre os terrenos e a mata',
          'Trilha no bosque','Calçada larga e ciclismo de lazer',
          'Paisagismo com florada sazonal','Vista para a lâmina d\u2019água'] }
    ] },

  { id:'marina', nome:'Marina',
    hot:{x:0.4595,y:0.108},
    ref:'O acesso ao rio Teles Pires, a partir do empreendimento.',
    titulo:'Rampa, deck e restaurante flutuante',
    fotos:['marina'],
    grupos:[
      { nota:'Marina é externa ao empreendimento.', itens:[
          'Rampa de acesso ao rio Teles Pires','Deck','Restaurante flutuante'] }
    ] }
];



const RAIL = [
  ['lugar','A Origem'], ['plano','O Almara'], ['orla','As orlas'],
  ['lote','O Terreno'], ['contato','Contato']
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
  if(nome === 'orla') orla.mostrar(opt && opt.orla != null ? opt.orla : orla.i,
                                   opt && opt.tipo ? opt.tipo : undefined);
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
  ['#rail','#rail2','#rail4','#rail5'].forEach(sel=>{
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

  track.innerHTML = LUGAR.map((p,k)=>{
    const caps = (p.caps||[]).map(c=>`<span class="stack-caps">${c}</span>`).join('');
    const scr  = p.script ? `<span class="stack-script">${p.script}</span>` : '';
    const capsFim = (p.capsFim||[]).map(c=>`<span class="stack-caps">${c}</span>`).join('');
    const copy = (p.copy||[]).map(c=>`<p class="lugar-copy">${c}</p>`).join('');
    const faces = p.faces ? `<div class="faces">${p.faces.map(([f,n,esc,fun])=>
      `<div class="face"><img src="${THU(f)}" alt="${n}">
         <b>${n}</b>${esc ? `<em>${esc}</em>` : ''}${fun ? `<span>${fun}</span>` : ''}
       </div>`).join('')}</div>` : '';
    const refs = p.refs ? `<div class="refs">${p.refs.map(([n,d,cor])=>
      `<div class="ref">${cor ? `<i class="ref-cor" style="background:${cor}"></i>` : ''}<b>${n}</b><span>${d}</span></div>`).join('')}</div>` : '';
    /* mapas e vistas aéreas ganham "ampliar": têm detalhe que merece tela cheia */
    const lupa = p.zoom ? `<span class="btn btn-solid lugar-zoom">ampliar</span>` : '';
    const filme = p.video
      ? `<button class="btn btn-solid lugar-filme" data-video="${p.video}">▶ ${p.videoRot || 'assistir'}</button>` : '';
    return `<div class="lugar-panel">
      <div class="lugar-fig${p.zoom ? ' tem-zoom' : ''}" data-k="${k}"><img src="${IMG(p.img)}" alt="">${lupa}</div>
      <div class="lugar-txt"><p class="stack">${caps}${scr}${capsFim}</p>${copy}${faces}${refs}${filme}</div>
    </div>`;
  }).join('');

  $$('.lugar-fig.tem-zoom', track).forEach(fig=>{
    fig.addEventListener('click', ()=>{
      if(deslizouAgora(track.parentElement)) return;
      lb.abrir([LUGAR[+fig.dataset.k].img], 0);
    });
  });

  /* abas nomeadas em vez de pontinhos: com 8 painéis, ninguém descobre
     o conteúdo só deslizando às cegas */
  dots.innerHTML = LUGAR.map((p,k)=>`<button data-k="${k}">${p.aba || (k+1)}</button>`).join('');
  const tot = $('#lugarTot'); if(tot) tot.textContent = LUGAR.length;

  function ir_(n){
    i = Math.max(0, Math.min(LUGAR.length - 1, n));
    track.style.transform = `translateX(${-i * 100}%)`;
    $$('button', dots).forEach((d,k)=> d.classList.toggle('on', k === i));
    pos.textContent = i + 1;
  }
  gesto(track.parentElement, {
    esquerda: ()=> ir_(i + 1),
    direita:  ()=> ir_(i - 1)
  });
  $$('button', dots).forEach((d,k)=> d.addEventListener('click', ()=> ir_(k)));

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

  /* pontos de toque — camada fixa, tamanho constante em qualquer zoom.
     Dois tipos misturados no mesmo mapa: lagos (abrem a tela de orla,
     com navegação entre si) e pontos externos (abrem uma sobreposição
     própria, sem entrar na navegação das quatro orlas). */
  capa.innerHTML =
    ORLAS.map((o,k)=>
      `<div class="hot" data-tipo="orla" data-k="${k}"><span class="hot-dot"></span><span class="hot-lbl">${o.nome}</span></div>`
    ).join('') +
    PONTOS.map((p,k)=>
      `<div class="hot hot-externo" data-tipo="ponto" data-k="${k}"><span class="hot-dot"></span><span class="hot-lbl">${p.nome}</span></div>`
    ).join('');

  $$('.hot', capa).forEach(h=>{
    h.addEventListener('click', e=>{
      e.stopPropagation();
      if(arrastou) return;
      const k = +h.dataset.k;
      ir('orla', { orla:k, tipo:h.dataset.tipo });
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
      const lista = h.dataset.tipo === 'orla' ? ORLAS : PONTOS;
      const o = lista[+h.dataset.k];
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
    li.addEventListener('click', ()=> ir('orla', { orla:k, tipo:'orla' }));
    li.addEventListener('pointerenter', ()=> destaque(k, true));
    li.addEventListener('pointerleave', ()=> destaque(k, false));
  });
  function destaque(k, on){
    const h = $(`.hot[data-tipo="orla"][data-k="${k}"]`, capa);
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
  let tipo = 'orla', i = 0, f = 0;

  const lista = ()=> tipo === 'orla' ? ORLAS : PONTOS;

  function mostrar(k, novoTipo){
    if(novoTipo) tipo = novoTipo;
    const L = lista();
    i = (k + L.length) % L.length;
    const o = L[i];

    barT.textContent = tipo === 'orla' ? 'Orla Lago ' + o.nome : o.nome;
    area.textContent = o.area || '';
    ref.textContent  = o.ref || '';
    title.textContent = o.titulo || '';

    /* orlas têm uma lista simples; pontos podem ter grupos, cada um com
       título e um aviso próprio (o "externo ao empreendimento") */
    const grupos = o.grupos || [{ itens:o.itens }];
    prog.innerHTML = grupos.map(g=>`
      <div class="prog-grupo">
        ${g.titulo ? `<p class="side-rule">${g.titulo}</p>` : ''}
        ${g.nota ? `<p class="ovl-flag">${g.nota}</p>` : ''}
        <ul class="prog">${g.itens.map(t=>`<li>${t}</li>`).join('')}</ul>
      </div>`).join('');

    strip.innerHTML = o.fotos.map((n,j)=>
      `<img src="${THU(n)}" data-j="${j}" alt="">`).join('');
    $$('img', strip).forEach(t=> t.addEventListener('click', ()=> foto(+t.dataset.j)));

    const a = L[(i - 1 + L.length) % L.length];
    const b = L[(i + 1) % L.length];
    const rot = n => tipo === 'orla' ? 'orla lago ' + n : n;
    prev.textContent = L.length > 1 ? '‹ ' + rot(a.nome) : '';
    next.textContent = L.length > 1 ? rot(b.nome) + ' ›' : '';
    mid.textContent  = o.nome + ' · ' + (i + 1) + ' de ' + L.length;

    foto(0);
  }

  function foto(j){
    const o = lista()[i];
    f = (j + o.fotos.length) % o.fotos.length;
    const nome = o.fotos[f];
    const primeira = !heroImg.getAttribute('src');
    if(primeira){
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
  $('#orlaZoom').addEventListener('click', ()=> lb.abrir(lista()[i].fotos, f));
  $('#orlaHero').addEventListener('click', e=>{
    if(e.target.closest('.btn')) return;
    if(deslizouAgora($('#orlaHero'))) return;
    lb.abrir(lista()[i].fotos, f);
  });
  gesto($('#orlaHero'), { esquerda:()=> foto(f + 1), direita:()=> foto(f - 1) });

  return { mostrar, get i(){ return i; }, get tipo(){ return tipo; } };
})();

/* ─────────────────────────────────────────────────────────
   8 · O TERRENO
   ───────────────────────────────────────────────────────── */

const lote = (function(){
  const stage = $('#loteStage'), cap = $('#loteCap');
  const FOTOS = ['rio-fim-de-tarde','agua-estar','caminho-lagos','par-deck'];
  stage.addEventListener('click', ()=> lb.abrir(FOTOS, 0));
  /* LEGENDAS só existe no fim do arquivo: a legenda entra ao abrir a tela */
  return { reset(){ cap.textContent = LEGENDAS[FOTOS[0]] || ''; } };
})();

/* ─────────────────────────────────────────────────────────
   9 · GALERIA EM TELA CHEIA
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
   10 · VÍDEOS (YouTube)
   ───────────────────────────────────────────────────────── */

const FILMES = {
  conceito: { id:'Uz4YaT74mBI', titulo:'Filme conceito' },
  trajeto:  { id:'6HspBrFMRgI', titulo:'O trajeto até o Almara' },
  tour:     { id:'aodIKd_L-GE', titulo:'Tour 3D pelo empreendimento' }
};

const video = (function(){
  const cx = $('#vid'), slot = $('#vidSlot'), tit = $('#vidTit');

  function abrir(id, titulo){
    /* youtube-nocookie + rel=0 + modestbranding deixam o player o mais
       neutro possível; o iframe só é criado na hora e destruído ao
       fechar, para o vídeo não seguir tocando por trás */
    const par = new URLSearchParams({
      autoplay:'1', rel:'0', modestbranding:'1', playsinline:'1',
      iv_load_policy:'3', fs:'0', color:'white'
    });
    slot.innerHTML =
      `<iframe src="https://www.youtube-nocookie.com/embed/${id}?${par}"
               frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    tit.textContent = titulo || '';
    cx.classList.add('is-on');
    sessao.reiniciar();
  }
  function fechar(){ cx.classList.remove('is-on'); slot.innerHTML = ''; }

  $('[data-close]', cx).addEventListener('click', fechar);
  cx.addEventListener('click', e=>{ if(e.target === cx) fechar(); });
  return { abrir, fechar };
})();

/* qualquer elemento com data-video abre o player */
document.addEventListener('click', e=>{
  const b = e.target.closest('[data-video]');
  if(!b) return;
  e.stopPropagation();
  const chave = b.dataset.video;
  const f = FILMES[chave] || { id:chave, titulo:b.dataset.videoTit || '' };
  video.abrir(f.id, f.titulo);
});

/* ─────────────────────────────────────────────────────────
   11 · SOBREPOSIÇÕES
   ───────────────────────────────────────────────────────── */

$$('[data-ovl]').forEach(b=>{
  b.addEventListener('click', ()=>{
    $('#ovlFicha').classList.add('is-on');
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
  video.fechar();
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
"implantacao-aerea":"Vista aérea da implantação","epicentro-socios":"Epicentro Empreendimentos · Thiago Alves Silva e Osmar Mello","ficha-capa":"Almara São Manoel",
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
"ce-hall":"Hall de entrada","marina":"Marina · rio Teles Pires","fechamento":"À altura da sua história",
"loc-mapa":"O morar mais exclusivo do Centro-Oeste","loc-acessos":"Localização e acessos",
"bosque-alameda":"Rua do Bosque · alameda arborizada","bosque-entardecer":"Rua do Bosque ao entardecer"
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
