class Cassette extends HTMLElement {
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
            <img src='./img/cassette.gif'/>
            <div class='description-are'>
                <div class='title'>${this.title}</div>
                <div class='description'>${this.description}</div>
            </div>
        </div>
        <style>
            img {
                width: 30rem;
                height: 21rem;
                position: absolute;
            }
            .description-are {
                width: 30rem;
                height: 21rem;
                z-index: 10;
                position: relative;
                color: #303030;
            }
            .title {
                text-align: center;
                padding-top: 4rem;
                font-size: 1.7rem;
                font-weight: bold;
            }
            .description {
                text-align: center;
                padding-top: 6.2rem;
            }
        </style>`
    }
}

window.customElements.define('controller-cassette', Cassette);