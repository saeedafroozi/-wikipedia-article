import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect'

test('renders search input', () => {
  const { getByPlaceholderText } = render(<App />);
  const inputElement = getByPlaceholderText(/Please Type the Article Title.../i);
  expect(inputElement).toBeInTheDocument();
});

test('check input is focused', async () => {
  const { findByTestId } = render(<App />);
  const inputElement = await findByTestId("searchInput");
  expect(inputElement).toHaveFocus()
});
