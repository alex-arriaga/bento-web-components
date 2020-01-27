import BaseComponent from "../core/Base";

class CardComponent extends BaseComponent {

    constructor(props) {
        super();
        this.title = props.title;
    }

    render() {
        return `
        <template>
            <div class="bento-card">
                <h2>${this.title}</h2>
            </div>
        </template>
        `;
    }
}

export default CardComponent;