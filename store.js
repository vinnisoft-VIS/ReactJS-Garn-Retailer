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
  selectedCategories: {},
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

  productId: null,
  features: [],
  selectedFeatures: {},

  cart: {},

  productPageNo: 1,

  cartResponse: {},
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
