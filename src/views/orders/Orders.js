import React from 'react'
import './Order.css'
import OrderDetails from './OrderDetails'
import StockProducts from './StockProducts'
import Backorder from './Backorder'
import { useSelector, useDispatch } from 'react-redux'

import { postData } from 'src/services/http.service'
import Constants from 'src/services/constant'
import { isAuthenticated } from 'src/services/auth.js'

export default function OrderNew() {
  const dispatch = useDispatch()
  const cartResponse = useSelector((state) => state.cartResponse)
  console.log(cartResponse)

  const createOrder = () => {
    let payload = {
      user_id: isAuthenticated()?.user_id,
      products: cartResponse?.stock_request?.products,
    }
    console.log('order==>', payload)
    postData(Constants.END_POINT.STOCK_REQUEST, payload)
      .then((result) => {
        console.log(result)
        // if (result?.response?.status === 404) {
        //   alert(result?.message)
        // } else {
        //   dispatch({
        //     type: 'set',
        //     cartResponse: result,
        //   })
        // }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const createBackorder = () => {
    let payload = {
      user_id: isAuthenticated()?.user_id,
      products: cartResponse?.backorder?.products,
      pickup_date: '',
    }
    console.log('order==>', payload)
    postData(Constants.END_POINT.BACKORDER, payload)
      .then((result) => {
        console.log(result)
        // if (result?.response?.status === 404) {
        //   alert(result?.message)
        // } else {
        //   dispatch({
        //     type: 'set',
        //     cartResponse: result,
        //   })
        // }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      {/* <OrderDetails /> */}
      <StockProducts />
      <Backorder />

      <div className="d-flex justify-content-center mb-5">
        <div
          onClick={() => createOrder()}
          className="large-btn text-uppercase mx-1"
          style={{ color: '#151522', border: '1px solid #151522', backgroundColor: '#fff' }}
        >
          Proceed without backorder
        </div>
        <div className="large-btn text-uppercase mx-1" onClick={() => createBackorder()}>
          Place backorder
        </div>
      </div>
    </div>
  )
}
