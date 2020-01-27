import CardComponent from './static/Card';
import ButtonComponent from './static/Button';

const prefix = 'bento';

window.customElements.define(`${prefix}-card`, CardComponent);
window.customElements.define(`${prefix}-button`, ButtonComponent);