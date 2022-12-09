import React, { useEffect, useState, useCallback } from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from 'src/services/http.service'
import Constants from 'src/services/constant'

import iconBadge from '../../assets/icons/check-circle.png'

export default function Products() {
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
            className={allProducts?.params?.page === i ? 'feature feature-active' : 'feature'}
          >
            {i}
          </div>,
        )
      }
    }
    return a
  }

  const dispatch = useDispatch()
  const allProducts = useSelector((state) => state.allProducts)
  const productId = useSelector((state) => state.productId)
  const pageNo = useSelector((state) => state.productPageNo)
  console.log(pageNo)

  useEffect(() => {
    let len = allProducts?.params?.total_items / allProducts?.params?.items_per_page
    setTotalPages(Math.ceil(len))
  }, [allProducts])

  const getProducts = () => {
    getData(Constants.END_POINT.GET_WHOLESALERS_PRODUCTS, {
      params: {
        page: pageNo,
        items_per_page: itemsPerPage,
      },
    })
      .then((result) => {
        dispatch({
          type: 'set',
          allProducts: result,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const renderproducts = () => {
    return allProducts.products.map((item, i) => (
      <div key={i} className="col-md-2 col-12 mb-2">
        <div
          onClick={() => selectProduct(item.product_id, item)}
          className={
            productId === item.product_id ? 'sel_card boxItem1 active' : 'sel_card boxItem1 '
          }
        >
          <div className="pro_img">
            <img src={item?.main_pair?.detailed?.https_image_path} alt="" width="37px" />
            <img src={iconBadge} className="iconbadge" alt="" />
            <div className="nuber_list">100</div>
          </div>
          <p className="heading5 text_medium text-center">{item?.product.slice(0, 12)}</p>
        </div>
      </div>
    ))
  }

  const selectProduct = (id, item) => {
    dispatch({
      type: 'set',
      productId: id,
    })
  }

  const setPageNo = (num) => {
    dispatch({
      type: 'set',
      productPageNo: num,
    })
  }

  return (
    <div>
      {allProducts?.products?.length ? (
        <CCard className="mb-4 box_items">
          <CCardBody className="pb-0 ">
            <CRow>
              <CCol xs={12}>
                <p className="heading3 text_medium">Products</p>
              </CCol>
              <div className="row p-1 m-0 mb-2">
                {allProducts?.products?.length && renderproducts()}
              </div>
              <div className="row m-0">
                <div className="col-md-4 col-12">
                  <p className="text-dark">
                    Total Items:{' '}
                    <span className="text-secondary">{allProducts?.params?.total_items}</span>
                  </p>
                </div>
                <div className="col-md-8 col-12 mb-5">
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
      ) : null}
    </div>
  )
}
