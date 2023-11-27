import React from 'react'
import {Routes,Route} from 'react-router-dom'
import SideBar from '../components/SideBar.jsx'
import Personal_Info from '../components/Personal_Info.jsx';
import Plans from '../components/Plans.jsx';
import Addons from '../components/Addons.jsx';
import Finish from '../components/Finish.jsx';
import Thanks from '../components/Thanks.jsx';



const Application = () => {
  
  
  return (

    <React.Fragment>
   
      <SideBar />
  
      <Routes>

        <Route path='/' element={<Personal_Info />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='/addons' element={<Addons />} />
        <Route path='/finish' element={<Finish />} />
        <Route path='/thanks' element={<Thanks />} />
        
      </Routes>
    
    </React.Fragment>

  )
}

export default Application