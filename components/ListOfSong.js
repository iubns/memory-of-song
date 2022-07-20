class ListOfSong extends HTMLElement { 
    constructor() {
        super(); 
    } 

    connectedCallback() {
        this.render(); 
    } 
    
     // 요소의 속성이 추가, 제거, 업데이트, 교체되는 부분을 관찰하고 호출된다. 
    // 이때 observedAttributes 속성에 나열된 특성에서만 호출된다. 
    attributeChangedCallback(attrName, oldVal, newVal) {
        this.render();
    } 
    
    //attributeChangedCallback 에서 관찰하는 항목을 리턴한다. 
    static get observedAttributes() {
        return ['list'];
    } 

    get title() {
        return this.getAttribute('list');
    }
    
    // custom element 가 제거될때 호출된다. 
    disconnectedCallback() {
        alert('bye bye');
    } 
    
    // custom method
    render() {
         this.innerHTML =`<slot> <h1>${this.title}</h1> </slot> `

    }
} 

window.customElements.define('list-of-song', ListOfSong); 