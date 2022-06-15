import React from 'react'

import { CCard, CCardBody, CCol, CRow } from '@coreui/react'

import ProductCategory from './ProductCategory.jsx'
import SelectedWholesalers from './SelectedWholesalers.jsx'
import ItemBreakDown from './ItemBreakDown.jsx'
import Wholesealer from './Wholesalers.jsx'
import ProductTypes from './ProductTypes.jsx'
import Products from './Products.jsx'
import SelectedProducts from './SelectedProducts.jsx'
import FeatureFilters from './FeatureFilters.jsx'
import Product from './Product.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from 'src/services/http.service'
import Constants from 'src/services/constant'
export default function Orders() {
  const dispatch = useDispatch()
  const allProducts = useSelector((state) => state.allProducts)

  const selectedCategories = useSelector((state) => state.selectedCategories)
  const selectedWholesalers = useSelector((state) => state.selectedWholesalers)
  const selectedProducts = useSelector((state) => state.selectedProducts)
  const selectedFeatures = useSelector((state) => state.selectedFeatures)
  console.log('selectedFeatures==>', selectedFeatures)

  const getProducts = () => {
    let p = { user_id: 73, page: 1, items_per_page: 12, group_by_sellers_offers: 1 }
    if (Object.keys(selectedWholesalers)?.length) {
      p.company_ids = Object.keys(selectedWholesalers).toString()
    }
    if (Object.keys(selectedProducts)?.length) {
      p.master_product_ids = Object.keys(selectedProducts).toString()
    }

    if (selectedFeatures?.length_feature && Object.keys(selectedFeatures?.length_feature)?.length) {
      p.length_feature = Object.keys(selectedFeatures?.length_feature).toString()
    }
    if (selectedFeatures?.size_feature && Object.keys(selectedFeatures?.size_feature)?.length) {
      p.size_feature = Object.keys(selectedFeatures?.size_feature).toString()
    }
    if (selectedFeatures?.weight_feature && Object.keys(selectedFeatures?.weight_feature)?.length) {
      p.weight_feature = Object.keys(selectedFeatures?.weight_feature).toString()
    }

    console.log(p)
    getData(Constants.END_POINT.GET_WHOLESALERS_PRODUCTS, {
      params: p,
    })
      .then((result) => {
        dispatch({
          type: 'set',
          allProducts: result,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="row m-0 mb-4">
      <div className="col-md-3 col-12">
        <ProductCategory />
        <SelectedWholesalers />
        <SelectedProducts />
        <FeatureFilters />
        {/* <CCard className="mb-4 box_items">
          <CCardBody>
            <CRow>
              <CCol xs={12}>
                <p className="heading3 text_medium">Size</p>
                <h6 className="text-dark">
                  Weight <span className="text-secondary">(gram)</span>
                </h6>
              </CCol>
              <div className="check_ic d-flex">
                <div className="left_b mb-2">
                  <div className="main d-flex bg-transparent">
                    <p className="m-0 heading5 text_medium bg-secondary text-center rounded-circle text-light ps-2 pe-2">
                      3.32
                    </p>
                  </div>
                </div>
                <div className="left_b mb-2">
                  <div className="main d-flex bg-transparent">
                    <p className="m-0 heading5 text_medium bg-secondary text-center rounded-circle text-light ps-2 pe-2">
                      5
                    </p>
                  </div>
                </div>
                <div className="left_b mb-2">
                  <div className="main d-flex bg-transparent">
                    <p className="m-0 heading5 text_medium bg-secondary text-center rounded-circle text-light ps-2 pe-2">
                      6
                    </p>
                  </div>
                </div>
                <div className="left_b mb-2">
                  <div className="main d-flex bg-transparent">
                    <p className="m-0 heading5 text_medium bg-secondary text-center rounded-circle text-light ps-2 pe-2">
                      7
                    </p>
                  </div>
                </div>
                <div className="left_b mb-2">
                  <div className="main d-flex bg-transparent">
                    <p className="m-0 heading5 text_medium bg-secondary text-center rounded-circle text-light ps-2 pe-2">
                      8
                    </p>
                  </div>
                </div>
              </div>

              <h6 className="text-dark">
                Length <span className="text-secondary">(cm)</span>
              </h6>
              <div className="check_ic d-flex">
                <div className="left_b mb-2">
                  <div className="main d-flex bg-transparent">
                    <p className="m-0 heading5 text_medium bg-secondary text-center rounded-circle text-light pt-2 pb-2 ps-2 pe-2">
                      16,5
                    </p>
                  </div>
                </div>
                <div className="left_b mb-2">
                  <div className="main d-flex bg-transparent">
                    <p className="m-0 heading5 text_medium bg-secondary text-center rounded-circle text-light pt-2 pb-2 ps-3 pe-3">
                      17
                    </p>
                  </div>
                </div>
                <div className="left_b mb-2">
                  <div className="main d-flex bg-transparent">
                    <p className="m-0 heading5 text_medium bg-secondary text-center rounded-circle text-light pt-2 pb-2 ps-2 pe-2">
                      17,5
                    </p>
                  </div>
                </div>
                <div className="left_b mb-2">
                  <div className="main d-flex bg-transparent">
                    <p className="m-0 heading5 text_medium bg-secondary text-center rounded-circle text-light pt-2 pb-2 ps-3 pe-3">
                      18
                    </p>
                  </div>
                </div>
                <div className="left_b mb-2">
                  <div className="main d-flex bg-transparent">
                    <p className="m-0 heading5 text_medium bg-secondary text-center rounded-circle text-light pt-2 pb-2 ps-2 pe-2">
                      18,5
                    </p>
                  </div>
                </div>
              </div>
            </CRow>
          </CCardBody>
        </CCard> */}
        <ItemBreakDown />
      </div>
      <div className="col-md-9 col-12">
        <Wholesealer />
        <ProductTypes />
        <Products />
        <Product />
        {allProducts?.products?.length ? (
          ''
        ) : (
          <div className="row m-0 justify-content-center">
            <div onClick={() => getProducts()} className="large-btn">
              GET OFFERS
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
