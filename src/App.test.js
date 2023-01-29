import { render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  
  const buttonElement = screen.getByTestId('request-button')
  expect(buttonElement).toHaveTextContent('데이터 가져오기')
});
