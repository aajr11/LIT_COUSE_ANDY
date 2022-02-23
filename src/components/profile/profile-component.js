import { LitElement, html } from 'lit-element';
import { nothing } from 'lit-html';
import { dateFormatter } from '../../utils/functions';
import { people, locationgps, workstation, email, enlace } from '../../utils/svg-icons';
import { profileComponentStyle } from './profile-component-style';


class ProfileComponent extends LitElement {
  static get styles() {
    return [profileComponentStyle];
  }

  static get properties() {
    return {
      data: { type: Object },
      showMore: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.data = {};
    this.showMore = true;
  }

  showMoreNews() {

    /*.hoverFollowers:hover{
      color:blue;
    }

    .hoverFollowers .svg-icon:hover{
      fill:blue;
    }*/
  }

  handleHoverFllw() {
    const followers = this.shadowRoot.querySelectorAll('.hoverFollowers');
    const followersIcon = this.shadowRoot.querySelector('.hoverFollowers').querySelector('.svg-icon');
    followers.forEach(f => f.classList.add("hover"))
    followersIcon.classList.add("hover");
    this.firstUpdated()

  }

  handleOutFllw() {
    const followers = this.shadowRoot.querySelectorAll('.hoverFollowers');
    const followersIcon = this.shadowRoot.querySelector('.hoverFollowers').querySelector('.svg-icon');
    followers.forEach(f => f.classList.remove("hover"))
    followersIcon.classList.remove("hover");
    this.firstUpdated()
  }

  handleHoverFlling() {
    const following = this.shadowRoot.querySelector('.hoverFollowing');
    following.classList.add("hover");
  }

  handleOutFlling() {
    const following = this.shadowRoot.querySelector('.hoverFollowing');
    following.classList.remove("hover");
  }

  handleHover(e) {
    const following = e.srcElement;
    following.classList.add("hover");
  }

  handleOut(e) {
    const following = e.srcElement;
    following.classList.remove("hover");
  }

  render() {
    return this.data.login != undefined
      ? html`
          <div class="container">
            <div class="filas">
              <div class="photo">
                <img class="photo-redondo" src="${this.data.avatar_url}" />
                <img class="photo-redondo mini-redondo" src="${this.data.avatar_url}" />
              </div>
              <div class="nickname">${this.data.name ?? "-"}</div>
              <div class="login">${this.data.login}</div>
              <div class="bio">${this.data.bio ?? "-"}</div>
              <button @click="${this.showMoreNews}" class="editar">Edit profile</button>
              <div class="fllw"><span @mouseover="${this.handleHoverFllw}" @mouseout="${this.handleOutFllw}"
                  class="hoverFollowers">${people}</span> <b>${this.data.followers ?? "-"}</b> <span
                  @mouseover="${this.handleHoverFllw}" @mouseout="${this.handleOutFllw}" class="hoverFollowers">followers</span>
                &middot; <b>${this.data.following ?? "-"}</b> <span @mouseover="${this.handleHover}" @mouseout="${this.handleOut}"
                  class="hoverFollowing">following</span></div>
              <div class="company">${workstation} ${this.data.company ?? "-"}</div>
              <div class="location">${locationgps} ${this.data.location ?? "-"}</div>
              <div class="email">${email} ${this.data.email ?? "-"}</div>
              <div class="blog">${enlace} <a class="enlace" @mouseover="${this.handleHover}" @mouseout="${this.handleOut}"
                  href="${(this.data.blog ?? " #") == ""  ? "#" : this.data.blog}">${(this.data.blog ?? "-") == "" ? "-" : this.data.blog}</a>
              </div>
            </div>
          
          </div>
        `
      : nothing;
  }
}

window.customElements.define('profile-component', ProfileComponent);
