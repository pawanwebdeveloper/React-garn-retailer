import React from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
export default function Home() {
  return (
    <CCard>
      <CCardBody>
        <CRow>
          <CCol xs={12}>
            <div className="heading3 text_medium">Dashboard</div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}
