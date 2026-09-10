function t(t,e,s,i){var o,r=arguments.length,n=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,s,n):o(e,s))||n);return r>3&&n&&Object.defineProperty(e,s,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new r(s,t,i)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,m=globalThis,_=m.trustedTypes,f=_?_.emptyScript:"",g=m.reactiveElementPolyfillSupport,$=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const r=i?.call(this);o?.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i;const r=o.fromAttribute(e,t.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(void 0!==t){const r=this.constructor;if(!1===i&&(o=this[t]),s??=r.getPropertyOptions(t),!((s.hasChanged??v)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[$("elementProperties")]=new Map,w[$("finalized")]=new Map,g?.({ReactiveElement:w}),(m.reactiveElementVersions??=[]).push("2.1.2");const A=globalThis,x=t=>t,E=A.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+k,U=`<${P}>`,O=document,M=()=>O.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,N="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,D=/>/g,L=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,B=/"/g,I=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),q=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),K=new WeakMap,F=O.createTreeWalker(O,129);function J(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Z=(t,e)=>{const s=t.length-1,i=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=H;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,d=0;for(;d<s.length&&(n.lastIndex=d,l=n.exec(s),null!==l);)d=n.lastIndex,n===H?"!--"===l[1]?n=z:void 0!==l[1]?n=D:void 0!==l[2]?(I.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=L):void 0!==l[3]&&(n=L):n===L?">"===l[0]?(n=o??H,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?L:'"'===l[3]?B:j):n===B||n===j?n=L:n===z||n===D?n=H:(n=L,o=void 0);const h=n===L&&t[e+1].startsWith("/>")?" ":"";r+=n===H?s+U:c>=0?(i.push(a),s.slice(0,c)+C+s.slice(c)+k+h):s+k+(-2===c?e:h)}return[J(t,r+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Y{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[l,c]=Z(t,e);if(this.el=Y.createElement(l,s),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=F.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=c[r++],s=i.getAttribute(t).split(k),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:s,ctor:"."===n[1]?et:"?"===n[1]?st:"@"===n[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:o}),i.removeAttribute(t));if(I.test(i.tagName)){const t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=E?E.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],M()),F.nextNode(),a.push({type:2,index:++o});i.append(t[e],M())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)a.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const s=O.createElement("template");return s.innerHTML=t,s}}function G(t,e,s=t,i){if(e===q)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const r=R(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=G(t,o._$AS(t,e.values),o,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??O).importNode(e,!0);F.currentNode=i;let o=F.nextNode(),r=0,n=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new X(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=s[++n]}r!==a?.index&&(o=F.nextNode(),r++)}return F.currentNode=O,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),R(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Y.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new Y(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new X(this.O(M()),this.O(M()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=V}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(void 0===o)t=G(this,t,e,0),r=!R(t)||t!==this._$AH&&t!==q,r&&(this._$AH=t);else{const i=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=G(this,i[s+n],e,n),a===q&&(a=this._$AH[n]),r||=!R(a)||a!==this._$AH[n],a===V?t=V:t!==V&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!i&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class st extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class it extends tt{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??V)===q)return;const s=this._$AH,i=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==V&&(s===V||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const rt=A.litHtmlPolyfillSupport;rt?.(Y,X),(A.litHtmlVersions??=[]).push("3.3.3");const nt=globalThis;class at extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new X(e.insertBefore(M(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const lt=nt.litElementPolyfillSupport;lt?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");const ct=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v},ht=(t=dt,e,s)=>{const{kind:i,metadata:o}=s;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),r.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const o=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,o,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const o=this[i];e.call(this,s),this.requestUpdate(i,o,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};function ut(t){return(e,s)=>"object"==typeof s?ht(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function pt(t){return ut({...t,state:!0,attribute:!1})}const mt="laundry-advisor-card",_t="laundry-advisor-card-editor",ft={hang_outside_now:{icon:"mdi:weather-sunny",color:"#43a047"},hang_outside_later:{icon:"mdi:weather-sunset",color:"#7cb342"},outside_marginal:{icon:"mdi:weather-partly-cloudy",color:"#c0ca33"},wait_for_tomorrow:{icon:"mdi:timer-sand",color:"#1e88e5"},defer_wash:{icon:"mdi:washing-machine-off",color:"#3949ab"},room_ok:{icon:"mdi:tshirt-crew",color:"#43a047"},room_ventilate:{icon:"mdi:window-open-variant",color:"#fb8c00"},room_dehumidify:{icon:"mdi:air-humidifier",color:"#f4511e"},dryer_recommended:{icon:"mdi:tumble-dryer",color:"#8e24aa"},best_effort:{icon:"mdi:home-alert",color:"#e64a19"},mold_risk:{icon:"mdi:alert",color:"#e53935"},unknown:{icon:"mdi:help-circle-outline",color:"#9e9e9e"}};function gt(t){return t>=70?"#43a047":t>=45?"#c0ca33":"#fb8c00"}const $t={de:{states:{hang_outside_now:{label:"Raus damit"},hang_outside_later:{label:"Heute später"},outside_marginal:{label:"Draußen, beobachten"},wait_for_tomorrow:{label:"Auf den Ständer"},defer_wash:{label:"Waschen verschieben"},room_ok:{label:"{room}"},room_ventilate:{label:"{room}: lüften"},room_dehumidify:{label:"{room}: Entfeuchter"},dryer_recommended:{label:"Trockner"},best_effort:{label:"Notlösung: {room}"},mold_risk:{label:"Schimmelgefahr"},unknown:{label:"Unbekannt"}},room_status:{ok:"ok",too_humid:"zu feucht",too_cold:"zu kalt",mold_risk:"Schimmel"},ui:{today:"Heute",tomorrow:"Morgen",day_after:"Übermorgen",no_window:"Kein Trockenfenster heute",window:"{start}:00–{end}:00 Uhr",daylight_left:"{h} h Tageslicht übrig",rooms:"Räume",recommended:"empfohlen",ventilate_hint:"lüften sinnvoll",ventilate_useless:"Lüften bringt nichts",has_fan:"Ventilator",has_dehumidifier:"Entfeuchter",entity_not_found:"Entität {entity} nicht gefunden.",need_entity:"Bitte eine Advisor-Sensor-Entität angeben (entity)."}},en:{states:{hang_outside_now:{label:"Hang it out"},hang_outside_later:{label:"Later today"},outside_marginal:{label:"Outside, watch it"},wait_for_tomorrow:{label:"On a rack"},defer_wash:{label:"Delay the wash"},room_ok:{label:"{room}"},room_ventilate:{label:"{room}: ventilate"},room_dehumidify:{label:"{room}: dehumidifier"},dryer_recommended:{label:"Tumble dryer"},best_effort:{label:"Best bet: {room}"},mold_risk:{label:"Mould risk"},unknown:{label:"Unknown"}},room_status:{ok:"ok",too_humid:"too humid",too_cold:"too cold",mold_risk:"mould"},ui:{today:"Today",tomorrow:"Tomorrow",day_after:"In 2 days",no_window:"No drying window today",window:"{start}:00–{end}:00",daylight_left:"{h} h of daylight left",rooms:"Rooms",recommended:"recommended",ventilate_hint:"airing helps",ventilate_useless:"airing does nothing",has_fan:"fan",has_dehumidifier:"dehumidifier",entity_not_found:"Entity {entity} not found.",need_entity:"Please set an advisor sensor entity (entity)."}}};function yt(t){const e=(t?.locale?.language||t?.language||"en").toLowerCase().split("-")[0];return $t[e]?e:"en"}function vt(t,e,s){const i=function(t,e){const s=t=>e.split(".").reduce((t,e)=>{if(t&&"object"==typeof t)return t[e]},t);return s($t[t])??s($t.en)}(t,e);return"string"!=typeof i?"":s?i.replace(/\{(\w+)\}/g,(t,e)=>String(s[e]??"")):i}const bt=[{name:"entity",required:!0,selector:{entity:{domain:"sensor"}}},{name:"name",selector:{text:{}}},{type:"grid",schema:[{name:"show_rooms",selector:{boolean:{}}},{name:"show_reasons",selector:{boolean:{}}}]}],wt={de:{entity:"Advisor-Sensor",name:"Titel (optional)",show_rooms:"Raum-Liste",show_reasons:"Begründungen"},en:{entity:"Advisor sensor",name:"Title (optional)",show_rooms:"Room list",show_reasons:"Reasons"}};let At=class extends at{constructor(){super(...arguments),this._label=t=>{const e=yt(this.hass);return(wt[e]??wt.en)[t.name]??t.name}}setConfig(t){this._config={show_rooms:!0,show_reasons:!0,...t}}render(){return this.hass&&this._config?W`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${bt}
        .computeLabel=${this._label}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:V}_valueChanged(t){const e=t.detail.value;this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}};t([ut({attribute:!1})],At.prototype,"hass",void 0),t([pt()],At.prototype,"_config",void 0),At=t([ct(_t)],At),console.info("%c LAUNDRY-ADVISOR-CARD %c 0.3.0 ","color:white;background:#1e88e5;font-weight:700","color:#1e88e5;background:#eee"),window.customCards=window.customCards||[],window.customCards.push({type:mt,name:"Laundry Advisor Card",description:"Where to dry laundry – outside, a room, the dryer, or wait?",preview:!0,documentationURL:"https://github.com/chlctt/laundry-advisor-card"});let xt=class extends at{static async getConfigElement(){return document.createElement(_t)}static getStubConfig(){return{entity:"sensor.laundry_advisor",show_rooms:!0}}setConfig(t){if(!t||!t.entity)throw new Error("Please set an advisor sensor entity (entity).");this._config={show_rooms:!0,show_reasons:!0,...t}}getCardSize(){if(!this._config||!this.hass)return 4;const t=this.hass.states[this._config.entity]?.attributes,e=!1===this._config.show_rooms?0:t?.rooms?.length??0;return 3+Math.ceil(e/2)}get _lang(){return yt(this.hass)}render(){if(!this._config||!this.hass)return V;const t=this._lang,e=this.hass.states[this._config.entity];if(!e)return W`<ha-card
        ><div class="warn">
          ${vt(t,"ui.entity_not_found",{entity:this._config.entity})}
        </div></ha-card
      >`;const s=e.state in ft?e.state:"unknown",i=ft[s],o=e.attributes,r=o.recommended_room??"",n=o.headline??"",a=Array.isArray(o.rooms)?o.rooms.slice():[];return W`
      <ha-card>
        <div class="header" style=${`--accent:${i.color}`}>
          <div class="badge"><ha-icon .icon=${i.icon}></ha-icon></div>
          <div class="headline">
            <div class="title">
              ${this._config.name??vt(t,`states.${s}.label`,{room:r})}
            </div>
            <div class="sub">${n}</div>
          </div>
        </div>

        <div class="scores">
          ${this._ring(vt(t,"ui.today"),o.outdoor_score,"lg")}
          ${this._ring(vt(t,"ui.tomorrow"),o.outdoor_score_tomorrow,"sm")}
          ${this._ring(vt(t,"ui.day_after"),o.outdoor_score_day_after,"sm")}
        </div>

        <div class="infobar">
          ${this._window(o)}
          ${null!=o.daylight_left_h?W`<span class="muted"
                  >${vt(t,"ui.daylight_left",{h:o.daylight_left_h})}</span
                >`:V}
        </div>

        ${this._config.show_rooms&&a.length?this._rooms(a):V}
        ${this._config.show_reasons&&o.reasons?.length?W`<ul class="reasons">
                ${o.reasons.map(t=>W`<li>${t}</li>`)}
              </ul>`:V}
      </ha-card>
    `}_ring(t,e,s){const i=null!=e&&!isNaN(Number(e)),o=i?Math.max(0,Math.min(100,Number(e))):0,r=i?gt(o):"var(--divider-color, #e0e0e0)";return W`
      <div class="ring ${s}">
        <div
          class="dial"
          style=${i?`background:conic-gradient(${r} ${o}%, var(--divider-color, #e0e0e0) ${o}%)`:"background:var(--divider-color, #e0e0e0)"}
        >
          <div class="hole"><span>${i?Math.round(Number(e)):"–"}</span></div>
        </div>
        <div class="ring-label">${t}</div>
      </div>
    `}_window(t){const e=t.best_window_start_hour,s=t.best_window_end_hour;return null==e||null==s?W`<span class="muted">${vt(this._lang,"ui.no_window")}</span>`:W`<span class="chip">
      <ha-icon icon="mdi:clock-outline"></ha-icon>
      ${vt(this._lang,"ui.window",{start:e,end:s})}
    </span>`}_rooms(t){const e=this._lang;return W`
      <div class="rooms">
        <div class="rooms-title">${vt(e,"ui.rooms")}</div>
        ${t.map(t=>{const s="ok"===t.status?"ok":"mold_risk"===t.status?"danger":"warn";return W`
            <div class="room ${t.recommended?"recommended":""}">
              <div class="room-bar">
                <div
                  class="room-bar-fill"
                  style=${`width:${Math.max(3,Math.min(100,t.score))}%;background:${gt(t.score)}`}
                ></div>
              </div>
              <div class="room-main">
                <span class="room-name">
                  ${t.recommended?W`<ha-icon icon="mdi:star" class="star"></ha-icon>`:V}
                  ${t.name}
                </span>
                <span class="room-score">${Math.round(t.score)}</span>
                <span class="tag ${s}">${vt(e,`room_status.${t.status}`)}</span>
              </div>
              <div class="room-sub muted">
                ${null!=t.humidity?W`${t.humidity}% rF`:V}
                ${null!=t.temperature?W`· ${t.temperature}°C`:V}
                ${null!=t.ventilation_useful?W`·
                      ${t.ventilation_useful?vt(e,"ui.ventilate_hint"):vt(e,"ui.ventilate_useless")}`:V}
                ${t.has_dehumidifier?W`· ${vt(e,"ui.has_dehumidifier")}`:V}
                ${t.has_fan?W`· ${vt(e,"ui.has_fan")}`:V}
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
  `}};t([ut({attribute:!1})],xt.prototype,"hass",void 0),t([pt()],xt.prototype,"_config",void 0),xt=t([ct(mt)],xt);export{xt as LaundryAdvisorCard};
