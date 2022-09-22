import { useState } from 'react'

const Header = (props) => {
  return <h1>{props.header}</h1>
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  return (
    <div>
      {props.good} {props.goodcount}
      <br></br>
      {props.neutral} {props.neutralcount}
      <br></br>
      {props.bad} {props.badcount}
      <br></br>
      {props.all} {props.allcount}
      <br></br>
      {props.average} {props.averagecount}
      <br></br>
      {props.positive} {props.positivecount}%
      <br></br>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const header1 = 'give feedback'
  const header2 = 'statistics'
  const goodtext = 'good'
  const neutraltext = 'neutral'
  const badtext = 'bad'
  const alltext = 'all'
  const averagetext = 'average'
  const positivetext = 'positive'
  const increaseGoodByOne = () => setGood(good + 1)
  const increaseNeutralByOne = () => setNeutral(neutral + 1)
  const increaseBadByOne = () => setBad(bad + 1)
  const all = good + neutral + bad
  const average = (good-bad) / all
  const positive = good / all

  if ( all > 0 ) { 
    return (
      <div>
        <Header header={header1}/>
        <Button 
          handleClick={increaseGoodByOne}
          text='good'
        />
        <Button 
          handleClick={increaseNeutralByOne}
          text='neutral'
        />
        <Button 
          handleClick={increaseBadByOne}
          text='bad'
        />
        <Header header={header2}/>
        <Statistics good={goodtext} neutral={neutraltext} bad={badtext} 
        goodcount={good} neutralcount={neutral} badcount={bad} all={alltext} allcount={all}
        average={averagetext} averagecount={average} positive={positivetext} positivecount={positive}
        />
      </div>
    )
  } else {
    return (
      <div>
        <Header header={header1}/>
        <Button 
          handleClick={increaseGoodByOne}
          text='good'
        />
        <Button 
          handleClick={increaseNeutralByOne}
          text='neutral'
        />
        <Button 
          handleClick={increaseBadByOne}
          text='bad'
        />
        <Header header={header2}/>
        No feedback given
        </div>
    )
  }
} 
export default App
