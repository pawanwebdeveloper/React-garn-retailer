import React from 'react'
import './Order.css'
import OrderDetails from './OrderDetails'
import StockProducts from './StockProducts'
import Backorder from './Backorder'
export default function OrderNew() {
  return (
    <div>
      {/* <OrderDetails /> */}
      <StockProducts />
      <Backorder />
    </div>
  )
}
