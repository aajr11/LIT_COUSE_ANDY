import { LitElement, html } from 'lit-element';
import './lit-modal-content';

class LitModal extends LitElement {
  constructor() {
    super();
  }

  abrirModal() {
    const content = this.shadowRoot.querySelector('lit-modal-content').shadowRoot.querySelector('.modal');
    content.classList.add('open');
    const options = {
      detail: {
        modal: content
      },
    };
    this.dispatchEvent(new CustomEvent('contenido', options));
  }

  cerrarModal(e){
    const options = {
      detail: {
        modal: e
      },
    };
    this.dispatchEvent(new CustomEvent('cerrar', options));
  }

  render() {
    return html`
      <slot name="botonAbrir" @click="${this.abrirModal}"></slot>
      <lit-modal-content @cerrarModal=${this.cerrarModal}>
        <slot id="contenido" name="contenido"></slot>
      </lit-modal-content>
    `;
  }
}

window.customElements.define('lit-modal', LitModal);
