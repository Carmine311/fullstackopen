import React, { useState } from 'react'


const Button = ({handleClick, text}) => {
  return <button onClick={handleClick} >
    {text}
  </button>
}

const History = (props) => {
  if(props.allClicks.length ===0){
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])


    const handleLeftClick = () =>  {
      setLeft(left + 1)
      setAll(allClicks.concat('L'))
    }

    const handleRightClick = () =>  {
      setRight(right + 1)
      setAll(allClicks.concat('R'))
    }

    const updateLeft = (increment) =>  setLeft(left + increment)

  return (
    <div>
      {left}
      <Button handleClick={() => updateLeft(1000)} text='Left' />
      <Button handleClick={handleRightClick} text='Right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App;
