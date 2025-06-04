//import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './app/router'
import './App.css'
import Container from './app/container/Container'

function App() {

  return (
    <>
      <Container>
      <RouterProvider router={router}/>
    </Container>
    </>
  )
}

export default App
