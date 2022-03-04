import { LitElement, html } from 'lit-element';
import { commonStyles } from '../utils/custom-styles';
import '../components/common-header';
import '../components/lit-modal';
import '../components/profile/github-profile';


class ModalView extends LitElement {
  static get styles() {
    return [commonStyles];
  }

  _modalListener(e){
    console.log(e);
  }

  _cerrarmodalListener(e){
    console.log(e);
    const profile = this.shadowRoot.querySelector('github-profile');
    profile.limpiarModal()
  }

  

  render() {
    return html`
      <common-header></common-header>
      <section class="container">
        <lit-modal @contenido=${this._modalListener} @cerrar=${this._cerrarmodalListener}> 
          <button slot="botonAbrir">
            Abrir Modal 
          </button>   
          <github-profile slot="contenido"></github-profile>
        
      </lit-modal>
      </section>
    `;
  }
}

window.customElements.define('modal-view', ModalView);
