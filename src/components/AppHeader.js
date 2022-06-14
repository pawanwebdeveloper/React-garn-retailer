import React from 'react'
// import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  // CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  // CNavLink,
  // CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

// import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'
import calendar from 'src/assets/icons/calendar.png'
import download from 'src/assets/icons/download.png'
import notification from 'src/assets/icons/notification.png'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" style={{ backgroundColor: '#F7F7F7', borderBottom: 'none' }}>
      <CContainer fluid>
        {!sidebarShow ? (
          <CHeaderToggler
            className="ps-1"
            onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          >
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
        ) : (
          <CHeaderToggler
            className="d-block d-md-none"
            onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          >
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
        )}
        <div className="d-flex justify-content-between flex-wrap w-100">
          <div>
            <span className="display_small">
              {' '}
              Welcome, <span className="text_semibold">M. Salim</span>{' '}
            </span>
            <p className="paragraph1">See your activites and quick action for forward.</p>
          </div>
          <div className="d-flex">
            <div className="top-btn paragraph2 mx-2">
              Jul 2022(GMT +07) <img src={calendar} alt="" />
            </div>
            <div className="top-btn paragraph2" style={{ backgroundColor: '#fff' }}>
              Export <img src={download} alt="" />
            </div>
          </div>

          <div className="d-flex">
            <div
              style={{
                borderRadius: '50%',
                backgroundColor: '#fff',
                width: '49px',
                height: '49px',
                padding: '10px 13px',
              }}
            >
              <img src={notification} alt="" />
            </div>

            <CHeaderNav className="ms-3">
              <AppHeaderDropdown />
            </CHeaderNav>
          </div>
        </div>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
