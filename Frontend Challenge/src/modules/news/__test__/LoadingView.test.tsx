import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingView from '../components/LoadingView';

describe('LoadingView Component', () => {
  it('renders the loading view with a spinner', () => {
    const loadingView = render(<LoadingView />);
    
    expect(loadingView).toMatchSnapshot()
  });
});