import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormLabel,
} from '@coreui/react'
import { ReactComponent as Logo } from 'src/assets/icons/logo.svg'

const ForgotPassword = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} className="px-5">
            <CCardGroup>
              <CCard className="px-4 py-5 rounded">
                <CCardBody>
                  <CForm>
                    <div className="d-flex justify-content-center mb-4">
                      <Logo />
                    </div>
                    <p className="text-dark h5 text-center mb-4">Reset Password</p>
                    <CInputGroup className="mb-1">
                      <CFormLabel htmlFor="nf-email" className="text-medium-emphasis">
                        Email
                      </CFormLabel>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        required={true}
                        type="email"
                        id="nf-email"
                        name="nf-email"
                        autoComplete="email"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <Link to="/login" className="text-medium-emphasis text-decoration-none">
                        Sign In
                      </Link>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <Link to="/register" className="text-medium-emphasis text-decoration-none">
                        Create an Account
                      </Link>
                    </CInputGroup>
                    <CRow>
                      <CCol xs={12}>
                        <CButton
                          style={{ backgroundColor: '#212529' }}
                          color="dark"
                          className="w-100 mb-3"
                          type="submit"
                        >
                          Submit
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default ForgotPassword
