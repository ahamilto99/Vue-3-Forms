<template>
  <input
    type="radio"
    :checked="modelValue === value"
    :value="value"
    v-bind="$attrs"
    @change="$emit('update:modelValue', value)"
    :id="uuid"
  />
  <label :for="uuid" v-if="label">{{ label }}</label>
</template>

<script>
import UniqueID from '../features/UniqueID.js'
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    value: {
      type: [String, Number],
      required: true
    }
  },
  setup() {
    const uuid = UniqueID().getID()
    return { uuid }
  }
}
</script>
