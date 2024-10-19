// contact.test.ts
import Contact from '../components/Contact.vue'
import {describe, it, expect, test} from 'vitest';

// const wrapper = mount()
// Something about shallow mount here

describe('Contact form', () => {
  test('Sends a request to the backend', () => {
    expect(submitHandler()).not.toBe(1)
  })
})