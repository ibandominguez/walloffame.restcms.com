import translations from '../translations'

export function getLocaleFromUrl() {
  return window.location.pathname.substring(1, 3) || 'es'
}

export function translate(locale, key) {
  try {
    return translations[locale][key]
  } catch (e) {
    return translations.es[key]
  }
}

export function translateSlug(locale, key) {
  let translation = translate(locale, key)
  translation = translation.replace(/^\s+|\s+$/g, ''); // trim
  translation = translation.toLowerCase() // toLowerCase

  // remove accents, swap ñ for n, etc
  let from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  let to   = "aaaaeeeeiiiioooouuuunc------";
  for (let i=0, l=from.length ; i<l ; i++) {
    translation = translation.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  translation = translation.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return translation
}
