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
  const selectedProducts = useSelector((state) => state.selectedProducts)

  const getProducts = () => {
    getData(Constants.END_POINT.GET_WHOLESALERS_PRODUCTS, {
      params: {
        user_id: 73,
        page: 1,
        items_per_page: 12,
        // company_ids: 1,
        master_product_ids: '9213',
      },
    })
      .then((result) => {
        console.log(result)
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
