import React, { useState, useEffect } from 'react'

import image from '../../assets/images/image 35.png'
import iconBadge from '../../assets/icons/check-circle.png'
import { Accordion } from 'react-bootstrap'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from 'src/services/http.service'
import Constants from 'src/services/constant'

export default function ProductTypes() {
  const [pageNo, setPageNo] = useState(1)
  const [totalPages, setTotalPages] = useState(null)
  const itemsPerPage = 12

  useEffect(() => {
    getProductTypes()
  }, [pageNo])

  const dispatch = useDispatch()
  const masterProducts = useSelector((state) => state.masterProducts)
  const selectedProducts = useSelector((state) => state.selectedProducts)

  const getProductTypes = () => {
    getData(Constants.END_POINT.GET_WHOLESALERS_PRODUCTS, {
      params: {
        user_id: 73,
        page: pageNo,
        items_per_page: itemsPerPage,
        show_master_products_only: 1,
        product_type: 'P',
      },
    })
      .then((result) => {
        dispatch({
          type: 'set',
          masterProducts: result,
        })
        let len = result?.params?.total_items / result?.params?.items_per_page
        setTotalPages(Math.ceil(len))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const renderPagination = () => {
    let a = []
    for (let i = pageNo - 2; i <= pageNo + 2; i++) {
      if (i <= totalPages && i > 0) {
        a.push(
          <div
            key={i}
            onClick={() => setPageNo(i)}
            className={masterProducts?.params?.page === i ? 'feature feature-active' : 'feature'}
          >
            {i}
          </div>,
        )
      }
    }
    return a
  }
  const renderproducts = () => {
    return masterProducts.products.map((item, i) => (
      <div key={i} className="col-md-2 col-12 mb-2">
        <div
          onClick={() => selectProduct(item.product_id, item)}
          className={
            selectedProducts?.[item.product_id] ? 'sel_card boxItem1 active' : 'sel_card boxItem1 '
          }
        >
          <div className="pro_img">
            <img src={item?.main_pair?.detailed?.https_image_path} alt="" width="37px" />
            <img src={iconBadge} className="iconbadge" alt="" />
            {/* <div className="nuber_list">100</div> */}
          </div>
          <p className="heading5 text_medium text-center">{item?.product.slice(0, 12)}</p>
        </div>
      </div>
    ))
  }

  const selectProduct = (id, item) => {
    if (selectedProducts?.[id]) {
      delete selectedProducts?.[id]
      dispatch({
        type: 'set',
        selectedProducts: { ...selectedProducts },
      })
    } else {
      dispatch({
        type: 'set',
        selectedProducts: { ...selectedProducts, [id]: item },
      })
    }
  }

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <p className="heading3 text_medium">Please Select Your Product Type</p>
        </Accordion.Header>
        <Accordion.Body className="py-0">
          <CCard className="box_items">
            <CCardBody className="py-0">
              <CRow>
                <div className="row p-1 m-0 mb-2">
                  {masterProducts?.products?.length && renderproducts()}
                </div>
                <div className="row m-0">
                  <div className="col-md-4 col-12">
                    <p className="text-dark">
                      Items per page:{' '}
                      <span className="text-secondary">
                        {masterProducts?.params?.items_per_page}
                      </span>
                    </p>
                    <p className="text-dark">
                      Total Items:{' '}
                      <span className="text-secondary">{masterProducts?.params?.total_items}</span>
                    </p>
                  </div>
                  <div className="col-md-8 col-12">
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
