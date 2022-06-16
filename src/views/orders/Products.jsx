import React, { useEffect } from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from 'src/services/http.service'
import Constants from 'src/services/constant'

import iconBadge from '../../assets/icons/check-circle.png'

export default function Products() {
  useEffect(() => {
    // getProducts()
  }, [])

  const dispatch = useDispatch()
  const allProducts = useSelector((state) => state.allProducts)
  const productId = useSelector((state) => state.productId)

  const getProducts = () => {
    getData(Constants.END_POINT.GET_WHOLESALERS_PRODUCTS, {
      params: {
        user_id: 73,
        page: 2,
        items_per_page: 12,
        // company_ids: 1,
        master_product_ids: 9213,
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

  const renderproducts = () => {
    return allProducts.products.map((item, i) => (
      <div key={i} className="col-md-2 col-12 mb-2">
        <div
          onClick={() => selectProduct(item.product_id, item)}
          className={
            productId === item.product_id ? 'sel_card boxItem1 active' : 'sel_card boxItem1 '
          }
        >
          <div className="pro_img">
            <img src={item?.main_pair?.detailed?.https_image_path} alt="" width="37px" />
            <img src={iconBadge} className="iconbadge" alt="" />
            <div className="nuber_list">100</div>
          </div>
          <p className="heading5 text_medium text-center">{item?.product.slice(0, 12)}</p>
        </div>
      </div>
    ))
  }

  const selectProduct = (id, item) => {
    dispatch({
      type: 'set',
      productId: id,
    })
  }

  return (
    <div>
      {allProducts?.products?.length ? (
        <CCard className="mb-4 box_items">
          <CCardBody>
            <CRow>
              <CCol xs={12}>
                <p className="heading3 text_medium">Products</p>
              </CCol>
              <div className="row p-1 m-0 mb-2">
                {allProducts?.products?.length && renderproducts()}
              </div>
              <div className="row m-0">
                <div className="col-md-4 col-12">
                  <p className="text-dark">
                    Total Items:{' '}
                    <span className="text-secondary">{allProducts?.params?.total_items}</span>
                  </p>
                </div>
                <div className="col-md-8 col-12">
                  {/* <div className="pagination d-flex">
            <ul className="pagination pagination-lg">
              <li className="page-item disabled">
                <a className="page-link border-0" href="http://tonancos.com/26iY">
                  Prev
                </a>
              </li>
              <li className="page-item">
                <a className="page-link border-0" href="http://tonancos.com/26iY">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link border-0" href="http://tonancos.com/26iY">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link border-0" href="http://tonancos.com/26iY">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link border-0" href="http://tonancos.com/26iY">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link border-0" href="http://tonancos.com/26iY">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link border-0" href="http://tonancos.com/26iY">
                  Next
                </a>
              </li>
            </ul>
          </div> */}
                </div>
              </div>
            </CRow>
          </CCardBody>
        </CCard>
      ) : null}
    </div>
  )
}
