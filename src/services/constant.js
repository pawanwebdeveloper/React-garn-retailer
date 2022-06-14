export default class Constants {
  static BASE_URL = 'http://dev.garnenterprise.com/'
  static END_POINT = {
    GET_CATEGORIES:
      'api/vendor_categories?user_id=73&page=1&items_per_page=15&status=A&max_nesting_level=1&parent_category_id=0',
    GET_CAT_PRODUCTS: 'api/GnProductsApi/',

    GET_WHOLESALERS: 'api/vendor_vendors',
    GET_WHOLESALERS_PRODUCTS: 'api/vendor_products',

    GET_FEATURES: 'api/vendor_features',
  }
}
