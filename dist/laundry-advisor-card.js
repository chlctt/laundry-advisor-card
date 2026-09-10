function e(e,t,o,i){var s,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,o,n):s(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,o=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let r=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&s.set(t,e))}return e}toString(){return this.cssText}};const n=(e,...t)=>{const o=1===e.length?e[0]:t.reduce((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new r(o,e,i)},a=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:c,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,m=globalThis,_=m.trustedTypes,g=_?_.emptyScript:"",f=m.reactiveElementPolyfillSupport,y=(e,t)=>e,$={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},b=(e,t)=>!l(e,t),v={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&d(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:s}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const r=i?.call(this);s?.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??v}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...c(e),...u(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(o)e.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of i){const i=document.createElement("style"),s=t.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=o.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const s=(void 0!==o.converter?.toAttribute?o.converter:$).toAttribute(t,o.type);this._$Em=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:$;this._$Em=i;const r=s.fromAttribute(t,e.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(e,t,o,i=!1,s){if(void 0!==e){const r=this.constructor;if(!1===i&&(s=this[e]),o??=r.getPropertyOptions(e),!((o.hasChanged??b)(s,t)||o.useDefault&&o.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:i,wrapped:s},r){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==s||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,o,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,f?.({ReactiveElement:w}),(m.reactiveElementVersions??=[]).push("2.1.2");const A=globalThis,x=e=>e,E=A.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:e=>e}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+C,P=`<${O}>`,U=document,N=()=>U.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,M=Array.isArray,R="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,L=/>/g,D=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,j=/"/g,I=/^(?:script|style|textarea|title)$/i,W=(e=>(t,...o)=>({_$litType$:e,strings:t,values:o}))(1),V=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),q=new WeakMap,K=U.createTreeWalker(U,129);function J(e,t){if(!M(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const Z=(e,t)=>{const o=e.length-1,i=[];let s,r=2===t?"<svg>":3===t?"<math>":"",n=H;for(let t=0;t<o;t++){const o=e[t];let a,l,d=-1,h=0;for(;h<o.length&&(n.lastIndex=h,l=n.exec(o),null!==l);)h=n.lastIndex,n===H?"!--"===l[1]?n=z:void 0!==l[1]?n=L:void 0!==l[2]?(I.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=D):void 0!==l[3]&&(n=D):n===D?">"===l[0]?(n=s??H,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?D:'"'===l[3]?j:B):n===j||n===B?n=D:n===z||n===L?n=H:(n=D,s=void 0);const c=n===D&&e[t+1].startsWith("/>")?" ":"";r+=n===H?o+P:d>=0?(i.push(a),o.slice(0,d)+k+o.slice(d)+C+c):o+C+(-2===d?t:c)}return[J(e,r+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class Y{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let s=0,r=0;const n=e.length-1,a=this.parts,[l,d]=Z(e,t);if(this.el=Y.createElement(l,o),K.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=K.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(k)){const t=d[r++],o=i.getAttribute(e).split(C),n=/([.?@])?(.*)/.exec(t);a.push({type:1,index:s,name:n[2],strings:o,ctor:"."===n[1]?te:"?"===n[1]?oe:"@"===n[1]?ie:ee}),i.removeAttribute(e)}else e.startsWith(C)&&(a.push({type:6,index:s}),i.removeAttribute(e));if(I.test(i.tagName)){const e=i.textContent.split(C),t=e.length-1;if(t>0){i.textContent=E?E.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],N()),K.nextNode(),a.push({type:2,index:++s});i.append(e[t],N())}}}else if(8===i.nodeType)if(i.data===O)a.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf(C,e+1));)a.push({type:7,index:s}),e+=C.length-1}s++}}static createElement(e,t){const o=U.createElement("template");return o.innerHTML=e,o}}function G(e,t,o=e,i){if(t===V)return t;let s=void 0!==i?o._$Co?.[i]:o._$Cl;const r=T(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(e),s._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=s:o._$Cl=s),void 0!==s&&(t=G(e,s._$AS(e,t.values),s,i)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??U).importNode(t,!0);K.currentNode=i;let s=K.nextNode(),r=0,n=0,a=o[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new X(s,s.nextSibling,this,e):1===a.type?t=new a.ctor(s,a.name,a.strings,this,e):6===a.type&&(t=new se(s,this,e)),this._$AV.push(t),a=o[++n]}r!==a?.index&&(s=K.nextNode(),r++)}return K.currentNode=U,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),T(e)?e===F||null==e||""===e?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>M(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(U.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Y.createElement(J(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new Q(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new Y(e)),t}k(e){M(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const s of e)i===t.length?t.push(o=new X(this.O(N()),this.O(N()),this,this.options)):o=t[i],o._$AI(s),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=x(e).nextSibling;x(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,s){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=F}_$AI(e,t=this,o,i){const s=this.strings;let r=!1;if(void 0===s)e=G(this,e,t,0),r=!T(e)||e!==this._$AH&&e!==V,r&&(this._$AH=e);else{const i=e;let n,a;for(e=s[0],n=0;n<s.length-1;n++)a=G(this,i[o+n],t,n),a===V&&(a=this._$AH[n]),r||=!T(a)||a!==this._$AH[n],a===F?e=F:e!==F&&(e+=(a??"")+s[n+1]),this._$AH[n]=a}r&&!i&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}class oe extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class ie extends ee{constructor(e,t,o,i,s){super(e,t,o,i,s),this.type=5}_$AI(e,t=this){if((e=G(this,e,t,0)??F)===V)return;const o=this._$AH,i=e===F&&o!==F||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==F&&(o===F||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class se{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const re=A.litHtmlPolyfillSupport;re?.(Y,X),(A.litHtmlVersions??=[]).push("3.3.3");const ne=globalThis;class ae extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let s=i._$litPart$;if(void 0===s){const e=o?.renderBefore??null;i._$litPart$=s=new X(t.insertBefore(N(),e),e,void 0,o??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}ae._$litElement$=!0,ae.finalized=!0,ne.litElementHydrateSupport?.({LitElement:ae});const le=ne.litElementPolyfillSupport;le?.({LitElement:ae}),(ne.litElementVersions??=[]).push("4.2.2");const de=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},he={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:b},ce=(e=he,t,o)=>{const{kind:i,metadata:s}=o;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),r.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const s=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,s,e,!0,o)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=o;return function(o){const s=this[i];t.call(this,o),this.requestUpdate(i,s,e,!0,o)}}throw Error("Unsupported decorator location: "+i)};function ue(e){return(t,o)=>"object"==typeof o?ce(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function pe(e){return ue({...e,state:!0,attribute:!1})}const me="laundry-advisor-card",_e="laundry-advisor-card-editor",ge={show_rooms:!0,show_reasons:!0},fe={hang_outside_now:{icon:"mdi:weather-sunny",color:"#43a047"},hang_outside_later:{icon:"mdi:weather-sunset",color:"#7cb342"},outside_marginal:{icon:"mdi:weather-partly-cloudy",color:"#c0ca33"},wait_for_tomorrow:{icon:"mdi:timer-sand",color:"#1e88e5"},defer_wash:{icon:"mdi:washing-machine-off",color:"#3949ab"},room_ok:{icon:"mdi:tshirt-crew",color:"#43a047"},room_ventilate:{icon:"mdi:window-open-variant",color:"#fb8c00"},room_dehumidify:{icon:"mdi:air-humidifier",color:"#f4511e"},dryer_recommended:{icon:"mdi:tumble-dryer",color:"#8e24aa"},best_effort:{icon:"mdi:home-alert",color:"#e64a19"},mold_risk:{icon:"mdi:alert",color:"#e53935"},unknown:{icon:"mdi:help-circle-outline",color:"#9e9e9e"}};function ye(e){return e>=70?"#43a047":e>=45?"#c0ca33":"#fb8c00"}const $e={de:{states:{hang_outside_now:{label:"Raus damit",headline:"Raus damit – heute trocknet die Wäsche draußen gut."},hang_outside_later:{label:"Heute später",headline:"Heute noch möglich, aber das Fenster ist knapp."},outside_marginal:{label:"Draußen, beobachten",headline:"Draußen geht, aber behalte den Himmel im Auge."},wait_for_tomorrow:{label:"Auf den Ständer",headline:"Heute auf den Ständer – morgen wird es draußen deutlich besser."},defer_wash:{label:"Waschen verschieben",headline:"Mit dem Waschen bis morgen warten lohnt sich."},room_ok:{label:"{room}",headline:"Bester Ort: {room} – warm und trocken genug, ein Ventilator beschleunigt."},room_ventilate:{label:"{room}: lüften",headline:"Bester Ort: {room} – Fenster stoßlüften und Ventilator an."},room_dehumidify:{label:"{room}: Entfeuchter",headline:"Bester Ort: {room} – mit Entfeuchter (Lüften bringt gerade nichts)."},dryer_recommended:{label:"Trockner",headline:"Kein guter Trockenort – ab in den Wäschetrockner."},best_effort:{label:"Notlösung: {room}",headline:"Kein wirklich guter Ort. Am ehesten: {room} – dort gut lüften."},mold_risk:{label:"Schimmelgefahr",headline:"Achtung: alle Räume zu feucht – nichts Nasses reinhängen."},unknown:{label:"Unbekannt",headline:"Noch keine Bewertung möglich."}},reasons:{outdoor_good:"Outdoor-Score heute {s}.",outdoor_weak:"Outdoor-Score heute nur {s}.",tomorrow_better:"Morgen deutlich besser ({t} statt {d}).",room_best:"{n}: bester Innenraum (Score {s}).",room_dry_enough:"{n} bei {rh}% rF ist trocken genug.",vent_useful:"Außenluft ist trockener – Lüften hilft.",vent_useless:"Außenluft nicht trockener – Lüften bringt nichts.",window_open:"Fenster/Tür in {n} steht schon offen.",window_closed:"Fenster/Tür in {n} öffnen.",no_room:"Kein Innenraum unter der Feuchtegrenze.",no_dryer:"Kein Wäschetrockner konfiguriert.",no_forecast:"Keine Wettervorhersage verfügbar.",mold:"{n}: Schimmelgefahr (rF über 80%)."},room_status:{ok:"ok",too_humid:"zu feucht",too_cold:"zu kalt",mold_risk:"Schimmel"},ui:{today:"Heute",tomorrow:"Morgen",day_after:"Übermorgen",no_window:"Kein Trockenfenster heute",window:"{start}:00–{end}:00 Uhr",daylight_left:"{h} h Tageslicht übrig",rooms:"Räume",recommended:"empfohlen",ventilate_hint:"lüften sinnvoll",ventilate_useless:"Lüften bringt nichts",no_airing:"kein Fenster zum Lüften",has_fan:"Ventilator",has_dehumidifier:"Entfeuchter",entity_not_found:"Entität {entity} nicht gefunden.",need_entity:"Bitte eine Advisor-Sensor-Entität angeben (entity)."}},en:{states:{hang_outside_now:{label:"Hang it out",headline:"Hang it outside – good drying weather today."},hang_outside_later:{label:"Later today",headline:"Still possible today, but the window is tight."},outside_marginal:{label:"Outside, watch it",headline:"Outside works, but keep an eye on the sky."},wait_for_tomorrow:{label:"On a rack",headline:"Put it on a rack today – tomorrow is clearly better outside."},defer_wash:{label:"Delay the wash",headline:"Worth waiting until tomorrow to wash."},room_ok:{label:"{room}",headline:"Best spot: {room} – warm and dry enough; a fan speeds it up."},room_ventilate:{label:"{room}: ventilate",headline:"Best spot: {room} – air it out and run a fan."},room_dehumidify:{label:"{room}: dehumidifier",headline:"Best spot: {room} – use a dehumidifier (airing does nothing now)."},dryer_recommended:{label:"Tumble dryer",headline:"No good drying spot – use the tumble dryer."},best_effort:{label:"Best bet: {room}",headline:"No really good spot. Best bet: {room} – ventilate well there."},mold_risk:{label:"Mould risk",headline:"Warning: every room is too humid – do not hang anything wet."},unknown:{label:"Unknown",headline:"No assessment possible yet."}},reasons:{outdoor_good:"Outdoor score today {s}.",outdoor_weak:"Outdoor score today only {s}.",tomorrow_better:"Tomorrow clearly better ({t} vs {d}).",room_best:"{n}: best indoor room (score {s}).",room_dry_enough:"{n} at {rh}% RH is dry enough.",vent_useful:"Outdoor air is drier – airing helps.",vent_useless:"Outdoor air not drier – airing does nothing.",window_open:"The window/door in {n} is already open.",window_closed:"Open the window/door in {n}.",no_room:"No indoor room below the humidity limit.",no_dryer:"No tumble dryer configured.",no_forecast:"No weather forecast available.",mold:"{n}: mould risk (RH above 80%)."},room_status:{ok:"ok",too_humid:"too humid",too_cold:"too cold",mold_risk:"mould"},ui:{today:"Today",tomorrow:"Tomorrow",day_after:"In 2 days",no_window:"No drying window today",window:"{start}:00–{end}:00",daylight_left:"{h} h of daylight left",rooms:"Rooms",recommended:"recommended",ventilate_hint:"airing helps",ventilate_useless:"airing does nothing",no_airing:"no window to air",has_fan:"fan",has_dehumidifier:"dehumidifier",entity_not_found:"Entity {entity} not found.",need_entity:"Please set an advisor sensor entity (entity)."}}};function be(e){const t=(e?.locale?.language||e?.language||"en").toLowerCase().split("-")[0];return $e[t]?t:"en"}function ve(e,t,o){const i=function(e,t){const o=e=>t.split(".").reduce((e,t)=>{if(e&&"object"==typeof e)return e[t]},e);return o($e[e])??o($e.en)}(e,t);return"string"!=typeof i?"":o?i.replace(/\{(\w+)\}/g,(e,t)=>String(o[t]??"")):i}const we=[{name:"entity",required:!0,selector:{entity:{domain:"sensor"}}},{name:"name",selector:{text:{}}},{type:"grid",schema:[{name:"show_rooms",selector:{boolean:{}}},{name:"show_reasons",selector:{boolean:{}}}]}],Ae={de:{entity:"Advisor-Sensor",name:"Titel (optional)",show_rooms:"Raum-Liste",show_reasons:"Begründungen"},en:{entity:"Advisor sensor",name:"Title (optional)",show_rooms:"Room list",show_reasons:"Reasons"}};let xe=class extends ae{constructor(){super(...arguments),this._label=e=>{const t=be(this.hass);return(Ae[t]??Ae.en)[e.name]??e.name}}setConfig(e){this._config=e}render(){return this.hass&&this._config?W`
      <ha-form
        .hass=${this.hass}
        .data=${{...ge,...this._config}}
        .schema=${we}
        .computeLabel=${this._label}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:F}_valueChanged(e){const t=e.detail.value;this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}};e([ue({attribute:!1})],xe.prototype,"hass",void 0),e([pe()],xe.prototype,"_config",void 0),xe=e([de(_e)],xe),console.info("%c LAUNDRY-ADVISOR-CARD %c 0.3.1 ","color:white;background:#1e88e5;font-weight:700","color:#1e88e5;background:#eee"),window.customCards=window.customCards||[],window.customCards.push({type:me,name:"Laundry Advisor Card",description:"Where to dry laundry – outside, a room, the dryer, or wait?",preview:!0,documentationURL:"https://github.com/chlctt/laundry-advisor-card"});let Ee=class extends ae{static async getConfigElement(){return document.createElement(_e)}static getStubConfig(){return{entity:"sensor.laundry_advisor",...ge}}setConfig(e){if(!e||!e.entity)throw new Error("Please set an advisor sensor entity (entity).");this._config={...ge,...e}}getCardSize(){if(!this._config||!this.hass)return 4;const e=this.hass.states[this._config.entity]?.attributes,t=!1===this._config.show_rooms?0:e?.rooms?.length??0;return 3+Math.ceil(t/2)}get _lang(){return be(this.hass)}render(){if(!this._config||!this.hass)return F;const e=this._lang,t=this.hass.states[this._config.entity];if(!t)return W`<ha-card
        ><div class="warn">
          ${ve(e,"ui.entity_not_found",{entity:this._config.entity})}
        </div></ha-card
      >`;const o=t.state in fe?t.state:"unknown",i=fe[o],s=t.attributes,r=s.recommended_room??"",n=ve(e,`states.${o}.headline`,{room:r})||(s.headline??""),a=this._reasons(e,s),l=Array.isArray(s.rooms)?s.rooms.slice():[];return W`
      <ha-card>
        <div class="header" style=${`--accent:${i.color}`}>
          <div class="badge"><ha-icon .icon=${i.icon}></ha-icon></div>
          <div class="headline">
            <div class="title">
              ${this._config.name??ve(e,`states.${o}.label`,{room:r})}
            </div>
            ${n?W`<div class="sub">${n}</div>`:F}
          </div>
        </div>

        <div class="scores">
          ${this._ring(ve(e,"ui.today"),s.outdoor_score,"lg")}
          ${this._ring(ve(e,"ui.tomorrow"),s.outdoor_score_tomorrow,"sm")}
          ${this._ring(ve(e,"ui.day_after"),s.outdoor_score_day_after,"sm")}
        </div>

        <div class="infobar">
          ${this._window(s)}
          ${null!=s.daylight_left_h?W`<span class="muted"
                  >${ve(e,"ui.daylight_left",{h:s.daylight_left_h})}</span
                >`:F}
        </div>

        ${this._config.show_rooms&&l.length?this._rooms(l):F}
        ${this._config.show_reasons&&a.length?W`<ul class="reasons">
                ${a.map(e=>W`<li>${e}</li>`)}
              </ul>`:F}
      </ha-card>
    `}_ring(e,t,o){const i=null!=t&&!isNaN(Number(t)),s=i?Math.max(0,Math.min(100,Number(t))):0,r=i?ye(s):"var(--divider-color, #e0e0e0)";return W`
      <div class="ring ${o}">
        <div
          class="dial"
          style=${i?`background:conic-gradient(${r} ${s}%, var(--divider-color, #e0e0e0) ${s}%)`:"background:var(--divider-color, #e0e0e0)"}
        >
          <div class="hole"><span>${i?Math.round(Number(t)):"–"}</span></div>
        </div>
        <div class="ring-label">${e}</div>
      </div>
    `}_reasons(e,t){return Array.isArray(t.reason_codes)&&t.reason_codes.length?t.reason_codes.map(t=>ve(e,`reasons.${t.code}`,{s:t.s,t:t.t,d:t.d,n:t.n,rh:t.rh})).filter(e=>e.length>0):Array.isArray(t.reasons)?t.reasons:[]}_window(e){const t=e.best_window_start_hour,o=e.best_window_end_hour;return null==t||null==o?W`<span class="muted">${ve(this._lang,"ui.no_window")}</span>`:W`<span class="chip">
      <ha-icon icon="mdi:clock-outline"></ha-icon>
      ${ve(this._lang,"ui.window",{start:t,end:o})}
    </span>`}_rooms(e){const t=this._lang;return W`
      <div class="rooms">
        <div class="rooms-title">${ve(t,"ui.rooms")}</div>
        ${e.map(e=>{const o="ok"===e.status?"ok":"mold_risk"===e.status?"danger":"warn";return W`
            <div class="room ${e.recommended?"recommended":""}">
              <div class="room-bar">
                <div
                  class="room-bar-fill"
                  style=${`width:${Math.max(3,Math.min(100,e.score))}%;background:${ye(e.score)}`}
                ></div>
              </div>
              <div class="room-main">
                <span class="room-name">
                  ${e.recommended?W`<ha-icon icon="mdi:star" class="star"></ha-icon>`:F}
                  ${e.name}
                </span>
                <span class="room-score">${Math.round(e.score)}</span>
                <span class="tag ${o}">${ve(t,`room_status.${e.status}`)}</span>
              </div>
              <div class="room-sub muted">
                ${null!=e.humidity?W`${e.humidity}% rF`:F}
                ${null!=e.temperature?W`· ${e.temperature}°C`:F}
                ${e.has_window?W`·
                      ${e.ventilation_useful?ve(t,"ui.ventilate_hint"):ve(t,"ui.ventilate_useless")}`:!1===e.has_window?W`· ${ve(t,"ui.no_airing")}`:F}
                ${e.has_dehumidifier?W`· ${ve(t,"ui.has_dehumidifier")}`:F}
                ${e.has_fan?W`· ${ve(t,"ui.has_fan")}`:F}
              </div>
            </div>
          `})}
      </div>
    `}static{this.styles=n`
    ha-card {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .warn {
      color: var(--error-color, #db4437);
    }
    .header {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .badge {
      flex: 0 0 auto;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: color-mix(in srgb, var(--accent) 18%, transparent);
      color: var(--accent);
    }
    .badge ha-icon {
      --mdc-icon-size: 26px;
    }
    .headline .title {
      font-weight: 600;
      font-size: 1.05rem;
      color: var(--primary-text-color);
    }
    .headline .sub {
      font-size: 0.9rem;
      color: var(--secondary-text-color);
    }
    .scores {
      display: flex;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }
    .ring {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
    .dial {
      border-radius: 50%;
      display: grid;
      place-items: center;
    }
    .ring.lg .dial {
      width: 78px;
      height: 78px;
    }
    .ring.sm .dial {
      width: 56px;
      height: 56px;
    }
    .hole {
      width: 72%;
      height: 72%;
      border-radius: 50%;
      background: var(--card-background-color, #fff);
      display: grid;
      place-items: center;
    }
    .hole span {
      font-weight: 700;
      color: var(--primary-text-color);
    }
    .ring.lg .hole span {
      font-size: 1.15rem;
    }
    .ring.sm .hole span {
      font-size: 0.85rem;
    }
    .ring-label {
      font-size: 0.75rem;
      color: var(--secondary-text-color);
    }
    .infobar {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }
    .chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 10px;
      border-radius: 14px;
      background: var(--secondary-background-color, #f1f1f1);
      color: var(--primary-text-color);
      font-size: 0.85rem;
    }
    .chip ha-icon {
      --mdc-icon-size: 16px;
    }
    .muted {
      color: var(--secondary-text-color);
      font-size: 0.85rem;
    }
    .rooms {
      border-top: 1px solid var(--divider-color, #e0e0e0);
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .rooms-title {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .room {
      display: flex;
      flex-direction: column;
      gap: 3px;
      padding: 6px 8px;
      border-radius: 8px;
    }
    .room.recommended {
      background: color-mix(in srgb, var(--primary-color, #1e88e5) 12%, transparent);
    }
    .room-bar {
      height: 4px;
      border-radius: 2px;
      background: var(--divider-color, #ececec);
      overflow: hidden;
    }
    .room-bar-fill {
      height: 100%;
      border-radius: 2px;
    }
    .room-main {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .room-name {
      font-weight: 600;
      color: var(--primary-text-color);
      display: inline-flex;
      align-items: center;
      gap: 3px;
    }
    .star {
      --mdc-icon-size: 15px;
      color: var(--primary-color, #1e88e5);
    }
    .room-score {
      font-weight: 700;
      color: var(--primary-text-color);
      font-size: 0.9rem;
    }
    .room-sub {
      font-size: 0.78rem;
    }
    .tag {
      margin-left: auto;
      padding: 1px 8px;
      border-radius: 10px;
      font-size: 0.72rem;
    }
    .tag.ok {
      background: #43a04722;
      color: #2e7d32;
    }
    .tag.warn {
      background: #fb8c0022;
      color: #ef6c00;
    }
    .tag.danger {
      background: #e5393522;
      color: #c62828;
    }
    .reasons {
      margin: 0;
      padding-left: 18px;
      color: var(--secondary-text-color);
      font-size: 0.82rem;
    }
    .reasons li {
      margin: 2px 0;
    }
  `}};e([ue({attribute:!1})],Ee.prototype,"hass",void 0),e([pe()],Ee.prototype,"_config",void 0),Ee=e([de(me)],Ee);export{Ee as LaundryAdvisorCard};
