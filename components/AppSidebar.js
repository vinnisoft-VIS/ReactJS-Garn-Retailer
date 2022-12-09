import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from 'src/assets/brand/logo-negative'
import logo from '../assets/icons/Logo.png'
import logoSmall from '../assets/icons/LogoSmall.png'
import leftArrow from '../assets/icons/arrow-left-rectangle.png'
import rightArrow from '../assets/icons/arrow-right-rectangle.png'
import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      style={{ backgroundColor: '#000' }}
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand
        style={{
          width: '90%',
          margin: '2px auto',
        }}
        className="d-none d-md-flex justify-content-around"
        to="/"
      >
        <img src={logo} alt="" className="sidebar-brand-full" height={35} />
        <img src={logoSmall} alt="" className="sidebar-brand-narrow" height={35} />
        {unfoldable ? (
          <img
            className="sidebar-brand-full"
            src={rightArrow}
            onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
          />
        ) : (
          <img
            src={leftArrow}
            onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
          />
        )}
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
