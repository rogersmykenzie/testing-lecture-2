import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

it('Does not show dropdown when mounted', () => {
  const rendered = render(<Header />);

  expect(rendered.queryByTestId('dropdown'))
  .toBe(null);
});