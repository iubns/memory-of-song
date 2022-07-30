class CD extends HTMLElement {
    constructor () {
        super();
    }

    connectedCallback() {
        this.render();
    }

    get title () {
        return this.getAttribute('title')
    }

    get description () {
        return this.getAttribute('description')
    }

    render() {
        this.innerHTML = `
        <div
            style="width: 100px;"
        >
        CD !
            <span>title: ${this.title}</span>
            <span>description: ${this.description}</span>
        </div>`
    }
}

window.customElements.define('controller-cd', CD);