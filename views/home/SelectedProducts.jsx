import React, { useState, useEffect } from 'react'
import { Accordion } from 'react-bootstrap'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'

export default function SelectedProducts() {
  const dispatch = useDispatch()
  const selectedProducts = useSelector((state) => state.selectedProducts)

  const renderSelectedProducts = () => {
    return Object.keys(selectedProducts).map((id, i) => (
      <div key={i} className="left_b mb-2">
        <div className="main d-flex">
          <p className="m-0">{selectedProducts[id]?.product.slice(0, 8)} </p>
          <button onClick={() => removeProduct(id)} className="border-0 bg-transparent">
            &times;
          </button>
        </div>
      </div>
    ))
  }

  const removeProduct = (id) => {
    if (selectedProducts?.[id]) {
      delete selectedProducts?.[id]
      dispatch({
        type: 'set',
        selectedProducts: { ...selectedProducts },
      })
    }
  }

  const Reset = () => {
    dispatch({
      type: 'set',
      selectedProducts: {},
    })
  }
  return (
    <div>
      {Object.keys(selectedProducts)?.length ? (
        <CCard className="mb-4 box_items">
          <CCardBody>
            <CRow>
              <CCol xs={12} className="d-flex justify-content-between flex-wrap">
                <p className="heading3 text_medium">Selected Items</p>
                <div className="paragraph2 mb-2" onClick={() => Reset()}>
                  Reset
                </div>
              </CCol>
              <div className="check_ic d-flex">{renderSelectedProducts()}</div>
            </CRow>
          </CCardBody>
        </CCard>
      ) : null}
    </div>
  )
}
