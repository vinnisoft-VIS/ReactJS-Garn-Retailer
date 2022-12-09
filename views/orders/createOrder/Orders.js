import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Order.css'
import OrderDetails from './OrderDetails'
import StockProducts from './StockProducts'
import Backorder from './Backorder'
import { useSelector, useDispatch } from 'react-redux'

import { postData } from 'src/services/http.service'
import Constants from 'src/services/constant'
import { isAuthenticated } from 'src/services/auth.js'

import Popup from 'src/reuseables/Popup.jsx'

import check from 'src/assets/icons/check.png'

export default function OrderNew() {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const cartResponse = useSelector((state) => state.cartResponse)

  const [loading, setLoading] = useState({
    backorder: false,
    stock: false,
  })
  console.log(cartResponse)

  const createStockRequest = (withBackorder) => {
    setLoading({ ...loading, stock: true })
    let payload = {
      user_id: isAuthenticated()?.user_id,
    }
    let products = {}
    Object.keys(cartResponse?.stock_request?.products).map((p_id, i) => {
      products[p_id] = {
        amount: cartResponse?.stock_request?.products[p_id]?.available_stock,
      }
    })
    payload.products = products

    console.log('order==>', payload)

    postData(Constants.END_POINT.STOCK_REQUEST, payload)
      .then((result) => {
        console.log(result)
        setLoading({ ...loading, stock: false })
        if (withBackorder) {
          createBackorder()
        } else {
          setShow(true)
        }
      })
      .catch((err) => {
        console.log(err)
        setLoading({ ...loading, stock: false })
      })
  }

  const createBackorder = () => {
    setLoading({ ...loading, backorder: true })
    let payload = {
      user_id: isAuthenticated()?.user_id,
      pickup_date: '',
    }

    let products = {}
    Object.keys(cartResponse?.backorder?.products).map((p_id, i) => {
      products[p_id] = {
        amount: cartResponse?.backorder?.products[p_id]?.amount,
      }
    })
    payload.products = products
    console.log('order==>', payload)
    postData(Constants.END_POINT.BACKORDER, payload)
      .then((result) => {
        console.log(result)
        setLoading({ ...loading, backorder: false })
        if (result?.backorder_id) {
          navigate(`/backorder/detail/?id=${result?.backorder_id}`)
        }
      })
      .catch((err) => {
        console.log(err)
        setLoading({ ...loading, backorder: false })
      })
  }

  const [show, setShow] = useState(false)
  const onClose = () => {
    setShow(false)
    navigate('/orders')
  }
  return (
    <div>
      <Popup show={show} size={'md'} onClose={onClose}>
        <div className="p-4">
          <div className="d-flex justify-content-center">
            <div className="p-2 completed-circle" style={{ backgroundColor: '#EEF9F2' }}>
              <img src={check} alt="" />
            </div>
          </div>
          <div className="paragraph2 text_bold text-black text-center my-4">
            You have placed an order.
          </div>
          <Link to="/orders" className="large-btn text-uppercase w-100">
            go To my orders
          </Link>
        </div>
      </Popup>
      {/* <OrderDetails /> */}
      <StockProducts />
      <Backorder />

      <div className="d-flex justify-content-center mb-5">
        <div
          onClick={() => createStockRequest(false)}
          className="large-btn text-uppercase mx-1"
          style={{ color: '#151522', border: '1px solid #151522', backgroundColor: '#fff' }}
        >
          {loading.stock ? 'Loading...' : 'Proceed without backorder'}
        </div>
        <div className="large-btn text-uppercase mx-1" onClick={() => createStockRequest(true)}>
          {loading.backorder ? 'Loading...' : ' Place backorder'}
        </div>
      </div>
    </div>
  )
}
