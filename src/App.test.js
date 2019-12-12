import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders list of hotspots', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/list of hotspots/i);
  expect(linkElement).toBeInTheDocument();
});
