import { createStore } from 'redux'

import icon2 from './assets/icons/image 30.png'
import icon3 from './assets/icons/image 31.png'
import icon4 from './assets/icons/image 32.png'
import icon5 from './assets/icons/image 33.png'
import icon6 from './assets/icons/image 34.png'

const initialState = {
  sidebarShow: true,
  categories: [
    { category_id: 0, category: 'All' },
    {
      category_id: 2,
      category: 'Bracelet',
      main_pair: {
        detailed: {
          https_image_path: icon2,
        },
      },
    },
    {
      category_id: 3,
      category: 'Bangle',
      main_pair: {
        detailed: {
          https_image_path: icon3,
        },
      },
    },
    {
      category_id: 4,
      category: 'Ring',
      main_pair: {
        detailed: {
          https_image_path: icon4,
        },
      },
    },
    {
      category_id: 5,
      category: 'Earing',
      main_pair: {
        detailed: {
          https_image_path: icon5,
        },
      },
    },
    {
      category_id: 6,
      category: 'Pendant',
      main_pair: {
        detailed: {
          https_image_path: icon6,
        },
      },
    },
  ],
  Wholesalers: {
    vendors: [
      {
        company_id: 1,
        company: 'Procyon check',
        seo_name: 'Procyon check',
        logo: {
          theme: {
            image: {
              https_image_path: icon2,
            },
          },
        },
      },
      {
        company_id: 2,
        company: 'Bracelet',
        seo_name: 'Bracelet',
        logo: {
          theme: {
            image: {
              https_image_path: icon3,
            },
          },
        },
      },
      {
        company_id: 3,
        company: 'Bangle',
        seo_name: 'Bangle',
        logo: {
          theme: {
            image: {
              https_image_path: icon3,
            },
          },
        },
      },
      {
        company_id: 4,
        company: 'Ring',
        seo_name: 'Ring',
        logo: {
          theme: {
            image: {
              https_image_path: icon5,
            },
          },
        },
      },
    ],
    params: {
      page: 1,
      items_per_page: 12,
      total_items: '144',
    },
  },
  selectedWholesalers: {},

  masterProducts: {},
  selectedProducts: {},
  allProducts: {},

  // allProducts: {
  //   products: [
  //     {
  //       product_id: '9099',
  //       product: 'สร้อยข้อมือทองคำ 96.5% ลายเบนซ์โปร่งคั่นประคำลงยาฝังพลอย',
  //       product_type: 'P',
  //       master_product_id: '8065',
  //       company_id: '83',
  //       product_code: 'B965-2201-0037-5B-04-5 บาท',
  //       status: 'A',
  //       list_price: '0.00',
  //       amount: '1',
  //       category_ids: [301],
  //       main_category: 301,
  //       category_name: 'Bracelet',
  //       main_pair: {
  //         pair_id: '97347',
  //         detailed: {
  //           object_id: '9099',
  //           object_type: 'product',
  //           type: 'M',
  //           https_image_path: 'https://dev.garnenterprise.com/images/detailed/63/IMG_2786.JPG',
  //         },
  //       },
  //     },
  //   ],
  //   params: {
  //     page: 1,
  //     items_per_page: 10,
  //     user_id: '73',
  //     sort_order: 'asc',
  //     total_items: '33',
  //   },
  // },
  productId: null,
  features: [],
  selectedFeatures: {},

  cart: {},
}
const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
