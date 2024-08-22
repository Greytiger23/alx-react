import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aprodite';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom component', () => {
  it('should render correctly a BodySection component and pass props correctly', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    const bodySection = wrapper.find(BodySection);

    expect(bodySection.length).toBe(1);
    expect(bodySection.prop('title')).toBe('test title');
    expect(bodySection.prop('children').type).toBe('p');
    expect(bodySection.prop('children').props.children).toBe('test children node');
  });
});

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
