// Copyright 2004-present Facebook. All Rights Reserved.

/* eslint-disable no-unused-vars */

import React from 'react';
import {mount} from 'enzyme';
import CheckboxWithLabel from '../CheckboxWithLabel';

it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = mount(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  expect(checkbox.text()).toEqual('Off');

  //this causes stack overflow
  expect(checkbox.find('.abc')).toBe(true)

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});
