class Mood{
  constructor(){
    this.good = 0,
    this.bad = 0
  }
  loadFromLocaleStorage(){
    console.log(loadedData.props);
    const data = JSON.parse(loadedData.props)
    console.log(data);
    //mood && Object.assign(moodObj, JSON.parse(mood));
    if (loadedData.props){
      this.good = data.good
      this.bad= data.bad 
    }
  }
  increaseGoodMood(){
    this.good ++
  }
  increaseBadMood(){
    this.bad ++
  }
}