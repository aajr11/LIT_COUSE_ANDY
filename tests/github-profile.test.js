import { expect, fixture, html,aTimeout } from '@open-wc/testing';
import sinon from 'sinon/pkg/sinon-esm.js';
import '../src/components/profile/github-profile.js';

const data =   { username: 'vicdata4' };

describe('Empty data', () => {
  let el

  before(async() => {
    el = await fixture(html`<github-profile></github-profile>`);
    await el.updateComplete;
  });

  it('Empty data is rendered correctly', async() => {
    expect(el.shadowRoot).not.to.be.null;
  });

  it('Default username field profile-component', async() => {
    const field = el.shadowRoot.querySelector('#username');
    expect(field.value).equal('');
  });
});

describe('Search with username', () => {
  let el, username,submit;

  before(async() => {
    const component = html`
      <github-profile></github-profile>
    `;

    el = await fixture(component);
    await el.updateComplete;

    username = el.shadowRoot.querySelector('#username');
    submit = el.shadowRoot.querySelector('input[type=submit]');
  });

  it('profile is rendered correctly', async() => {
    expect(el.shadowRoot).not.to.be.null;
  });

  it('Default properties', async() => {
    expect(el.validated).equal(false);
    expect(el.message).equal('');
  });


  it('Enter an invalid username', async() => {
    username.value = '';
    const profileComponent = el.shadowRoot.querySelector('profile-component');
    expect(profileComponent.style.display).equal('');
    submit.click();
    await el.updateComplete;


    expect(el.validated).equal(false);
  });

  it('obtener Datos Usuario', async() => {
    username.value = data.username;

    submit.click();
    
   
    await el.updateComplete;

    await aTimeout(1500);
    expect(el.validated).equal(true);
    const profileComponent = el.shadowRoot.querySelector('profile-component');
    expect(profileComponent.data.login).not.to.be.undefined;

  });


  it('obtener Datos Usuario completos', async() => {
    const profileComponent = el.shadowRoot.querySelector('profile-component');
    expect(profileComponent.data.name).not.to.be.undefined;
  });
});
