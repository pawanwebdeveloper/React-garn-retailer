import React, { useState, useEffect } from 'react'

import image from '../../assets/images/image 35.png'
import iconBadge from '../../assets/icons/check-circle.png'
import { Accordion } from 'react-bootstrap'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from 'src/services/http.service'
import Constants from 'src/services/constant'

export default function Wholesalers() {
  useEffect(() => {
    getWholesalers()
  }, [])
  const dispatch = useDispatch()
  const AllWholesalers = useSelector((state) => state.Wholesalers)
  const selectedWholesalers = useSelector((state) => state.selectedWholesalers)
  const getWholesalers = () => {
    getData(Constants.END_POINT.GET_WHOLESALERS, {
      params: {
        user_id: 73,
        is_master_vendor: 1,
        page: 1,
        items_per_page: 20,
        show_companies_force: 1,
        status: 'A',
      },
    })
      .then((result) => {
        dispatch({
          type: 'set',
          Wholesalers: result,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const renderWholesalers = () => {
    return AllWholesalers.vendors.map((item, i) => (
      <div
        key={i}
        onClick={() => selectWholesaler(item.company_id, item)}
        className="col-md-2 col-12 mb-2"
      >
        <div className={selectedWholesalers?.[item.company_id] ? 'sel_card active' : 'sel_card'}>
          <div className="pro_img">
            <img src={item?.logo?.theme?.image?.https_image_path} alt="" width="37px" />
            <img src={iconBadge} className="iconbadge" alt="" />
          </div>
          <p className="heading5 text_medium text-center">{item.company.slice(0, 8)}</p>
        </div>
      </div>
    ))
  }
  const selectWholesaler = (Wholesaler_id, item) => {
    if (selectedWholesalers?.[Wholesaler_id]) {
      delete selectedWholesalers?.[Wholesaler_id]
      dispatch({
        type: 'set',
        selectedWholesalers: { ...selectedWholesalers },
      })
    } else {
      dispatch({
        type: 'set',
        selectedWholesalers: { ...selectedWholesalers, [Wholesaler_id]: item },
      })
    }
  }
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <p className="heading3 text_medium">Select Wholesalers</p>
        </Accordion.Header>
        <Accordion.Body>
          <CCard className="mb-4 box_items">
            <CCardBody>
              <CRow>
                <div className="row p-1 m-0 mb-2">
                  {AllWholesalers?.vendors?.length && renderWholesalers()}
                </div>
                <div className="row m-0">
                  <div className="col-md-4 col-12">
                    <p className="text-dark">
                      Items per page:{' '}
                      <span className="text-secondary">
                        {AllWholesalers?.params?.items_per_page}
                      </span>
                    </p>
                    <p className="text-dark">
                      Total Items:{' '}
                      <span className="text-secondary">{AllWholesalers?.params?.total_items}</span>
                    </p>
                  </div>
                  {/* <div className="col-md-8 col-12">
                    <div className="pagination d-flex">
                      <ul className="pagination pagination-lg">
                        <li className="page-item disabled">
                          <a className="page-link border-0">Prev</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link border-0">1</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link border-0">2</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link border-0">3</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link border-0">4</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link border-0">5</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link border-0">Next</a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </CRow>
            </CCardBody>
          </CCard>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
