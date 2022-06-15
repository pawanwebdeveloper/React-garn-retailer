import React, { useState, useEffect } from 'react'
import iconBadge from '../../assets/icons/check-circle.png'

import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from 'src/services/http.service'
import Constants from 'src/services/constant'

export default function ProductCategory() {
  useEffect(() => {
    getCategories()
  }, [])

  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categories)
  const selected = useSelector((state) => state.selectedCategories)
  const getCategories = () => {
    getData(Constants.END_POINT.GET_CATEGORIES)
      .then((result) => {
        dispatch({
          type: 'set',
          categories: result.categories,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const selectcategory = (cat_id) => {
    if (selected?.[cat_id]) {
      delete selected?.[cat_id]
      dispatch({
        type: 'set',
        selectedCategories: { ...selected },
      })
    } else {
      dispatch({
        type: 'set',
        selectedCategories: { ...selected, [cat_id]: { category_id: cat_id } },
      })
    }
  }
  const renderCategories = () => {
    return categories.map((item, i) => (
      <div
        key={i}
        onClick={() => selectcategory(item.category_id)}
        className="col-12 col-md-6 mb-4"
      >
        <div className={selected?.[item.category_id] ? 'boxItem active' : 'boxItem'}>
          <img src={item?.main_pair?.detailed?.https_image_path} alt="" width="37px" />
          <img src={iconBadge} className="iconbadge" alt="" />
          <p className=" text_medium text-center">{item?.category?.slice(0, 8)}</p>
          <div className="nuber_list">100</div>
        </div>
      </div>
    ))
  }
  return (
    <CCard className="mb-4 box_items">
      <CCardBody>
        <CRow>
          <CCol xs={12}>
            <p className="heading3 text_medium">Product Category</p>
          </CCol>
          <div className="row p-1 m-0 mb-2">{categories && renderCategories()}</div>
        </CRow>
      </CCardBody>
    </CCard>
  )
}
