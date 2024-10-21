// contact.test.ts
import Contact from '../components/Contact.vue'
import {describe, it, expect, test} from 'vitest';
import {mount} from "@vue/test-utils"

const wrapper = mount(Contact, {
  shallow:true
})
// Something about shallow mount here

describe('Contact form', () => {
  test('Sends a request to the backend', () => {
    expect(wrapper.vm.submitHandler()).not.toBe(1)
  })
})