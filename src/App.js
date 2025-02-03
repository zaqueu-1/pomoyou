import React from "react"
import "./app.css"
import Timer from "./components/timer/timer"
import Header from "./components/header/header"
import { ToastContainer } from "react-toastify"
import "./i18n"

function App() {
  return (
    <div className='App'>
      <Header />
      <Timer />
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  )
}

export default App
