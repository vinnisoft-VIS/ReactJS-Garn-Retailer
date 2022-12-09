export default class Constants {
  static BASE_URL = 'https://staging.admin.garnenterprise.com/'
  static END_POINT = {
    LOGIN: 'api/VnLoginApi',

    GET_CATEGORIES: 'api/vendor_categories',
    GET_CAT_PRODUCTS: 'api/GnProductsApi/',

    GET_WHOLESALERS: 'api/vendor_vendors',
    GET_WHOLESALERS_PRODUCTS: 'api/vendor_products',

    GET_FEATURES: 'api/vendor_features',

    CART: 'api/cart/',
    STOCK_REQUEST: 'api/stock_requests/',
    BACKORDER: 'api/backorder/',
  }
}
