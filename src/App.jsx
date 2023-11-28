import React from 'react'
import Application from './Application.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { FormContextProvider } from '../components/contexts/formcontext.jsx'

const App = () => {
 
  return (
    <Router>
    <FormContextProvider>
    <Application />
    </FormContextProvider>
  </Router>
  )
}

export default App