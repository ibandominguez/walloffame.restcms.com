export function getSite() {
  return (dispatch, getState) => {
    const state = getState()

    return fetch(`http://localhost:8000/api/sites/${state.site.id}`)
      .then((response) => response.json())
      .then((site) => dispatch(setSite(site)))
      .catch((error) => dispatch(setError(error)))
  }
}

export function setSite(site) {
  return {
    type: 'SET_SITE',
    site
  }
}

export function getHome() {
  return (dispatch, getState) => {
    const state = getState()

    return fetch(`http://localhost:8000/api/sites/${state.site.id}/resources?type=home&locale=${state.locale}`)
      .then((response) => response.json())
      .then((homes) => homes.length && dispatch(setHome(homes[0])))
      .catch((error) => dispatch(setError(error)))
  }
}

export function setHome(home) {
  return {
    type: 'SET_HOME',
    home
  }
}

export function getPages() {
  return (dispatch, getState) => {
    const state = getState()

    return fetch(`http://localhost:8000/api/sites/${state.site.id}/resources?type=pages&locale=${state.locale}`)
      .then((response) => response.json())
      .then((pages) => dispatch(setPages(pages)))
      .catch((error) => dispatch(setError(error)))
  }
}

export function setPages(pages) {
  return {
    type: 'SET_PAGES',
    pages
  }
}

export function getPosts() {
  return (dispatch, getState) => {
    const state = getState()

    return fetch(`http://localhost:8000/api/sites/${state.site.id}/resources?type=posts&locale=${state.locale}`)
      .then((response) => response.json())
      .then((posts) => dispatch(setPosts(posts)))
      .catch((error) => dispatch(setError(error)))
  }
}

export function getResource(resourceIdentifier) {
  return (dispatch, getState) => {
    const state = getState()
    return fetch(`http://localhost:8000/api/sites/${state.site.id}/resources/${resourceIdentifier}`)
  }
}

export function setPosts(posts) {
  return {
    type: 'SET_POSTS',
    posts
  }
}

export function setCurrent(current) {
  return {
    type: 'SET_CURRENT',
    current
  }
}

export function setError(error) {
  return {
    type: 'SET_ERROR',
    error
  }
}

export function setLocale(locale) {
  return {
    type: 'SET_LOCALE',
    locale
  }
}

export function increaseLoader() {
  return {
    type: 'LOADER_UP'
  }
}

export function decreaseLoader() {
  return {
    type: 'LOADER_DOWN'
  }
}
