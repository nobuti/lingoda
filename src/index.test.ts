import lingoda from './index'
import type { Lingoda } from './index'

describe('lingoda', () => {
  const locales = {
    en: {
      hello: 'hello world',
      intro: {
        mr: 'mister {sir}',
        mrs: 'miss {madame}'
      },
      description: {
        lingoda: 'the best'
      },
      paragraphs: ['one', 'two', 'three']
    }
  }

  let i18n: Lingoda

  beforeEach(() => {
    i18n = lingoda(locales, 'en')
  })

  it('should initialize locale properly', () => {
    expect(i18n.lang()).toBe('en')
  })

  it('should get locales properly', () => {
    const { t } = i18n
    expect(t('hello')).toEqual(locales.en.hello)
    expect(t('description.lingoda')).toEqual(locales.en.description.lingoda)
    expect(t('paragraphs')).toEqual(locales.en.paragraphs)
  })

  it('should default to path if not exist', () => {
    const { t } = i18n
    expect(t('wadus.bogus')).toEqual('wadus.bogus')
  })

  it('should inject data properly', () => {
    const { t } = i18n
    expect(t('intro.mr', { sir: 'wadus' })).toEqual('mister wadus')
    expect(t('intro.mrs', { madame: 'wadus' })).toEqual('miss wadus')
  })

  it('should set new locale', () => {
    const { t, set, lang } = i18n
    const es = {
      hello: 'hola mundo'
    }
    set('es', es)
    lang('es')
    expect(lang()).toEqual('es')
    expect(t('hello')).toEqual(es.hello)

    lang('en')
    expect(lang()).toEqual('en')
    expect(t('hello')).toEqual(locales.en.hello)
  })

  it("should warn if locale doesn't exist", () => {
    jest.spyOn(console, 'warn').mockImplementation(s => s)
    const { lang } = i18n
    lang('fr')

    expect(console.warn).toHaveBeenCalledWith("lingoda: locale fr doesn't exist")
    expect(lang()).toEqual('en')
  })
})
