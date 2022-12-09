import React from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import Necklacepro from 'src/assets/images/img1.png'
import { Form } from 'react-bootstrap'
import Edit from 'src/assets/icons/edit.png'
import Cross from 'src/assets/icons/cross.png'
import { useSelector, useDispatch } from 'react-redux'

export default function Backorder() {
  const dispatch = useDispatch()
  const cartResponse = useSelector((state) => state.cartResponse)

  const renderBackOrder = () => {
    return cartResponse?.backorder_info?.products.map((item, i) => (
      <CRow key={i} className="mb-2 p-2 border-bottom">
        <CCol md={6}>
          <CRow>
            <CCol md={3}>
              <div className="stock_bg rounded p-1">
                <img
                  src={item?.main_pair?.detailed?.image_path}
                  alt=""
                  className="w-50  m-auto d-block"
                />
              </div>
            </CCol>
            <CCol md={9}>
              <p className="">{item?.product}</p>
            </CCol>
          </CRow>
          <CRow className="border-top mt-3 pt-2">
            <CCol xs={12}>
              <input type="checkbox" name="" id="" className="me-2" />
              Make request public
            </CCol>
          </CRow>
        </CCol>
        <CCol md={6}>
          <CRow>
            <CCol md={3}>
              <p className="heading6 text_semibold">{item?.variation_features?.['557']?.variant}</p>
            </CCol>
            <CCol md={3}>
              <p className="heading6 text_semibold">{item?.variation_features?.['548']?.variant}</p>
            </CCol>
            <CCol md={3}>
              <p className="heading6 text_semibold">
                {cartResponse?.backorder?.products[item?.product_id]?.quantity} Pcs
              </p>
            </CCol>
            <CCol md={3} className="d-flex justify-content-between">
              <img src={Edit} alt="" className="light_gray edit_product p-2" />
              <img src={Cross} alt="" className="light_gray edit_product  p-2" />
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    ))
  }

  return (
    <div>
      <div style={{ backgroundColor: '#FBEAE7' }} className="text-center text_bold p-1 mb-2">
        Some products from your order are not in stock. Please use the form below to backorder them.
      </div>
      <div className="row m-0">
        <div className="col-md-6 col-12">
          <p className="text_medium">PRODUCTS(NOT IN STOCK)</p>
        </div>
        <div className="col-md-6 col-12">
          <div className="row">
            <div className="col-md-3">
              <p className="text_medium">WEIGHT</p>
            </div>
            <div className="col-md-3">
              <p className="text_medium">SIZE</p>
            </div>
            <div className="col-md-3">
              <p className="text_medium">QUANTITY</p>
            </div>
          </div>
        </div>
      </div>
      <CCard className="mb-4 box_items">
        <CCardBody>
          {cartResponse?.backorder_info?.products.length ? (
            renderBackOrder()
          ) : (
            <CRow className="mb-2 p-2 border-bottom">
              <CCol md={6}>
                <CRow>
                  <CCol md={3}>
                    <div className="stock_bg rounded p-1">
                      <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                    </div>
                  </CCol>
                  <CCol md={9}>
                    <p className="">PROCYON- Bold Herringbone Chain Necklace</p>
                  </CCol>
                </CRow>
                <CRow className="border-top mt-3 pt-2">
                  <CCol xs={12}>
                    <input type="checkbox" name="" id="" />
                    Make request public
                  </CCol>
                </CRow>
              </CCol>
              <CCol md={6}>
                <CRow>
                  <CCol md={3}>
                    <p className="heading6 text_semibold">3.8 Gram</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading6 text_semibold">45 Cm</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading6 text_semibold">20 Pcs</p>
                  </CCol>
                  <CCol md={3} className="d-flex justify-content-between">
                    <img src={Edit} alt="" className="light_gray edit_product p-2" />
                    <img src={Cross} alt="" className="light_gray edit_product  p-2" />
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
          )}
        </CCardBody>
      </CCard>
    </div>
  )
}
