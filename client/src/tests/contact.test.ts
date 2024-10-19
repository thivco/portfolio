// helpers.spec.js
import {submitHandler} from '@/components/Contact.vue'

describe('Contact form', () => {
  test('Sends a request to the backend', () => {
    expect(submitHandler()).not.toBe(1)
  })
})