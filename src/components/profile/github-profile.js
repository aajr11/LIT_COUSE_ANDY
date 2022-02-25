/* eslint-disable no-alert */
import { LitElement, html, css } from 'lit-element';
import { nothing } from 'lit-html';
import { valueNotEmpty } from '../../utils/functions';
import { seedStyle } from '@seed-catalog/styles';
import '../common-header';
import { getUserData } from '../../utils/api/api-request';
import { spinner } from '../../utils/svg-icons';
import './profile-component';

class GithubProfile extends LitElement {
  static get styles() {
    return [
      seedStyle,
      css`
        :host {
          width: fit-content;
        }

        .centered {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .spinner {
          margin: 50px 0px;
        }

        .form-field {
          padding: 10px;
          border-radius: 3px;
          border: 1px solid grey;
          margin: 3px;
          width: 15rem;
          font-weight: bold;
        }

        .titulo {
          display: block;
          font-weight: bold;
        }

        .alert-succesfull {
          display: inline-block;
          color: white;
          padding: 0;
          background-color: transparent;
          margin-left: 10px;
        }

        .alert-msg {
          color: black;
          padding: 10px;
        }
        .primario {
          background-color: #0663fd;
          color: white;
        }

        @media (min-width: 768px) {
          form {
            flex-flow: row wrap;
            justify-content: center;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      validated: { type: Boolean, attribute: false },
      message: { type: String, attribute: false },
    };
  }

  constructor() {
    super();
    this.validated = false;
    this.message = '';
    this.showSpinner = false;
    this.data = {};
  }

  async onSubmit(e) {
    this.setLoader(true, 'reset');
    this.data = {};
    this.validated = false;
    this.message = '';
    const username = this.shadowRoot.querySelector('#username');

    if (!valueNotEmpty(username.value)) {
      this.message = 'Enter a valid username';
      this.setLoader(false);
      return false;
    }

    return getUserData(username.value).then((_data) => {
      if (_data.error === '') {
        this.validated = false;
        this.message = 'El usuario no existe';
        this.setLoader(false);
      }
      this.validated = true;
      this.message = '';
      this.data = _data;
      this.setLoader(false);
      this.dispatchEvent(new Event('buscarUser'));
    });
  }

  setLoader(state, reset = null) {
    const profileComponent = this.shadowRoot.querySelector('profile-component');
    profileComponent.style.display = reset ? 'none' : 'block';

    this.showSpinner = state;
  }

  render() {
    return html`
      <form onsubmit="return false">
        <label for="username" class="titulo">Github Profile</label>
        <input id="username" type="text" class="form-field" placeholder="user name" />
        <input type="submit" @click="${this.onSubmit}" class="sd-btn primario" value="Buscar" />
        ${this.validated && this.message === '' ? html`<div class="alert-succesfull">&#128077;</div>` : nothing}
      </form>
      ${this.message !== '' ? html`<div class="alert-msg">${this.message}</div>` : nothing}
      <profile-component .data="${this.data}"></profile-component>
      ${this.showSpinner ? html`<div class="centered spinner">${spinner}</div>` : nothing}
    `;
  }
}

window.customElements.define('github-profile', GithubProfile);
