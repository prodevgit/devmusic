import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from './Sidebar';

test('renders learn react link', () => {
  const { getByText } = render(<Sidebar />);

});
