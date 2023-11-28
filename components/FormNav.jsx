import React from 'react'
import { UseformContext } from './contexts/formcontext.jsx'

const FormNav = () => {
    let FC=UseformContext();
  return (
    <div>FormNav step {FC.step}</div>
  )
}

export default FormNav