import React, { useState, useEffect } from 'react'
import { Link, useNavigate, Route, Navigate, Routes } from 'react-router-dom'
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
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { ReactComponent as Logo } from 'src/assets/icons/logo.svg'

import { postData } from 'src/services/http.service'
import Constants from 'src/services/constant'
import { authenticate, isAuthenticated } from 'src/services/auth'

const Login = () => {
  let navigate = useNavigate()
  const [values, setValues] = useState({
    email: null,
    password: null,
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (name, e) => {
    setValues({ ...values, [name]: e.target.value })
  }

  const submit = (e) => {
    e.preventDefault()
    if (values.email && values.password) {
      setLoading(true)
      postData(Constants.END_POINT.LOGIN, { user_login: values.email, password: values.password })
        .then((result) => {
          console.log(result)
          // alert(result.message)
          if (result.success) {
            authenticate(result.vendor_data, () => {
              performRedirect()
            })
          } else {
            alert(result.message)
            // authenticate({ user_id: 73 }, () => {
            //   performRedirect()
            // })
          }
          setLoading(false)
        })
        .catch((err) => {
          console.log(err)
          setLoading(false)
        })
    }
  }
  const performRedirect = () => {
    if (isAuthenticated()) {
      navigate('/dashboard')
    }
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol xs={12} md={9} className="px-2 px-md-5">
            <CCardGroup>
              <CCard className="px-4 py-5 rounded">
                <CCardBody>
                  <CForm onSubmit={(e) => submit(e)}>
                    <div className="d-flex justify-content-center mb-4">
                      <Logo />
                    </div>
                    <p className="text-dark h5 text-center mb-4">
                      Please Sign In or Create an Account
                    </p>
                    <CInputGroup className="mb-1">
                      <CFormLabel htmlFor="nf-email" className="text-medium-emphasis">
                        Email
                      </CFormLabel>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        required={true}
                        value={values.email}
                        type="email"
                        id="nf-email"
                        name="nf-email"
                        autoComplete="email"
                        onChange={(e) => handleChange('email', e)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-1">
                      <CFormLabel htmlFor="nf-password" className="text-medium-emphasis">
                        Password
                      </CFormLabel>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        required={true}
                        value={values.password}
                        type="password"
                        id="nf-password"
                        name="nf-password"
                        autoComplete="current-password"
                        onChange={(e) => handleChange('password', e)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <Link
                        to="/resetpassword"
                        className="text-medium-emphasis text-decoration-none"
                      >
                        Forgot Password?
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
                          {loading ? 'Login...' : 'Login'}
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

export default Login
