class MP3 extends HTMLElement {
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
        this.innerHTML = `<div>
        MP3 !
            <span>title: ${this.title}</span>
            <span>description: ${this.description}</span>
        </div>`
    }
}

window.customElements.define('controller-mp3', MP3);