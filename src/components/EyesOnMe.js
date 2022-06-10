import React from 'react'
import onfocus from 'react'
import onblur from 'react'

function getFocus() {
  console.log('Hey! Eyes on me!')
}

function goodFocus() {
  console.log('Good!')
}

function EyesOnMe() {
  return (
    <button onFocus={goodFocus} onBlur={getFocus}>Eyes on me</button>
  )
}

export default EyesOnMe