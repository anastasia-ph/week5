import logo from './logo.svg';
import './App.css';
import Card from "./components/Card"
import style1 from "./components/card1.css"
import style2 from "./components/card2.css"
import style3 from "./components/card3.css"
import style4 from "./components/card4.css"
import data from "./components/data.json"


function App() {
  return (
<div className='container'>
  <Card style = {style1} header={data[0].header} currencytype={data[0].currency} currency={data[0].value} period={data[0].term} connection={data[0].speed} traffictype={data[0].traffic}/>
   <Card style = {style2} header={data[1].header} currencytype={data[1].currency} currency={data[1].value} period={data[1].term} connection={data[1].speed} traffictype={data[1].traffic}/>
   <Card Active style = {style3} header={data[2].header} currencytype={data[2].currency} currency={data[2].value} period={data[2].term} connection={data[2].speed} traffictype={data[2].traffic}/>
   <Card style = {style4} header={data[3].header} currencytype={data[3].currency} currency={data[3].value} period={data[3].term} connection={data[3].speed} traffictype={data[3].traffic}/>
   </div>
  )
}

export default App;
