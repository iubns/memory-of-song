class SongTitle extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.render();
    }

    get title() {
        return this.getAttribute('title');
    }

    render(){
        this.innerHTML = `<div>${this.title}</div>`
    }
}

customElements.define('song-title', SongTitle)