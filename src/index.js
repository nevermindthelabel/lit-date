import { css, html, LitElement } from 'lit-element';

class customDate extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return [css``];
  }

  render() {
    return html` <h1>this is a thing</h1> `;
  }
}

customElements.define('custom-date', customDate);
