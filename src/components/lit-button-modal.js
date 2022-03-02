import { LitElement, html } from 'lit-element';
import './lit-modal';
import '../components/profile/github-profile';

class LitButtonModal extends LitElement {


  constructor() {
    super();
    this.list = [];
  }

  deleteItem(i) {
    const event = new CustomEvent('delete-event', {
      detail: {
        index: i,
      },
    });
    this.dispatchEvent(event);
  }

  abrirModal() {
    this.limpiarModal();
    const modal = this.shadowRoot.querySelector('lit-modal').shadowRoot.querySelector('.modal');
    modal.classList.add('open');
  }

  limpiarModal() {
    const ghprofile = this.shadowRoot.querySelector('github-profile');
    const profile = ghprofile.shadowRoot.querySelector('profile-component');
    if (profile) {
      profile.style.display = 'none';
    }
    if (ghprofile) {
      ghprofile.validated = false;
      ghprofile.shadowRoot.querySelector('#username').value = "";
    }
  }


  render() {
    return html`
      <div class="espaciado">
        <button @click="${this.abrirModal}">
          <slot></slot>
        </button>
      </div>
      <lit-modal>
        <github-profile></github-profile>
      </lit-modal>
    `;
  }
}

window.customElements.define('lit-button-modal', LitButtonModal);
