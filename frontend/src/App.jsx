import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Dashboard } from './pages/Dashboard'
import { Sendmoney } from './pages/Sendmoney'
import { Signin } from './pages/SignInPage'
import { Signup } from './pages/SignUpPage'

function App() {
  const [count, setCount] = useState(0)

  return <>
    <BrowserRouter>
      <Routes>
        <Route path = "/Signin" element = {<Signin/>}></Route>
        <Route path = "/Signup" element = {<Signup/>}></Route>
        <Route path = "/Dashboard" element = {<Dashboard/>}></Route>
        <Route path = "/sendmoney" element = {<Sendmoney/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
