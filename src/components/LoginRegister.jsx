import React, { useState } from 'react'
import Home from './Home'

export default function LoginRegister () {

const [show, setShow]=useState({state: true, home: {visibility: 'hidden'}, button: {visibility: 'visible'}})

const showHome = () => {
show.state ? setShow({state: false, home: {visibility: 'visible'}, button: {visibility: 'hidden'}}) : setShow({state: true, home: {visibility: 'hidden'}, button: {visibility: 'visible'}})
}

  return(
    <>
    <div className='welcomeContainer'>
      <div className="logologin">
        <img src="../rp.png" alt="Logo"/>
    </div>
    <h1 className='reciPlan'>ReciPlan</h1>
    <div className='words'>
    Your recipes, your week.
    </div>
    <br/>
    <div className='welcomeButton'style={show.home}>
    <Home/>
    <div className='tasty' style={show.button}>
    <button onClick={() => showHome()}className="button is-outlined is-dark">Start Planning</button>
    </div>
    </div>
    </div>
</>
  )

}