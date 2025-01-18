// src/app/page.test.tsx
import Home from '@/app/page';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders the Next.js logo', () => {
    render(<Home />);
    const logo = screen.getByAltText('Next.js logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the get started message', () => {
    render(<Home />);
    const getStartedMessage = screen.getByText(/Get started by editing/i);
    expect(getStartedMessage).toBeInTheDocument();
  });

  it('renders the deploy now link', () => {
    render(<Home />);
    const deployLink = screen.getByText(/Deploy now/i);
    expect(deployLink).toBeInTheDocument();
  });

  it('renders the read our docs link', () => {
    render(<Home />);
    const docsLink = screen.getByText(/Read our docs/i);
    expect(docsLink).toBeInTheDocument();
  });

  it('renders the footer links', () => {
    render(<Home />);
    const learnLink = screen.getByText(/Learn/i);
    const examplesLink = screen.getByText(/Examples/i);
    const nextjsLink = screen.getByText(/Go to nextjs.org/i);
    expect(learnLink).toBeInTheDocument();
    expect(examplesLink).toBeInTheDocument();
    expect(nextjsLink).toBeInTheDocument();
  });
});