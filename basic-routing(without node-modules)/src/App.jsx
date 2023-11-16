import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Products from './pages/Products'
import HomePage from './pages/HomePage'
import './App.css'
import {createRoutesFromElements,Route,RouterProvider,createBrowserRouter} from 'react-router-dom'
// const routeDefinitions = createRoutesFromElements(
//      <Route path='/' element={<Products></Products>}></Route>
// )
const router = createBrowserRouter([
  {
   path:'/',
   element:<HomePage></HomePage>
  },
  {
    path:'/products',
    element:<Products></Products>
  }
])

function App() {
  return (
      <RouterProvider router={router}></RouterProvider>
  )
}

export default App
