// src/components/Card.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

describe('Card component', () => {
  it('should render the Card component with name and url', () => {
    const name = 'Test Name';
    const url = 'https://example.com';

    render(<Card name={name} url={url} />);

    const nameElement = screen.getByText(name);
    const urlElement = screen.getByText(url);

    expect(nameElement).toBeInTheDocument();
    expect(urlElement).toBeInTheDocument();
  });

  it('should have the correct class names', () => {
    const name = 'Test Name';
    const url = 'https://example.com';

    render(<Card name={name} url={url} />);

    const cardElement = screen.getByText(name).closest('.card');
    const nameElement = screen.getByText(name);
    const urlElement = screen.getByText(url);

    expect(cardElement).toHaveClass('card');
    expect(nameElement).toHaveClass('card-name');
    expect(urlElement).toHaveClass('card-url');
  });
});
