function t(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new o(s,t,i)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,_=f.trustedTypes,$=_?_.emptyScript:"",m=f.reactiveElementPolyfillSupport,g=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?$:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);r?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i;const o=r.fromAttribute(e,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){const o=this.constructor;if(!1===i&&(r=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??v)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[g("elementProperties")]=new Map,A[g("finalized")]=new Map,m?.({ReactiveElement:A}),(f.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,x=t=>t,E=w.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,U="?"+P,O=`<${U}>`,k=document,T=()=>k.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,H="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,D=/>/g,j=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,I=/"/g,B=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),K=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),V=new WeakMap,F=k.createTreeWalker(k,129);function Z(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const J=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=N;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,h=0;for(;h<s.length&&(n.lastIndex=h,l=n.exec(s),null!==l);)h=n.lastIndex,n===N?"!--"===l[1]?n=z:void 0!==l[1]?n=D:void 0!==l[2]?(B.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=j):void 0!==l[3]&&(n=j):n===j?">"===l[0]?(n=r??N,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?j:'"'===l[3]?I:L):n===I||n===L?n=j:n===z||n===D?n=N:(n=j,r=void 0);const d=n===j&&t[e+1].startsWith("/>")?" ":"";o+=n===N?s+O:c>=0?(i.push(a),s.slice(0,c)+C+s.slice(c)+P+d):s+P+(-2===c?e:d)}return[Z(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Y{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,c]=J(t,e);if(this.el=Y.createElement(l,s),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=F.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=c[o++],s=i.getAttribute(t).split(P),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?et:"?"===n[1]?st:"@"===n[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(P),e=t.length-1;if(e>0){i.textContent=E?E.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),F.nextNode(),a.push({type:2,index:++r});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===U)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(P,t+1));)a.push({type:7,index:r}),t+=P.length-1}r++}}static createElement(t,e){const s=k.createElement("template");return s.innerHTML=t,s}}function G(t,e,s=t,i){if(e===K)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const o=M(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=G(t,r._$AS(t,e.values),r,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??k).importNode(e,!0);F.currentNode=i;let r=F.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new X(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new rt(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=F.nextNode(),o++)}return F.currentNode=k,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),M(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==K&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Y.createElement(Z(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new Y(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new X(this.O(T()),this.O(T()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=G(this,t,e,0),o=!M(t)||t!==this._$AH&&t!==K,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=G(this,i[s+n],e,n),a===K&&(a=this._$AH[n]),o||=!M(a)||a!==this._$AH[n],a===q?t=q:t!==q&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class st extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class it extends tt{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??q)===K)return;const s=this._$AH,i=t===q&&s!==q||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==q&&(s===q||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const ot=w.litHtmlPolyfillSupport;ot?.(Y,X),(w.litHtmlVersions??=[]).push("3.3.3");const nt=globalThis;class at extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new X(e.insertBefore(T(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const lt=nt.litElementPolyfillSupport;lt?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");const ct=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v},dt=(t=ht,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};function pt(t){return(e,s)=>"object"==typeof s?dt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function ut(t){return pt({...t,state:!0,attribute:!1})}const ft="laundry-advisor-card",_t="laundry-advisor-card-editor",$t={hang_outside_now:{icon:"mdi:weather-sunny",color:"#43a047",label:"Raus damit"},hang_outside_later:{icon:"mdi:weather-sunset",color:"#7cb342",label:"Heute später"},outside_marginal:{icon:"mdi:weather-partly-cloudy",color:"#c0ca33",label:"Draußen, beobachten"},wait_for_tomorrow:{icon:"mdi:timer-sand",color:"#1e88e5",label:"Auf den Ständer"},defer_wash:{icon:"mdi:washing-machine-off",color:"#3949ab",label:"Waschen verschieben"},cellar_ok:{icon:"mdi:home-floor-b",color:"#fb8c00",label:"Keller (lüften)"},cellar_dehumidifier:{icon:"mdi:air-humidifier",color:"#f4511e",label:"Keller (Entfeuchter)"},dryer_recommended:{icon:"mdi:tumble-dryer",color:"#8e24aa",label:"Trockner"},mold_risk:{icon:"mdi:alert",color:"#e53935",label:"Schimmelgefahr"},unknown:{icon:"mdi:help-circle-outline",color:"#9e9e9e",label:"Unbekannt"}};const mt=[{name:"entity",required:!0,selector:{entity:{domain:"sensor"}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"show_forecast",selector:{boolean:{}}},{name:"show_cellar",selector:{boolean:{}}},{name:"show_reasons",selector:{boolean:{}}}]}];let gt=class extends at{constructor(){super(...arguments),this._label=t=>({entity:"Advisor-Sensor",name:"Titel (optional)",show_forecast:"Tagesvorschau",show_cellar:"Keller-Zeile",show_reasons:"Begründungen"}[t.name]??t.name)}setConfig(t){this._config=t}render(){return this.hass&&this._config?W`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${mt}
        .computeLabel=${this._label}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:q}_valueChanged(t){const e=t.detail.value;this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}};t([pt({attribute:!1})],gt.prototype,"hass",void 0),t([ut()],gt.prototype,"_config",void 0),gt=t([ct(_t)],gt),console.info("%c LAUNDRY-ADVISOR-CARD %c 0.1.1 ","color:white;background:#1e88e5;font-weight:700","color:#1e88e5;background:#eee"),window.customCards=window.customCards||[],window.customCards.push({type:ft,name:"Laundry Advisor Card",description:"Wäschewetter – draußen, Keller oder warten?",preview:!0,documentationURL:"https://github.com/chlctt/laundry-advisor-card"});const yt=["So","Mo","Di","Mi","Do","Fr","Sa"];let vt=class extends at{static async getConfigElement(){return document.createElement(_t)}static getStubConfig(){return{entity:"sensor.laundry_advisor",show_forecast:!0,show_cellar:!0}}setConfig(t){if(!t||!t.entity)throw new Error("Bitte eine Advisor-Sensor-Entität angeben (entity).");this._config={show_forecast:!0,show_cellar:!0,show_reasons:!0,...t}}getCardSize(){return 3}render(){if(!this._config||!this.hass)return q;const t=this.hass.states[this._config.entity];if(!t)return W`<ha-card
        ><div class="warn">Entität ${this._config.entity} nicht gefunden.</div></ha-card
      >`;const e=t.state in $t?t.state:"unknown",s=$t[e],i=t.attributes;return W`
      <ha-card>
        <div class="header" style=${`--accent:${s.color}`}>
          <div class="badge"><ha-icon .icon=${s.icon}></ha-icon></div>
          <div class="headline">
            <div class="title">${this._config.name??s.label}</div>
            <div class="sub">${i.headline??""}</div>
          </div>
        </div>

        <div class="infobar">
          ${this._renderWindow(i)}
          ${null!=i.daylight_left_h?W`<span class="muted">${i.daylight_left_h} h Tageslicht übrig</span>`:q}
        </div>

        ${this._config.show_forecast&&i.forecast_days?.length?this._renderForecast(i.forecast_days):q}
        ${this._config.show_cellar&&i.cellar?this._renderCellar(i.cellar):q}
        ${this._config.show_reasons&&i.reasons?.length?W`<ul class="reasons">
              ${i.reasons.map(t=>W`<li>${t}</li>`)}
            </ul>`:q}
      </ha-card>
    `}_renderWindow(t){const e=t.best_window_start_hour,s=t.best_window_end_hour;return null==e||null==s?W`<span class="muted">Kein Trockenfenster heute</span>`:W`<span class="chip">
      <ha-icon icon="mdi:clock-outline"></ha-icon> ${e}–${s} Uhr
    </span>`}_renderForecast(t=[]){const e=(new Date).toISOString().slice(0,10);return W`
      <div class="forecast">
        ${t.map(t=>{const s=new Date(t.date+"T12:00:00"),i=Number(t.score),r=Math.max(4,Math.min(100,i)),o=t.date===e;return W`
            <div class="fday ${o?"today":""}">
              <div class="bar-track">
                <div class="bar" style=${`height:${r}%;background:${function(t){return t>=70?"#43a047":t>=45?"#c0ca33":"#fb8c00"}(i)}`}></div>
              </div>
              <div class="fscore">${Math.round(i)}</div>
              <div class="fdow">${o?"Heute":yt[s.getDay()]}</div>
            </div>
          `})}
      </div>
    `}_renderCellar(t){const e=null!=t.dewpoint_outdoor&&null!=t.dewpoint_cellar?(t.dewpoint_outdoor-t.dewpoint_cellar).toFixed(1):null;return W`
      <div class="cellar">
        <div class="cellar-row">
          <ha-icon icon="mdi:home-floor-b"></ha-icon>
          <span>Keller</span>
          ${null!=t.humidity?W`<b>${t.humidity}%</b>`:q}
          ${null!=t.temperature?W`<span class="muted">${t.temperature}°C</span>`:q}
          ${t.mold_risk?W`<span class="tag danger">Schimmel</span>`:t.suitable?W`<span class="tag ok">nutzbar</span>`:W`<span class="tag warn">ungünstig</span>`}
        </div>
        <div class="cellar-row muted small">
          ${null!=e?W`Taupunkt außen ${e} K ${Number(e)<0?"unter":"über"} Keller ·`:q}
          Lüften: ${t.ventilation_useful?"sinnvoll":"bringt nichts"}
          ${null!=t.surface_rh_estimate?W`· Wand ~${t.surface_rh_estimate}%`:q}
        </div>
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
    .infobar {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: -2px;
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
    .small {
      font-size: 0.8rem;
    }
    .forecast {
      display: flex;
      justify-content: space-between;
      gap: 6px;
    }
    .fday {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3px;
    }
    .bar-track {
      width: 100%;
      height: 68px;
      display: flex;
      align-items: flex-end;
      background: var(--divider-color, #ececec);
      border-radius: 4px;
      overflow: hidden;
    }
    .bar {
      width: 100%;
      border-radius: 4px 4px 0 0;
    }
    .fscore {
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--primary-text-color);
    }
    .fdow {
      font-size: 0.72rem;
      color: var(--secondary-text-color);
    }
    .fday.today .fdow {
      color: var(--primary-color, #1e88e5);
      font-weight: 600;
    }
    .fday.today .bar-track {
      outline: 2px solid var(--primary-color, #1e88e5);
      outline-offset: 1px;
    }
    .cellar {
      border-top: 1px solid var(--divider-color, #e0e0e0);
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .cellar-row {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .cellar-row ha-icon {
      --mdc-icon-size: 18px;
      color: var(--secondary-text-color);
    }
    .tag {
      margin-left: auto;
      padding: 1px 8px;
      border-radius: 10px;
      font-size: 0.75rem;
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
  `}};t([pt({attribute:!1})],vt.prototype,"hass",void 0),t([ut()],vt.prototype,"_config",void 0),vt=t([ct(ft)],vt);export{vt as LaundryAdvisorCard};
