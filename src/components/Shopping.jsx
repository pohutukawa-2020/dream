import React from 'react'

import ShoppingList from './ShoppingList'


function Shopping () {
  return (
    <>
        <section className="hero">
          <div className="logo">
              <img src="../rp.png" alt="Logo"/>
          </div>
          <div className="hero-body">
            <div className="container">
               <h1 className="title is-4">
                Your Shopping List
              </h1>
            </div>
          </div>
        </section>
    <div className="Shopping weeklist">
      <ShoppingList />
    </div>
    </>
  )
}

export default Shopping
