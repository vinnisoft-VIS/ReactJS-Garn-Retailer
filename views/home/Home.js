import React, { useEffect, useCallback } from 'react'

import { CCard, CCardBody, CCol, CRow } from '@coreui/react'

import ProductCategory from './ProductCategory.jsx'
import SelectedWholesalers from './SelectedWholesalers.jsx'
import ItemBreakDown from './ItemBreakDown.jsx'
import Wholesealer from './Wholesalers.jsx'
import ProductTypes from './ProductTypes.jsx'
import Products from './Products.jsx'
import SelectedProducts from './SelectedProducts.jsx'
import FeatureFilters from './FeatureFilters.jsx'
import Product from './Product.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from 'src/services/http.service'
import Constants from 'src/services/constant'
export default function Orders() {
  const dispatch = useDispatch()
  const allProducts = useSelector((state) => state.allProducts)

  const selectedCategories = useSelector((state) => state.selectedCategories)
  const selectedWholesalers = useSelector((state) => state.selectedWholesalers)
  const selectedProducts = useSelector((state) => state.selectedProducts)
  const selectedFeatures = useSelector((state) => state.selectedFeatures)
  const productPageNo = useSelector((state) => state.productPageNo)

  useCallback(() => {
    getProducts()
  }, [productPageNo])

  const getProducts = () => {
    let p = {
      page: productPageNo,
      items_per_page: 12,
      group_by_sellers_offers: 1,
      // get_wholselers_products_stock: 1,
      // show_master_products_only: 1,
    }

    if (Object.keys(selectedCategories)?.length) {
      p.cid = Object.keys(selectedCategories).toString()
      p.subcats = 1
    }

    if (Object.keys(selectedWholesalers)?.length) {
      p.company_ids = Object.keys(selectedWholesalers).toString()
    }
    if (Object.keys(selectedProducts)?.length) {
      p.master_product_ids = Object.keys(selectedProducts).toString()
    }

    if (selectedFeatures?.length_feature && Object.keys(selectedFeatures?.length_feature)?.length) {
      p.length_feature = Object.keys(selectedFeatures?.length_feature).toString()
    }
    if (selectedFeatures?.size_feature && Object.keys(selectedFeatures?.size_feature)?.length) {
      p.size_feature = Object.keys(selectedFeatures?.size_feature).toString()
    }
    if (selectedFeatures?.weight_feature && Object.keys(selectedFeatures?.weight_feature)?.length) {
      p.weight_feature = Object.keys(selectedFeatures?.weight_feature).toString()
    }
    getData(Constants.END_POINT.GET_WHOLESALERS_PRODUCTS, {
      params: p,
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
  return (
    <div className="row m-0 mb-4" style={{ width: '100%' }}>
      <div className="col-md-3 col-12">
        <ProductCategory />
        <SelectedWholesalers />
        <SelectedProducts />
        <FeatureFilters />
        <ItemBreakDown />
      </div>
      <div className="col-md-9 col-12">
        <Wholesealer />
        <ProductTypes />
        <Products />
        <Product />
        {allProducts?.products?.length ? (
          <div className="row m-0 justify-content-center">
            <div onClick={() => getProducts()} className="large-btn">
              GET OFFERS
            </div>
          </div>
        ) : (
          <div className="row m-0 justify-content-center">
            <div onClick={() => getProducts()} className="large-btn">
              GET OFFERS
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
