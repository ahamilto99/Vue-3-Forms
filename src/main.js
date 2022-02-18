import { createApp } from 'vue'
import App from './App.vue' // entry point for the application
import upperFirst from 'lodash/upperFirst' // converts a string's first character to uppercase
import camelCase from 'lodash/camelCase'

// all files in components folder require "Base" prefix
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

const app = createApp(App)

// keys() returns an array of filenames
// ./BaseInput.vue and ./BaseSelect.vue are the array's elements
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  // register each one as a global component
  app.component(componentName, componentConfig.default || componentConfig)
})

app.mount('#app')
