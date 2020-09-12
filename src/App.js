import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      month:1,
      wmonth:"Jan",
      week:1,
      year:2020,
      second:1,
      day:1,
      hour:12,
      minute:1,
      zodiac:"Aries",
      zodiacs:["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"],
      months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec"]
    }
  }
  componentWillMount(){
    setInterval(()=>{
      let today=new Date();
      this.setState({
        second:today.getSeconds(),
        wmonth:this.state.months[today.getMonth()],
        month:today.getMonth()+1,
        hour:today.getHours(),
        day:today.getDate(),
        minute:today.getMinutes(),
        zodiac:this.state.zodiacs[today.getFullYear()%12],
        year:today.getFullYear()

      })
    },1000)
  }
  array = length => Array.from({length}).map((v, k) => k).map(x=>x+1);
  addPreZero = num =>{
    if(num>=10)return num
    return '0'+num
  }

  render(){
    
  return (
    <div className="App">
      <header className="App-header">
          <div className="container">
            <div className="top-year">
  <span class="zodiac">{`${this.state.zodiac} /`}</span><span className="tyear">{`${this.state.year}`}</span>
            </div>
            <div className="bottom-month">{this.state.wmonth}</div>
            <div className="center-content">
              
              {this.array(12).map((x,index)=>{
                return(
                  
                  <div key={index} className={`month item ${index===this.state.month-1?"active":""}`} style={{transform:`rotate( ${index*30-(this.state.month-1)*30}deg)`}}>
                      {`${x} mon`}
                    </div>
                    
                )
              })}
              
              {this.array(30).map((x,index)=>{
              return (
                <div key={index} className={`day item ${index===(this.state.day-1)?"active":""}`} style={{transform: `rotate(${index*12-12*(this.state.day-1)}deg)`}}>
                  {`${x} day`}
                </div>
              )
            })}
              {this.array(24).map((x,index)=>{
                return(
                  <div key={index} className={`hour item ${index===this.state.hour-1?"active":""}`} style={{transform:`rotate(${index*(360/24)-(this.state.hour-1)*(360/24)}deg)`}}>
                    {`${x} hr`}
                  </div>
                )
              })}
              {this.array(60).map((x,index)=>{
                return(
                  <div key={index} className={`min item ${index===this.state.minute-1?"active":""}`} style={{transform:`rotate(${index*(360/60)-(this.state.minute-1)*(360/60)}deg)`}}>
                    {`${x} min`}
                  </div>
                )
              })}
              <div className="second-div">
              {this.array(60).map((x,index)=>{
                return(
                  <div key={index} className={`sec item ${index===this.state.second-1?"active":""}`} style={{transform:`rotate(${(360/60)*index-(360/60)*(this.state.second-1)}deg)`}}>
                    {`${x} sec`}
                  </div>
                )
              })}</div>
            </div>
          </div>
      </header>
    </div>
  );}
}

export default App;


