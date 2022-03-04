import { LitElement, html, css } from 'lit-element';

class LitModalContent extends LitElement {
  static get styles() {
    return css`
      .modal {
        position: fixed;
        z-index: 999;
        background-color: rgba(0, 0, 0, 0.5);
        top: 0;
        left: 0;
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0.2s, opacity 0.2s;
      }

      .open {
        visibility: visible;
        opacity: 1;
      }

      .content {
        width: 100%;
        height: auto;
        background-color: white;
        text-align: center;
        padding: 40px;
        font-size: 20px;
        overflow: hidden;
        margin-top: -50px;
        transition: margin-top 0.5s;
      }

      .open > .content {
        margin: 0px;
      }

      @media (min-width: 800px) {
        .content {
          width: 50%;
        }
      }

      .botoncerrar {
        float: right;
        margin-top: -25px;
        margin-right: -25px;
        border: 0;
        background: 0;
        cursor: pointer;
        font-size: larger;
      }
    `;
  }

  constructor() {
    super();
  }

  closeModal() {
    const modal = this.shadowRoot.querySelector('.modal');
    modal.classList.remove('open');
    const options = {
      detail: {
        modal: modal
      },
    };
    this.dispatchEvent(new CustomEvent('cerrarModal', options));
  }

  render() {
    return html`
      <div class="modal">
        <div class="content">
          <div>
            <button class="botoncerrar" @click="${this.closeModal}">&times;</button>
          </div>
          <slot></slot>
        </div>
      </div>
    `;
  }
}

window.customElements.define('lit-modal-content', LitModalContent);
