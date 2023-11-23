import React from 'react'
import Application from './Application.jsx'
import {SidebarContextProvider} from './components/contexts/sidebarcontext.jsx'

const App = () => {
 
  return (
    <SidebarContextProvider>
      <Application />
    </SidebarContextProvider>
  
  )
}

export default App