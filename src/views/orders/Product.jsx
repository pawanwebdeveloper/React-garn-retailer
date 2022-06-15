import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import image from '../../assets/images/image 35.png'
import './feature.css'

import { useSelector, useDispatch } from 'react-redux'
import { getData } from 'src/services/http.service'
import Constants from 'src/services/constant'

export default function Product() {
  const dispatch = useDispatch()
  const productId = useSelector((state) => state.productId)
  const cart = useSelector((state) => state.cart)
  const [qty, setQty] = useState(200)
  const [product, setProduct] = useState({})
  const [selected, setSelected] = useState({})

  useEffect(() => {
    if (productId) {
      getProduct()
    }
  }, [productId])
  const getProduct = () => {
    getData(Constants.END_POINT.GET_WHOLESALERS_PRODUCTS + `/${productId}`, {
      params: {
        user_id: 73,
      },
    })
      .then((result) => {
        setProduct(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const renderFeatures = (features) => {
    return Object.keys(features).map((f_id, i) => (
      <div key={i}>
        <h6 className="text-dark text-uppercase">
          {features?.[f_id]?.description} AVAILABILITY{' '}
          <span className="text-secondary">(gram)</span>
        </h6>
        <div className="d-flex flex-wrap">
          {features?.[f_id]?.variants && renderVarients(features?.[f_id]?.variants, f_id)}
        </div>
      </div>
    ))
  }
  const renderVarients = (varients, f_id) => {
    return Object.keys(varients).map((v_id, i) => (
      <div
        onClick={() => {
          select(f_id, v_id, varients?.[v_id])
        }}
        key={i}
        className={selected?.[f_id]?.[v_id] ? 'feature feature-active' : 'feature'}
      >
        {varients?.[v_id].variant}
      </div>
    ))
  }
  const handleChange = (e) => {
    setQty(parseInt(e.target.value))
  }
  const renderImages = (images) => {
    return Object.keys(images).map((i_id, i) => (
      <div key={i} className="col-md-3 col-12 mb-2">
        <div className="sel_card boxItem1">
          <div style={{ minHeight: '60px' }} className="pro_img">
            <img src={images?.[i_id]?.detailed?.https_image_path} alt="" width="37px" />
          </div>
        </div>
      </div>
    ))
  }

  const select = (f_id, v, item) => {
    setSelected({ ...selected, [f_id]: { [v]: item } })
  }

  const addProductInCart = () => {
    let productArray = []
    selected.qty = qty
    if (cart?.[productId]) {
      cart?.[productId]?.items.push(selected)
      dispatch({
        type: 'set',
        cart: {
          ...cart,
        },
      })
    } else {
      productArray.push(selected)
      dispatch({
        type: 'set',
        cart: {
          ...cart,
          [productId]: { productId, name: product?.product, items: productArray, qty },
        },
      })
    }
    setSelected({})
  }
  return (
    <div>
      {productId && (
        <CCard className="mb-4 box_items">
          <CCardBody>
            <CRow>
              <CCol xs={12}>
                <p className="heading3 text_medium">{product?.product}</p>
                <h6 className="text-secondary">{product?.category_name}</h6>
              </CCol>
              <div className="row p-1 m-0 mb-2">
                <div className="col-md-6 col-12 mb-2">
                  <div className="sel_card boxItem1">
                    <div className="pro_img p-3">
                      <img
                        src={product?.main_pair?.detailed?.https_image_path}
                        alt=""
                        width="37px"
                      />
                    </div>
                  </div>
                  <div className="row m-0">
                    {product?.image_pairs && renderImages(product?.image_pairs)}
                  </div>
                </div>
                <div className="col-md-6 col-12 mb-2">
                  <div className="pro_des">
                    {product?.product_features &&
                      renderFeatures(product?.all_variants_for_features_variations)}
                  </div>
                  <div className="pro_des">
                    <h6 className="text-dark mb-3">
                      IN STOCK <span className="text-secondary">(PCS)</span>
                    </h6>
                    <h6 className="text-dark mb-3">200</h6>
                    <h6 className="heading3 text-dark">Quantity</h6>
                    <div className="main d-flex justify-content-around w-75">
                      <div
                        style={{ cursor: 'pointer' }}
                        className="heading3"
                        onClick={() => setQty(parseInt(qty - 1))}
                      >
                        -
                      </div>
                      <input
                        type="number"
                        className=" text-center font-weight-bold bg-transparent border-0 w-75"
                        value={qty}
                        onChange={(e) => handleChange(e)}
                      />
                      <div
                        style={{ cursor: 'pointer' }}
                        className="heading3"
                        onClick={() => setQty(parseInt(qty + 1))}
                      >
                        +
                      </div>
                    </div>
                    <div className="row m-0 mt-3 justify-content-start">
                      <div
                        onClick={() => addProductInCart()}
                        style={{ width: '50%' }}
                        className="large-btn"
                      >
                        ADD TO CART
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CRow>
          </CCardBody>
        </CCard>
      )}
    </div>
  )
}
