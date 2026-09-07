const translations = {
  ru: {
    htmlLang:'ru', music:'assets/music-ru.mp3', langShort:'РУС',
    heroEyebrow:'Свадебное приглашение', heroDate:'17 сентября 2026',
    heroQuote:'Есть дни, которые хочется сохранить в сердце навсегда. Мы будем счастливы разделить этот день с вами.',
    musicOn:'Музыка играет', musicOff:'Музыка выключена', scroll:'Листайте ниже',
    inviteKicker:'Дорогие родные и близкие', inviteTitle:'Приглашаем вас разделить с нами радость этого особенного дня',
    inviteText:'Ваше присутствие сделает наш праздник ещё теплее, светлее и счастливее.',
    coupleKicker:'Две истории', coupleTitle:'Теперь — одна', coupleText:'И в этот день мы делаем ещё один шаг навстречу друг другу.', coupleScroll:'Листайте — они встретятся',
    dateKicker:'Сохраните дату', dateTitle:'Сентябрь 2026', timeLabel:'Начало', monthYear:'СЕНТЯБРЬ 2026',
    weekdays:['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'], countKicker:'До нашей встречи', days:'дней', hours:'часов', minutes:'минут', seconds:'секунд',
    placeKicker:'Место проведения', venue:'Тойхана «Нур»', placeNote:'Откройте удобную карту, чтобы построить маршрут.',
    finalKicker:'С любовью', finalText:'Будем ждать вас в этот красивый осенний вечер.'
  },
  kz: {
    htmlLang:'kk', music:'assets/music-kz.mp3', langShort:'ҚАЗ',
    heroEyebrow:'Үйлену тойына шақыру', heroDate:'17 қыркүйек 2026',
    heroQuote:'Жүректе мәңгі сақталатын ерекше күндер болады. Осы қуанышты күнді сіздермен бірге өткізсек дейміз.',
    musicOn:'Әуен ойнап тұр', musicOff:'Әуен өшірулі', scroll:'Төмен қарай сырғытыңыз',
    inviteKicker:'Құрметті туған-туыс, жақындарымыз', inviteTitle:'Сіздерді өміріміздегі ең әдемі күннің қуанышын бірге бөлісуге шақырамыз',
    inviteText:'Сіздердің қатысуларыңыз мерекемізді одан әрі жылы, жарқын әрі бақытты етеді.',
    coupleKicker:'Екі тағдыр', coupleTitle:'Енді — бір жол', coupleText:'Осы күні біз бір-бірімізге қарай тағы бір маңызды қадам жасаймыз.', coupleScroll:'Сырғытыңыз — олар кездеседі',
    dateKicker:'Күнді белгілеп қойыңыз', dateTitle:'Қыркүйек 2026', timeLabel:'Басталуы', monthYear:'ҚЫРКҮЙЕК 2026',
    weekdays:['ДС','СС','СР','БС','ЖМ','СН','ЖС'], countKicker:'Кездесуге дейін', days:'күн', hours:'сағат', minutes:'минут', seconds:'секунд',
    placeKicker:'Өтетін орны', venue:'«Нур» тойханасы', placeNote:'Маршрут құру үшін өзіңізге ыңғайлы картаны ашыңыз.',
    finalKicker:'Ізгі ниетпен', finalText:'Сіздерді осы әдемі күзгі кеште асыға күтеміз.'
  },
  uz: {
    htmlLang:'uz', music:'assets/music-uz.mp3', langShort:'ЎЗ',
    heroEyebrow:'Тўйга таклифнома', heroDate:'17 сентябрь 2026 йил',
    heroQuote:'Қалбда абадий сақланадиган алоҳида кунлар бўлади. Бу қувончли кунни сиз билан бирга ўтказишдан бахтиёр бўламиз.',
    musicOn:'Мусиқа янграмоқда', musicOff:'Мусиқа ўчирилган', scroll:'Пастга варақланг',
    inviteKicker:'Азиз яқинларимиз ва қадрдонларимиз', inviteTitle:'Сизни ҳаётимиздаги энг гўзал кун қувончини биз билан баҳам кўришга таклиф этамиз',
    inviteText:'Сизнинг ташрифингиз байрамимизни янада файзли, ёруғ ва унутилмас қилади.',
    coupleKicker:'Икки тақдир', coupleTitle:'Энди — бир йўл', coupleText:'Бу кунда биз бир-биримиз сари яна бир муҳим қадам ташлаймиз.', coupleScroll:'Пастга варақланг — улар учрашади',
    dateKicker:'Санани белгилаб қўйинг', dateTitle:'Сентябрь 2026', timeLabel:'Бошланиши', monthYear:'СЕНТЯБРЬ 2026',
    weekdays:['ДШ','СШ','ЧШ','ПШ','ЖМ','ШН','ЯК'], countKicker:'Учрашувимизгача', days:'кун', hours:'соат', minutes:'дақиқа', seconds:'сония',
    placeKicker:'Ўтказилиш жойи', venue:'«Нур» тўйхонаси', placeNote:'Манзилга бориш учун ўзингизга қулай харитани очинг.',
    finalKicker:'Меҳр билан', finalText:'Сизни ушбу гўзал куз оқшомида интизорлик билан кутамиз.'
  }
};

