import React from 'react'
//my pages..........

const Home = React.lazy(() => import('./views/home/Home'))
const CreateOrder = React.lazy(() => import('./views/orders/createOrder/Orders'))
const StockRequest = React.lazy(() => import('./views/orders/stockRequest/StockRequest.jsx'))
const BackOrders = React.lazy(() => import('./views/orders/backorderRequest/BackorderRequest.jsx'))
const BackOrderDetails = React.lazy(() => import('./views/orders/backorderRequest/BackorderDetail'))
const Products = React.lazy(() => import('./views/products/Products'))
const RequestStock = React.lazy(() => import('./views/RequestStock/RequestStock.js'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: '', element: Home },
  { path: '/products', name: '', element: Products },
  { path: '/orders', name: 'Requests for Stock', element: StockRequest },
  { path: '/orders/create/', name: 'Request for Stock', element: CreateOrder },
  { path: '/backorder', name: 'Backorders', element: BackOrders },
  { path: '/backorder/detail/', name: 'Backorder', element: BackOrderDetails },
  { path: '/RequestStock', name: 'Request Stock', element: RequestStock },
]

export default routes
