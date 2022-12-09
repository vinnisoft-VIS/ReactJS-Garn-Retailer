import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import { useSearchParams } from 'react-router-dom'
import { Form } from 'react-bootstrap'

import { getData } from 'src/services/http.service.js'
import Constants from 'src/services/constant.js'

import { simpleDate } from 'src/lib/DateTime.js'

export default function StockRequest() {
  const [searchParams, setSearchParams] = useSearchParams()
  let id = searchParams.get('id')
  useEffect(() => {
    getBackorder()
  }, [id])

  const [requests, setRequests] = useState([])

  const renderBackorder = () => {
    return Object.keys(requests?.backorder).map((p_id, i) => (
      <CCard className="my-2" key={i}>
        <CCardBody className="p-2">
          <div className="row text-uppercase paragraph3">
            <div className="col-8 row">
              <div className="col">
                WHOLESALER NAME&PHONE
                <div className="paragraph2 text_bold text-black">
                  {requests?.backorder[p_id]?.user_data?.company}
                </div>
                <div className="paragraph2 text_bold text-black">
                  {' '}
                  {requests?.backorder[p_id]?.user_data?.phone}
                </div>
              </div>
              <div className="col">
                ADDRESS
                <div className="paragraph2 text_bold text-black">
                  {' '}
                  {requests?.backorder[p_id]?.user_data?.address}
                </div>
              </div>
              <div className="col">
                PURCHASING DATE
                <div className="paragraph2 text_bold text-black">
                  {' '}
                  {requests?.backorder[p_id]?.date && simpleDate(requests?.backorder[p_id]?.date)}
                </div>
              </div>
            </div>
            <div className="col-3 offset-1 p-0">
              <Form.Select aria-label="Default  select example" className="qr_button p-2">
                <option> Processing</option>
                <option value="Pending">Pending</option>
                <option value="On Client">On Client</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Ready to Dispatch">Ready to Dispatch</option>
              </Form.Select>
            </div>
          </div>
        </CCardBody>
      </CCard>
    ))
  }

  const getBackorder = () => {
    getData(Constants.END_POINT.BACKORDER + '/' + id, {
      params: {},
    })
      .then((result) => {
        console.log(result)
        setRequests(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const renderProducts = () => {
    return Object.keys(requests?.product_data).map((p_id, i) => (
      <CRow key={i} className="mb-2 p-2">
        <CCol md={5}>
          <CRow className="">
            <CCol md={3}>
              <div className="stock_bg rounded p-1">
                <img
                  src={requests?.product_data[p_id]?.image_pairs?.detailed?.https_image_path}
                  alt=""
                  className="w-50  m-auto d-block"
                />
              </div>
            </CCol>
            <CCol md={9}>
              <p className="">{requests?.product_data[p_id]?.product}</p>
            </CCol>
          </CRow>
        </CCol>
        <CCol md={7}>
          <CRow>
            <CCol md={2}>
              <p className="heading6 text_semibold">
                {/* {item?.variation_features?.['557']?.variant || 0} */}
              </p>
            </CCol>
            <CCol md={2}>
              <p className="heading6 text_semibold">
                {/* {item?.variation_features?.['548']?.variant || 0} */}
              </p>
            </CCol>
            <CCol md={2}>
              <p className="heading6 text_semibold">{requests?.product_data[p_id]?.amount}</p>
            </CCol>
            <CCol md={3}>
              <p className="heading6 text_semibold">{requests?.total_system_weight}</p>
            </CCol>
            <CCol md={3}>
              <p className="heading6 text_semibold ">
                {requests?.product_data[p_id]?.actual_weight}
              </p>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    ))
  }
  return (
    <div>
      <CCard className="my-2">
        <CCardBody className="p-2">
          <div className="row text-uppercase paragraph3">
            <div className="col-8 row">
              <div className="col">
                ORDER NO.
                <div className="paragraph2 text_bold text-black">{requests?.backorder_id}</div>
              </div>
              <div className="col">
                REQUESTED DATE
                <div className="paragraph2 text_bold text-black">
                  {requests?.date && simpleDate(requests?.date)}
                </div>
              </div>
              <div className="col">
                PICK UP DATE
                <div className="paragraph2 text_bold text-black">
                  {requests?.pickup_date && simpleDate(requests?.pickup_date)}
                </div>
              </div>
            </div>
          </div>
        </CCardBody>
      </CCard>
      <div className="row mt-4">
        <div className="col-md-5 col-12">
          <p className="text_medium">PRODUCTS</p>
        </div>
        <div className="col-md-7 col-12">
          <div className="row">
            <div className="col-md-2">
              <p className="text_medium">WEIGHT</p>
            </div>
            <div className="col-md-2">
              <p className="text_medium">SIZE</p>
            </div>
            <div className="col-md-2">
              <p className="text_medium">QUANTITY</p>
            </div>
            <div className="col-md-3">
              <p className="text_medium">SYSTEM WEIGHT</p>
            </div>
            <div className="col-md-3">
              <p className="text_medium">ACTUAL WEIGHT</p>
            </div>
          </div>
        </div>
      </div>
      <CCard className="">
        <CCardBody className="p-0">{requests?.product_data && renderProducts()}</CCardBody>
      </CCard>
      {requests?.backorder && Object.keys(requests?.backorder).length ? renderBackorder() : null}
    </div>
  )
}
