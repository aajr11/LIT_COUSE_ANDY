import { LitElement, html } from 'lit-element';
import { commonStyles } from '../utils/custom-styles';
import '../components/common-header';
import '../components/lit-button-modal';

class ModalView extends LitElement {
  static get styles() {
    return [commonStyles];
  }

  render() {
    return html`
      <common-header></common-header>
      <section class="container">
        <lit-button-modal> Abrir Modal </lit-button-modal>
      </section>
    `;
  }
}

window.customElements.define('modal-view', ModalView);
