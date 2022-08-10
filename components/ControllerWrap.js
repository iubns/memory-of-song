class Controller extends HTMLElement {
    player;
    currentIndex = 0;

    constructor () {
        super();
    }

    connectedCallback(){
        this.render();
    }

    get isPlaying(){
        const PLAYING_STATE = 1
        if(this.player && this.player.getPlayerState){
            return this.player.getPlayerState() === PLAYING_STATE;
        }
        return false;
    }

    get currentSong() {
        if(!songList){
            return {}
        }

        if(!this.player){
            return {}
        }

        if(!songList[this.player.playerInfo.playlistIndex]){
            return {}
        }

        return songList[this.player.playerInfo.playlistIndex];
    }

    get playerType () {
        const defaultType = 'CD'
        if(this.currentSong.playerType){
            return this.currentSong.playerType
        }
        return defaultType;
    }

    nextMusic(){
        this.player.nextVideo()
        this.render()
    }

    previousMusic(){
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

    get playController() {
        if(this.playerType === playerType.Cassette){
            return `<controller-cassette
                title="${this.currentSong.title}" 
                description="${this.currentSong.description}"
            ></controller-cd>`
        }else if(this.playerType === playerType.CD){
            return `<controller-cd 
                title="${this.currentSong.title}" 
                description="${this.currentSong.description}"
            ></controller-cd>`
        }else if(this.playerType === playerType.MP3){
            return `<controller-mp3 
                title="${this.currentSong.title}" 
                description="${this.currentSong.description}"
            ></controller-mp3>`
        }else if(this.playerType === playerType.Phone){
            return `<controller-phone 
                title="${this.currentSong.title}" 
                description="${this.currentSong.description}"
            ></controller-phone>`
        }else if(this.playerType === playerType.Car){
            return `<controller-car 
                title="${this.currentSong.title}" 
                description="${this.currentSong.description}"
            ></controller-car>`
        }
        return this.playerType
    }

    render(){
        this.innerHTML = !this.player ? 
        `<div>loading...</div>` :
        `<div>${this.isPlaying ? '재생중' : '정지중' } 입니다.! `
        +
        `<div id="previous-button">이전</div>  
            <div id="stop-music"> 일시정지 </div> 
            <div id="start-music"> 시작 </div>
            <div id="next-button">다음</div>  
        </div>`
        
        +
        this.playController;
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