import React, { useState, useEffect } from 'react'

import image from '../../assets/images/image 35.png'
import iconBadge from '../../assets/icons/check-circle.png'
import { Accordion } from 'react-bootstrap'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from 'src/services/http.service'
import Constants from 'src/services/constant'

export default function Wholesalers() {
  const dispatch = useDispatch()
  const AllWholesalers = useSelector((state) => state.Wholesalers)
  const selectedWholesalers = useSelector((state) => state.selectedWholesalers)

  const [pageNo, setPageNo] = useState(1)
  const [totalPages, setTotalPages] = useState(null)
  const itemsPerPage = 12

  const renderPagination = () => {
    let a = []
    for (let i = pageNo - 2; i <= pageNo + 2; i++) {
      if (i <= totalPages && i > 0) {
        a.push(
          <div
            key={i}
            onClick={() => setPageNo(i)}
            className={AllWholesalers?.params?.page === i ? 'feature feature-active' : 'feature'}
          >
            {i}
          </div>,
        )
      }
    }
    return a
  }

  useEffect(() => {
    getWholesalers()
  }, [pageNo])

  const getWholesalers = () => {
    getData(Constants.END_POINT.GET_WHOLESALERS, {
      params: {
        is_master_vendor: 1,
        page: pageNo,
        items_per_page: itemsPerPage,
        show_companies_force: 1,
        status: 'A',
      },
    })
      .then((result) => {
        dispatch({
          type: 'set',
          Wholesalers: result,
        })
        let len = result?.params?.total_items / result?.params?.items_per_page
        setTotalPages(Math.ceil(len))
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const renderWholesalers = () => {
    return AllWholesalers.vendors.map((item, i) => (
      <div
        key={i}
        onClick={() => selectWholesaler(item.company_id, item)}
        className="col-md-2 col-12 mb-2"
      >
        <div className={selectedWholesalers?.[item.company_id] ? 'sel_card active' : 'sel_card'}>
          <div className="pro_img">
            <img src={item?.logo?.theme?.image?.https_image_path} alt="" width="37px" />
            <img src={iconBadge} className="iconbadge" alt="" />
          </div>
          <p className="heading5 text_medium text-center">{item.company}</p>
        </div>
      </div>
    ))
  }
  const selectWholesaler = (Wholesaler_id, item) => {
    if (selectedWholesalers?.[Wholesaler_id]) {
      delete selectedWholesalers?.[Wholesaler_id]
      dispatch({
        type: 'set',
        selectedWholesalers: { ...selectedWholesalers },
      })
    } else {
      dispatch({
        type: 'set',
        selectedWholesalers: { ...selectedWholesalers, [Wholesaler_id]: item },
      })
    }
  }
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <p className="heading3 text_medium">Select Wholesalers</p>
        </Accordion.Header>
        <Accordion.Body className="py-0">
          <CCard className=" box_items">
            <CCardBody className="py-0">
              <CRow>
                <div className="row p-1 m-0 mb-2">
                  {AllWholesalers?.vendors?.length && renderWholesalers()}
                </div>
                <div className="row m-0">
                  <div className="col-md-4 col-12">
                    <p className="text-dark">
                      Items per page:{' '}
                      <span className="text-secondary">
                        {AllWholesalers?.params?.items_per_page}
                      </span>
                    </p>
                    <p className="text-dark">
                      Total Items:{' '}
                      <span className="text-secondary">{AllWholesalers?.params?.total_items}</span>
                    </p>
                  </div>
                  <div className="col-md-8 col-12">
                    {/* <div className="d-flex flex-wrap ">
                      <div className="feature paragraph3">PREV</div>
                      <div className="feature">&lt;</div>
                      <div
                        onClick={() => setPageNo(1)}
                        className={
                          AllWholesalers?.params?.page === 1 ? 'feature feature-active' : 'feature'
                        }
                      >
                        1
                      </div>
                      <div
                        onClick={() => setPageNo(2)}
                        className={
                          AllWholesalers?.params?.page === 2 ? 'feature feature-active' : 'feature'
                        }
                      >
                        2
                      </div>
                      <div
                        onClick={() => setPageNo(3)}
                        className={
                          AllWholesalers?.params?.page === 3 ? 'feature feature-active' : 'feature'
                        }
                      >
                        3
                      </div>
                      <div
                        onClick={() => setPageNo(4)}
                        className={
                          AllWholesalers?.params?.page === 4 ? 'feature feature-active' : 'feature'
                        }
                      >
                        4
                      </div>
                      <div className="feature">&#62;</div>
                      <div className="feature paragraph3">NEXT</div>
                    </div> */}
                    <div className="d-flex flex-wrap ">
                      <div className="feature paragraph3" onClick={() => setPageNo(1)}>
                        PREV
                      </div>
                      <div
                        onClick={() => {
                          if (pageNo > 1) {
                            setPageNo(pageNo - 1)
                          }
                        }}
                        className="feature"
                      >
                        &lt;
                      </div>
                      {totalPages && renderPagination()}
                      <div className="feature" onClick={() => setPageNo(pageNo + 1)}>
                        &#62;
                      </div>
                      <div className="feature paragraph3" onClick={() => setPageNo(totalPages)}>
                        NEXT
                      </div>
                    </div>
                  </div>
                </div>
              </CRow>
            </CCardBody>
          </CCard>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
