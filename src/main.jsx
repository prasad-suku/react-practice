import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Propfun from './Propfun.jsx'
import './index.css'
// import Usestatefun from "./Usestate.jsx"
import Usestate2 from "./Usestate2.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Usestate2 /> */}

    {/* prop component */}
    <Propfun name={"prasad"} age={21} place={'Erode'} />
    
  </React.StrictMode>,
)
