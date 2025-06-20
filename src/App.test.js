import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Needed because App uses Router
import App from './App';

test('renders home section with name', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const nameElement = screen.getByText(/HI, I'M SOWJANYA PEDDAKAPU/i);
  expect(nameElement).toBeInTheDocument();
});
