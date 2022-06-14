import React from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'

export default function SelectedWholesalers() {
  const dispatch = useDispatch()
  const selectedWholesalers = useSelector((state) => state.selectedWholesalers)

  const renderSelectedWholesalers = () => {
    return Object.keys(selectedWholesalers).map((id, i) => (
      <div key={i} className="left_b mb-2">
        <div className="main d-flex">
          <p className="m-0">{selectedWholesalers?.[id]?.company} </p>
          <button
            onClick={() => {
              removeSeller(id)
            }}
            className="border-0 bg-transparent"
          >
            &times;
          </button>
        </div>
      </div>
    ))
  }

  const removeSeller = (id) => {
    if (selectedWholesalers?.[id]) {
      delete selectedWholesalers?.[id]
      dispatch({
        type: 'set',
        selectedWholesalers: { ...selectedWholesalers },
      })
    }
  }
  return (
    <div>
      {Object.keys(selectedWholesalers).length ? (
        <CCard className="mb-4 box_items">
          <CCardBody>
            <CRow>
              <CCol xs={12}>
                <p className="heading3 text_medium">Selected Wholesalers</p>
              </CCol>
              <div className="check_ic d-flex">{renderSelectedWholesalers()}</div>
            </CRow>
          </CCardBody>
        </CCard>
      ) : null}
    </div>
  )
}
