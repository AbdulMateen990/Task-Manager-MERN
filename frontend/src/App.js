import React from 'react';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllTasks from './pages/allTasks';
import ImpTasks from './pages/impTasks';
import CompleteTasks from './pages/compTasks';
import InCompletedTasks from './pages/incomplTasks';

const App = () =>{
  return (
    <div className='bg-gray-900 text-white h-screen p-2'>
      <Router>
        <Routes>
          <Route exact path='/' element = {<Home/>} >
          <Route index element= {<AllTasks/>}></Route>
          <Route path='/Importanttasks' element= {<ImpTasks/>}></Route>
          <Route path='/completedtasks' element= {<CompleteTasks/>}></Route>
          <Route path='/incompletetasks' element= {<InCompletedTasks/>}></Route>
            </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App