import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import './RequestStock.css'
import Necklacepro from '../../assets/images/necklace_pro.png'
export default function RequestStock() {
  return (
    <div>
      <CCard className="mb-4 box_items request_card">
        <CCardBody>
          <div className="container">
            <CRow>
              <CCol md={3}>
                <p className="heading3 display_small text_medium">ORDER №</p>
                <p className="heading4  text_semibold">437618</p>
              </CCol>
              <CCol md={3}>
                <p className="heading3 display_small text_medium">CONTACT INFO</p>
                <p className="heading4  text_semibold">
                  Orion Jewerly
                  <br />
                  +90 900 800 70 00
                </p>
              </CCol>
              <CCol md={3}>
                <p className="heading3 display_small text_medium">PURCHASING DATE</p>
                <p className="heading4  text_semibold">21 JUN 2022</p>
              </CCol>
              <CCol md={3}>
                <p className="heading3 display_small text_medium">PICKUP DATE</p>
                <p className="heading4  text_semibold">22 JUN 2022</p>
              </CCol>
            </CRow>
          </div>
        </CCardBody>
      </CCard>
      <div className="product_bg mb-2 p-2">
        <p className="text_medium text-center">Some products from your order are not in stock.</p>
      </div>
      <div className="row m-0">
        <div className="col-md-6 col-12">
          <p className="text_medium">PRODUCTS</p>
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
            <div className="col-md-3">
              <p className="text_medium">AVAILABLE STOCK</p>
            </div>
          </div>
        </div>
      </div>
      <CCard className="mb-4 box_items">
        <CCardBody className="border-bottom">
          <div className="container">
            <CRow className="mb-2 p-2">
              <CCol md={6}>
                <CRow>
                  <CCol md={3} className="product_bg">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </CCol>
                  <CCol md={9}>
                    <p className="heading3 text_medium">ORION - Bold Herringbone Chain Necklace</p>
                  </CCol>
                </CRow>
              </CCol>
              <CCol md={6}>
                <CRow>
                  <CCol md={3}>
                    <p className="heading3 text_semibold">3.8 Gram</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading3 text_semibold">45 Cm</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading3 text_semibold">200 Pcs</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading3 text_semibold text-danger">50 Pcs</p>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
          </div>
        </CCardBody>
        <CCardBody className="border-bottom">
          <div className="container">
            <CRow className="mb-2 p-2">
              <CCol md={6}>
                <CRow>
                  <CCol md={3} className="product_bg">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </CCol>
                  <CCol md={9}>
                    <p className="heading3 text_medium">ORION - Bold Chain Necklace</p>
                  </CCol>
                </CRow>
              </CCol>
              <CCol md={6}>
                <CRow>
                  <CCol md={3}>
                    <p className="heading3 text_semibold">3.8 Gram</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading3 text_semibold">45 Cm</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading3 text_semibold">200 Pcs</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading3 text_semibold ">200 Pcs</p>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
          </div>
        </CCardBody>
        <CCardBody className="border-bottom">
          <div className="container">
            <CRow className="mb-2 p-2">
              <CCol md={6}>
                <CRow>
                  <CCol md={3} className="product_bg">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </CCol>
                  <CCol md={9}>
                    <p className="heading3 text_medium">ORION - Baby Curb Chain Necklace</p>
                  </CCol>
                </CRow>
              </CCol>
              <CCol md={6}>
                <CRow>
                  <CCol md={3}>
                    <p className="heading3 text_semibold">3.8 Gram</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading3 text_semibold">45 Cm</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading3 text_semibold">200 Pcs</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading3 text_semibold">400 Pcs</p>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
          </div>
        </CCardBody>
        <CCardBody className="border-bottom">
          <div className="container">
            <CRow className="mb-2 p-2">
              <CCol md={6}>
                <CRow>
                  <CCol md={3} className="product_bg">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </CCol>
                  <CCol md={9}>
                    <p className="heading3 text_medium">ORION - Linked Rings Necklace</p>
                  </CCol>
                </CRow>
              </CCol>
              <CCol md={6}>
                <CRow>
                  <CCol md={3}>
                    <p className="heading3 text_semibold">3.8 Gram</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading3 text_semibold">45 Cm</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading3 text_semibold">200 Pcs</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading3 text_semibold text-danger">50 Pcs</p>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
          </div>
        </CCardBody>
        <CCardBody className="border-bottom">
          <div className="container">
            <CRow className="mb-2 p-2">
              <CCol md={8}></CCol>
              <CCol md={4}>
                <CRow>
                  <CCol xs={8}>
                    <p className="heading3 text_semibold text-center">Total quantity:</p>
                  </CCol>
                  <CCol xs={4}>
                    <p className="heading3 text_semibold">600 Pcs</p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs={8}>
                    <p className="heading3 text_semibold text-center">Total weight:</p>
                  </CCol>
                  <CCol xs={4}>
                    <p className="heading3 text_semibold">1800 Gram</p>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
          </div>
        </CCardBody>
      </CCard>
      <div className="product_bg mb-2 p-2">
        <p className="text_medium text-center">
          Some products from your order are not in stock. Please use the form below to backorder
          them.
        </p>
      </div>
      <div className="row m-0">
        <div className="col-md-6 col-12">
          <p className="text_medium">PRODUCTS (NOT IN STOCK) </p>
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
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
      <CCard className="mb-4 box_items">
        <CCardBody className="border-bottom">
          <div className="container">
            <CRow className="mb-2 p-2">
              <CCol md={6}>
                <CRow>
                  <CCol md={3} className="product_bg">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </CCol>
                  <CCol md={9}>
                    <p className="heading3 text_medium">ORION - Bold Herringbone Chain Necklace</p>
                  </CCol>
                </CRow>
              </CCol>
              <CCol md={6}>
                <CRow>
                  <CCol md={3}>
                    <p className="heading3 text_semibold">3.8 Gram</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading3 text_semibold">45 Cm</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading3 text_semibold">200 Pcs</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading3 text_semibold text-danger">50 Pcs</p>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
          </div>
        </CCardBody>
        <CCardBody className="border-bottom">
          <div className="container">
            <div className="d-flex">
              <form action="#">
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label text_medium">Make request public</label>
                </div>
              </form>
            </div>
          </div>
        </CCardBody>
        <CCardBody className="border-bottom">
          <div className="container">
            <CRow className="mb-2 p-2">
              <CCol md={6}>
                <CRow>
                  <CCol md={3} className="product_bg">
                    <img src={Necklacepro} alt="" className="w-50  m-auto d-block" />
                  </CCol>
                  <CCol md={9}>
                    <p className="heading3 text_medium">ORION - Bold Herringbone Chain Necklace</p>
                  </CCol>
                </CRow>
              </CCol>
              <CCol md={6}>
                <CRow>
                  <CCol md={3}>
                    <p className="heading3 text_semibold">3.8 Gram</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading3 text_semibold">45 Cm</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading3 text_semibold">200 Pcs</p>
                  </CCol>
                  <CCol md={3}>
                    <p className="heading3 text_semibold ">200 Pcs</p>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
          </div>
        </CCardBody>
        <CCardBody className="border-bottom">
          <div className="container">
            <div className="d-flex">
              <form action="#">
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label text_medium">Make request public</label>
                </div>
              </form>
            </div>
          </div>
        </CCardBody>
        <CCardBody className="border-bottom">
          <div className="container">
            <div className="row m-0 justify-content-center">
              <div className="large-btn1 me-4">Proceed without backorder</div>
              <div className="large-btn ms-4">Place backorder</div>
            </div>
          </div>
        </CCardBody>
      </CCard>
    </div>
  )
}
