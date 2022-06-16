import React from 'react'
//my pages..........

const Home = React.lazy(() => import('./views/home/Home'))
const Orders = React.lazy(() => import('./views/orders/Orders'))
const Products = React.lazy(() => import('./views/products/Products'))
const RequestStock = React.lazy(() => import('./views/RequestStock/RequestStock.js'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Home },
  { path: '/products', name: 'Dashboard', element: Products },
  { path: '/orders', name: 'My Orders', element: Orders },
  { path: '/RequestStock', name: 'Request Stock', element: RequestStock },
]

export default routes
