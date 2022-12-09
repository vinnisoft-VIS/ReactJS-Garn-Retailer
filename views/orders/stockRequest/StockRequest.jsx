import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import { Form } from 'react-bootstrap'

import { getData } from 'src/services/http.service.js'
import Constants from 'src/services/constant.js'

import { simpleDate } from 'src/lib/DateTime.js'

export default function StockRequest() {
  useEffect(() => {
    getStockRequests()
  }, [])

  const [requests, setRequests] = useState([])

  const renderStockRequests = () => {
    return Object.keys(requests?.stock_requests).map((p_id, i) => (
      <CCard className="my-2" key={i}>
        <CCardBody className="p-2">
          <div className="row text-uppercase paragraph3">
            <div className="col-8 row">
              <div className="col">
                WHOLESALER NAME&PHONE
                <div className="paragraph2 text_bold text-black">
                  {requests?.stock_requests[p_id]?.user_data?.company}
                </div>
                <div className="paragraph2 text_bold text-black">
                  {' '}
                  {requests?.stock_requests[p_id]?.user_data?.phone}
                </div>
              </div>
              <div className="col">
                ADDRESS
                <div className="paragraph2 text_bold text-black">
                  {' '}
                  {requests?.stock_requests[p_id]?.user_data?.address}
                </div>
              </div>
              <div className="col">
                PURCHASING DATE
                <div className="paragraph2 text_bold text-black">
                  {' '}
                  {requests?.stock_requests[p_id]?.date &&
                    simpleDate(requests?.stock_requests[p_id]?.date)}
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

  const getStockRequests = () => {
    getData(Constants.END_POINT.STOCK_REQUEST, { params: {} })
      .then((result) => {
        if (result?.stock_requests) {
          setRequests(result)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      {requests?.stock_requests && Object.keys(requests?.stock_requests).length
        ? renderStockRequests()
        : null}
    </div>
  )
}
