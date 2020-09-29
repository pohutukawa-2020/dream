import { render } from '@testing-library/react'
import React from 'react'

const Authorised = (Component) => {
  render (
    <Component {...props} />
  )
}