const intro = document.getElementById('intro');
const envelope = document.getElementById('envelopeButton');
const envelopeWrap = document.getElementById('envelopeWrap');
const languageCard = document.getElementById('languageCard');
const site = document.getElementById('site');
const music = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicState = document.getElementById('musicState');
const langToggle = document.getElementById('langToggle');
const langShort = document.getElementById('langShort');
const languageMenu = document.getElementById('languageMenu');
let activeLang = 'ru';
let musicEnabled = true;
let siteStarted = false;

function openEnvelope(){
  if(envelope.classList.contains('is-open')) return;
  envelope.classList.add('is-open');
  setTimeout(()=>{
    envelopeWrap.classList.add('opened');
    languageCard.classList.add('visible');
    languageCard.setAttribute('aria-hidden','false');
  },820);
}
envelope.addEventListener('click', openEnvelope);

function renderCalendar(lang){
  const cfg=translations[lang];
  const weekdays=document.getElementById('weekdays');
  const days=document.getElementById('calendarDays');
  weekdays.innerHTML=cfg.weekdays.map(d=>`<span>${d}</span>`).join('');
  days.innerHTML='';
  // September 1, 2026 is Tuesday. Monday-first calendar => 1 empty cell.
  for(let i=0;i<1;i++){ const s=document.createElement('span'); s.className='empty'; s.textContent='0'; days.appendChild(s); }
  for(let d=1;d<=30;d++){
    const s=document.createElement('span'); s.textContent=d;
    if(d===17){s.className='selected'; s.setAttribute('aria-label','17');}
    days.appendChild(s);
  }
}

function renderLanguage(lang){
  activeLang=lang;
  const cfg=translations[lang];
  document.documentElement.lang=cfg.htmlLang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    if(cfg[key]) el.textContent=cfg[key];
  });
  langShort.textContent=cfg.langShort;
  renderCalendar(lang);
}

function setMusicVisual(playing){
  musicToggle.classList.toggle('paused', !playing);
  musicToggle.setAttribute('aria-label', playing ? translations[activeLang].musicOn : translations[activeLang].musicOff);
  musicState.textContent = playing ? '•' : '';
}

async function loadLanguageMusic(lang, shouldPlay){
  const cfg=translations[lang];
  music.src=cfg.music;
  music.load();
  if(shouldPlay){
    try{ await music.play(); musicEnabled=true; setMusicVisual(true); }
    catch(e){ musicEnabled=false; setMusicVisual(false); }
  }else{
    musicEnabled=false;
    setMusicVisual(false);
  }
}

async function chooseLanguage(lang){
  renderLanguage(lang);
  await loadLanguageMusic(lang, true);
  siteStarted=true;
  site.classList.add('active');
  site.setAttribute('aria-hidden','false');
  document.body.classList.remove('locked');
  intro.classList.add('done');
  setTimeout(()=>intro.remove(),950);
  setTimeout(()=>document.querySelectorAll('.reveal').forEach((el,i)=>{ if(i===0) el.classList.add('visible'); }),150);
}

document.querySelectorAll('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>chooseLanguage(btn.dataset.lang)));

musicToggle.addEventListener('click', async ()=>{
  if(music.paused){
    try{await music.play(); musicEnabled=true; setMusicVisual(true);}catch(e){}
  }else{
    music.pause(); musicEnabled=false; setMusicVisual(false);
  }
});

langToggle.addEventListener('click',(e)=>{
  e.stopPropagation();
  const open=languageMenu.classList.toggle('open');
  langToggle.setAttribute('aria-expanded', String(open));
  languageMenu.setAttribute('aria-hidden', String(!open));
});

document.querySelectorAll('[data-switch-lang]').forEach(btn=>btn.addEventListener('click', async ()=>{
  const wasPlaying=!music.paused;
  const lang=btn.dataset.switchLang;
  renderLanguage(lang);
  await loadLanguageMusic(lang, wasPlaying);
  languageMenu.classList.remove('open');
  langToggle.setAttribute('aria-expanded','false');
  languageMenu.setAttribute('aria-hidden','true');
}));

document.addEventListener('click',(e)=>{
  if(!e.target.closest('.language-control')){
    languageMenu.classList.remove('open');
    langToggle.setAttribute('aria-expanded','false');
    languageMenu.setAttribute('aria-hidden','true');
  }
});

const target = new Date('2026-09-17T19:00:00+05:00').getTime();
function updateCountdown(){
  const diff=Math.max(0,target-Date.now());
  const d=Math.floor(diff/86400000);
  const h=Math.floor((diff%86400000)/3600000);
  const m=Math.floor((diff%3600000)/60000);
  const s=Math.floor((diff%60000)/1000);
  document.getElementById('days').textContent=String(d).padStart(2,'0');
  document.getElementById('hours').textContent=String(h).padStart(2,'0');
  document.getElementById('minutes').textContent=String(m).padStart(2,'0');
  document.getElementById('seconds').textContent=String(s).padStart(2,'0');
}
updateCountdown(); setInterval(updateCountdown,1000);

const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('visible');}),{threshold:.16});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

