import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { getData } from 'src/services/http.service.js'
import Constants from 'src/services/constant.js'

import { simpleDate } from 'src/lib/DateTime.js'

export default function StockRequest() {
  useEffect(() => {
    getBackorders()
  }, [])

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

            <Link className="col" to={`/backorder/detail/?id=${p_id}`}></Link>

            <div className="col-3 p-0">
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

  const getBackorders = () => {
    getData(Constants.END_POINT.BACKORDER, {
      params: {
        statuses: 'A,O',
        page: 1,
        items_per_page: 15,
      },
    })
      .then((result) => {
        if (result?.backorder) {
          setRequests(result)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      {requests?.backorder && Object.keys(requests?.backorder).length ? renderBackorder() : null}
    </div>
  )
}
