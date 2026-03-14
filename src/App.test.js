// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AzureStaticWeb title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AzureStaticWeb/i);
    expect(titleElement).toBeInTheDocument();
});
