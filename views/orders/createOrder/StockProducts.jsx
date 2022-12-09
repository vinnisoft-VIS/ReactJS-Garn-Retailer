import React from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import Necklacepro from 'src/assets/images/img1.png'
import { Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

export default function StockProducts() {
  const dispatch = useDispatch()
  const cartResponse = useSelector((state) => state.cartResponse)

  const renderWholeSalers = () => {
    return Object.keys(cartResponse?.stock_request_info).map((w_id, i) => (
      <div key={i}>{renderProducts(w_id)}</div>
    ))
  }

  const renderProducts = (w_id) => {
    return cartResponse?.stock_request_info?.[w_id]?.products.map((item, i) => (
      <CRow key={i} className="mb-2 p-2 border-bottom">
        <CCol md={5}>
          <CRow className="">
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
        </CCol>
        <CCol md={7}>
          <CRow>
            <CCol md={3}>
              <p className="heading6 text_semibold">{item?.variation_features?.['557']?.variant}</p>
            </CCol>
            <CCol md={3}>
              <p className="heading6 text_semibold">{item?.variation_features?.['548']?.variant}</p>
            </CCol>
            <CCol md={3}>
              <p className="heading6 text_semibold">
                {cartResponse?.stock_request?.products[item?.product_id]?.quantity} Pcs
              </p>
            </CCol>
            <CCol md={3}>
              <p className="heading6 text_semibold ">
                {cartResponse?.stock_request?.products[item?.product_id]?.available_stock}
              </p>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    ))
  }
  return (
    <div>
      <div className="row m-0">
        <div className="col-md-5 col-12">
          <p className="text_medium">PRODUCTS</p>
        </div>
        <div className="col-md-7 col-12">
          <div className="row">
            <div className="col-md-3">
              <p className="text_medium">WEIGHT</p>
            </div>
            <div className="col-md-2">
              <p className="text_medium">SIZE</p>
            </div>
            <div className="col-md-3">
              <p className="text_medium">QUANTITY</p>
            </div>
            <div className="col-md-4">
              <p className="text_medium">AVAILABLE STOCK</p>
            </div>
          </div>
        </div>
      </div>
      <CCard className=" mb-4 box_items">
        <CCardBody>
          {cartResponse?.stock_request_info &&
          Object.keys(cartResponse?.stock_request_info)?.length ? (
            renderWholeSalers()
          ) : (
            <CRow className="mb-2 p-2 border-bottom">
              <CCol md={5}>
                <CRow className="">
                  <CCol md={3}>
                    <div className="stock_bg rounded p-1">
                      <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                    </div>
                  </CCol>
                  <CCol md={9}>
                    <p className="">PROCYON- Bold Herringbone Chain Necklace</p>
                  </CCol>
                </CRow>
              </CCol>
              <CCol md={7}>
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
                  <CCol md={3}>
                    <p className="heading6 text_semibold ">200 Gram</p>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
          )}
          <CRow>
            <CCol xs={8}></CCol>
            <CCol xs={4}>
              <p className=" text_semibold text-right">
                Total Quantity:{' '}
                <span className="heading6 text_semibold">
                  {cartResponse?.stock_request_info?.['90']?.user_data?.total_amount} Pcs
                </span>
              </p>
              <p className=" text_semibold text-right">
                Total Weight:{' '}
                <span className="heading6 text_semibold">
                  {cartResponse?.stock_request_info?.['90']?.user_data?.total_system_weight} Gram
                </span>
              </p>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  )
}
