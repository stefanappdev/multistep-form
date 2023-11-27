import React from 'react'
import Application from './Application.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import {SidebarContextProvider} from '../components/contexts/sidebarcontext.jsx'

const App = () => {
 
  return (
    <Router>
      <SidebarContextProvider>
        <Application />
      </SidebarContextProvider>
  </Router>
  )
}

export default App