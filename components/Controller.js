class Controller extends HTMLElement {
    player;
    currentIndex = 0;

    constructor () {
        super();
    }

    connectedCallback(){
        this.render()
    }

    get isPlaying(){
        const PLAYING_STATE = 1
        if(this.player && this.player.getPlayerState){
            return this.player.getPlayerState() === PLAYING_STATE;
        }
        return false;
    }

    get playerType () {
        const defaultType = 'CD'
        if(!songList){
            return defaultType
        }

        if(!this.player){
            return defaultType
        }

        if(!songList[this.player.playerInfo.playlistIndex]){
            return defaultType
        }

        return songList[this.player.playerInfo.playlistIndex].playerType
    }

    nextMusic(){
        this.player.nextVideo()
        this.render()
    }

    previousMusic(){
        console.log('??')
        this.player.previousVideo()
        this.render()
    }

    startMusic(){
        this.player.playVideo();
        this.render()
    }

    stopMusic(){
        this.player.stopVideo();
        this.render()
    }

    render(){
        this.innerHTML = !this.player ? 
        `<div>loading...</div>` :
        `<div>${this.isPlaying ? '재생중' : '정지중' } 입니다.! 
        ${this.playerType}
            <div id="previous-button">이전</div>  
            <div id="stop-music"> 일시정지 </div> 
            <div id="start-music"> 시작 </div>
            <div id="next-button">다음</div>  
        </div>`;
        this.setEventListener();
    }

    setEventListener(){
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

    setPlayer(player){
        this.player = player
        this.render()
    }
}

customElements.define('music-controller', Controller);