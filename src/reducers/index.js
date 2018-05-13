const initialState = {
  loader: 0,
  locale: 'es',
  site: {
    id: 1,
    user_id: 1,
    template_id: 1,
    slug: 'localhost:8000',
    locale: 'es',
    locales: ['es'],
    title: 'Karen Watsica',
    description: 'Doloribus delectus commodi dolorum quod possimus vitae. Nihil quia velit et praesentium.',
    google_analitycs_id: 'UA-XXXXX',
    favicon_url: 'https://lorempixel.com/16/16/?10572',
    logo_url: 'https://lorempixel.com/150/150/?52150',
    created_at: '2018-05-09 04:13:39',
    updated_at: '2018-05-09 04:13:39',
  },
  home: {
    id: 1,
    title: '',
    slug: '',
    content: {
      //
    }
  },
  events: [
    {
      id: 1,
      title: '',
      slug: '',
      content: {
        main_media: '',
        date: ''
      },
      resources: []
    }
  ],
  selectedEvent: null,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOADER_UP': return { ...state, loader: state.loader + 1 }
    case 'LOADER_DOWN': return { ...state, loader: state.loader - 1 }
    case 'SET_LOCALE': return { ...state, locale: action.locale }
    case 'SET_SITE': return { ...state, site: action.site }
    case 'SET_HOME': return { ...state, home: action.home }
    case 'SET_PAGES': return { ...state, pages: action.pages }
    case 'SET_POSTS': return { ...state, posts: action.posts }
    case 'SET_CURRENT': return { ...state, current: action.current }
    default: return state
  }
}
