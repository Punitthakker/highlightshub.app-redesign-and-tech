/* <hh-flip-card> : two-sided card, tap to flip. Zero dependencies, inherits host styles.
   Usage:
     <hh-flip-card>
       <div slot="front"> ...existing rating card markup, untouched... </div>
       <div slot="back">  ...career record... </div>
     </hh-flip-card>
   Attributes: flipped (boolean, reflects state), no-auto (disable tap-to-flip; call el.flip() yourself)
   Events: "flip" (detail: {flipped:boolean})
   Safe on iOS Safari (backface + visibility handled), keyboard accessible (Enter/Space), honours prefers-reduced-motion. */
class HHFlipCard extends HTMLElement{
  static get observedAttributes(){return['flipped']}
  constructor(){super();const r=this.attachShadow({mode:'open'});r.innerHTML=`<style>
:host{display:block;perspective:1200px;--hh-flip-duration:.7s;--hh-flip-ease:cubic-bezier(.16,1,.3,1);cursor:pointer;-webkit-tap-highlight-color:transparent;outline:none}
:host(:focus-visible) .inner{outline:2px solid currentColor;outline-offset:4px;border-radius:inherit}
.inner{position:relative;transform-style:preserve-3d;transition:transform var(--hh-flip-duration) var(--hh-flip-ease);will-change:transform}
:host([flipped]) .inner{transform:rotateY(180deg)}
.face{-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateZ(0)}
.face.back{position:absolute;inset:0;transform:rotateY(180deg) translateZ(1px)}
.face.front{position:relative}
:host([flipped]) .face.front{visibility:hidden;transition:visibility 0s calc(var(--hh-flip-duration)/2)}
.face.front{transition:visibility 0s calc(var(--hh-flip-duration)/2)}
:host(:not([flipped])) .face.back{visibility:hidden;transition:visibility 0s calc(var(--hh-flip-duration)/2)}
.face.back{transition:visibility 0s calc(var(--hh-flip-duration)/2)}
::slotted(*){-webkit-backface-visibility:hidden;backface-visibility:hidden}
@media (prefers-reduced-motion:reduce){.inner{transition:none}}
</style><div class="inner" part="inner"><div class="face front" part="front"><slot name="front"></slot></div><div class="face back" part="back"><slot name="back"></slot></div></div>`;
    this._onTap=this._onTap.bind(this);this._onKey=this._onKey.bind(this);}
  connectedCallback(){if(!this.hasAttribute('tabindex'))this.tabIndex=0;this.setAttribute('role','button');this.setAttribute('aria-pressed',String(this.flipped));
    if(!this.hasAttribute('no-auto')){this.addEventListener('click',this._onTap);this.addEventListener('keydown',this._onKey);}}
  disconnectedCallback(){this.removeEventListener('click',this._onTap);this.removeEventListener('keydown',this._onKey)}
  attributeChangedCallback(){this.setAttribute('aria-pressed',String(this.flipped));this.dispatchEvent(new CustomEvent('flip',{detail:{flipped:this.flipped},bubbles:true}))}
  get flipped(){return this.hasAttribute('flipped')}
  set flipped(v){v?this.setAttribute('flipped',''):this.removeAttribute('flipped')}
  flip(){this.flipped=!this.flipped}
  _onTap(e){if(e.target.closest('a,button,input,select,textarea'))return;this.flip()}
  _onKey(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();this.flip()}}
}
customElements.define('hh-flip-card',HHFlipCard);
