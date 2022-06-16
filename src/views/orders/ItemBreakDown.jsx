import React from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { Accordion } from 'react-bootstrap'

export default function ItemBreakDown() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  // const renderBreakDown = () => {
  //   return Object.keys(cart).map((id, i) => (
  //     <div key={i}>
  //       <CCol xs={12}>
  //         <h6 className="text-dark mb-3">
  //           <u>{cart?.[id].name}</u>
  //         </h6>
  //       </CCol>

  //       <h6 className="text-dark mb-3">
  //         2000 <span className="text-secondary">(PCS)</span>
  //       </h6>
  //       {renderItems(cart?.[id].items, id)}
  //       <div className="check_ic">
  //         <div className="left_b mb-2"></div>
  //       </div>
  //     </div>
  //   ))
  // }

  const renderBreakDown = () => {
    return Object.keys(cart).map((id, i) => (
      <div className="mb-2" key={i}>
        <div className="paragraph2 text_bold mb-2">{cart?.[id].name}</div>
        <div>{renderItems(cart?.[id].items, id)}</div>
      </div>
    ))
  }

  const getTotalQty = () => {
    let total = 0
    Object.keys(cart).map((id, i) => {
      total += getItemQty(cart?.[id].items)
    })
    return total
  }

  const renderItems = (Items, p_id) => {
    return (
      <div>
        <div className="d-flex justify-content-between mb-2">
          <div className="paragraph2 text_bold">
            {getItemQty(Items)}
            <span className="text_regular"> Pcs</span>{' '}
          </div>
          <div className=" paragraph2 text_bold">See More</div>
        </div>
        {Items.map((varient, i) => {
          return (
            <div key={i} className="row m-0 p-0">
              <div className="paragraph2 col-6 px-0 mx-0">{renderName(varient)}</div>
              <div className=" paragraph2 col-5 px-0 mx-0 text_bold">
                {varient?.qty}
                <span className="text_regular"> Pcs</span>
              </div>
              <div className="col-1 px-0 mx-0" onClick={() => removeItem(i, p_id)}>
                &times;
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const getItemQty = (Items) => {
    let item_qty = 0
    Items.map((varient, i) => {
      item_qty = item_qty + varient?.qty
    })
    return item_qty
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
              <div className="paragraph1 text_bold mb-2 ">ITEMS BREAKDOWN</div>
              {Object.keys(cart)?.length ? renderBreakDown() : null}
              <div className="d-flex justify-content-between paragraph1 text_bold mb-2">
                <div>TOTAL</div>
                <div>
                  {getTotalQty()} <span className="text_regular">Pcs</span>{' '}
                </div>
              </div>

              <div className="row m-0 justify-content-center">
                <div className="large-btn w-100">TO CART</div>
              </div>
            </CRow>
          </CCardBody>
        </CCard>
      ) : null}
    </div>
  )
}
