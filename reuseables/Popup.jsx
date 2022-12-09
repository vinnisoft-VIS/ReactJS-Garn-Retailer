import React, { useState, useEffect } from 'react'
import { CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react'

const Popup = (props) => {
  return (
    <>
      <CModal size={props?.size || 'lg'} visible={props.show} onClose={props.onClose}>
        {props?.title ? (
          <CModalHeader>
            <CModalTitle>{props?.title}</CModalTitle>
          </CModalHeader>
        ) : null}
        <CModalBody>{props?.children}</CModalBody>
      </CModal>
    </>
  )
}

export default Popup
