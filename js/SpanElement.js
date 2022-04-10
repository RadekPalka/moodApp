class SpanElement{
  constructor(html){
    this.html = document.querySelector(`span.${html}`)
  }
  setHtmlContent(htmlText){
    this.html.textContent = htmlText
  }
}