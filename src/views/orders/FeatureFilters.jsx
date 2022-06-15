import React, { useEffect } from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import './feature.css'

import { useSelector, useDispatch } from 'react-redux'
import { getData } from 'src/services/http.service'
import Constants from 'src/services/constant'

export default function FeatureFilters() {
  useEffect(() => {
    getFeatures()
  }, [])

  const dispatch = useDispatch()
  const features = useSelector((state) => state.features)
  const selectedFeatures = useSelector((state) => state.selectedFeatures)

  const getFeatures = () => {
    getData(Constants.END_POINT.GET_FEATURES, {
      params: {
        user_id: 73,
      },
    })
      .then((result) => {
        dispatch({
          type: 'set',
          features: result,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const renderFeatures = () => {
    return features.map((item, i) => (
      <div key={i}>
        <h6 className="text-dark">
          {item?.description} <span className="text-secondary">(gram)</span>
        </h6>
        <div className="d-flex flex-wrap ">
          {item?.variants && renderVarients(item?.variants, item?.feature_code)}
        </div>
      </div>
    ))
  }
  const renderVarients = (items, f_code) => {
    return Object.keys(items).map((v_id, i) => (
      <div
        key={i}
        onClick={() => {
          selectFeature(v_id, f_code)
        }}
        className={selectedFeatures?.[f_code]?.[v_id] ? 'feature feature-active' : 'feature'}
      >
        {items?.[v_id]?.variant.slice(0, 3)}
      </div>
    ))
  }

  const selectFeature = (v_id, f_code) => {
    if (selectedFeatures?.[f_code]) {
      if (selectedFeatures?.[f_code]?.[v_id]) {
        delete selectedFeatures?.[f_code]?.[v_id]
        dispatch({
          type: 'set',
          selectedFeatures: { ...selectedFeatures },
        })
      } else {
        dispatch({
          type: 'set',
          selectedFeatures: {
            ...selectedFeatures,
            [f_code]: { ...selectedFeatures?.[f_code], [v_id]: { variant_id: v_id } },
          },
        })
      }
    } else {
      dispatch({
        type: 'set',
        selectedFeatures: { ...selectedFeatures, [f_code]: { [v_id]: { variant_id: v_id } } },
      })
    }
  }
  return (
    <CCard className="mb-4 box_items">
      <CCardBody>
        <CRow>
          <CCol xs={12}>
            <p className="heading3 text_medium">Size</p>
          </CCol>
          {renderFeatures()}
        </CRow>
      </CCardBody>
    </CCard>
  )
}
