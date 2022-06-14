import React from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'

export default function ItemBreakDown() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  const renderBreakDown = () => {
    return Object.keys(cart).map((id, i) => (
      <div key={i}>
        <CCol xs={12}>
          <h6 className="text-dark mb-3">
            <u>{cart?.[id].name}</u>
          </h6>
        </CCol>

        <h6 className="text-dark mb-3">
          2000 <span className="text-secondary">(PCS)</span>
        </h6>
        {renderItems(cart?.[id].items, id)}
        <div className="check_ic">
          <div className="left_b mb-2"></div>
        </div>
      </div>
    ))
  }

  const renderItems = (Items, p_id) => {
    return Items.map((varient, i) => (
      <div key={i} className="main d-flex justify-content-between w-100">
        <p className="m-0">{renderName(varient)} </p>
        <h6 className="text-dark">
          {varient?.qty}PCS
          <button className="border-0 bg-transparent">
            <i className="fas fa-edit"></i>
          </button>
        </h6>
        <button onClick={() => removeItem(i, p_id)} className="border-0 bg-transparent">
          &times;
        </button>
      </div>
    ))
  }

  const renderName = (items) => {
    return Object.keys(items).map((f_id, i) => {
      if (f_id != 'qty') {
        return (
          <span>
            {items?.[f_id]?.[Object.keys(items?.[f_id])[0]]?.variant?.slice(0, 2)}
            {Object.keys(items).length - 2 === i ? '' : '/'}
          </span>
        )
      }
    })
  }

  const removeItem = (index, p_id) => {
    console.log(index, p_id)
    cart?.[p_id].items.splice(index, 1)
    if (cart?.[p_id].items?.length) {
      dispatch({
        type: 'set',
        cart: { ...cart },
      })
    } else {
      delete cart?.[p_id]
      dispatch({
        type: 'set',
        cart: { ...cart },
      })
    }
  }
  return (
    <div>
      {Object.keys(cart)?.length ? (
        <CCard className="mb-4 box_items">
          <CCardBody>
            <CRow>
              <CCol xs={12}>
                <p className="heading3 text_medium">ITEMS BREAKDOWN</p>
              </CCol>
              {Object.keys(cart)?.length && renderBreakDown()}
              <div className="check_ic">
                <div className="left_b mb-2">
                  <div className="main d-flex justify-content-between">
                    <h6 className="heading3 m-0">TOTAL </h6>
                    <p className="heading3">2000 PCS</p>
                  </div>
                </div>
              </div>

              <div className="row m-0 justify-content-center">
                <div className="large-btn w-75">TO CART</div>
              </div>
            </CRow>
          </CCardBody>
        </CCard>
      ) : null}
    </div>
  )
}
