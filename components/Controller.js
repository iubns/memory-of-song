class Controller extends HTMLElement {
    player;
    currentIndex = 0;

    constructor (player) {
        super();
        this.player = player;
    }

    connectedCallback(){
        this.render()
        setTimeout(() => {
            document.getElementById('previous-button')
                .addEventListener('click', this.previousMusic.bind(this))
            document.getElementById('next-button')
                .addEventListener('click', this.nextMusic.bind(this))
        }, 2000);
    }

    get songLength () {
        return this.getAttribute('songLength');
    }

    nextMusic(){
        this.currentIndex++;
        if(this.currentIndex >= this.songLength){
            this.currentIndex = this.songLength - 1;
        }
        this.player.playVideoAt(this.currentIndex)
    }

    previousMusic(){
        this.currentIndex--;
        if(this.currentIndex < 0){
            this.currentIndex = 0;
        }
        this.player.playVideoAt(this.currentIndex)
    }

    render(){
        this.innerHTML = this.player ? '<div>재생중 입니다.! <div id="previous-button">이전</div>  <div id="next-button">다음</div>  </div>' : '<div>loading...</div>';
    }

    setPlayer(player){
        this.player = player
        this.render()
    }
}

customElements.define('music-controller', Controller);