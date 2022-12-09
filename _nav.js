import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

import home from './assets/icons/home.png'
import myorder from './assets/icons/myorder.png'
import myproduct from './assets/icons/myproduct.png'
import customers from './assets/icons/customers.png'
import salesreport from './assets/icons/salesreport.png'
import productreport from './assets/icons/productreport.png'
import custreport from './assets/icons/custreport.png'
import news from './assets/icons/news.png'

const _nav = [
  {
    component: CNavTitle,
    name: 'Manage',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <img src={home} customClassName="nav-icon" style={{ marginRight: '20px' }} />,
  },
  {
    component: CNavItem,
    name: 'My Order',
    to: '/orders',
    icon: <img src={myorder} customClassName="nav-icon" style={{ marginRight: '20px' }} />,
  },
  {
    component: CNavItem,
    name: 'My Backorder',
    to: '/backorder',
    icon: <img src={myorder} customClassName="nav-icon" style={{ marginRight: '20px' }} />,
  },
  {
    component: CNavItem,
    name: 'My Product',
    to: '/products',
    icon: <img src={myproduct} customClassName="nav-icon" style={{ marginRight: '20px' }} />,
  },

  {
    component: CNavItem,
    name: 'My Customer',
    to: '/customer',
    icon: <img src={customers} customClassName="nav-icon" style={{ marginRight: '20px' }} />,
  },
  {
    component: CNavItem,
    name: 'Sales Report',
    to: '/salesreport',
    icon: <img src={salesreport} customClassName="nav-icon" style={{ marginRight: '20px' }} />,
  },
  {
    component: CNavItem,
    name: 'Product Report',
    to: '/productreport',
    icon: <img src={productreport} customClassName="nav-icon" style={{ marginRight: '20px' }} />,
  },
  {
    component: CNavItem,
    name: 'New Cust. Report',
    to: '/customerreport',
    icon: <img src={custreport} customClassName="nav-icon" style={{ marginRight: '20px' }} />,
  },
  {
    component: CNavItem,
    name: 'News',
    to: '/news',
    icon: <img src={news} customClassName="nav-icon" style={{ marginRight: '20px' }} />,
  },
]

export default _nav
