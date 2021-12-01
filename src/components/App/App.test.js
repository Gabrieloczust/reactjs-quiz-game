import { render, screen } from '@testing-library/react';
import { App } from '.';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/App/i);
  expect(linkElement).toBeInTheDocument();
});
