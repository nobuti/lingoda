# Lingoda

Uber small i18n library for general purpose


## Features

- Zero dependencies
- 344 bytes gzziped
- Simple api


## Install

```
npm install @nobuti/lingoda --save
```

## Usage

```
import lingoda from '@nobuti/lingoda'

const locales = {
    en: {
        hello: "Hello, {name}",
        footer: {
            tagline: "Made with ❤️ by nobuti"
        }
    },
    es: {
        hello: "Hola, {name}",
        footer: {
            tagline: "Hecho con ❤️ por nobuti"
        }
    }
}

// initialized
const {t, lang, set} = lingoda(locales, 'en')

// change languaje
lang('es')

// get the current languaje
lang()

// add new locale dynamically
set('fr', {
  hello: "Bonjour, {name}",
  footer: {
    tagline: "Fabriqué avec ❤️ par nobuti"
  }
})

// Using translations
t('hello', {name: 'nobuti'}); // 'Hello, nobuti'
t('footer.tagline'); // 'Made with ❤️ by nobuti'

lang('es')

t('hello', {name: 'nobuti'}); // 'Hola, nobuti'
t('footer.tagline'); // 'Hecho con ❤️ por nobuti'

// Not found translations show the key by default
t('wadus.bogus'); // 'wadus.bogus'
```

[Here](https://codesandbox.io/s/lingoda-react-w0cnt) you'll find an example of lingoda integration
into a React application. In this case, different locales are loaded from json files on demand.
