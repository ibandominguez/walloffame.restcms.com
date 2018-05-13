const initialState = {
  loader: 0,
  locale: 'es',
  site: window.env && window.env.site ? window.env.site : { id: 1, locales: [] },
  home: { content: { slides: [], content: '' } },
  pages: [],
  posts: [],
  current: window.env && window.env.resource ? window.env.resource : { content: {} },
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
