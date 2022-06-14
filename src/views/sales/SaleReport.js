import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CCardHeader,
  CRow,
  CTable,
  CTableHeaderCell,
  CTableHead,
  CTableRow,
  CTableDataCell,
  CTableBody,
} from '@coreui/react'
import image from '../../assets/images/image 35.png'
import { DocsCallout, DocsExample } from 'src/components'

export default function SaleReport() {
  return (
    <>
      <CRow>
        <CCol xs={7}>
          <CCard className="mb-4">
            <CCardBody style={{ padding: 0 }}>
              <div className="heading2 my-2 mx-4">Product Ranking</div>
              <div className="d-flex mb-3 mx-4">
                <div className="large-sale-btn">Total Sell Quantity</div>
                <div className="sale-large-btn mx-2">Total product view</div>
                <div className="sale-large-btn mx-2">purchase Rate</div>
              </div>
              <CTable style={{ borderColor: '#EDECEC', margin: '0px' }}>
                <CTableHead className="mx-2">
                  <CTableRow className="mx-4" style={{ backgroundColor: '#EDECEC' }}>
                    <CTableHeaderCell
                      className="heading6 text_medium"
                      scope="col"
                      style={{ textAlign: 'center' }}
                    >
                      No.
                    </CTableHeaderCell>
                    <CTableHeaderCell className="heading6 text_medium" scope="col">
                      PRODUCT DETAIL
                    </CTableHeaderCell>
                    <CTableHeaderCell className="heading6 text_medium text-center" scope="col">
                      QTY SOLD
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>

                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell className="text-center" scope="row">
                      01
                    </CTableHeaderCell>
                    <CTableDataCell>
                      <div style={{ backgroundColor: '#DDC380', width: '50px;' }}></div>
                      <img src={image} alt="" width="37px" />
                      Nacklace Name Here
                    </CTableDataCell>
                    <CTableDataCell className="text-center">17Pcs</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell className="text-center" scope="row">
                      01
                    </CTableHeaderCell>
                    <CTableDataCell>
                      <div style={{ backgroundColor: '#DDC380', width: '50px;' }}></div>
                      <img src={image} alt="" width="37px" />
                      Nacklace Name Here
                    </CTableDataCell>
                    <CTableDataCell className="text-center">17Pcs</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell className="text-center" scope="row">
                      01
                    </CTableHeaderCell>
                    <CTableDataCell>
                      <div style={{ backgroundColor: '#DDC380', width: '50px;' }}></div>
                      <img src={image} alt="" width="37px" />
                      Nacklace Name Here
                    </CTableDataCell>
                    <CTableDataCell className="text-center">17Pcs</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell className="text-center" scope="row">
                      01
                    </CTableHeaderCell>
                    <CTableDataCell>
                      <div style={{ backgroundColor: '#DDC380', width: '50px;' }}></div>
                      <img src={image} alt="" width="37px" />
                      Nacklace Name Here
                    </CTableDataCell>
                    <CTableDataCell className="text-center">17Pcs</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs={5}>
          <CCard className="mb-4">
            <CCardBody className="p-0">
              <div className="heading2 my-2 mx-4 ">Category Ranking</div>
              <div className="mb-2">
                <p className="mb-3 mx-4"> Ranking of product best seller</p>
              </div>
              <CTable style={{ borderColor: '#EDECEC', margin: '0px' }}>
                <CTableHead className="mx-2">
                  <CTableRow className="mx-4" style={{ backgroundColor: '#EDECEC' }}>
                    <CTableHeaderCell
                      className="heading6 text_medium"
                      scope="col"
                      style={{ textAlign: 'center' }}
                    >
                      No.
                    </CTableHeaderCell>
                    <CTableHeaderCell className="heading6 text_medium" scope="col">
                      CATEGORY
                    </CTableHeaderCell>
                    <CTableHeaderCell className="heading6 text_medium text-center" scope="col">
                      QTY SOLD
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell className="text-center" scope="row">
                      01
                    </CTableHeaderCell>
                    <CTableDataCell>Nacklace</CTableDataCell>
                    <CTableDataCell className="text-center">1500</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell className="text-center" scope="row">
                      02
                    </CTableHeaderCell>
                    <CTableDataCell>Nacklace</CTableDataCell>
                    <CTableDataCell className="text-center">1500</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell className="text-center" scope="row">
                      03
                    </CTableHeaderCell>
                    <CTableDataCell>Nacklace</CTableDataCell>
                    <CTableDataCell className="text-center">1500</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell className="text-center" scope="row">
                      04
                    </CTableHeaderCell>
                    <CTableDataCell>Nacklace</CTableDataCell>
                    <CTableDataCell className="text-center">1500</CTableDataCell>
                  </CTableRow>
                  <CTableRow className="last-row">
                    <CTableHeaderCell className="text-center" scope="row">
                      05
                    </CTableHeaderCell>
                    <CTableDataCell>Nacklace</CTableDataCell>
                    <CTableDataCell className="text-center">1500</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
