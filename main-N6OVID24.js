import{a as ce,c as de,e as le,i as me,j as pe,k as ue,m as he}from"./chunk-RO7XS7QB.js";import{$ as d,A as oe,Aa as In,Ba as V,Ca as D,D as x,Da as _,E as y,Ea as xt,F as C,Fa as Rt,G as Gt,Ga as H,H as l,Ha as U,I as Mn,Ia as We,J as Tt,Ja as F,K as et,Ka as b,L as nt,La as yt,M as Y,Ma as o,N as T,Na as E,Oa as h,P as ct,Pa as Dn,Q as M,Qa as pt,R as ae,Ra as ut,S as kn,Sa as ht,T as vt,Ta as dt,V as mt,W as k,Wa as Tn,X as En,Xa as Ft,Y as On,Ya as ot,Z as Sn,Za as An,_ as Pn,_a as zn,a as _t,aa as At,ab as Lt,ba as Mt,bb as Rn,c as Wt,ca as kt,cb as Fn,d as St,da as zt,db as Ln,e as P,ea as g,eb as Nn,f as gn,fa as w,fb as Bn,ga as O,gb as jn,h as st,ha as $,hb as Vn,i as bn,ib as Nt,j as Q,ja as Ue,jb as se,k as _n,ka as q,kb as Hn,l as vn,la as N,lb as Un,m as xn,ma as B,n as ne,na as re,o as lt,oa as A,p as je,pa as z,q as yn,qa as Qt,r as Pt,ra as s,s as It,sa as r,t as Ve,ta as j,u as He,ua as p,v as wn,va as u,w as Cn,wa as K,x as ie,xa as it,y as Dt,ya as Ze,z as G,za as R}from"./chunk-7TGNRSL7.js";var Gi=new C("cdk-dir-doc",{providedIn:"root",factory:()=>l(T)}),Qi=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Zn(n){let a=n?.toLowerCase()||"";return a==="auto"&&typeof navigator<"u"&&navigator?.language?Qi.test(navigator.language)?"rtl":"ltr":a==="rtl"?"rtl":"ltr"}var $t=(()=>{class n{get value(){return this.valueSignal()}valueSignal=vt("ltr");change=new ct;constructor(){let t=l(Gi,{optional:!0});if(t){let e=t.body?t.body.dir:null,i=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(Zn(e||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Z=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=y({})}return n})();var $i=["*"];var Ki=new C("MAT_CARD_CONFIG"),Wn=(()=>{class n{appearance;constructor(){let t=l(Ki,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(e,i){e&2&&b("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:$i,decls:1,vars:0,template:function(e,i){e&1&&(D(),_(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})();var Gn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[Z]})}return n})();var qi=(n,a)=>a.fecha+a.descripcion,Xi=(n,a)=>a.nombre;function Ji(n,a){n&1&&o(0," medical_services ")}function to(n,a){n&1&&o(0," person ")}function eo(n,a){n&1&&o(0," description ")}function no(n,a){if(n&1&&(s(0,"div",28)(1,"div",38)(2,"span",7),N(3,Ji,1,0),N(4,to,1,0),N(5,eo,1,0),r()(),s(6,"div",39)(7,"strong"),o(8),r(),s(9,"span"),o(10),r()()()),n&2){let t=a.$implicit;d(),b("control",t.tipo==="control")("paciente",t.tipo==="paciente")("informe",t.tipo==="informe"),d(2),B(t.tipo==="control"?3:-1),d(),B(t.tipo==="paciente"?4:-1),d(),B(t.tipo==="informe"?5:-1),d(3),h(" ",t.descripcion," "),d(2),h(" ",t.fecha," ")}}function io(n,a){if(n&1&&(s(0,"div",33)(1,"div",40)(2,"span"),o(3),r(),s(4,"strong"),o(5),r()(),s(6,"div",21),j(7,"div",41),r()()),n&2){let t=a.$implicit,e=V();d(3),h(" ",t.nombre," "),d(2),h(" ",t.pacientes," "),d(2),F("width",t.pacientes/e.porcentajeZonaMaxima*100,"%")}}var fe=class n{pacientes=[{id:1,nombre:"Juan P\xE9rez",enfermedad:["HTA"],zona:"Zona Norte"},{id:2,nombre:"Ana G\xF3mez",enfermedad:["DBT"],zona:"Zona Centro"},{id:3,nombre:"Carlos Ruiz",enfermedad:["HTA","DBT"],zona:"Zona Sur"},{id:4,nombre:"Laura Fern\xE1ndez",enfermedad:["HTA"],zona:"Zona Norte"},{id:5,nombre:"Miguel Rodr\xEDguez",enfermedad:["DBT"],zona:"Zona Centro"},{id:6,nombre:"Sof\xEDa Mart\xEDnez",enfermedad:["Obesidad"],zona:"Zona Sur"}];zonas=[{nombre:"Zona Norte",pacientes:152},{nombre:"Zona Centro",pacientes:126},{nombre:"Zona Sur",pacientes:104},{nombre:"Zona Oeste",pacientes:76}];actividadReciente=[{fecha:"22/09/2026",descripcion:"Nuevo control registrado",tipo:"control"},{fecha:"21/09/2026",descripcion:"Paciente actualizado",tipo:"paciente"},{fecha:"20/09/2026",descripcion:"Informe mensual generado",tipo:"informe"},{fecha:"19/09/2026",descripcion:"Nuevo paciente registrado",tipo:"paciente"}];totalPacientes=458;hta=128;dbt=74;htaDbt=31;controlesMes=86;nuevosPacientes=24;pendientes=12;chartData={labels:["Hipertensi\xF3n","Diabetes","HTA + DBT","Otras"],datasets:[{data:[this.hta,this.dbt,this.htaDbt,225],backgroundColor:["#247ba0","#4caf50","#e45756","#f2c14e"],borderWidth:0}]};chartOptions={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom"}}};get porcentajeHta(){return Math.round(this.hta/this.totalPacientes*100)}get porcentajeDbt(){return Math.round(this.dbt/this.totalPacientes*100)}get porcentajeHtaDbt(){return Math.round(this.htaDbt/this.totalPacientes*100)}get porcentajeZonaMaxima(){return Math.max(...this.zonas.map(a=>a.pacientes))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=g({type:n,selectors:[["app-dashboard"]],decls:158,vars:21,consts:[[1,"dashboard"],[1,"dashboard-header"],[1,"last-update"],[1,"status-dot"],[1,"stats-grid"],[1,"stat-card"],[1,"stat-icon","patients-icon"],[1,"material-symbols-outlined"],[1,"stat-content"],[1,"stat-label"],[1,"stat-description"],[1,"stat-icon","hta-icon"],[1,"stat-icon","dbt-icon"],[1,"stat-icon","combined-icon"],[1,"main-grid"],[1,"panel","disease-panel"],[1,"panel-header"],[1,"panel-action"],[1,"disease-list"],[1,"disease-item"],[1,"disease-header"],[1,"progress"],[1,"progress-value","hta"],[1,"progress-value","dbt"],[1,"progress-value","combined"],[1,"progress-value","other"],[1,"panel","activity-panel"],[1,"activity-list"],[1,"activity-item"],[1,"secondary-button"],[1,"secondary-grid"],[1,"panel"],[1,"zones-list"],[1,"zone-item"],[1,"summary-list"],[1,"summary-item"],[1,"summary-icon"],[1,"summary-icon","warning"],[1,"activity-icon"],[1,"activity-info"],[1,"zone-header"],[1,"progress-value"]],template:function(t,e){t&1&&(s(0,"div",0)(1,"div",1)(2,"div")(3,"h1"),o(4,"Inicio"),r(),s(5,"p"),o(6,"Resumen general del seguimiento sanitario"),r()(),s(7,"div",2),j(8,"span",3),o(9," Sistema actualizado "),r()(),s(10,"section",4)(11,"mat-card",5)(12,"div",6)(13,"span",7),o(14," groups "),r()(),s(15,"div",8)(16,"span",9),o(17,"Pacientes registrados"),r(),s(18,"strong"),o(19),r(),s(20,"span",10),o(21," Base general "),r()()(),s(22,"mat-card",5)(23,"div",11)(24,"span",7),o(25," favorite "),r()(),s(26,"div",8)(27,"span",9),o(28,"Hipertensi\xF3n (HTA)"),r(),s(29,"strong"),o(30),r(),s(31,"span",10),o(32),r()()(),s(33,"mat-card",5)(34,"div",12)(35,"span",7),o(36," bloodtype "),r()(),s(37,"div",8)(38,"span",9),o(39,"Diabetes (DBT)"),r(),s(40,"strong"),o(41),r(),s(42,"span",10),o(43),r()()(),s(44,"mat-card",5)(45,"div",13)(46,"span",7),o(47," monitoring "),r()(),s(48,"div",8)(49,"span",9),o(50,"HTA + DBT"),r(),s(51,"strong"),o(52),r(),s(53,"span",10),o(54),r()()()(),s(55,"section",14)(56,"mat-card",15)(57,"div",16)(58,"div")(59,"h2"),o(60,"Distribuci\xF3n por problema de salud"),r(),s(61,"p"),o(62,"Pacientes registrados seg\xFAn diagn\xF3stico"),r()(),s(63,"button",17),o(64," Ver estad\xEDsticas "),r()(),s(65,"div",18)(66,"div",19)(67,"div",20)(68,"span"),o(69,"Hipertensi\xF3n (HTA)"),r(),s(70,"strong"),o(71),r()(),s(72,"div",21),j(73,"div",22),r()(),s(74,"div",19)(75,"div",20)(76,"span"),o(77,"Diabetes (DBT)"),r(),s(78,"strong"),o(79),r()(),s(80,"div",21),j(81,"div",23),r()(),s(82,"div",19)(83,"div",20)(84,"span"),o(85,"HTA + DBT"),r(),s(86,"strong"),o(87),r()(),s(88,"div",21),j(89,"div",24),r()(),s(90,"div",19)(91,"div",20)(92,"span"),o(93,"Otras enfermedades"),r(),s(94,"strong"),o(95,"225"),r()(),s(96,"div",21),j(97,"div",25),r()()()(),s(98,"mat-card",26)(99,"div",16)(100,"div")(101,"h2"),o(102,"Actividad reciente"),r(),s(103,"p"),o(104,"\xDAltimos movimientos registrados"),r()()(),s(105,"div",27),A(106,no,11,11,"div",28,qi),r(),s(108,"button",29),o(109," Ver toda la actividad "),r()()(),s(110,"section",30)(111,"mat-card",31)(112,"div",16)(113,"div")(114,"h2"),o(115,"Pacientes por zona"),r(),s(116,"p"),o(117,"Distribuci\xF3n territorial de pacientes"),r()(),s(118,"button",17),o(119," Ver zonas "),r()(),s(120,"div",32),A(121,io,8,4,"div",33,Xi),r()(),s(123,"mat-card",31)(124,"div",16)(125,"div")(126,"h2"),o(127,"Resumen de seguimiento"),r(),s(128,"p"),o(129,"Actividad del per\xEDodo actual"),r()()(),s(130,"div",34)(131,"div",35)(132,"div",36)(133,"span",7),o(134," health_and_safety "),r()(),s(135,"div")(136,"span"),o(137,"Controles realizados"),r(),s(138,"strong"),o(139),r()()(),s(140,"div",35)(141,"div",36)(142,"span",7),o(143," person_add "),r()(),s(144,"div")(145,"span"),o(146,"Nuevos pacientes"),r(),s(147,"strong"),o(148),r()()(),s(149,"div",35)(150,"div",37)(151,"span",7),o(152," pending_actions "),r()(),s(153,"div")(154,"span"),o(155,"Seguimientos pendientes"),r(),s(156,"strong"),o(157),r()()()()()()()),t&2&&(d(19),E(e.totalPacientes),d(11),E(e.hta),d(2),h(" ",e.porcentajeHta,"% de la base "),d(9),E(e.dbt),d(2),h(" ",e.porcentajeDbt,"% de la base "),d(9),E(e.htaDbt),d(2),h(" ",e.porcentajeHtaDbt,"% de la base "),d(17),E(e.hta),d(2),F("width",e.hta/e.totalPacientes*100,"%"),d(6),E(e.dbt),d(2),F("width",e.dbt/e.totalPacientes*100,"%"),d(6),E(e.htaDbt),d(2),F("width",e.htaDbt/e.totalPacientes*100,"%"),d(8),F("width",225/e.totalPacientes*100,"%"),d(9),z(e.actividadReciente),d(15),z(e.zonas),d(18),E(e.controlesMes),d(9),E(e.nuevosPacientes),d(9),E(e.pendientes))},dependencies:[Gn,Wn],styles:['@charset "UTF-8";@font-face{font-family:Material Symbols Outlined;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v374/kJF4BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZZLsYEpzC_1ver5Y0.woff2) format("woff2")}.material-symbols-outlined[_ngcontent-%COMP%]{font-family:Material Symbols Outlined;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}.dashboard[_ngcontent-%COMP%]{padding:18px 28px 20px;max-width:1600px;margin:0 auto}.dashboard-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:15px}.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:26px;font-weight:700;color:#172b3a;letter-spacing:-.4px}.dashboard-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:6px 0 0;color:#718096;font-size:14px}.last-update[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:9px 14px;background:#fff;border:1px solid #e8edf2;border-radius:999px;color:#52606d;font-size:13px;box-shadow:0 2px 8px #0f172a0a}.status-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:#36a269}.stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:12px}.stat-card[_ngcontent-%COMP%]{min-height:92px;display:flex;align-items:center;gap:14px;padding:14px 16px;border:1px solid #e9eef2;border-radius:14px;background:#fff;box-shadow:0 3px 12px #0f172a0b;transition:transform .2s ease,box-shadow .2s ease}.stat-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 8px 22px #0f172a14}.stat-icon[_ngcontent-%COMP%]{width:42px;height:42px;min-width:42px;display:flex;align-items:center;justify-content:center;border-radius:11px}.stat-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:22px}.patients-icon[_ngcontent-%COMP%]{background:#e8f3f7;color:#247ba0}.hta-icon[_ngcontent-%COMP%]{background:#edf5f8;color:#247ba0}.dbt-icon[_ngcontent-%COMP%]{background:#edf7f0;color:#3d9660}.combined-icon[_ngcontent-%COMP%]{background:#fbeeee;color:#d45b5b}.stat-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:0}.stat-label[_ngcontent-%COMP%]{color:#667685;font-size:13px;margin-bottom:5px}.stat-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#182b3a;font-size:24px;line-height:1.1;font-weight:700}.stat-description[_ngcontent-%COMP%]{color:#8996a3;font-size:12px;margin-top:5px}.main-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1.65fr) minmax(320px,.85fr);gap:12px;margin-bottom:12px}.secondary-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:12px}.panel[_ngcontent-%COMP%]{border:1px solid #e9eef2;border-radius:14px;background:#fff;box-shadow:0 3px 12px #0f172a0b;padding:15px 17px}.panel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:11px}.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:16px;font-weight:700;color:#1b2b38}.panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0;font-size:12px;color:#8996a3}.panel-action[_ngcontent-%COMP%]{border:0;background:transparent;color:#247ba0;font-size:12px;font-weight:600;cursor:pointer;padding:5px 0}.panel-action[_ngcontent-%COMP%]:hover{text-decoration:underline}.chart-container[_ngcontent-%COMP%]{height:210px;display:flex;align-items:center;justify-content:center}.activity-list[_ngcontent-%COMP%]{display:flex;flex-direction:column}.activity-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:11px;padding:7px 0;border-bottom:1px solid #eef1f4}.activity-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.activity-icon[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;display:flex;align-items:center;justify-content:center;border-radius:10px}.activity-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:19px}.activity-icon.control[_ngcontent-%COMP%]{background:#e8f3f7;color:#247ba0}.activity-icon.paciente[_ngcontent-%COMP%]{background:#edf7f0;color:#3d9660}.activity-icon.informe[_ngcontent-%COMP%]{background:#f5f0fa;color:#79539c}.activity-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.activity-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:13px;font-weight:500;color:#334454}.activity-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:11px;color:#96a0aa}.secondary-button[_ngcontent-%COMP%]{width:100%;margin-top:10px;padding:8px;border:1px solid #e1e8ed;border-radius:8px;background:#f8fafb;color:#52606d;font-size:12px;font-weight:600;cursor:pointer;transition:background .2s ease}.secondary-button[_ngcontent-%COMP%]:hover{background:#f1f5f7}.zones-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.zone-item[_ngcontent-%COMP%]{width:100%}.zone-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:5px}.zone-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px;color:#52606d}.zone-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:13px;color:#273b4a}.progress[_ngcontent-%COMP%]{width:100%;height:7px;overflow:hidden;background:#e9eef1;border-radius:999px}.progress-value[_ngcontent-%COMP%]{height:100%;background:#247ba0;border-radius:inherit;transition:width .5s ease}.summary-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}.summary-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:8px 10px;border-radius:10px;background:#f8fafb}.summary-item[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{display:flex;flex-direction:column;gap:2px}.summary-item[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child   span[_ngcontent-%COMP%]{font-size:12px;color:#74818c}.summary-item[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child   strong[_ngcontent-%COMP%]{font-size:17px;color:#263947}.summary-icon[_ngcontent-%COMP%]{width:38px;height:38px;display:flex;align-items:center;justify-content:center;border-radius:9px;background:#e8f3f7;color:#247ba0}.summary-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:20px}.summary-icon.warning[_ngcontent-%COMP%]{background:#fff5df;color:#c18a1c}@media(max-width:1200px){.stats-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.main-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media(max-width:850px){.dashboard[_ngcontent-%COMP%]{padding:22px 18px 30px}.secondary-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media(max-width:600px){.dashboard[_ngcontent-%COMP%]{padding:18px 14px 25px}.dashboard-header[_ngcontent-%COMP%]{flex-direction:column;gap:15px}.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:23px}.last-update[_ngcontent-%COMP%]{font-size:12px}.stats-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:12px}.stat-card[_ngcontent-%COMP%]{min-height:100px;padding:18px}.stat-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:25px}.panel[_ngcontent-%COMP%]{padding:18px}.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:15px}.chart-container[_ngcontent-%COMP%]{height:250px}}.disease-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;padding-top:2px}.disease-item[_ngcontent-%COMP%]{width:100%}.disease-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}.disease-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px;color:#52606d}.disease-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:13px;color:#263947;font-weight:600}.progress[_ngcontent-%COMP%]{width:100%;height:8px;overflow:hidden;background:#e8edf0;border-radius:999px}.progress-value[_ngcontent-%COMP%]{height:100%;border-radius:999px;transition:width .5s ease}.progress-value.hta[_ngcontent-%COMP%]{background:#247ba0}.progress-value.dbt[_ngcontent-%COMP%]{background:#3d9660}.progress-value.combined[_ngcontent-%COMP%]{background:#d45b5b}.progress-value.other[_ngcontent-%COMP%]{background:#d6a638}@media(min-width:1400px)and (min-height:800px){.dashboard[_ngcontent-%COMP%]{padding:16px 28px 18px}.dashboard-header[_ngcontent-%COMP%]{margin-bottom:12px}.stats-grid[_ngcontent-%COMP%]{gap:10px;margin-bottom:10px}.stat-card[_ngcontent-%COMP%]{min-height:86px;padding:12px 15px}.stat-icon[_ngcontent-%COMP%]{width:40px;height:40px;min-width:40px}.stat-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:23px}.main-grid[_ngcontent-%COMP%]{gap:10px;margin-bottom:10px}.secondary-grid[_ngcontent-%COMP%]{gap:10px}.panel[_ngcontent-%COMP%]{padding:13px 15px}.panel-header[_ngcontent-%COMP%]{margin-bottom:9px}.disease-list[_ngcontent-%COMP%], .zones-list[_ngcontent-%COMP%]{gap:8px}.activity-item[_ngcontent-%COMP%]{padding:6px 0}.summary-list[_ngcontent-%COMP%]{gap:5px}.summary-item[_ngcontent-%COMP%]{padding:7px 9px}.chart-container[_ngcontent-%COMP%]{height:190px}}']})};var ro=(n,a)=>a.id;function so(n,a){if(n&1&&(s(0,"span",36),o(1),r()),n&2){let t=a.$implicit;b("hta",t==="HTA")("dbt",t==="DBT"),d(),h(" ",t," ")}}function co(n,a){if(n&1){let t=it();s(0,"tr")(1,"td")(2,"div",27)(3,"div",28),o(4),r(),s(5,"div")(6,"strong"),o(7),r(),s(8,"span"),o(9),r()()()(),s(10,"td"),o(11),r(),s(12,"td")(13,"span",29),o(14),r()(),s(15,"td")(16,"div",30),A(17,so,2,5,"span",31,re),r()(),s(19,"td")(20,"span",32),o(21),r()(),s(22,"td")(23,"span",33),j(24,"span",34),o(25),r()(),s(26,"td")(27,"button",35),R("click",function(){let i=et(t).$implicit,c=V();return nt(c.verFicha(i))}),o(28," Ver ficha "),s(29,"span",3),o(30," chevron_right "),r()()()()}if(n&2){let t=a.$implicit;d(4),h(" ",t.nombre.charAt(0)," "),d(3),h(" ",t.nombre," "),d(2),h(" DNI ",t.dni," "),d(2),h(" ",t.edad," a\xF1os "),d(3),h(" ",t.zona," "),d(3),z(t.enfermedades),d(4),h(" ",t.ultimoControl," "),d(2),b("active",t.activo),d(2),h(" ",t.activo?"Activo":"Inactivo"," ")}}var ge=class n{constructor(a){this.router=a}router;totalPacientes=458;pacientes=[{id:1,nombre:"Juan P\xE9rez",dni:"28.456.789",edad:58,zona:"Zona Norte",enfermedades:["HTA","DBT"],ultimoControl:"15/09/2026",activo:!0},{id:2,nombre:"Mar\xEDa L\xF3pez",dni:"31.789.456",edad:64,zona:"Zona Centro",enfermedades:["HTA"],ultimoControl:"10/09/2026",activo:!0},{id:3,nombre:"Pedro G\xF3mez",dni:"25.123.789",edad:71,zona:"Zona Sur",enfermedades:["DBT"],ultimoControl:"18/09/2026",activo:!0},{id:4,nombre:"Ana Ram\xEDrez",dni:"34.567.890",edad:52,zona:"Zona Norte",enfermedades:["HTA"],ultimoControl:"12/09/2026",activo:!0},{id:5,nombre:"Roberto Fern\xE1ndez",dni:"27.345.678",edad:67,zona:"Zona Centro",enfermedades:["HTA","DBT"],ultimoControl:"05/09/2026",activo:!0},{id:6,nombre:"Laura Mart\xEDnez",dni:"36.789.123",edad:45,zona:"Zona Sur",enfermedades:["Obesidad"],ultimoControl:"20/09/2026",activo:!0},{id:7,nombre:"Carlos Rodr\xEDguez",dni:"29.876.543",edad:61,zona:"Zona Oeste",enfermedades:["HTA"],ultimoControl:"08/09/2026",activo:!0},{id:8,nombre:"Sof\xEDa Mart\xEDnez",dni:"38.456.789",edad:49,zona:"Zona Norte",enfermedades:["DBT"],ultimoControl:"19/09/2026",activo:!0}];busqueda="";zonaSeleccionada="";patologiaSeleccionada="";estadoSeleccionado="";pacientesFiltrados=[...this.pacientes];aplicarFiltros(){let a=this.busqueda.trim().toLowerCase();this.pacientesFiltrados=this.pacientes.filter(t=>{let e=!a||t.nombre.toLowerCase().includes(a)||t.dni.toLowerCase().includes(a)||t.zona.toLowerCase().includes(a),i=!this.zonaSeleccionada||t.zona===this.zonaSeleccionada,c=!0;this.patologiaSeleccionada&&(this.patologiaSeleccionada==="HTA + DBT"?c=t.enfermedades.includes("HTA")&&t.enfermedades.includes("DBT"):this.patologiaSeleccionada==="Otras"?c=!t.enfermedades.includes("HTA")&&!t.enfermedades.includes("DBT"):c=t.enfermedades.includes(this.patologiaSeleccionada));let m=!0;return this.estadoSeleccionado==="Activo"?m=t.activo===!0:this.estadoSeleccionado==="Inactivo"&&(m=t.activo===!1),e&&i&&c&&m})}limpiarFiltros(){this.busqueda="",this.zonaSeleccionada="",this.patologiaSeleccionada="",this.estadoSeleccionado="",this.pacientesFiltrados=[...this.pacientes]}verFicha(a){this.router.navigate(["/pacientes",a.id])}nuevoPaciente(){console.log("Nuevo paciente")}static \u0275fac=function(t){return new(t||n)(zt(Nt))};static \u0275cmp=g({type:n,selectors:[["app-patients"]],decls:92,vars:7,consts:[[1,"patients-page"],[1,"page-header"],["type","button","routerLink","/pacientes/nuevo",1,"new-patient-button"],[1,"material-symbols-outlined"],[1,"patients-summary"],[1,"summary-text"],[1,"filters-container"],[1,"search-container"],["type","text","placeholder","Buscar por nombre, DNI o barrio...",3,"ngModelChange","input","ngModel"],[1,"filter-select",3,"ngModelChange","change","ngModel"],["value",""],["value","Zona Norte"],["value","Zona Centro"],["value","Zona Sur"],["value","Zona Oeste"],["value","HTA"],["value","DBT"],["value","HTA + DBT"],["value","Otras"],["value","Activo"],["value","Inactivo"],[1,"patients-card"],[1,"table-wrapper"],[1,"table-footer"],[1,"pagination"],["disabled",""],[1,"active"],[1,"patient-cell"],[1,"patient-avatar"],[1,"zone-badge"],[1,"pathologies"],[1,"pathology-badge",3,"hta","dbt"],[1,"control-date"],[1,"status-badge"],[1,"status-dot"],[1,"view-button",3,"click"],[1,"pathology-badge"]],template:function(t,e){t&1&&(s(0,"div",0)(1,"div",1)(2,"div")(3,"h1"),o(4,"Pacientes"),r(),s(5,"p"),o(6,"Gesti\xF3n y seguimiento de pacientes registrados"),r()(),s(7,"button",2)(8,"span",3),o(9,"add"),r(),o(10,` Nuevo paciente
`),r()(),s(11,"div",4)(12,"div",5)(13,"strong"),o(14),r(),s(15,"span"),o(16," pacientes registrados "),r()()(),s(17,"div",6)(18,"div",7)(19,"span",3),o(20," search "),r(),s(21,"input",8),ht("ngModelChange",function(c){return ut(e.busqueda,c)||(e.busqueda=c),c}),R("input",function(){return e.aplicarFiltros()}),r()(),s(22,"select",9),ht("ngModelChange",function(c){return ut(e.zonaSeleccionada,c)||(e.zonaSeleccionada=c),c}),R("change",function(){return e.aplicarFiltros()}),s(23,"option",10),o(24,` Todas las zonas
`),r(),s(25,"option",11),o(26,` Zona Norte
`),r(),s(27,"option",12),o(28,` Zona Centro
`),r(),s(29,"option",13),o(30,` Zona Sur
`),r(),s(31,"option",14),o(32,` Zona Oeste
`),r()(),s(33,"select",9),ht("ngModelChange",function(c){return ut(e.patologiaSeleccionada,c)||(e.patologiaSeleccionada=c),c}),R("change",function(){return e.aplicarFiltros()}),s(34,"option",10),o(35," Todas las patolog\xEDas "),r(),s(36,"option",15),o(37," HTA "),r(),s(38,"option",16),o(39," DBT "),r(),s(40,"option",17),o(41," HTA + DBT "),r(),s(42,"option",18),o(43," Otras "),r()(),s(44,"select",9),ht("ngModelChange",function(c){return ut(e.estadoSeleccionado,c)||(e.estadoSeleccionado=c),c}),R("change",function(){return e.aplicarFiltros()}),s(45,"option",10),o(46," Todos los estados "),r(),s(47,"option",19),o(48," Activo "),r(),s(49,"option",20),o(50," Inactivo "),r()()(),s(51,"div",21)(52,"div",22)(53,"table")(54,"thead")(55,"tr")(56,"th"),o(57,"Paciente"),r(),s(58,"th"),o(59,"Edad"),r(),s(60,"th"),o(61,"Zona"),r(),s(62,"th"),o(63,"Patolog\xEDa"),r(),s(64,"th"),o(65,"\xDAltimo control"),r(),s(66,"th"),o(67,"Estado"),r(),j(68,"th"),r()(),s(69,"tbody"),A(70,co,31,9,"tr",null,ro),r()()(),s(72,"div",23)(73,"span"),o(74),r(),s(75,"div",24)(76,"button",25)(77,"span",3),o(78," chevron_left "),r()(),s(79,"button",26),o(80," 1 "),r(),s(81,"button"),o(82," 2 "),r(),s(83,"button"),o(84," 3 "),r(),s(85,"span"),o(86,"..."),r(),s(87,"button"),o(88," 46 "),r(),s(89,"button")(90,"span",3),o(91," chevron_right "),r()()()()()()),t&2&&(d(14),h(" ",e.totalPacientes," "),d(7),pt("ngModel",e.busqueda),d(),pt("ngModel",e.zonaSeleccionada),d(11),pt("ngModel",e.patologiaSeleccionada),d(11),pt("ngModel",e.estadoSeleccionado),d(26),z(e.pacientesFiltrados),d(4),Dn(" Mostrando 1-",e.pacientes.length," de ",e.totalPacientes," pacientes "))},dependencies:[he,pe,ue,ce,me,de,le,se],styles:['@font-face{font-family:Material Symbols Outlined;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v374/kJF4BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZZLsYEpzC_1ver5Y0.woff2) format("woff2")}.material-symbols-outlined[_ngcontent-%COMP%]{font-family:Material Symbols Outlined;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}.patients-page[_ngcontent-%COMP%]{padding:28px 30px 40px;max-width:1600px;margin:0 auto}.page-header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:22px}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;color:#172b3a;font-size:27px;font-weight:700;letter-spacing:-.4px}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:6px 0 0;color:#7b8792;font-size:13px}.new-patient-button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;border:0;border-radius:9px;padding:10px 16px;background:#247ba0;color:#fff;font-size:13px;font-weight:600;cursor:pointer;transition:background .2s ease,transform .2s ease}.new-patient-button[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:19px}.new-patient-button[_ngcontent-%COMP%]:hover{background:#1e6888;transform:translateY(-1px)}.patients-summary[_ngcontent-%COMP%]{margin-bottom:16px}.summary-text[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:7px}.summary-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:19px;color:#263947}.summary-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px;color:#7c8994}.filters-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(250px,1fr) 180px 190px 170px;gap:10px;margin-bottom:16px}.search-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px;height:42px;padding:0 13px;background:#fff;border:1px solid #dce4e9;border-radius:9px;transition:border-color .2s ease,box-shadow .2s ease}.search-container[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{color:#7f8d98;font-size:20px}.search-container[_ngcontent-%COMP%]:focus-within{border-color:#247ba0;box-shadow:0 0 0 3px #247ba014}.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;border:0;outline:0;background:transparent;color:#34495e;font-size:13px}.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#9aa6af}.filter-select[_ngcontent-%COMP%]{height:42px;padding:0 12px;background:#fff;border:1px solid #dce4e9;border-radius:9px;color:#596a76;font-size:13px;outline:none;cursor:pointer}.filter-select[_ngcontent-%COMP%]:focus{border-color:#247ba0;box-shadow:0 0 0 3px #247ba014}.patients-card[_ngcontent-%COMP%]{background:#fff;border:1px solid #e7edf1;border-radius:14px;box-shadow:0 4px 15px #0f172a0b;overflow:hidden}.table-wrapper[_ngcontent-%COMP%]{width:100%;overflow-x:auto}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;min-width:900px}thead[_ngcontent-%COMP%]{background:#f8fafb}th[_ngcontent-%COMP%]{height:49px;padding:0 16px;text-align:left;color:#637482;font-size:12px;font-weight:600;border-bottom:1px solid #e7edf1}td[_ngcontent-%COMP%]{height:64px;padding:0 16px;color:#354957;font-size:13px;border-bottom:1px solid #edf1f3}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:background .15s ease}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#fafcfd}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}.patient-cell[_ngcontent-%COMP%]{display:flex;align-items:center;gap:11px}.patient-avatar[_ngcontent-%COMP%]{width:36px;height:36px;display:flex;align-items:center;justify-content:center;flex-shrink:0;border-radius:50%;background:#e7f2f6;color:#247ba0;font-size:14px;font-weight:700}.patient-cell[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{display:flex;flex-direction:column;gap:3px}.patient-cell[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child   strong[_ngcontent-%COMP%]{color:#263947;font-size:13px;font-weight:600}.patient-cell[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child   span[_ngcontent-%COMP%]{color:#98a3ab;font-size:10px}.zone-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding:5px 9px;border-radius:7px;background:#f1f5f7;color:#61717d;font-size:11px;font-weight:500}.pathologies[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:5px}.pathology-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding:5px 9px;border-radius:999px;background:#eef3f5;color:#637681;font-size:11px;font-weight:500}.pathology-badge.hta[_ngcontent-%COMP%]{background:#e7f3f7;color:#247ba0}.pathology-badge.dbt[_ngcontent-%COMP%]{background:#edf7f0;color:#3d9660}.control-date[_ngcontent-%COMP%]{color:#526471;font-size:12px}.status-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;color:#8a969f;font-size:11px}.status-badge.active[_ngcontent-%COMP%]{color:#3b8558}.status-dot[_ngcontent-%COMP%]{width:7px;height:7px;border-radius:50%;background:#b5bec4}.status-badge.active[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%]{background:#43a463}.view-button[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:3px;border:0;border-radius:8px;padding:8px 10px;background:#eef4f6;color:#315b70;font-size:11px;font-weight:600;cursor:pointer;transition:background .2s ease,color .2s ease}.view-button[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:16px}.view-button[_ngcontent-%COMP%]:hover{background:#dfecef;color:#247ba0}.table-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border-top:1px solid #edf1f3;color:#8996a0;font-size:11px}.pagination[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30px;height:30px;display:flex;align-items:center;justify-content:center;border:1px solid transparent;border-radius:7px;background:transparent;color:#697984;font-size:11px;cursor:pointer}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:18px}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled){background:#f1f5f7}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{color:#c2cbd0;cursor:default}.pagination[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:#247ba0;color:#fff}.pagination[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{padding:0 4px;color:#9ca6ad}@media(max-width:1100px){.filters-container[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.search-container[_ngcontent-%COMP%]{grid-column:1/-1}}@media(max-width:700px){.patients-page[_ngcontent-%COMP%]{padding:20px 15px 30px}.page-header[_ngcontent-%COMP%]{flex-direction:column;gap:15px}.new-patient-button[_ngcontent-%COMP%]{width:100%;justify-content:center}.filters-container[_ngcontent-%COMP%]{grid-template-columns:1fr}.search-container[_ngcontent-%COMP%]{grid-column:auto}.patients-card[_ngcontent-%COMP%]{border-radius:10px}.table-footer[_ngcontent-%COMP%]{flex-direction:column;gap:12px;align-items:flex-start}}']})};var Qn=(n,a)=>a.nombre;function lo(n,a){if(n&1&&(p(0,"div",15)(1,"div",18)(2,"div",19),K(3,"span",20),p(4,"strong"),o(5),u()(),p(6,"div",21)(7,"strong"),o(8),u(),p(9,"span"),o(10),u()()(),p(11,"div",22),K(12,"div",23),u()()),n&2){let t=a.$implicit;d(3),F("background",t.color),d(2),E(t.nombre),d(3),h(" ",t.pacientes," "),d(2),h(" ",t.porcentaje,"% "),d(2),F("width",t.porcentaje,"%")("background",t.color)}}function mo(n,a){if(n&1&&(p(0,"article",17)(1,"div",24)(2,"div",25)(3,"div",26)(4,"span",3),o(5," location_on "),u()(),p(6,"div")(7,"h2"),o(8),u(),p(9,"span"),o(10," Zona sanitaria "),u()()(),p(11,"span",27),o(12),u()(),p(13,"div",28)(14,"strong"),o(15),u(),p(16,"span"),o(17," pacientes "),u()(),p(18,"div",29)(19,"span",30),o(20," Distribuci\xF3n por condici\xF3n "),u(),p(21,"div",31)(22,"span"),o(23," HTA "),u(),p(24,"strong"),o(25),u()(),p(26,"div",31)(27,"span"),o(28," DBT "),u(),p(29,"strong"),o(30),u()(),p(31,"div",31)(32,"span"),o(33," HTA + DBT "),u(),p(34,"strong"),o(35),u()(),p(36,"div",31)(37,"span"),o(38," Otras "),u(),p(39,"strong"),o(40),u()()(),p(41,"div",32)(42,"span",3),o(43," calendar_today "),u(),p(44,"span"),o(45," \xDAltimo control "),u(),p(46,"strong"),o(47),u()()()),n&2){let t=a.$implicit;d(3),F("background",t.color+"18")("color",t.color),d(5),h(" ",t.nombre," "),d(4),h(" ",t.porcentaje,"% "),d(3),h(" ",t.pacientes," "),d(10),h(" ",t.hta," "),d(5),h(" ",t.dbt," "),d(5),h(" ",t.htaDbt," "),d(5),h(" ",t.otros," "),d(7),h(" ",t.ultimoControl," ")}}var be=class n{totalPacientes=458;zonas=[{nombre:"Zona Norte",pacientes:142,porcentaje:31,hta:58,dbt:31,htaDbt:22,otros:31,ultimoControl:"20/09/2026",color:"#247ba0"},{nombre:"Zona Centro",pacientes:126,porcentaje:27,hta:54,dbt:28,htaDbt:18,otros:26,ultimoControl:"19/09/2026",color:"#3d9660"},{nombre:"Zona Sur",pacientes:108,porcentaje:24,hta:46,dbt:25,htaDbt:16,otros:21,ultimoControl:"18/09/2026",color:"#79539c"},{nombre:"Zona Oeste",pacientes:82,porcentaje:18,hta:35,dbt:17,htaDbt:11,otros:19,ultimoControl:"17/09/2026",color:"#c18a1c"}];get zonaMayorCantidad(){return this.zonas.reduce((a,t)=>t.pacientes>a.pacientes?t:a)}get promedioPacientes(){return Math.round(this.totalPacientes/this.zonas.length)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=g({type:n,selectors:[["app-zonas"]],decls:75,vars:6,consts:[[1,"zones-page"],[1,"page-header"],[1,"total-badge"],[1,"material-symbols-outlined"],[1,"summary-grid"],[1,"summary-card"],[1,"summary-icon","patients"],[1,"summary-content"],[1,"summary-icon","zones"],[1,"summary-icon","average"],[1,"summary-icon","main"],[1,"distribution-card"],[1,"section-header"],[1,"material-symbols-outlined","section-header-icon"],[1,"distribution-list"],[1,"distribution-item"],[1,"zones-grid"],[1,"zone-card"],[1,"distribution-info"],[1,"zone-name"],[1,"zone-color"],[1,"zone-numbers"],[1,"progress"],[1,"progress-value"],[1,"zone-card-header"],[1,"zone-title"],[1,"zone-icon"],[1,"percentage"],[1,"zone-total"],[1,"pathology-section"],[1,"section-label"],[1,"pathology-row"],[1,"zone-card-footer"]],template:function(t,e){t&1&&(p(0,"div",0)(1,"div",1)(2,"div")(3,"h1"),o(4,"Zonas sanitarias"),u(),p(5,"p"),o(6," Distribuci\xF3n y seguimiento de pacientes por zona "),u()(),p(7,"div",2)(8,"span",3),o(9," groups "),u(),p(10,"div")(11,"strong"),o(12),u(),p(13,"span"),o(14,"pacientes registrados"),u()()()(),p(15,"div",4)(16,"div",5)(17,"div",6)(18,"span",3),o(19," groups "),u()(),p(20,"div",7)(21,"span"),o(22,"Total de pacientes"),u(),p(23,"strong"),o(24),u(),p(25,"small"),o(26,"Pacientes registrados"),u()()(),p(27,"div",5)(28,"div",8)(29,"span",3),o(30," location_on "),u()(),p(31,"div",7)(32,"span"),o(33,"Zonas activas"),u(),p(34,"strong"),o(35),u(),p(36,"small"),o(37,"Zonas sanitarias"),u()()(),p(38,"div",5)(39,"div",9)(40,"span",3),o(41," analytics "),u()(),p(42,"div",7)(43,"span"),o(44,"Promedio por zona"),u(),p(45,"strong"),o(46),u(),p(47,"small"),o(48,"Pacientes por zona"),u()()(),p(49,"div",5)(50,"div",10)(51,"span",3),o(52," trending_up "),u()(),p(53,"div",7)(54,"span"),o(55,"Mayor concentraci\xF3n"),u(),p(56,"strong"),o(57),u(),p(58,"small"),o(59),u()()()(),p(60,"section",11)(61,"div",12)(62,"div")(63,"h2"),o(64,"Distribuci\xF3n de pacientes"),u(),p(65,"p"),o(66," Cantidad de pacientes registrados en cada zona sanitaria "),u()(),p(67,"span",13),o(68," pie_chart "),u()(),p(69,"div",14),A(70,lo,13,9,"div",15,Qn),u()(),p(72,"div",16),A(73,mo,48,12,"article",17,Qn),u()()),t&2&&(d(12),E(e.totalPacientes),d(12),E(e.totalPacientes),d(11),E(e.zonas.length),d(11),E(e.promedioPacientes),d(11),E(e.zonaMayorCantidad.pacientes),d(2),E(e.zonaMayorCantidad.nombre),d(11),z(e.zonas),d(3),z(e.zonas))},dependencies:[Lt],styles:['@font-face{font-family:Material Symbols Outlined;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v374/kJF4BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZZLsYEpzC_1ver5Y0.woff2) format("woff2")}.material-symbols-outlined[_ngcontent-%COMP%]{font-family:Material Symbols Outlined;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}[_nghost-%COMP%]{display:block}.zones-page[_ngcontent-%COMP%]{max-width:1500px;margin:0 auto;padding:22px 28px 30px}.page-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;color:#172b3a;font-size:25px;font-weight:700;letter-spacing:-.3px}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 0;color:#718096;font-size:13px}.total-badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px;padding:9px 14px;border:1px solid #e8edf2;border-radius:10px;background:#fff;box-shadow:0 2px 8px #0f172a0a;color:#247ba0}.total-badge[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:21px}.total-badge[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.total-badge[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#263947;font-size:13px}.total-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8996a3;font-size:10px}.summary-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:16px}.summary-card[_ngcontent-%COMP%]{display:flex;align-items:center;gap:13px;min-height:86px;padding:14px 16px;border:1px solid #e9eef2;border-radius:13px;background:#fff;box-shadow:0 3px 12px #0f172a0b}.summary-icon[_ngcontent-%COMP%]{width:42px;height:42px;min-width:42px;display:flex;align-items:center;justify-content:center;border-radius:11px}.summary-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:21px}.summary-icon.patients[_ngcontent-%COMP%]{background:#e8f3f7;color:#247ba0}.summary-icon.zones[_ngcontent-%COMP%]{background:#edf7f0;color:#3d9660}.summary-icon.average[_ngcontent-%COMP%]{background:#f5f0fa;color:#79539c}.summary-icon.main[_ngcontent-%COMP%]{background:#fff5df;color:#c18a1c}.summary-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:0}.summary-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#667685;font-size:11px}.summary-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{margin-top:3px;color:#182b3a;font-size:22px;line-height:1.1}.summary-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-top:3px;color:#9aa5ad;font-size:10px}.distribution-card[_ngcontent-%COMP%]{margin-bottom:16px;padding:18px;border:1px solid #e9eef2;border-radius:14px;background:#fff;box-shadow:0 3px 12px #0f172a0b}.section-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:17px}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#1b2b38;font-size:15px;font-weight:700}.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0;color:#8996a3;font-size:11px}.section-header-icon[_ngcontent-%COMP%]{color:#9aa5ad;font-size:21px}.distribution-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}.distribution-item[_ngcontent-%COMP%]{min-width:0}.distribution-info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:7px}.zone-name[_ngcontent-%COMP%]{display:flex;align-items:center;gap:7px;min-width:0}.zone-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#52606d;font-size:12px;font-weight:600}.zone-color[_ngcontent-%COMP%]{width:8px;height:8px;flex-shrink:0;border-radius:50%}.zone-numbers[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px}.zone-numbers[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#273b4a;font-size:13px}.zone-numbers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8996a3;font-size:10px}.progress[_ngcontent-%COMP%]{width:100%;height:7px;overflow:hidden;background:#e9eef1;border-radius:999px}.progress-value[_ngcontent-%COMP%]{height:100%;border-radius:inherit;transition:width .5s ease}.zones-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.zone-card[_ngcontent-%COMP%]{padding:16px;border:1px solid #e9eef2;border-radius:14px;background:#fff;box-shadow:0 3px 12px #0f172a0b;transition:transform .2s ease,box-shadow .2s ease}.zone-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 8px 22px #0f172a14}.zone-card-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.zone-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.zone-icon[_ngcontent-%COMP%]{width:38px;height:38px;display:flex;align-items:center;justify-content:center;border-radius:10px}.zone-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:20px}.zone-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#263947;font-size:14px;font-weight:700}.zone-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;margin-top:3px;color:#9aa5ad;font-size:10px}.percentage[_ngcontent-%COMP%]{padding:4px 7px;border-radius:6px;background:#f4f7f8;color:#52606d;font-size:10px;font-weight:600}.zone-total[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:7px;margin-top:17px;padding-bottom:14px;border-bottom:1px solid #eef1f4}.zone-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#172b3a;font-size:28px;line-height:1}.zone-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8996a3;font-size:11px}.pathology-section[_ngcontent-%COMP%]{padding:13px 0 11px}.section-label[_ngcontent-%COMP%]{display:block;margin-bottom:7px;color:#9aa5ad;font-size:10px;font-weight:600}.pathology-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:4px 0}.pathology-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#667685;font-size:11px}.pathology-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#334454;font-size:11px;font-weight:600}.zone-card-footer[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;padding-top:10px;border-top:1px solid #eef1f4;color:#96a0aa;font-size:9px}.zone-card-footer[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:14px}.zone-card-footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{margin-left:auto;color:#52606d;font-size:10px;font-weight:600}@media(max-width:1200px){.summary-grid[_ngcontent-%COMP%], .distribution-list[_ngcontent-%COMP%], .zones-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media(max-width:700px){.zones-page[_ngcontent-%COMP%]{padding:18px 14px 25px}.page-header[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column;gap:13px}.summary-grid[_ngcontent-%COMP%], .distribution-list[_ngcontent-%COMP%], .zones-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}']})};var _e=(n,a)=>a.nombre;function po(n,a){if(n&1&&(p(0,"option",5),o(1),u()),n&2){let t=a.$implicit;Ze("value",t.nombre),d(),h(" ",t.nombre," ")}}function uo(n,a){if(n&1&&(p(0,"div",18)(1,"div",27)(2,"span"),o(3),u(),p(4,"strong"),o(5),u()(),p(6,"div",28),K(7,"div",29),u(),p(8,"span",30),o(9),u()()),n&2){let t=a.$implicit;d(3),h(" ",t.nombre," "),d(2),h(" ",t.pacientes," "),d(2),F("width",t.porcentaje,"%"),d(2),h(" ",t.porcentaje,"% ")}}function ho(n,a){if(n&1&&(p(0,"div",18)(1,"div",27)(2,"span"),o(3),u(),p(4,"strong"),o(5),u()(),p(6,"div",28),K(7,"div",31),u(),p(8,"span",30),o(9),u()()),n&2){let t=a.$implicit;d(3),h(" ",t.nombre," "),d(2),h(" ",t.pacientes," "),d(2),yt(t.clase),F("width",t.porcentaje,"%"),d(2),h(" ",t.porcentaje,"% ")}}function fo(n,a){if(n&1&&(p(0,"div",20)(1,"div",32)(2,"span"),o(3),u(),p(4,"strong"),o(5),u()(),p(6,"div",28),K(7,"div",33),u()()),n&2){let t=a.$implicit;d(3),h(" ",t.nombre," "),d(2),h(" ",t.pacientes," "),d(2),F("width",t.porcentaje,"%")}}var ve=class n{totalPacientes=458;pacientesActivos=431;pacientesInactivos=27;porcentajeActivos=94;porcentajeInactivos=6;zonas=[{nombre:"Zona Norte",pacientes:142,porcentaje:31},{nombre:"Zona Centro",pacientes:128,porcentaje:28},{nombre:"Zona Sur",pacientes:109,porcentaje:24},{nombre:"Zona Oeste",pacientes:79,porcentaje:17}];patologias=[{nombre:"HTA",pacientes:184,porcentaje:40,clase:"hta"},{nombre:"DBT",pacientes:96,porcentaje:21,clase:"dbt"},{nombre:"HTA + DBT",pacientes:73,porcentaje:16,clase:"combined"},{nombre:"Otras",pacientes:105,porcentaje:23,clase:"other"}];gruposEdad=[{nombre:"18 - 39 a\xF1os",pacientes:64,porcentaje:14},{nombre:"40 - 59 a\xF1os",pacientes:177,porcentaje:39},{nombre:"60 - 74 a\xF1os",pacientes:151,porcentaje:33},{nombre:"75 a\xF1os o m\xE1s",pacientes:66,porcentaje:14}];zonaSeleccionada="Todas las zonas";cambiarZona(a){this.zonaSeleccionada=a}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=g({type:n,selectors:[["app-estadisticas"]],decls:129,vars:5,consts:[[1,"statistics-page"],[1,"page-header"],[1,"header-filter"],[1,"material-symbols-outlined"],[3,"change","value"],[3,"value"],[1,"stats-grid"],[1,"stat-card"],[1,"stat-icon","patients"],[1,"stat-content"],[1,"stat-icon","hta"],[1,"stat-icon","dbt"],[1,"stat-icon","combined"],[1,"content-grid"],[1,"panel"],[1,"panel-header"],[1,"material-symbols-outlined","panel-icon"],[1,"bar-list"],[1,"bar-item"],[1,"age-list"],[1,"age-item"],[1,"status-content"],[1,"status-circle"],[1,"status-list"],[1,"status-item"],[1,"status-indicator","active"],[1,"status-indicator","inactive"],[1,"bar-info"],[1,"progress"],[1,"progress-value","zone"],[1,"percentage"],[1,"progress-value"],[1,"age-label"],[1,"progress-value","age"]],template:function(t,e){t&1&&(p(0,"div",0)(1,"div",1)(2,"div")(3,"h1"),o(4,"Estad\xEDsticas"),u(),p(5,"p"),o(6," An\xE1lisis general de los pacientes registrados "),u()(),p(7,"div",2)(8,"span",3),o(9," location_on "),u(),p(10,"select",4),In("change",function(c){return e.cambiarZona(c.target.value)}),p(11,"option"),o(12,"Todas las zonas"),u(),A(13,po,2,2,"option",5,_e),u()()(),p(15,"div",6)(16,"div",7)(17,"div",8)(18,"span",3),o(19," groups "),u()(),p(20,"div",9)(21,"span"),o(22,"Total de pacientes"),u(),p(23,"strong"),o(24),u(),p(25,"small"),o(26,"Pacientes registrados"),u()()(),p(27,"div",7)(28,"div",10)(29,"span",3),o(30," favorite "),u()(),p(31,"div",9)(32,"span"),o(33,"HTA"),u(),p(34,"strong"),o(35,"184"),u(),p(36,"small"),o(37,"40% del total"),u()()(),p(38,"div",7)(39,"div",11)(40,"span",3),o(41," bloodtype "),u()(),p(42,"div",9)(43,"span"),o(44,"DBT"),u(),p(45,"strong"),o(46,"96"),u(),p(47,"small"),o(48,"21% del total"),u()()(),p(49,"div",7)(50,"div",12)(51,"span",3),o(52," medical_services "),u()(),p(53,"div",9)(54,"span"),o(55,"HTA + DBT"),u(),p(56,"strong"),o(57,"73"),u(),p(58,"small"),o(59,"16% del total"),u()()()(),p(60,"div",13)(61,"section",14)(62,"div",15)(63,"div")(64,"h2"),o(65,"Pacientes por zona"),u(),p(66,"p"),o(67," Distribuci\xF3n territorial de pacientes "),u()(),p(68,"span",16),o(69," map "),u()(),p(70,"div",17),A(71,uo,10,5,"div",18,_e),u()(),p(73,"section",14)(74,"div",15)(75,"div")(76,"h2"),o(77,"Distribuci\xF3n de patolog\xEDas"),u(),p(78,"p"),o(79," Principales condiciones registradas "),u()(),p(80,"span",16),o(81," monitoring "),u()(),p(82,"div",17),A(83,ho,10,7,"div",18,_e),u()()(),p(85,"div",13)(86,"section",14)(87,"div",15)(88,"div")(89,"h2"),o(90,"Distribuci\xF3n por edad"),u(),p(91,"p"),o(92," Pacientes agrupados por rango etario "),u()(),p(93,"span",16),o(94," groups "),u()(),p(95,"div",19),A(96,fo,8,4,"div",20,_e),u()(),p(98,"section",14)(99,"div",15)(100,"div")(101,"h2"),o(102,"Estado de pacientes"),u(),p(103,"p"),o(104," Situaci\xF3n actual de los registros "),u()(),p(105,"span",16),o(106," verified "),u()(),p(107,"div",21)(108,"div",22)(109,"div")(110,"strong"),o(111),u(),p(112,"span"),o(113," activos "),u()()(),p(114,"div",23)(115,"div",24),K(116,"span",25),p(117,"div")(118,"span"),o(119,"Activos"),u(),p(120,"strong"),o(121),u()()(),p(122,"div",24),K(123,"span",26),p(124,"div")(125,"span"),o(126,"Inactivos"),u(),p(127,"strong"),o(128),u()()()()()()()()),t&2&&(d(10),Ze("value",e.zonaSeleccionada),d(3),z(e.zonas),d(11),E(e.totalPacientes),d(47),z(e.zonas),d(12),z(e.patologias),d(13),z(e.gruposEdad),d(15),h(" ",e.porcentajeActivos,"% "),d(10),E(e.pacientesActivos),d(7),E(e.pacientesInactivos))},dependencies:[Lt],styles:['[_nghost-%COMP%]{display:block}.statistics-page[_ngcontent-%COMP%]{max-width:1600px;margin:0 auto;padding:26px 28px 35px}.page-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;color:#172b3a;font-size:26px;font-weight:700;letter-spacing:-.4px}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:6px 0 0;color:#718096;font-size:14px}.header-filter[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;height:38px;padding:0 12px;border:1px solid #e1e8ed;border-radius:9px;background:#fff;color:#63717c}.header-filter[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:19px;color:#247ba0}.header-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:0;outline:none;background:transparent;color:#52606d;font-family:inherit;font-size:12px;cursor:pointer}.stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:16px}.stat-card[_ngcontent-%COMP%]{min-height:106px;display:flex;align-items:center;gap:15px;padding:17px 18px;background:#fff;border:1px solid #e9eef2;border-radius:14px;box-shadow:0 3px 12px #0f172a0b}.stat-icon[_ngcontent-%COMP%]{width:47px;height:47px;min-width:47px;display:flex;align-items:center;justify-content:center;border-radius:12px}.stat-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:23px}.stat-icon.patients[_ngcontent-%COMP%]{background:#e8f3f7;color:#247ba0}.stat-icon.hta[_ngcontent-%COMP%]{background:#edf5f8;color:#247ba0}.stat-icon.dbt[_ngcontent-%COMP%]{background:#edf7f0;color:#3d9660}.stat-icon.combined[_ngcontent-%COMP%]{background:#fbeeee;color:#d45b5b}.stat-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.stat-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#667685;font-size:12px}.stat-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{margin-top:4px;color:#182b3a;font-size:25px;line-height:1.1}.stat-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-top:4px;color:#8996a3;font-size:10px}.content-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px}.panel[_ngcontent-%COMP%]{padding:19px;background:#fff;border:1px solid #e9eef2;border-radius:14px;box-shadow:0 3px 12px #0f172a0b}.panel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:21px}.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#1b2b38;font-size:16px;font-weight:700}.panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 0;color:#8996a3;font-size:12px}.panel-icon[_ngcontent-%COMP%]{color:#9aa8b2;font-size:21px}.bar-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:17px}.bar-item[_ngcontent-%COMP%]{position:relative}.bar-info[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:7px}.bar-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#52606d;font-size:13px}.bar-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#263947;font-size:13px}.progress[_ngcontent-%COMP%]{width:100%;height:8px;overflow:hidden;border-radius:999px;background:#e9eef1}.progress-value[_ngcontent-%COMP%]{height:100%;border-radius:inherit;transition:width .5s ease}.progress-value.zone[_ngcontent-%COMP%], .progress-value.hta[_ngcontent-%COMP%]{background:#247ba0}.progress-value.dbt[_ngcontent-%COMP%]{background:#3d9660}.progress-value.combined[_ngcontent-%COMP%]{background:#d45b5b}.progress-value.other[_ngcontent-%COMP%]{background:#d6a638}.progress-value.age[_ngcontent-%COMP%]{background:#79539c}.percentage[_ngcontent-%COMP%]{position:absolute;right:0;top:28px;color:#8996a3;font-size:10px}.age-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:18px}.age-item[_ngcontent-%COMP%]{width:100%}.age-label[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:7px}.age-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#52606d;font-size:13px}.age-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#263947;font-size:13px}.status-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:35px;min-height:150px}.status-circle[_ngcontent-%COMP%]{width:145px;height:145px;min-width:145px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:radial-gradient(circle,#ffffff 57%,transparent 58%),conic-gradient(#3d9660 0 94%,#e8edf0 94% 100%)}.status-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.status-circle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#263947;font-size:25px}.status-circle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:2px;color:#8996a3;font-size:11px}.status-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:17px}.status-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.status-item[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%]{width:9px;height:9px;border-radius:50%}.status-item[_ngcontent-%COMP%]   .status-indicator.active[_ngcontent-%COMP%]{background:#3d9660}.status-item[_ngcontent-%COMP%]   .status-indicator.inactive[_ngcontent-%COMP%]{background:#cbd4da}.status-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px}.status-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#74818c;font-size:12px}.status-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#263947;font-size:17px}@media(max-width:1100px){.stats-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.content-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media(max-width:700px){.statistics-page[_ngcontent-%COMP%]{padding:20px 16px 30px}.page-header[_ngcontent-%COMP%]{flex-direction:column;gap:15px}.header-filter[_ngcontent-%COMP%]{width:100%;box-sizing:border-box}.stats-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.status-content[_ngcontent-%COMP%]{gap:20px}.status-circle[_ngcontent-%COMP%]{width:120px;height:120px;min-width:120px}}@media(max-width:500px){.status-content[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}}.material-symbols-outlined[_ngcontent-%COMP%]{font-family:Material Symbols Outlined!important;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased;font-feature-settings:"liga"}']})};var go=(n,a)=>a.value,$n=(n,a)=>a.id;function bo(n,a){n&1&&(s(0,"span",25)(1,"span",5),o(2," check_circle "),r()())}function _o(n,a){if(n&1){let t=it();s(0,"button",22),R("click",function(){let i=et(t).$implicit,c=V();return nt(c.seleccionarTipo(i.value))}),s(1,"span",23)(2,"span",5),o(3),r()(),s(4,"span",24)(5,"strong"),o(6),r(),s(7,"small"),o(8),r()(),N(9,bo,3,0,"span",25),r()}if(n&2){let t=a.$implicit,e=V();b("selected",e.tipoInforme===t.value),d(3),h(" ",t.icono," "),d(3),h(" ",t.nombre," "),d(2),h(" ",t.descripcion," "),d(),B(e.tipoInforme===t.value?9:-1)}}function vo(n,a){if(n&1&&(s(0,"option",13),o(1),r()),n&2){let t=a.$implicit;Qt("value",t),d(),h(" ",t," ")}}function xo(n,a){n&1&&(s(0,"div",31)(1,"div",35)(2,"span",5),o(3," groups "),r(),s(4,"div")(5,"small"),o(6,"Total pacientes"),r(),s(7,"strong"),o(8,"458"),r()()(),s(9,"div",35)(10,"span",5),o(11," favorite "),r(),s(12,"div")(13,"small"),o(14,"HTA"),r(),s(15,"strong"),o(16,"184"),r()()(),s(17,"div",35)(18,"span",5),o(19," bloodtype "),r(),s(20,"div")(21,"small"),o(22,"DBT"),r(),s(23,"strong"),o(24,"96"),r()()(),s(25,"div",35)(26,"span",5),o(27," verified "),r(),s(28,"div")(29,"small"),o(30,"Activos"),r(),s(31,"strong"),o(32,"431"),r()()()())}function yo(n,a){if(n&1){let t=it();s(0,"tr")(1,"td")(2,"strong"),o(3),r()(),s(4,"td"),o(5),r(),s(6,"td"),o(7),r(),s(8,"td"),o(9),r(),s(10,"td"),o(11),r(),s(12,"td")(13,"button",43),R("click",function(){let i=et(t).$implicit,c=V(3);return nt(c.verPaciente(i.id))}),o(14," Ver paciente "),r()()()}if(n&2){let t=a.$implicit;d(3),h(" ",t.nombre," "),d(2),h(" ",t.edad," a\xF1os "),d(2),h(" ",t.zona," "),d(2),h(" ",t.clasificacion," "),d(2),h(" ",t.ultimoControl," ")}}function wo(n,a){if(n&1&&(s(0,"div",32)(1,"div",36)(2,"div")(3,"span"),o(4,"Total HTA"),r(),s(5,"strong"),o(6,"128"),r()(),s(7,"div")(8,"span"),o(9,"Control reciente"),r(),s(10,"strong",37),o(11,"96"),r()(),s(12,"div")(13,"span"),o(14,"Sin control reciente"),r(),s(15,"strong",38),o(16,"32"),r()()(),s(17,"div",39)(18,"div",40)(19,"div")(20,"h3"),o(21,"Pacientes con HTA"),r(),s(22,"p"),o(23," Pacientes incluidos en el informe "),r()(),s(24,"span",41),o(25),r()(),s(26,"div",42)(27,"table")(28,"thead")(29,"tr")(30,"th"),o(31,"Paciente"),r(),s(32,"th"),o(33,"Edad"),r(),s(34,"th"),o(35,"Zona"),r(),s(36,"th"),o(37,"Clasificaci\xF3n"),r(),s(38,"th"),o(39,"\xDAltimo control"),r(),j(40,"th"),r()(),s(41,"tbody"),A(42,yo,15,5,"tr",null,$n),r()()()()()),n&2){let t=V(2);d(25),h(" ",t.pacienteHTA.length," mostrados "),d(17),z(t.pacienteHTA)}}function Co(n,a){if(n&1){let t=it();s(0,"tr")(1,"td")(2,"strong"),o(3),r()(),s(4,"td"),o(5),r(),s(6,"td"),o(7),r(),s(8,"td"),o(9),r(),s(10,"td"),o(11),r(),s(12,"td")(13,"button",43),R("click",function(){let i=et(t).$implicit,c=V(3);return nt(c.verPaciente(i.id))}),o(14," Ver paciente "),r()()()}if(n&2){let t=a.$implicit;d(3),h(" ",t.nombre," "),d(2),h(" ",t.edad," a\xF1os "),d(2),h(" ",t.zona," "),d(2),h(" ",t.clasificacion," "),d(2),h(" ",t.ultimoControl," ")}}function Mo(n,a){if(n&1&&(s(0,"div",32)(1,"div",36)(2,"div")(3,"span"),o(4,"Total DBT"),r(),s(5,"strong"),o(6,"74"),r()(),s(7,"div")(8,"span"),o(9,"Tipo 1"),r(),s(10,"strong",44),o(11,"8"),r()(),s(12,"div")(13,"span"),o(14,"Tipo 2"),r(),s(15,"strong",37),o(16,"63"),r()(),s(17,"div")(18,"span"),o(19,"Otros"),r(),s(20,"strong",45),o(21,"3"),r()()(),s(22,"div",39)(23,"div",40)(24,"div")(25,"h3"),o(26,"Pacientes con DBT"),r(),s(27,"p"),o(28," Pacientes incluidos en el informe "),r()(),s(29,"span",41),o(30),r()(),s(31,"div",42)(32,"table")(33,"thead")(34,"tr")(35,"th"),o(36,"Paciente"),r(),s(37,"th"),o(38,"Edad"),r(),s(39,"th"),o(40,"Zona"),r(),s(41,"th"),o(42,"Tipo"),r(),s(43,"th"),o(44,"\xDAltimo control"),r(),j(45,"th"),r()(),s(46,"tbody"),A(47,Co,15,5,"tr",null,$n),r()()()()()),n&2){let t=V(2);d(30),h(" ",t.pacienteDBT.length," mostrados "),d(17),z(t.pacienteDBT)}}function ko(n,a){n&1&&(s(0,"div",33)(1,"div",46)(2,"span"),o(3,"Zona Norte"),r(),s(4,"strong"),o(5,"142 pacientes"),r()(),s(6,"div",46)(7,"span"),o(8,"Zona Centro"),r(),s(9,"strong"),o(10,"128 pacientes"),r()(),s(11,"div",46)(12,"span"),o(13,"Zona Sur"),r(),s(14,"strong"),o(15,"109 pacientes"),r()(),s(16,"div",46)(17,"span"),o(18,"Zona Oeste"),r(),s(19,"strong"),o(20,"79 pacientes"),r()()())}function Eo(n,a){n&1&&(s(0,"div",34)(1,"span",5),o(2," event_available "),r(),s(3,"h3"),o(4," Informe de controles pendientes "),r(),s(5,"p"),o(6," Ac\xE1 se mostrar\xE1n los pacientes que no tengan un control reciente. "),r()())}function Oo(n,a){if(n&1&&(s(0,"section",21)(1,"div",26)(2,"div")(3,"span",27),o(4," VISTA PREVIA "),r(),s(5,"h2"),o(6),r(),s(7,"p"),o(8),r()(),s(9,"div",28)(10,"button",29)(11,"span",5),o(12," print "),r(),o(13," Imprimir "),r(),s(14,"button",30)(15,"span",5),o(16," picture_as_pdf "),r(),o(17," Descargar PDF "),r()()(),N(18,xo,33,0,"div",31),N(19,wo,44,1,"div",32),N(20,Mo,49,1,"div",32),N(21,ko,21,0,"div",33),N(22,Eo,7,0,"div",34),r()),n&2){let t=V();d(6),h(" ",t.tituloInforme," "),d(2),h(" ",t.descripcionInforme," "),d(10),B(t.tipoInforme==="general"?18:-1),d(),B(t.tipoInforme==="hta"?19:-1),d(),B(t.tipoInforme==="dbt"?20:-1),d(),B(t.tipoInforme==="zonas"?21:-1),d(),B(t.tipoInforme==="controles"?22:-1)}}var xe=class n{constructor(a){this.router=a}router;tipoInforme="general";zonaSeleccionada="Todas las zonas";fechaDesde="";fechaHasta="";informeGenerado=!1;zonas=["Todas las zonas","Zona Norte","Zona Centro","Zona Sur","Zona Oeste"];tiposInforme=[{value:"general",nombre:"Resumen general",descripcion:"Situaci\xF3n general de los pacientes",icono:"dashboard"},{value:"hta",nombre:"Hipertensi\xF3n arterial",descripcion:"Pacientes registrados con HTA",icono:"favorite"},{value:"dbt",nombre:"Diabetes",descripcion:"Pacientes registrados con DBT",icono:"bloodtype"},{value:"zonas",nombre:"Pacientes por zona",descripcion:"Distribuci\xF3n territorial",icono:"location_on"},{value:"controles",nombre:"Controles pendientes",descripcion:"Pacientes sin control reciente",icono:"event_busy"}];pacienteHTA=[{id:2,nombre:"Mar\xEDa L\xF3pez",edad:64,zona:"Zona Centro",clasificacion:"Registrada",ultimoControl:"10/09/2026"},{id:4,nombre:"Ana Ram\xEDrez",edad:52,zona:"Zona Norte",clasificacion:"Registrada",ultimoControl:"12/09/2026"},{id:1,nombre:"Juan P\xE9rez",edad:58,zona:"Zona Norte",clasificacion:"Registrada",ultimoControl:"15/09/2026"}];pacienteDBT=[{id:3,nombre:"Pedro G\xF3mez",edad:71,zona:"Zona Sur",clasificacion:"Tipo 2",ultimoControl:"18/09/2026"},{id:1,nombre:"Juan P\xE9rez",edad:58,zona:"Zona Norte",clasificacion:"Tipo 2",ultimoControl:"15/09/2026"}];seleccionarTipo(a){this.tipoInforme=a,this.informeGenerado=!1}generarInforme(){this.informeGenerado=!0,console.log("Informe generado",{tipo:this.tipoInforme,zona:this.zonaSeleccionada,desde:this.fechaDesde,hasta:this.fechaHasta})}limpiar(){this.tipoInforme="general",this.zonaSeleccionada="Todas las zonas",this.fechaDesde="",this.fechaHasta="",this.informeGenerado=!1}verPaciente(a){this.router.navigate(["/pacientes",a])}get tituloInforme(){switch(this.tipoInforme){case"hta":return"Hipertensi\xF3n arterial (HTA)";case"dbt":return"Diabetes (DBT)";case"zonas":return"Pacientes por zona";case"controles":return"Controles pendientes";default:return"Resumen general"}}get descripcionInforme(){switch(this.tipoInforme){case"hta":return"Detalle de pacientes registrados con hipertensi\xF3n arterial";case"dbt":return"Detalle de pacientes registrados con diabetes";case"zonas":return"Distribuci\xF3n de pacientes seg\xFAn zona sanitaria";case"controles":return"Pacientes que requieren seguimiento";default:return"Resumen general de la situaci\xF3n de los pacientes"}}static \u0275fac=function(t){return new(t||n)(zt(Nt))};static \u0275cmp=g({type:n,selectors:[["app-informes"]],decls:46,vars:4,consts:[[1,"reports-page"],[1,"page-header"],[1,"generator-card"],[1,"section-header"],[1,"section-icon"],[1,"material-symbols-outlined"],[1,"field-group"],[1,"report-types"],["type","button",1,"report-type",3,"selected"],[1,"filters-grid"],[1,"form-field"],["for","zona"],["id","zona",3,"ngModelChange","ngModel"],[3,"value"],["for","desde"],["id","desde","type","date",3,"ngModelChange","ngModel"],["for","hasta"],["id","hasta","type","date",3,"ngModelChange","ngModel"],[1,"generator-actions"],["type","button",1,"clear-button",3,"click"],["type","button",1,"generate-button",3,"click"],[1,"preview-section"],["type","button",1,"report-type",3,"click"],[1,"type-icon"],[1,"type-content"],[1,"selected-icon"],[1,"preview-header"],[1,"preview-label"],[1,"preview-actions"],["type","button",1,"secondary-button"],["type","button",1,"primary-button"],[1,"summary-grid"],[1,"report-result"],[1,"zone-report"],[1,"empty-report"],[1,"summary-card"],[1,"result-stats"],[1,"green"],[1,"red"],[1,"table-card"],[1,"table-header"],[1,"count-badge"],[1,"table-wrapper"],["type","button",1,"view-button",3,"click"],[1,"blue"],[1,"orange"],[1,"zone-report-row"]],template:function(t,e){t&1&&(s(0,"div",0)(1,"div",1)(2,"div")(3,"h1"),o(4,"Generar informes"),r(),s(5,"p"),o(6," Seleccion\xE1 los criterios para generar un informe de pacientes "),r()()(),s(7,"section",2)(8,"div",3)(9,"div",4)(10,"span",5),o(11," description "),r()(),s(12,"div")(13,"h2"),o(14,"Configuraci\xF3n del informe"),r(),s(15,"p"),o(16," Eleg\xED el tipo de informe y los filtros que quer\xE9s aplicar "),r()()(),s(17,"div",6)(18,"label"),o(19," Tipo de informe "),r(),s(20,"div",7),A(21,_o,10,6,"button",8,go),r()(),s(23,"div",9)(24,"div",10)(25,"label",11),o(26," Zona sanitaria "),r(),s(27,"select",12),ht("ngModelChange",function(c){return ut(e.zonaSeleccionada,c)||(e.zonaSeleccionada=c),c}),A(28,vo,2,2,"option",13,re),r()(),s(30,"div",10)(31,"label",14),o(32," Desde "),r(),s(33,"input",15),ht("ngModelChange",function(c){return ut(e.fechaDesde,c)||(e.fechaDesde=c),c}),r()(),s(34,"div",10)(35,"label",16),o(36," Hasta "),r(),s(37,"input",17),ht("ngModelChange",function(c){return ut(e.fechaHasta,c)||(e.fechaHasta=c),c}),r()()(),s(38,"div",18)(39,"button",19),R("click",function(){return e.limpiar()}),o(40," Limpiar "),r(),s(41,"button",20),R("click",function(){return e.generarInforme()}),s(42,"span",5),o(43," analytics "),r(),o(44," Generar informe "),r()()(),N(45,Oo,23,7,"section",21),r()),t&2&&(d(21),z(e.tiposInforme),d(6),pt("ngModel",e.zonaSeleccionada),d(),z(e.zonas),d(5),pt("ngModel",e.fechaDesde),d(4),pt("ngModel",e.fechaHasta),d(8),B(e.informeGenerado?45:-1))},dependencies:[Lt,he,pe,ue,ce,me,de,le],styles:['[_nghost-%COMP%]{display:block}.reports-page[_ngcontent-%COMP%]{max-width:1500px;margin:0 auto;padding:26px 28px 40px;color:#263947}.page-header[_ngcontent-%COMP%]{margin-bottom:20px}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;color:#172b3a;font-size:26px;font-weight:700;letter-spacing:-.4px}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:6px 0 0;color:#718096;font-size:14px}.generator-card[_ngcontent-%COMP%]{background:#fff;border:1px solid #e5ebef;border-radius:14px;box-shadow:0 3px 12px #0f172a0b;padding:22px;margin-bottom:18px}.section-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding-bottom:19px;border-bottom:1px solid #edf1f3}.section-icon[_ngcontent-%COMP%]{width:42px;height:42px;min-width:42px;display:flex;align-items:center;justify-content:center;border-radius:11px;background:#e8f3f7;color:#247ba0}.section-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:21px}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#1b2b38;font-size:16px;font-weight:700}.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0;color:#8996a3;font-size:12px}.field-group[_ngcontent-%COMP%]{margin-top:20px}.field-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{display:block;margin-bottom:10px;color:#455764;font-size:12px;font-weight:600}.report-types[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}.report-type[_ngcontent-%COMP%]{position:relative;min-height:82px;display:flex;align-items:flex-start;gap:10px;padding:13px;border:1px solid #e3e9ed;border-radius:10px;background:#fff;text-align:left;font-family:inherit;cursor:pointer;transition:border-color .15s ease,background .15s ease,box-shadow .15s ease}.report-type[_ngcontent-%COMP%]:hover{border-color:#b9d5df;background:#fbfdfe}.report-type.selected[_ngcontent-%COMP%]{border-color:#247ba0;background:#f4fafc;box-shadow:0 0 0 1px #247ba014}.type-icon[_ngcontent-%COMP%]{width:32px;height:32px;min-width:32px;display:flex;align-items:center;justify-content:center;border-radius:8px;background:#f1f5f7;color:#657784}.type-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:18px}.report-type.selected[_ngcontent-%COMP%]   .type-icon[_ngcontent-%COMP%]{background:#e3f1f5;color:#247ba0}.type-content[_ngcontent-%COMP%]{min-width:0;display:flex;flex-direction:column;gap:4px}.type-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#344854;font-size:11px;line-height:1.3}.type-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#8996a3;font-size:10px;line-height:1.35}.selected-icon[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px;color:#247ba0}.selected-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:17px}.filters-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:12px;margin-top:20px;padding-top:19px;border-top:1px solid #edf1f3}.form-field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:7px}.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#596b77;font-size:11px;font-weight:600}.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:38px;box-sizing:border-box;padding:0 11px;border:1px solid #dfe7eb;border-radius:8px;background:#fff;color:#52636f;font-family:inherit;font-size:12px;outline:none;transition:border-color .15s ease,box-shadow .15s ease}.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#247ba0;box-shadow:0 0 0 3px #247ba014}.generator-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;gap:9px;margin-top:18px}.clear-button[_ngcontent-%COMP%], .generate-button[_ngcontent-%COMP%]{height:37px;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:0 14px;border-radius:8px;font-family:inherit;font-size:11px;font-weight:600;cursor:pointer}.clear-button[_ngcontent-%COMP%]{border:1px solid #dfe7eb;background:#fff;color:#667782}.clear-button[_ngcontent-%COMP%]:hover{background:#f8fafb}.generate-button[_ngcontent-%COMP%]{border:1px solid #247ba0;background:#247ba0;color:#fff;box-shadow:0 2px 5px #247ba026}.generate-button[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:17px}.generate-button[_ngcontent-%COMP%]:hover{background:#1f6d8e}.preview-section[_ngcontent-%COMP%]{background:#fff;border:1px solid #e5ebef;border-radius:14px;box-shadow:0 3px 12px #0f172a0b;overflow:hidden}.preview-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:20px 22px;border-bottom:1px solid #e8edf0}.preview-label[_ngcontent-%COMP%]{display:block;margin-bottom:5px;color:#247ba0;font-size:9px;font-weight:700;letter-spacing:.8px}.preview-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#1b2b38;font-size:18px;font-weight:700}.preview-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 0;color:#8996a3;font-size:11px}.preview-actions[_ngcontent-%COMP%]{display:flex;gap:8px}.secondary-button[_ngcontent-%COMP%], .primary-button[_ngcontent-%COMP%]{height:35px;display:inline-flex;align-items:center;gap:6px;padding:0 12px;border-radius:8px;font-family:inherit;font-size:11px;font-weight:600;cursor:pointer}.secondary-button[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%], .primary-button[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:16px}.secondary-button[_ngcontent-%COMP%]{border:1px solid #dfe7eb;background:#fff;color:#657681}.primary-button[_ngcontent-%COMP%]{border:1px solid #247ba0;background:#247ba0;color:#fff}.summary-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;padding:20px 22px}.summary-card[_ngcontent-%COMP%]{min-height:75px;display:flex;align-items:center;gap:12px;padding:12px 14px;border:1px solid #e8edf0;border-radius:10px;background:#fafcfd}.summary-card[_ngcontent-%COMP%] > .material-symbols-outlined[_ngcontent-%COMP%]{width:34px;height:34px;display:flex;align-items:center;justify-content:center;border-radius:8px;background:#edf5f8;color:#247ba0;font-size:18px}.summary-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.summary-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#74818c;font-size:10px}.summary-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#263947;font-size:21px}.report-result[_ngcontent-%COMP%]{padding:20px 22px 22px}.result-stats[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px}.result-stats[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:13px 15px;border:1px solid #e8edf0;border-radius:9px;background:#fafcfd;display:flex;flex-direction:column;gap:5px}.result-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#74818c;font-size:10px}.result-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#263947;font-size:21px}.result-stats[_ngcontent-%COMP%]   strong.green[_ngcontent-%COMP%]{color:#3d9660}.result-stats[_ngcontent-%COMP%]   strong.red[_ngcontent-%COMP%]{color:#c85a5a}.result-stats[_ngcontent-%COMP%]   strong.blue[_ngcontent-%COMP%]{color:#247ba0}.result-stats[_ngcontent-%COMP%]   strong.orange[_ngcontent-%COMP%]{color:#c18c2d}.table-card[_ngcontent-%COMP%]{overflow:hidden;border:1px solid #e5ebef;border-radius:10px;background:#fff}.table-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:14px 16px;border-bottom:1px solid #e8edf0}.table-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#263947;font-size:13px}.table-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0;color:#8996a3;font-size:10px}.count-badge[_ngcontent-%COMP%]{padding:5px 8px;border-radius:6px;background:#f1f5f7;color:#687782;font-size:9px}.table-wrapper[_ngcontent-%COMP%]{width:100%;overflow-x:auto}table[_ngcontent-%COMP%]{width:100%;min-width:700px;border-collapse:collapse}thead[_ngcontent-%COMP%]{background:#fafcfd}th[_ngcontent-%COMP%]{padding:10px 14px;color:#7b8993;font-size:9px;font-weight:700;text-align:left;text-transform:uppercase;letter-spacing:.3px;border-bottom:1px solid #e8edf0}td[_ngcontent-%COMP%]{padding:12px 14px;color:#52606d;font-size:11px;border-bottom:1px solid #eef2f4}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:0}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#fafcfd}.view-button[_ngcontent-%COMP%]{border:0;background:transparent;color:#247ba0;font-family:inherit;font-size:10px;font-weight:600;cursor:pointer}.view-button[_ngcontent-%COMP%]:hover{color:#1f6d8e}.zone-report[_ngcontent-%COMP%]{padding:20px 22px 22px}.zone-report-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:13px 15px;border-bottom:1px solid #edf1f3}.zone-report-row[_ngcontent-%COMP%]:last-child{border-bottom:0}.zone-report-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#52636f;font-size:12px}.zone-report-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#263947;font-size:12px}.empty-report[_ngcontent-%COMP%]{padding:45px 20px;text-align:center}.empty-report[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{color:#9aabb5;font-size:38px}.empty-report[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:10px 0 5px;color:#40525e;font-size:14px}.empty-report[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:420px;margin:0 auto;color:#8996a3;font-size:11px;line-height:1.5}@media(max-width:1100px){.report-types[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.summary-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media(max-width:800px){.reports-page[_ngcontent-%COMP%]{padding:20px 16px 30px}.filters-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.preview-header[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column;gap:15px}.preview-actions[_ngcontent-%COMP%]{width:100%}.secondary-button[_ngcontent-%COMP%], .primary-button[_ngcontent-%COMP%]{flex:1;justify-content:center}}@media(max-width:650px){.generator-card[_ngcontent-%COMP%]{padding:16px}.report-types[_ngcontent-%COMP%]{grid-template-columns:1fr}.report-type[_ngcontent-%COMP%]{min-height:65px}.summary-grid[_ngcontent-%COMP%], .result-stats[_ngcontent-%COMP%]{grid-template-columns:1fr}.generator-actions[_ngcontent-%COMP%]{justify-content:stretch}.generator-actions[_ngcontent-%COMP%]   .clear-button[_ngcontent-%COMP%], .generator-actions[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]{flex:1}}.material-symbols-outlined[_ngcontent-%COMP%]{font-family:Material Symbols Outlined!important;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased;font-feature-settings:"liga"}']})};var ye=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=g({type:n,selectors:[["app-login"]],decls:2,vars:0,template:function(t,e){t&1&&(p(0,"p"),o(1,"login works!"),u())},encapsulation:2})};var Kn=[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"login",component:ye},{path:"dashboard",component:fe},{path:"pacientes",component:ge},{path:"pacientes/nuevo",loadComponent:()=>import("./chunk-BDD2L27J.js").then(n=>n.PacienteFormComponent)},{path:"pacientes/:id",loadComponent:()=>import("./chunk-TFDEQE6Y.js").then(n=>n.FichaPacienteComponent)},{path:"zonas",component:be},{path:"estadisticas",component:ve},{path:"informes",component:xe},{path:"**",redirectTo:"dashboard"}];var Yn={providers:[kn(),Un(Kn),jn(Bn())]};function Kt(n){return n.buttons===0||n.detail===0}function Yt(n){let a=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!a&&a.identifier===-1&&(a.radiusX==null||a.radiusX===1)&&(a.radiusY==null||a.radiusY===1)}var Ge;function qn(){if(Ge==null){let n=typeof document<"u"?document.head:null;Ge=!!(n&&(n.createShadowRoot||n.attachShadow))}return Ge}function Qe(n){if(qn()){let a=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&a instanceof ShadowRoot)return a}return null}function at(n){return n.composedPath?n.composedPath()[0]:n.target}var $e;try{$e=typeof Intl<"u"&&Intl.v8BreakIterator}catch{$e=!1}var S=(()=>{class n{_platformId=l(On);isBrowser=this._platformId?Rn(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||$e)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var qt;function Xn(){if(qt==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>qt=!0}))}finally{qt=qt||!1}return qt}function jt(n){return Xn()?n:!!n.capture}function ft(n,a=0){return Jn(n)?Number(n):arguments.length===2?a:0}function Jn(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function J(n){return n instanceof k?n.nativeElement:n}var ti=new C("cdk-input-modality-detector-options"),ei={ignoreKeys:[18,17,224,91,16]},ni=650,Ke={passive:!0,capture:!0},ii=(()=>{class n{_platform=l(S);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new gn(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=at(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<ni||(this._modality.next(Kt(t)?"keyboard":"mouse"),this._mostRecentTarget=at(t))};_onTouchstart=t=>{if(Yt(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=at(t)};constructor(){let t=l(M),e=l(T),i=l(ti,{optional:!0});if(this._options=_t(_t({},ei),i),this.modalityDetected=this._modality.pipe(ie(1)),this.modalityChanged=this.modalityDetected.pipe(He()),this._platform.isBrowser){let c=l(Mt).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[c.listen(e,"keydown",this._onKeydown,Ke),c.listen(e,"mousedown",this._onMousedown,Ke),c.listen(e,"touchstart",this._onTouchstart,Ke)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Xt=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Xt||{}),oi=new C("cdk-focus-monitor-default-options"),we=jt({passive:!0,capture:!0}),Jt=(()=>{class n{_ngZone=l(M);_platform=l(S);_inputModalityDetector=l(ii);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(T);_stopInputModalityDetector=new P;constructor(){let t=l(oi,{optional:!0});this._detectionMode=t?.detectionMode||Xt.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=at(t);for(let i=e;i;i=i.parentElement)t.type==="focus"?this._onFocus(t,i):this._onBlur(t,i)};monitor(t,e=!1){let i=J(t);if(!this._platform.isBrowser||i.nodeType!==1)return st();let c=Qe(i)||this._document,m=this._elementInfo.get(i);if(m)return e&&(m.checkChildren=!0),m.subject;let f={checkChildren:e,subject:new P,rootNode:c};return this._elementInfo.set(i,f),this._registerGlobalListeners(f),f.subject}stopMonitoring(t){let e=J(t),i=this._elementInfo.get(e);i&&(i.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(i))}focusVia(t,e,i){let c=J(t),m=this._document.activeElement;c===m?this._getClosestElementsInfo(c).forEach(([f,I])=>this._originChanged(f,e,I)):(this._setOrigin(e),typeof c.focus=="function"&&c.focus(i))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===Xt.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===Xt.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?ni:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(t,e){let i=this._elementInfo.get(e),c=at(t);!i||!i.checkChildren&&e!==c||this._originChanged(e,this._getFocusOrigin(c),i)}_onBlur(t,e){let i=this._elementInfo.get(e);!i||i.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(i,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,i=this._rootNodeFocusListenerCount.get(e)||0;i||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,we),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,we)}),this._rootNodeFocusListenerCount.set(e,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(G(this._stopInputModalityDetector)).subscribe(c=>{this._setOrigin(c,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let i=this._rootNodeFocusListenerCount.get(e);i>1?this._rootNodeFocusListenerCount.set(e,i-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,we),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,we),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,i){this._setClasses(t,e),this._emitOrigin(i,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((i,c)=>{(c===t||i.checkChildren&&c.contains(t))&&e.push([c,i])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let c=t.labels;if(c){for(let m=0;m<c.length;m++)if(c[m].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ce=new WeakMap,gt=(()=>{class n{_appRef;_injector=l(Y);_environmentInjector=l(Mn);load(t){let e=this._appRef=this._appRef||this._injector.get(Ue),i=Ce.get(e);i||(i={loaders:new Set,refs:[]},Ce.set(e,i),e.onDestroy(()=>{Ce.get(e)?.refs.forEach(c=>c.destroy()),Ce.delete(e)})),i.loaders.has(t)||(i.loaders.add(t),i.refs.push(zn(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ai=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(e,i){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),Me;function So(){if(Me===void 0&&(Me=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(Me=n.trustedTypes.createPolicy("angular#components",{createHTML:a=>a}))}return Me}function Vt(n){return So()?.createHTML(n)||n}function Ye(n){return Array.isArray(n)?n:[n]}var ri=new Set,Et,ke=(()=>{class n{_platform=l(S);_nonce=l(Pn,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Io}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Po(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Po(n,a){if(!ri.has(n))try{Et||(Et=document.createElement("style"),a&&Et.setAttribute("nonce",a),Et.setAttribute("type","text/css"),document.head.appendChild(Et)),Et.sheet&&(Et.sheet.insertRule(`@media ${n} {body{ }}`,0),ri.add(n))}catch(t){console.error(t)}}function Io(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var qe=(()=>{class n{_mediaMatcher=l(ke);_zone=l(M);_queries=new Map;_destroySubject=new P;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return si(Ye(t)).some(i=>this._registerQuery(i).mql.matches)}observe(t){let i=si(Ye(t)).map(m=>this._registerQuery(m).observable),c=_n(i);return c=vn(c.pipe(It(1)),c.pipe(ie(1),Pt(0))),c.pipe(Q(m=>{let f={matches:!1,breakpoints:{}};return m.forEach(({matches:I,query:W})=>{f.matches=f.matches||I,f.breakpoints[W]=I}),f}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),c={observable:new St(m=>{let f=I=>this._zone.run(()=>m.next(I));return e.addListener(f),()=>{e.removeListener(f)}}).pipe(Dt(e),Q(({matches:m})=>({query:t,matches:m})),G(this._destroySubject)),mql:e};return this._queries.set(t,c),c}static \u0275fac=function(e){return new(e||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function si(n){return n.map(a=>a.split(",")).reduce((a,t)=>a.concat(t)).map(a=>a.trim())}function Do(n){if(n.type==="characterData"&&n.target instanceof Comment)return!0;if(n.type==="childList"){for(let a=0;a<n.addedNodes.length;a++)if(!(n.addedNodes[a]instanceof Comment))return!1;for(let a=0;a<n.removedNodes.length;a++)if(!(n.removedNodes[a]instanceof Comment))return!1;return!0}return!1}var ci=(()=>{class n{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),To=(()=>{class n{_mutationObserverFactory=l(ci);_observedElements=new Map;_ngZone=l(M);constructor(){}ngOnDestroy(){this._observedElements.forEach((t,e)=>this._cleanupObserver(e))}observe(t){let e=J(t);return new St(i=>{let m=this._observeElement(e).pipe(Q(f=>f.filter(I=>!Do(I))),lt(f=>!!f.length)).subscribe(f=>{this._ngZone.run(()=>{i.next(f)})});return()=>{m.unsubscribe(),this._unobserveElement(e)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let e=new P,i=this._mutationObserverFactory.create(c=>e.next(c));i&&i.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:i,stream:e,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:e,stream:i}=this._observedElements.get(t);e&&e.disconnect(),i.complete(),this._observedElements.delete(t)}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),di=(()=>{class n{_contentObserver=l(To);_elementRef=l(k);event=new ct;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(t){this._debounce=ft(t),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(Pt(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=O({type:n,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",ot],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return n})(),li=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=y({providers:[ci]})}return n})();var Oe=(()=>{class n{_platform=l(S);constructor(){}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return zo(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=Ao(Ho(t));if(e&&(mi(e)===-1||!this.isVisible(e)))return!1;let i=t.nodeName.toLowerCase(),c=mi(t);return t.hasAttribute("contenteditable")?c!==-1:i==="iframe"||i==="object"||this._platform.WEBKIT&&this._platform.IOS&&!jo(t)?!1:i==="audio"?t.hasAttribute("controls")?c!==-1:!1:i==="video"?c===-1?!1:c!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,e){return Vo(t)&&!this.isDisabled(t)&&(e?.ignoreVisibility||this.isVisible(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ao(n){try{return n.frameElement}catch{return null}}function zo(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function Ro(n){let a=n.nodeName.toLowerCase();return a==="input"||a==="select"||a==="button"||a==="textarea"}function Fo(n){return No(n)&&n.type=="hidden"}function Lo(n){return Bo(n)&&n.hasAttribute("href")}function No(n){return n.nodeName.toLowerCase()=="input"}function Bo(n){return n.nodeName.toLowerCase()=="a"}function ui(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let a=n.getAttribute("tabindex");return!!(a&&!isNaN(parseInt(a,10)))}function mi(n){if(!ui(n))return null;let a=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(a)?-1:a}function jo(n){let a=n.nodeName.toLowerCase(),t=a==="input"&&n.type;return t==="text"||t==="password"||a==="select"||a==="textarea"}function Vo(n){return Fo(n)?!1:Ro(n)||Lo(n)||n.hasAttribute("contenteditable")||ui(n)}function Ho(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Ee=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(a){this._enabled=a,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor))}_enabled=!0;constructor(a,t,e,i,c=!1,m){this._element=a,this._checker=t,this._ngZone=e,this._document=i,this._injector=m,c||this.attachAnchors()}destroy(){let a=this._startAnchor,t=this._endAnchor;a&&(a.removeEventListener("focus",this.startAnchorListener),a.remove()),t&&(t.removeEventListener("focus",this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(a)))})}focusFirstTabbableElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(a)))})}focusLastTabbableElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(a)))})}_getRegionBoundary(a){let t=this._element.querySelectorAll(`[cdk-focus-region-${a}], [cdkFocusRegion${a}], [cdk-focus-${a}]`);return a=="start"?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(a){let t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(t){if(!this._checker.isFocusable(t)){let e=this._getFirstTabbableElement(t);return e?.focus(a),!!e}return t.focus(a),!0}return this.focusFirstTabbableElement(a)}focusFirstTabbableElement(a){let t=this._getRegionBoundary("start");return t&&t.focus(a),!!t}focusLastTabbableElement(a){let t=this._getRegionBoundary("end");return t&&t.focus(a),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let t=a.children;for(let e=0;e<t.length;e++){let i=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(i)return i}return null}_getLastTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let t=a.children;for(let e=t.length-1;e>=0;e--){let i=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(i)return i}return null}_createAnchor(){let a=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,a),a.classList.add("cdk-visually-hidden"),a.classList.add("cdk-focus-trap-anchor"),a.setAttribute("aria-hidden","true"),a}_toggleAnchorTabIndex(a,t){a?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}toggleAnchors(a){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor))}_executeOnStable(a){this._injector?At(a,{injector:this._injector}):setTimeout(a)}},Xe=(()=>{class n{_checker=l(Oe);_ngZone=l(M);_document=l(T);_injector=l(Y);constructor(){l(gt).load(ai)}create(t,e=!1){return new Ee(t,this._checker,this._ngZone,this._document,e,this._injector)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function hi(n,...a){return a.length?a.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}function X(n){return n!=null&&`${n}`!="false"}var rt=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(rt||{}),Se,Ot;function fi(){if(Ot==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Ot=!1,Ot;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Ot=!0;else{let n=Element.prototype.scrollTo;n?Ot=!/\{\s*\[native code\]\s*\}/.test(n.toString()):Ot=!1}}return Ot}function Ht(){if(typeof document!="object"||!document)return rt.NORMAL;if(Se==null){let n=document.createElement("div"),a=n.style;n.dir="rtl",a.width="1px",a.overflow="auto",a.visibility="hidden",a.pointerEvents="none",a.position="absolute";let t=document.createElement("div"),e=t.style;e.width="2px",e.height="1px",n.appendChild(t),document.body.appendChild(n),Se=rt.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,Se=n.scrollLeft===0?rt.NEGATED:rt.INVERTED),n.remove()}return Se}var Wo=20,Je=(()=>{class n{_ngZone=l(M);_platform=l(S);_renderer=l(Mt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new P;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=Wo){return this._platform.isBrowser?new St(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=t>0?this._scrolled.pipe(je(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):st()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let i=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(lt(c=>!c||i.indexOf(c)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((i,c)=>{this._scrollableContainsElement(c,t)&&e.push(c)}),e}_scrollableContainsElement(t,e){let i=J(e),c=t.getElementRef().nativeElement;do if(i==c)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(e){return new(e||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ut=(()=>{class n{elementRef=l(k);scrollDispatcher=l(Je);ngZone=l(M);dir=l($t,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new P;_renderer=l(kt);_cleanupScroll;_elementScrolled=new P;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let e=this.elementRef.nativeElement,i=this.dir&&this.dir.value=="rtl";t.left==null&&(t.left=i?t.end:t.start),t.right==null&&(t.right=i?t.start:t.end),t.bottom!=null&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),i&&Ht()!=rt.NORMAL?(t.left!=null&&(t.right=e.scrollWidth-e.clientWidth-t.left),Ht()==rt.INVERTED?t.left=t.right:Ht()==rt.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let e=this.elementRef.nativeElement;fi()?e.scrollTo(t):(t.top!=null&&(e.scrollTop=t.top),t.left!=null&&(e.scrollLeft=t.left))}measureScrollOffset(t){let e="left",i="right",c=this.elementRef.nativeElement;if(t=="top")return c.scrollTop;if(t=="bottom")return c.scrollHeight-c.clientHeight-c.scrollTop;let m=this.dir&&this.dir.value=="rtl";return t=="start"?t=m?i:e:t=="end"&&(t=m?e:i),m&&Ht()==rt.INVERTED?t==e?c.scrollWidth-c.clientWidth-c.scrollLeft:c.scrollLeft:m&&Ht()==rt.NEGATED?t==e?c.scrollLeft+c.scrollWidth-c.clientWidth:-c.scrollLeft:t==e?c.scrollLeft:c.scrollWidth-c.clientWidth-c.scrollLeft}static \u0275fac=function(e){return new(e||n)};static \u0275dir=O({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),Go=20,gi=(()=>{class n{_platform=l(S);_listeners;_viewportSize=null;_change=new P;_document=l(T);constructor(){let t=l(M),e=l(Mt).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=c=>this._change.next(c);this._listeners=[e.listen("window","resize",i),e.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:i}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+i,right:t.left+e,height:i,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),i=t.documentElement,c=i.getBoundingClientRect(),m=-c.top||t.body?.scrollTop||e.scrollY||i.scrollTop||0,f=-c.left||t.body?.scrollLeft||e.scrollX||i.scrollLeft||0;return{top:m,left:f}}change(t=Go){return t>0?this._change.pipe(je(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var tn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=y({})}return n})();var $o=new C("MATERIAL_ANIMATIONS"),bi=null;function Ko(){return l($o,{optional:!0})?.animationsDisabled||l(Sn,{optional:!0})==="NoopAnimations"?"di-disabled":(bi??=l(ke).matchMedia("(prefers-reduced-motion)").matches,bi?"reduced-motion":"enabled")}function wt(){return Ko()!=="enabled"}var De=["*"],qo=["content"],Xo=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Jo=["mat-drawer","mat-drawer-content","*"];function ta(n,a){if(n&1){let t=it();s(0,"div",1),R("click",function(){et(t);let i=V();return nt(i._onBackdropClicked())}),r()}if(n&2){let t=V();b("mat-drawer-shown",t._isShowingBackdrop())}}function ea(n,a){n&1&&(s(0,"mat-drawer-content"),_(1,2),r())}var na=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],ia=["mat-sidenav","mat-sidenav-content","*"];function oa(n,a){if(n&1){let t=it();s(0,"div",1),R("click",function(){et(t);let i=V();return nt(i._onBackdropClicked())}),r()}if(n&2){let t=V();b("mat-drawer-shown",t._isShowingBackdrop())}}function aa(n,a){n&1&&(s(0,"mat-sidenav-content"),_(1,2),r())}var ra=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var sa=new C("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),on=new C("MAT_DRAWER_CONTAINER"),Pe=(()=>{class n extends Ut{_platform=l(S);_changeDetectorRef=l(Ft);_container=l(nn);constructor(){let t=l(k),e=l(Je),i=l(M);super(t,e,i)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,i){e&2&&(F("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),b("mat-drawer-content-hidden",i._shouldBeHidden()))},features:[dt([{provide:Ut,useExisting:n}]),$],ngContentSelectors:De,decls:1,vars:0,template:function(e,i){e&1&&(D(),_(0))},encapsulation:2,changeDetection:0})}return n})(),en=(()=>{class n{_elementRef=l(k);_focusTrapFactory=l(Xe);_focusMonitor=l(Jt);_platform=l(S);_ngZone=l(M);_renderer=l(kt);_interactivityChecker=l(Oe);_doc=l(T);_container=l(on,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=X(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=X(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(X(t))}_opened=vt(!1);_openedVia=null;_animationStarted=new P;_animationEnd=new P;openedChange=new ct(!0);_openedStream=this.openedChange.pipe(lt(t=>t),Q(()=>{}));openedStart=this._animationStarted.pipe(lt(()=>this.opened),Ve(void 0));_closedStream=this.openedChange.pipe(lt(t=>!t),Q(()=>{}));closedStart=this._animationStarted.pipe(lt(()=>!this.opened),Ve(void 0));_destroyed=new P;onPositionChanged=new ct;_content;_modeChanged=new P;_injector=l(Y);_changeDetectorRef=l(Ft);constructor(){this.openedChange.pipe(G(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,"keydown",i=>{i.keyCode===27&&!this.disableClose&&!hi(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{c(),m(),t.removeAttribute("tabindex")},c=this._renderer.listen(t,"blur",i),m=this._renderer.listen(t,"mousedown",i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":At(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let i=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),i}_setOpen(t,e,i){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(c=>{this.openedChange.pipe(It(1)).subscribe(m=>c(m?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,i=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,e)),i.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["mat-drawer"]],viewQuery:function(e,i){if(e&1&&Rt(qo,5),e&2){let c;H(c=U())&&(i._content=c.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,i){e&2&&(q("align",null)("tabIndex",i.mode!=="side"?"-1":null),F("visibility",!i._container&&!i.opened?"hidden":null),b("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:De,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(D(),s(0,"div",1,0),_(2),r())},dependencies:[Ut],encapsulation:2,changeDetection:0})}return n})(),nn=(()=>{class n{_dir=l($t,{optional:!0});_element=l(k);_ngZone=l(M);_changeDetectorRef=l(Ft);_animationDisabled=wt();_transitionsEnabled=!1;_allDrawers;_drawers=new En;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=X(t)}_autosize=l(sa);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:X(t)}_backdropOverride=null;backdropClick=new ct;_start=null;_end=null;_left=null;_right=null;_destroyed=new P;_doCheckSubject=new P;_contentMargins={left:null,right:null};_contentMarginChanges=new P;get scrollable(){return this._userContent||this._content}_injector=l(Y);constructor(){let t=l(S),e=l(gi);this._dir?.change.pipe(G(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(G(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Dt(this._allDrawers),G(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Dt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Pt(10),G(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();t+=i,e-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();e+=i,t-=i}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(G(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(G(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(G(this._drawers.changes)).subscribe(()=>{At({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(G(ne(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,i="mat-drawer-container-has-open";t?e.add(i):e.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(e,i,c){if(e&1&&xt(c,Pe,5)(c,en,5),e&2){let m;H(m=U())&&(i._content=m.first),H(m=U())&&(i._allDrawers=m)}},viewQuery:function(e,i){if(e&1&&Rt(Pe,5),e&2){let c;H(c=U())&&(i._userContent=c.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,i){e&2&&b("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[dt([{provide:on,useExisting:n}])],ngContentSelectors:Jo,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(D(Xo),N(0,ta,1,2,"div",0),_(1),_(2,1),N(3,ea,2,0,"mat-drawer-content")),e&2&&(B(i.hasBackdrop?0:-1),d(3),B(i._content?-1:3))},dependencies:[Pe],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ie=(()=>{class n extends Pe{static \u0275fac=(()=>{let t;return function(i){return(t||(t=mt(n)))(i||n)}})();static \u0275cmp=g({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[dt([{provide:Ut,useExisting:n}]),$],ngContentSelectors:De,decls:1,vars:0,template:function(e,i){e&1&&(D(),_(0))},encapsulation:2,changeDetection:0})}return n})(),an=(()=>{class n extends en{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=X(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=ft(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=ft(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(i){return(t||(t=mt(n)))(i||n)}})();static \u0275cmp=g({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,i){e&2&&(q("tabIndex",i.mode!=="side"?"-1":null)("align",null),F("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),b("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[dt([{provide:en,useExisting:n}]),$],ngContentSelectors:De,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(D(),s(0,"div",1,0),_(2),r())},dependencies:[Ut],encapsulation:2,changeDetection:0})}return n})(),_i=(()=>{class n extends nn{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(i){return(t||(t=mt(n)))(i||n)}})();static \u0275cmp=g({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(e,i,c){if(e&1&&xt(c,Ie,5)(c,an,5),e&2){let m;H(m=U())&&(i._content=m.first),H(m=U())&&(i._allDrawers=m)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,i){e&2&&b("mat-drawer-container-explicit-backdrop",i._backdropOverride)},exportAs:["matSidenavContainer"],features:[dt([{provide:on,useExisting:n},{provide:nn,useExisting:n}]),$],ngContentSelectors:ia,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(D(na),N(0,oa,1,2,"div",0),_(1),_(2,1),N(3,aa,2,0,"mat-sidenav-content")),e&2&&(B(i.hasBackdrop?0:-1),d(3),B(i._content?-1:3))},dependencies:[Ie],styles:[ra],encapsulation:2,changeDetection:0})}return n})(),vi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[tn,Z,tn]})}return n})();var da=["*",[["mat-toolbar-row"]]],la=["*","mat-toolbar-row"],ma=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=O({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),xi=(()=>{class n{_elementRef=l(k);_platform=l(S);_document=l(T);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["mat-toolbar"]],contentQueries:function(e,i,c){if(e&1&&xt(c,ma,5),e&2){let m;H(m=U())&&(i._toolbarRows=m)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,i){e&2&&(yt(i.color?"mat-"+i.color:""),b("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:la,decls:2,vars:0,template:function(e,i){e&1&&(D(da),_(0),_(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var yi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[Z]})}return n})();var tt=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(tt||{}),rn=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=tt.HIDDEN;constructor(a,t,e,i=!1){this._renderer=a,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},wi=jt({passive:!0,capture:!0}),sn=class{_events=new Map;addHandler(a,t,e,i){let c=this._events.get(t);if(c){let m=c.get(e);m?m.add(i):c.set(e,new Set([i]))}else this._events.set(t,new Map([[e,new Set([i])]])),a.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,wi)})}removeHandler(a,t,e){let i=this._events.get(a);if(!i)return;let c=i.get(t);c&&(c.delete(e),c.size===0&&i.delete(t),i.size===0&&(this._events.delete(a),document.removeEventListener(a,this._delegateEventHandler,wi)))}_delegateEventHandler=a=>{let t=at(a);t&&this._events.get(a.type)?.forEach((e,i)=>{(i===t||i.contains(t))&&e.forEach(c=>c.handleEvent(a))})}},te={enterDuration:225,exitDuration:150},ua=800,Ci=jt({passive:!0,capture:!0}),Mi=["mousedown","touchstart"],ki=["mouseup","mouseleave","touchend","touchcancel"],ha=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),Zt=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new sn;constructor(a,t,e,i,c){this._target=a,this._ngZone=t,this._platform=i,i.isBrowser&&(this._containerElement=J(e)),c&&c.get(gt).load(ha)}fadeInRipple(a,t,e={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),c=_t(_t({},te),e.animation);e.centered&&(a=i.left+i.width/2,t=i.top+i.height/2);let m=e.radius||fa(a,t,i),f=a-i.left,I=t-i.top,W=c.enterDuration,L=document.createElement("div");L.classList.add("mat-ripple-element"),L.style.left=`${f-m}px`,L.style.top=`${I-m}px`,L.style.height=`${m*2}px`,L.style.width=`${m*2}px`,e.color!=null&&(L.style.backgroundColor=e.color),L.style.transitionDuration=`${W}ms`,this._containerElement.appendChild(L);let pn=window.getComputedStyle(L),Wi=pn.transitionProperty,un=pn.transitionDuration,Ne=Wi==="none"||un==="0s"||un==="0s, 0s"||i.width===0&&i.height===0,Ct=new rn(this,L,e,Ne);L.style.transform="scale3d(1, 1, 1)",Ct.state=tt.FADING_IN,e.persistent||(this._mostRecentTransientRipple=Ct);let ee=null;return!Ne&&(W||c.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let hn=()=>{ee&&(ee.fallbackTimer=null),clearTimeout(fn),this._finishRippleTransition(Ct)},Be=()=>this._destroyRipple(Ct),fn=setTimeout(Be,W+100);L.addEventListener("transitionend",hn),L.addEventListener("transitioncancel",Be),ee={onTransitionEnd:hn,onTransitionCancel:Be,fallbackTimer:fn}}),this._activeRipples.set(Ct,ee),(Ne||!W)&&this._finishRippleTransition(Ct),Ct}fadeOutRipple(a){if(a.state===tt.FADING_OUT||a.state===tt.HIDDEN)return;let t=a.element,e=_t(_t({},te),a.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",a.state=tt.FADING_OUT,(a._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(a)}fadeOutAll(){this._getActiveRipples().forEach(a=>a.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(a=>{a.config.persistent||a.fadeOut()})}setupTriggerEvents(a){let t=J(a);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Mi.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(a){a.type==="mousedown"?this._onMousedown(a):a.type==="touchstart"?this._onTouchStart(a):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ki.forEach(t=>{this._triggerElement.addEventListener(t,this,Ci)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(a){a.state===tt.FADING_IN?this._startFadeOutTransition(a):a.state===tt.FADING_OUT&&this._destroyRipple(a)}_startFadeOutTransition(a){let t=a===this._mostRecentTransientRipple,{persistent:e}=a.config;a.state=tt.VISIBLE,!e&&(!t||!this._isPointerDown)&&a.fadeOut()}_destroyRipple(a){let t=this._activeRipples.get(a)??null;this._activeRipples.delete(a),this._activeRipples.size||(this._containerRect=null),a===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),a.state=tt.HIDDEN,t!==null&&(a.element.removeEventListener("transitionend",t.onTransitionEnd),a.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),a.element.remove()}_onMousedown(a){let t=Kt(a),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ua;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(a.clientX,a.clientY,this._target.rippleConfig))}_onTouchStart(a){if(!this._target.rippleDisabled&&!Yt(a)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=a.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(a=>{let t=a.state===tt.VISIBLE||a.config.terminateOnPointerUp&&a.state===tt.FADING_IN;!a.config.persistent&&t&&a.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let a=this._triggerElement;a&&(Mi.forEach(t=>n._eventManager.removeHandler(t,a,this)),this._pointerUpEventsRegistered&&(ki.forEach(t=>a.removeEventListener(t,this,Ci)),this._pointerUpEventsRegistered=!1))}};function fa(n,a,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),i=Math.max(Math.abs(a-t.top),Math.abs(a-t.bottom));return Math.sqrt(e*e+i*i)}var Te=new C("mat-ripple-global-options");var Ae=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Ei=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[Z]})}return n})();var Oi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[Z]})}return n})();var ze=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[Z]})}return n})();var ga=["*"],ba=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,_a=["unscopedContent"],va=["text"],xa=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],ya=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var wa=new C("ListOption"),Ca=(()=>{class n{_elementRef=l(k);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=O({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),Ma=(()=>{class n{_elementRef=l(k);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=O({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),ka=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=O({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),Si=(()=>{class n{_listOption=l(wa,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||n)};static \u0275dir=O({type:n,hostVars:4,hostBindings:function(e,i){e&2&&b("mdc-list-item__start",i._isAlignedAtStart())("mdc-list-item__end",!i._isAlignedAtStart())}})}return n})(),Ea=(()=>{class n extends Si{static \u0275fac=(()=>{let t;return function(i){return(t||(t=mt(n)))(i||n)}})();static \u0275dir=O({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[$]})}return n})(),Oa=(()=>{class n extends Si{static \u0275fac=(()=>{let t;return function(i){return(t||(t=mt(n)))(i||n)}})();static \u0275dir=O({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[$]})}return n})(),Sa=new C("MAT_LIST_CONFIG"),cn=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=X(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(X(t))}_disabled=vt(!1);_defaultOptions=l(Sa,{optional:!0});static \u0275fac=function(e){return new(e||n)};static \u0275dir=O({type:n,hostVars:1,hostBindings:function(e,i){e&2&&q("aria-disabled",i.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),Pa=(()=>{class n{_elementRef=l(k);_ngZone=l(M);_listBase=l(cn,{optional:!0});_platform=l(S);_hostElement;_isButtonElement;_noopAnimations=wt();_avatars;_icons;set lines(t){this._explicitLines=ft(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=X(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(X(t))}_disabled=vt(!1);_subscriptions=new Wt;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){l(gt).load(Ae);let t=l(Te,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Zt(this,this._ngZone,this._hostElement,this._platform,l(Y)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(ne(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),i=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let c=this._titles.length===0&&e===1;i.classList.toggle("mdc-list-item__primary-text",c),i.classList.toggle("mdc-list-item__secondary-text",!c)}else i.classList.remove("mdc-list-item__primary-text"),i.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=O({type:n,contentQueries:function(e,i,c){if(e&1&&xt(c,Ea,4)(c,Oa,4),e&2){let m;H(m=U())&&(i._avatars=m),H(m=U())&&(i._icons=m)}},hostVars:4,hostBindings:function(e,i){e&2&&(q("aria-disabled",i.disabled)("disabled",i._isButtonElement&&i.disabled||null),b("mdc-list-item--disabled",i.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var Pi=(()=>{class n extends Pa{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=X(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=mt(n)))(i||n)}})();static \u0275cmp=g({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,i,c){if(e&1&&xt(c,Ma,5)(c,Ca,5)(c,ka,5),e&2){let m;H(m=U())&&(i._lines=m),H(m=U())&&(i._titles=m),H(m=U())&&(i._meta=m)}},viewQuery:function(e,i){if(e&1&&Rt(_a,5)(va,5),e&2){let c;H(c=U())&&(i._unscopedContent=c.first),H(c=U())&&(i._itemText=c.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,i){e&2&&(q("aria-current",i._getAriaCurrent()),b("mdc-list-item--activated",i.activated)("mdc-list-item--with-leading-avatar",i._avatars.length!==0)("mdc-list-item--with-leading-icon",i._icons.length!==0)("mdc-list-item--with-trailing-meta",i._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",i._hasBothLeadingAndTrailing())("_mat-animation-noopable",i._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[$],ngContentSelectors:ya,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,i){e&1&&(D(xa),_(0),s(1,"span",1),_(2,1),_(3,2),s(4,"span",2,0),R("cdkObserveContent",function(){return i._updateItemLines(!0)}),_(6,3),r()(),_(7,4),_(8,5),j(9,"div",3))},dependencies:[di],encapsulation:2,changeDetection:0})}return n})();var Ii=(()=>{class n extends cn{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(i){return(t||(t=mt(n)))(i||n)}})();static \u0275cmp=g({type:n,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[dt([{provide:cn,useExisting:n}]),$],ngContentSelectors:ga,decls:1,vars:0,template:function(e,i){e&1&&(D(),_(0))},styles:[ba],encapsulation:2,changeDetection:0})}return n})();var Di=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[li,ze,Oi,Z,Ei]})}return n})();function Ti(n){return Error(`Unable to find icon with the name "${n}"`)}function Da(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Ai(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function zi(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var bt=class{url;svgText;options;svgElement=null;constructor(a,t,e){this.url=a,this.svgText=t,this.options=e}},Fi=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,e,i,c){this._httpClient=t,this._sanitizer=e,this._errorHandler=c,this._document=i}addSvgIcon(t,e,i){return this.addSvgIconInNamespace("",t,e,i)}addSvgIconLiteral(t,e,i){return this.addSvgIconLiteralInNamespace("",t,e,i)}addSvgIconInNamespace(t,e,i,c){return this._addSvgIconConfig(t,e,new bt(i,null,c))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,i,c){let m=this._sanitizer.sanitize(Tt.HTML,i);if(!m)throw zi(i);let f=Vt(m);return this._addSvgIconConfig(t,e,new bt("",f,c))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,i){return this._addSvgIconSetConfig(t,new bt(e,null,i))}addSvgIconSetLiteralInNamespace(t,e,i){let c=this._sanitizer.sanitize(Tt.HTML,e);if(!c)throw zi(e);let m=Vt(c);return this._addSvgIconSetConfig(t,new bt("",m,i))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(Tt.RESOURCE_URL,t);if(!e)throw Ai(t);let i=this._cachedIconsByUrl.get(e);return i?st(Re(i)):this._loadSvgIconFromConfig(new bt(t,null)).pipe(oe(c=>this._cachedIconsByUrl.set(e,c)),Q(c=>Re(c)))}getNamedSvgIcon(t,e=""){let i=Ri(e,t),c=this._svgIconConfigs.get(i);if(c)return this._getSvgFromConfig(c);if(c=this._getIconConfigFromResolvers(e,t),c)return this._svgIconConfigs.set(i,c),this._getSvgFromConfig(c);let m=this._iconSetConfigs.get(e);return m?this._getSvgFromIconSetConfigs(t,m):bn(Ti(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?st(Re(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(Q(e=>Re(e)))}_getSvgFromIconSetConfigs(t,e){let i=this._extractIconWithNameFromAnySet(t,e);if(i)return st(i);let c=e.filter(m=>!m.svgText).map(m=>this._loadSvgIconSetFromConfig(m).pipe(yn(f=>{let W=`Loading icon set URL: ${this._sanitizer.sanitize(Tt.RESOURCE_URL,m.url)} failed: ${f.message}`;return this._errorHandler.handleError(new Error(W)),st(null)})));return xn(c).pipe(Q(()=>{let m=this._extractIconWithNameFromAnySet(t,e);if(!m)throw Ti(t);return m}))}_extractIconWithNameFromAnySet(t,e){for(let i=e.length-1;i>=0;i--){let c=e[i];if(c.svgText&&c.svgText.toString().indexOf(t)>-1){let m=this._svgElementFromConfig(c),f=this._extractSvgIconFromSet(m,t,c.options);if(f)return f}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(oe(e=>t.svgText=e),Q(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?st(null):this._fetchIcon(t).pipe(oe(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,i){let c=t.querySelector(`[id="${e}"]`);if(!c)return null;let m=c.cloneNode(!0);if(m.removeAttribute("id"),m.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(m,i);if(m.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(m),i);let f=this._svgElementFromString(Vt("<svg></svg>"));return f.appendChild(m),this._setSvgAttributes(f,i)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let i=e.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(t){let e=this._svgElementFromString(Vt("<svg></svg>")),i=t.attributes;for(let c=0;c<i.length;c++){let{name:m,value:f}=i[c];m!=="id"&&e.setAttribute(m,f)}for(let c=0;c<t.childNodes.length;c++)t.childNodes[c].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[c].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:i}=t,c=i?.withCredentials??!1;if(!this._httpClient)throw Da();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let m=this._sanitizer.sanitize(Tt.RESOURCE_URL,e);if(!m)throw Ai(e);let f=this._inProgressUrlFetches.get(m);if(f)return f;let I=this._httpClient.get(m,{responseType:"text",withCredentials:c}).pipe(Q(W=>Vt(W)),wn(()=>this._inProgressUrlFetches.delete(m)),Cn());return this._inProgressUrlFetches.set(m,I),I}_addSvgIconConfig(t,e,i){return this._svgIconConfigs.set(Ri(t,e),i),this}_addSvgIconSetConfig(t,e){let i=this._iconSetConfigs.get(t);return i?i.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let i=0;i<this._resolvers.length;i++){let c=this._resolvers[i](e,t);if(c)return Ta(c)?new bt(c.url,null,c.options):new bt(c,null)}}static \u0275fac=function(e){return new(e||n)(Gt(Ln,8),Gt(Nn),Gt(T,8),Gt(ae))};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Re(n){return n.cloneNode(!0)}function Ri(n,a){return n+":"+a}function Ta(n){return!!(n.url&&n.options)}var Aa=["*"],za=new C("MAT_ICON_DEFAULT_OPTIONS"),Ra=new C("mat-icon-location",{providedIn:"root",factory:()=>{let n=l(T),a=n?n.location:null;return{getPathname:()=>a?a.pathname+a.search:""}}}),Li=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Fa=Li.map(n=>`[${n}]`).join(", "),La=/^url\(['"]?#(.*?)['"]?\)$/,Ni=(()=>{class n{_elementRef=l(k);_iconRegistry=l(Fi);_location=l(Ra);_errorHandler=l(ae);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Wt.EMPTY;constructor(){let t=l(new Tn("aria-hidden"),{optional:!0}),e=l(za,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let i=t.childNodes[e];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>t.classList.remove(i)),e.forEach(i=>t.classList.add(i)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((i,c)=>{i.forEach(m=>{c.setAttribute(m.name,`url('${t}#${m.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(Fa),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let c=0;c<e.length;c++)Li.forEach(m=>{let f=e[c],I=f.getAttribute(m),W=I?I.match(La):null;if(W){let L=i.get(f);L||(L=[],i.set(f,L)),L.push({name:m,value:W[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,i]=this._splitIconName(t);e&&(this._svgNamespace=e),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,e).pipe(It(1)).subscribe(c=>this._setSvgElement(c),c=>{let m=`Error retrieving icon ${e}:${i}! ${c.message}`;this._errorHandler.handleError(new Error(m))})}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,i){e&2&&(q("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),yt(i.color?"mat-"+i.color:""),b("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ot],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Aa,decls:1,vars:0,template:function(e,i){e&1&&(D(),_(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Bi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[Z]})}return n})();var Ba={capture:!0},ja=["focus","mousedown","mouseenter","touchstart"],dn="mat-ripple-loader-uninitialized",ln="mat-ripple-loader-class-name",ji="mat-ripple-loader-centered",Fe="mat-ripple-loader-disabled",Vi=(()=>{class n{_document=l(T);_animationsDisabled=wt();_globalRippleOptions=l(Te,{optional:!0});_platform=l(S);_ngZone=l(M);_injector=l(Y);_eventCleanups;_hosts=new Map;constructor(){let t=l(Mt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ja.map(e=>t.listen(this._document,e,this._onInteraction,Ba)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(dn,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(ln))&&t.setAttribute(ln,e.className||""),e.centered&&t.setAttribute(ji,""),e.disabled&&t.setAttribute(Fe,"")}setDisabled(t,e){let i=this._hosts.get(t);i?(i.target.rippleDisabled=e,!e&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(t))):e?t.setAttribute(Fe,""):t.removeAttribute(Fe)}_onInteraction=t=>{let e=at(t);if(e instanceof HTMLElement){let i=e.closest(`[${dn}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(ln)),t.append(e);let i=this._globalRippleOptions,c=this._animationsDisabled?0:i?.animation?.enterDuration??te.enterDuration,m=this._animationsDisabled?0:i?.animation?.exitDuration??te.exitDuration,f={rippleDisabled:this._animationsDisabled||i?.disabled||t.hasAttribute(Fe),rippleConfig:{centered:t.hasAttribute(ji),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:c,exitDuration:m}}},I=new Zt(f,this._ngZone,e,this._platform,this._injector),W=!f.rippleDisabled;W&&I.setupTriggerEvents(t),this._hosts.set(t,{target:f,renderer:I,hasSetUpEvents:W}),t.removeAttribute(dn)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Va=["mat-icon-button",""],Ha=["*"],Ua=new C("MAT_BUTTON_CONFIG");function Hi(n){return n==null?void 0:An(n)}var Ui=(()=>{class n{_elementRef=l(k);_ngZone=l(M);_animationsDisabled=wt();_config=l(Ua,{optional:!0});_focusMonitor=l(Jt);_cleanupClick;_renderer=l(kt);_rippleLoader=l(Vi);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){l(gt).load(Ae);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=O({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,i){e&2&&(q("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),yt(i.color?"mat-"+i.color:""),b("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ot],disabled:[2,"disabled","disabled",ot],ariaDisabled:[2,"aria-disabled","ariaDisabled",ot],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ot],tabIndex:[2,"tabIndex","tabIndex",Hi],_tabindex:[2,"tabindex","_tabindex",Hi]}})}return n})(),mn=(()=>{class n extends Ui{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[$],attrs:Va,ngContentSelectors:Ha,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,i){e&1&&(D(),K(0,"span",0),_(1),K(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Zi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[ze,Z]})}return n})();var Le=class n{constructor(a){this.breakpointObserver=a}breakpointObserver;sidenavMode="side";sidenavOpened=!0;ngOnInit(){this.breakpointObserver.observe("(max-width: 900px)").subscribe(a=>{a.matches?(this.sidenavMode="over",this.sidenavOpened=!1):(this.sidenavMode="side",this.sidenavOpened=!0)})}static \u0275fac=function(t){return new(t||n)(zt(qe))};static \u0275cmp=g({type:n,selectors:[["app-root"]],decls:84,vars:2,consts:[["sidenav",""],[1,"app-container"],[1,"app-sidenav",3,"mode","opened"],[1,"sidenav-header"],[1,"brand-icon"],[1,"material-symbols-outlined"],[1,"brand-info"],[1,"menu-section"],[1,"menu-title"],["mat-list-item","","routerLink","/dashboard","routerLinkActive","active-link"],[1,"material-symbols-outlined","menu-icon"],["mat-list-item","","routerLink","/pacientes","routerLinkActive","active-link"],["mat-list-item","","routerLink","/zonas","routerLinkActive","active-link"],["mat-list-item","","routerLink","/estadisticas","routerLinkActive","active-link"],["mat-list-item","","routerLink","/informes","routerLinkActive","active-link"],["mat-list-item","","routerLink","/usuarios","routerLinkActive","active-link"],[1,"sidenav-footer"],[1,"user-avatar"],[1,"user-info"],[1,"material-symbols-outlined","user-menu-icon"],[1,"app-content"],[1,"top-toolbar"],["mat-icon-button","",1,"menu-button",3,"click"],[1,"toolbar-title"],[1,"toolbar-spacer"],["mat-icon-button","",1,"notification-button"],[1,"toolbar-user"],[1,"toolbar-avatar"],[1,"toolbar-user-info"],[1,"main-content"]],template:function(t,e){if(t&1){let i=it();s(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"div",3)(4,"div",4)(5,"span",5),o(6," local_hospital "),r()(),s(7,"div",6)(8,"strong"),o(9,"Gesti\xF3n Hospitalaria"),r(),s(10,"span"),o(11,"Sistema de seguimiento"),r()()(),s(12,"div",7)(13,"span",8),o(14," PRINCIPAL "),r(),s(15,"mat-nav-list")(16,"a",9)(17,"span",10),o(18," dashboard "),r(),s(19,"span"),o(20,"Inicio"),r()(),s(21,"a",11)(22,"span",10),o(23," groups "),r(),s(24,"span"),o(25,"Pacientes"),r()(),s(26,"a",12)(27,"span",10),o(28," location_on "),r(),s(29,"span"),o(30,"Zonas"),r()(),s(31,"a",13)(32,"span",10),o(33," monitoring "),r(),s(34,"span"),o(35,"Estad\xEDsticas"),r()(),s(36,"a",14)(37,"span",10),o(38," description "),r(),s(39,"span"),o(40,"Informes"),r()()()(),s(41,"div",7)(42,"span",8),o(43," ADMINISTRACI\xD3N "),r(),s(44,"mat-nav-list")(45,"a",15)(46,"span",10),o(47," manage_accounts "),r(),s(48,"span"),o(49,"Usuarios"),r()()()(),s(50,"div",16)(51,"div",17),o(52," A "),r(),s(53,"div",18)(54,"strong"),o(55,"Administrador"),r(),s(56,"span"),o(57,"Administrador"),r()(),s(58,"span",19),o(59," more_vert "),r()()(),s(60,"mat-sidenav-content",20)(61,"mat-toolbar",21)(62,"button",22),R("click",function(){et(i);let m=We(2);return nt(m.toggle())}),s(63,"mat-icon"),o(64,"menu"),r()(),s(65,"div",23)(66,"span",5),o(67," local_hospital "),r(),s(68,"span"),o(69,"Gesti\xF3n Hospitalaria"),r()(),j(70,"div",24),s(71,"button",25)(72,"span",5),o(73," notifications "),r()(),s(74,"div",26)(75,"div",27),o(76," A "),r(),s(77,"div",28)(78,"strong"),o(79,"Administrador"),r(),s(80,"span"),o(81,"Administrador"),r()()()(),s(82,"main",29),j(83,"router-outlet"),r()()()}t&2&&(d(),Qt("mode",e.sidenavMode)("opened",e.sidenavOpened))},dependencies:[Vn,se,Hn,vi,an,_i,Ie,yi,xi,Di,Ii,Pi,Bi,Ni,Zi,mn],styles:['@font-face{font-family:Material Symbols Outlined;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v374/kJF4BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZZLsYEpzC_1ver5Y0.woff2) format("woff2")}.material-symbols-outlined[_ngcontent-%COMP%]{font-family:Material Symbols Outlined;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}[_nghost-%COMP%]{display:block;width:100%;height:100vh;overflow:hidden}.app-container[_ngcontent-%COMP%]{width:100%;height:100vh;background:#f5f7f9}.app-sidenav[_ngcontent-%COMP%]{width:245px;border-right:1px solid #e3e9ed;background:#fff;box-shadow:none}.sidenav-header[_ngcontent-%COMP%]{height:72px;display:flex;align-items:center;gap:11px;padding:0 20px;border-bottom:1px solid #edf1f3}.brand-icon[_ngcontent-%COMP%]{width:38px;height:38px;display:flex;align-items:center;justify-content:center;flex-shrink:0;border-radius:10px;background:#e8f3f7;color:#247ba0}.brand-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:22px}.brand-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:0}.brand-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#263947;font-size:13px;font-weight:700;white-space:nowrap}.brand-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:2px;color:#8996a0;font-size:10px;white-space:nowrap}.menu-section[_ngcontent-%COMP%]{padding:18px 12px 0}.menu-title[_ngcontent-%COMP%]{display:block;padding:0 10px 8px;color:#9aa5ad;font-size:10px;font-weight:700;letter-spacing:.7px}mat-nav-list[_ngcontent-%COMP%]{padding:0!important}mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{height:43px!important;margin-bottom:4px;border-radius:8px;color:#63717c;font-size:13px;transition:background .15s ease,color .15s ease}mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]     .mdc-list-item__content{display:flex;align-items:center}mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#f3f7f8;color:#247ba0}.menu-icon[_ngcontent-%COMP%]{width:22px;margin-right:11px;color:#87949e;font-size:20px;transition:color .15s ease}.active-link[_ngcontent-%COMP%]{background:#e8f3f7!important;color:#247ba0!important;font-weight:600}.active-link[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]{color:#247ba0}.sidenav-footer[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;display:flex;align-items:center;gap:9px;padding:14px 16px;border-top:1px solid #edf1f3;background:#fff}.user-avatar[_ngcontent-%COMP%]{width:32px;height:32px;display:flex;align-items:center;justify-content:center;flex-shrink:0;border-radius:50%;background:#e8f3f7;color:#247ba0;font-size:12px;font-weight:700}.user-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:0;flex:1}.user-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#344653;font-size:11px;font-weight:600}.user-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:2px;color:#9aa5ad;font-size:10px}.user-menu-icon[_ngcontent-%COMP%]{color:#9ba5ac;font-size:19px}.app-content[_ngcontent-%COMP%]{height:100vh;display:flex;flex-direction:column;overflow:hidden;background:#f5f7f9}.top-toolbar[_ngcontent-%COMP%]{height:64px!important;min-height:64px!important;display:flex;align-items:center;padding:0 22px!important;background:#fff!important;color:#263947!important;border-bottom:1px solid #e7edf1;box-shadow:none!important}.menu-button[_ngcontent-%COMP%]{display:none;color:#53636e}.toolbar-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px;color:#263947;font-size:14px;font-weight:600}.toolbar-title[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{color:#247ba0;font-size:20px}.toolbar-spacer[_ngcontent-%COMP%]{flex:1}.notification-button[_ngcontent-%COMP%]{margin-right:14px;color:#697984!important}.toolbar-user[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px}.toolbar-avatar[_ngcontent-%COMP%]{width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:#e8f3f7;color:#247ba0;font-size:12px;font-weight:700}.toolbar-user-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.toolbar-user-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#344653;font-size:11px;font-weight:600}.toolbar-user-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:2px;color:#9aa5ad;font-size:10px}.main-content[_ngcontent-%COMP%]{flex:1;min-height:0;overflow-x:hidden;overflow-y:auto;background:#f5f7f9}@media(max-width:900px){.menu-button[_ngcontent-%COMP%]{display:inline-flex}.toolbar-user-info[_ngcontent-%COMP%]{display:none}.top-toolbar[_ngcontent-%COMP%]{padding:0 12px!important}}@media(max-width:600px){.toolbar-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{font-size:13px}.notification-button[_ngcontent-%COMP%]{margin-right:3px}}']})};Fn(Le,Yn).then(n=>{let a=n.injector.get(Nt),t=sessionStorage.getItem("redirectPath");t&&(sessionStorage.removeItem("redirectPath"),a.navigateByUrl(t,{replaceUrl:!0}))}).catch(n=>console.error(n));
