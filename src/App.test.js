import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the JEZBuilders home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Good ideas/i);
  expect(linkElement).toBeInTheDocument();
});
