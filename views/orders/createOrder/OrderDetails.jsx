import React from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import Scanner from 'src/assets/icons/scanner.png'
import { Form } from 'react-bootstrap'
export default function OrderDetails() {
  return (
    <CCard className="mb-4 box_items rounded">
      <CCardBody>
        <CRow>
          <CCol xs={8}>
            <CRow>
              <CCol xs={2}>
                <p className="top_subheading">ORDER NO:</p>
                <p className="heading6  text_semibold">437618</p>
              </CCol>
              <CCol xs={4}>
                <p className="top_subheading">RETAILER NAME &PHONE:</p>
                <p className="heading6  text_semibold">
                  RETAILER NAME:
                  <br />
                  (406) 555-0120
                </p>
              </CCol>
              <CCol xs={3}>
                <p className="top_subheading">ADDRESS:</p>
                <p className="heading6  text_semibold">WHOLESALE NAME</p>
              </CCol>
              <CCol xs={3}>
                <p className="top_subheading">PURCHASING DATE:</p>
                <p className="heading6  text_semibold">10/12/2021</p>
              </CCol>
            </CRow>
          </CCol>
          <CCol xs={4}>
            <CRow className="align-items-center justify-content-end">
              <CCol xs={6}>
                <div className="qr_button heading6 light_gray p-2 text-secondary">
                  <img src={Scanner} alt="" />
                  &nbsp; Get QR Code
                </div>
              </CCol>
              <CCol xs={5}>
                <Form.Select aria-label="Default  select example" className="qr_button p-2">
                  <option>Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="On Client">On Client</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Ready to Dispatch">Ready to Dispatch</option>
                </Form.Select>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}
