class Controller extends HTMLElement {
    player;
    currentIndex = 0;

    constructor () {
        super();
    }

    connectedCallback(){
        this.render()
        setTimeout(() => {
            document.getElementById('previous-button')
                .addEventListener('click', this.previousMusic.bind(this))
            document.getElementById('start-music')
                .addEventListener('click', this.startMusic.bind(this))
            document.getElementById('stop-music')
                .addEventListener('click', this.stopMusic.bind(this))
            document.getElementById('next-button')
                .addEventListener('click', this.nextMusic.bind(this))
        }, 2000);
    }

    get isPlaying(){
        if(this.player && this.player.getPlayerState){
            return this.player.getPlayerState() === 1;
        }
        return 0;
    }

    nextMusic(){
        this.player.nextVideo()
        this.connectedCallback()
    }

    previousMusic(){
        this.player.previousVideo()
        this.connectedCallback()
    }

    startMusic(){
        this.player.playVideo();
        this.connectedCallback()
    }

    stopMusic(){
        this.player.stopVideo();
        this.connectedCallback()
    }

    render(){
        this.innerHTML = !this.player ? 
        `<div>loading...</div>` :
        `<div>${this.isPlaying ? '재생중' : '정지중' } 입니다.! 
            <div id="previous-button">이전</div>  
            <div id="stop-music"> 일시정지 </div> 
            <div id="start-music"> 시작 </div>
            <div id="next-button">다음</div>  
        </div>` ;
    }

    setPlayer(player){
        this.player = player
        this.connectedCallback()
    }
}

customElements.define('music-controller', Controller);