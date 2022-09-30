import { render, screen } from '@testing-library/react';
import App from './App';

test('renders list items', () => {
  render(<App />);
  const listItems = screen.getAllByRole('listitem');
  // expect(listItems).toHaveLength(3);
  // expect(listItems.length).toBe(3);
  expect(listItems.length).toEqual(3);
});
