import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'

export default function Products() {
  return (
    <div>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol xs={12}>
              <div className="d-flex justify-content-between">
                <div className="paragraph1 text_bold text-black">Summary of all orders</div>
                <div className="top-btn bg-main text_bold text-black ">Add Products</div>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <div className="row p-2 text-uppercase mt-2 px-4 paragraph3">
        <div className="col-7 ">Products</div>
        <div className="col-5 row">
          <div className="col">Weight</div>
          <div className="col">Size</div>
          <div className="col">Quantity(Pcs)</div>
        </div>
      </div>
      <CCard>
        <CCardBody className="p-3">
          <CRow>
            <CCol xs={12}>
              <div className="row p-2 text-black text_bold text-uppercase paragraph3">
                <div className="col-7 ">Products</div>
                <div className="col-5 row">
                  <div className="col">Weight</div>
                  <div className="col">Size</div>
                  <div className="col">Quantity(Pcs)</div>
                </div>
              </div>
              <div className="row p-2 text-black text_bold text-uppercase paragraph3">
                <div className="col-7 ">Products</div>
                <div className="col-5 row">
                  <div className="col">Weight</div>
                  <div className="col">Size</div>
                  <div className="col">Quantity(Pcs)</div>
                </div>
              </div>
              <div className="row p-2 text-black text_bold text-uppercase paragraph3">
                <div className="col-7 ">Products</div>
                <div className="col-5 row">
                  <div className="col">Weight</div>
                  <div className="col">Size</div>
                  <div className="col">Quantity(Pcs)</div>
                </div>
              </div>
              <div className="row p-2 text-black text_bold text-uppercase paragraph3">
                <div className="col-7 ">Products</div>
                <div className="col-5 row">
                  <div className="col">Weight</div>
                  <div className="col">Size</div>
                  <div className="col">Quantity(Pcs)</div>
                </div>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  )
}
