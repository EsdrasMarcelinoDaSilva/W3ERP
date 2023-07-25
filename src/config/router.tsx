import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/home'
import Dashboard from '@/pages/dashboard'
import Products from '@/pages/products'
import Predictions from '@/pages/predictions'
import ProductDetails from '@/pages/productDetails'
import Clients from '@/pages/clients'
import ClientDetails from '@/pages/clientDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/products/:productId',
    element: <ProductDetails />
  },
  {
    path: '/clientHistory/:id',
    element: <Clients />
  },
  {
    path: '/clients/:clientId',
    element: <ClientDetails />
  },
  {
    path: '/predictions',
    element: <Predictions />
  }
])

export default function Router() {
  return (
    <>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}
