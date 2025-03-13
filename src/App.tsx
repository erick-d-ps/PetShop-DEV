
import { createBrowserRouter } from 'react-router-dom'

import { Layout } from './components/layout'
import { Home } from './pages/home'
import { Cart } from './pages/cart'


const router = createBrowserRouter([
  {
   element: <Layout/>,
   children: [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/cart",
      element: <Cart/>
    }
   ] 
  }
])

export {router};