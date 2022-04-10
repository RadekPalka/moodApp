class Emoji{
  constructor(){
    this.reference = document.querySelector('p.emoji')
    this.interval = null
  }

  showEmoji(sign){
    let opacityNumber = 1;
	  clearInterval(this.interval);
	  this.reference.textContent = sign;
	  this.interval = setInterval(() => {
		opacityNumber -= 0.1;
		this.reference.style.opacity = String(opacityNumber);
		opacityNumber < 0 && clearInterval(this.interval);
	}, 200);
  }
}