import { useState } from 'react'
import "@radix-ui/themes/styles.css";

import Applayout from './components/layout/Applayout'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Industries from './pages/Industries'
import Jobs from './pages/Jobs'
import Services from './pages/Services'
import Capabilities from './pages/Capabilities'
import Contact from './pages/Contact'
import JobDetailPage from './pages/JobDetailPage'


function App() {
   
  
   const router = createBrowserRouter([
       {
        path: '/',
        element: <Applayout />,
        children:[
          {
            path:'/',
            element: <Home />
          },
        
          {
            path:'/industries',
            element: <Industries />
          },
          {
            path:'/jobs',
            element: <Jobs />
          },
          {
            path: '/services',
            element: <Services />
          },
          {
            path: 'capabilities',
            element : <Capabilities />
          },
          {
            path: 'contact',
            element: <Contact />
          },
          {
            path: '/job/:id' ,
            element: <JobDetailPage />
          }

        ]
       }
   ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
