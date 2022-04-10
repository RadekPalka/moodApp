class ButtonElement{
  constructor(prop){
    this.buttonElement= document.querySelector(`button.${prop}`)
    this.prop = prop
  }
  
  handleButton =()=>{
    if (this.prop === "good"){
      moodObj.increaseGoodMood()
      goodSpan.setHtmlContent(String(moodObj.good))
      emoji.showEmoji(':)')
    }
    else if (this.prop === "bad"){
      moodObj.increaseBadMood()
      badSpan.setHtmlContent(String(moodObj.bad))
      emoji.showEmoji(':(')
    }
    
    localStorage.setItem('mood', JSON.stringify(moodObj));
  }

  getClick(){
    this.buttonElement.addEventListener("click", this.handleButton)
    }
}
