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

    get color() {
        return this.getAttribute('color');
    }

    get key () {
        return this.getAttribute('key');
    }

    render(){
        this.innerHTML = `
            <style>
                .song-title-${this.key} {
                    background-color: ${this.color};
                    color: white;
                    padding: 2px;
                    text-overflow: ellipsis;
                    width: 100px;
                    white-space : nowrap; 
                    overflow : hidden;
                    font-size: 14px;
                }
                div:hover {
                    width: 150px;
                }
            </style>
            <div class="song-title-${this.key}" song-title>${this.title}</div>
        `
    }
}

customElements.define('song-title', SongTitle)