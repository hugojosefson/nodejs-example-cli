import i18n from './i18n.mjs'

export default async ({ whom, language } = {}) => {
  if (typeof whom === 'undefined') {
    throw new Error('You must specify who the greeting is for.')
  }

  const t = i18n(language)
  return t('greeting', { whom })
}