renderCalendar('ru');


// Decorative falling autumn leaves. Kept intentionally light for mobile performance.
(function createFallingLeaves(){
  const layer=document.getElementById('fallingLeaves');
  if(!layer) return;
  const count=window.matchMedia('(max-width: 600px)').matches ? 9 : 15;
  const frag=document.createDocumentFragment();
  for(let i=0;i<count;i++){
    const leaf=document.createElement('span');
    leaf.className='fall-leaf leaf-tone-'+(i%5);
    leaf.style.setProperty('--left', `${Math.random()*100}%`);
    leaf.style.setProperty('--delay', `${(-Math.random()*14).toFixed(2)}s`);
    leaf.style.setProperty('--duration', `${(10+Math.random()*9).toFixed(2)}s`);
    const drift=-90+Math.random()*180;
    leaf.style.setProperty('--drift', `${drift.toFixed(0)}px`);
    leaf.style.setProperty('--drift-mid', `${(drift*.58).toFixed(0)}px`);
    leaf.style.setProperty('--scale', `${(.55+Math.random()*.75).toFixed(2)}`);
    leaf.style.setProperty('--turn', `${(300+Math.random()*720).toFixed(0)}deg`);
    frag.appendChild(leaf);
  }
  layer.appendChild(frag);
})();

// Scroll-driven scene: the groom and bride enter from opposite sides and meet in the center.
const coupleStory=document.getElementById('coupleStory');
const groomFigure=document.getElementById('groomFigure');
const brideFigure=document.getElementById('brideFigure');
const coupleHeart=document.getElementById('coupleHeart');
let coupleTicking=false;

function clamp01(v){ return Math.max(0,Math.min(1,v)); }
function easeInOut(t){ return t<.5 ? 2*t*t : 1-Math.pow(-2*t+2,2)/2; }

function renderCoupleScene(){
  coupleTicking=false;
  if(!coupleStory || !groomFigure || !brideFigure) return;
  const rect=coupleStory.getBoundingClientRect();
  const travel=Math.max(1,rect.height-window.innerHeight);
  const raw=clamp01((-rect.top)/travel);
  const p=easeInOut(clamp01((raw-.08)/.76));
  const vw=window.innerWidth;
  const gw=groomFigure.getBoundingClientRect().width;
  const bw=brideFigure.getBoundingClientRect().width;
  const mobile=vw<=600;
  const startGap=mobile ? vw*.62 : Math.min(vw*.46,560);
  // Align the actual hands rather than the image-box edges.
  const manTarget=-(gw*.93);
  const brideTarget=-(bw*.149);
  const manX=manTarget-startGap*(1-p);
  const brideX=brideTarget+startGap*(1-p);
  const lift=(1-p)*(mobile?18:28);
  const scale=.94+.06*p;
  groomFigure.style.transform=`translate3d(${manX}px,${lift}px,0) scale(${scale})`;
  brideFigure.style.transform=`translate3d(${brideX}px,${lift}px,0) scale(${scale})`;
  groomFigure.style.opacity=String(.38+.62*p);
  brideFigure.style.opacity=String(.38+.62*p);
  if(coupleHeart){
    const hp=clamp01((p-.72)/.28);
    coupleHeart.style.opacity=String(hp);
    coupleHeart.style.transform=`translate(-50%,-50%) scale(${.55+.45*hp})`;
  }
  coupleStory.style.setProperty('--join-progress',p.toFixed(3));
  const ground=coupleStory.querySelector('.couple-ground');
  if(ground) ground.style.opacity=String(.2+.6*p);
}
function requestCoupleRender(){
  if(coupleTicking) return;
  coupleTicking=true;
  requestAnimationFrame(renderCoupleScene);
}
window.addEventListener('scroll',requestCoupleRender,{passive:true});
window.addEventListener('resize',requestCoupleRender,{passive:true});
requestCoupleRender();
