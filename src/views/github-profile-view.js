import { LitElement, html } from 'lit-element';
import { commonStyles } from '../utils/custom-styles';
import '../components/common-header';
import '../components/profile/github-profile';

class GithubProfileView extends LitElement {
  static get styles() {
    return [commonStyles];
  }

  render() {
    return html`
      <common-header></common-header>
      <section class="container">
        <github-profile></github-profile>
      </section>
    `;
  }
}

window.customElements.define('github-profile-view', GithubProfileView);
