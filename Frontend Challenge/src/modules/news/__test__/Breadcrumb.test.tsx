import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Breadcrumb from '../components/Breadcrumb';

// Mock onClick function for testing
const mockOnClick = jest.fn();

describe('Breadcrumb Component', () => {
    it('renders Home and News links', () => {
        render(<Breadcrumb id="test-id" onClick={mockOnClick} />);
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('News')).toBeInTheDocument();
    });

    it('renders the id when id is provided', () => {
        render(<Breadcrumb id="test-id" onClick={mockOnClick} />);
        expect(screen.getByText('test-id')).toBeInTheDocument();
    });

    it('does not render the id when id is not provided', () => {
        render(<Breadcrumb id={undefined} onClick={mockOnClick} />);
        expect(screen.queryByText('test-id')).not.toBeInTheDocument();
    });

    it('calls onClick when News link is clicked', () => {
        render(<Breadcrumb id="test-id" onClick={mockOnClick} />);
        const newsLink = screen.getByText('News');
        act(() => {
            fireEvent.click(newsLink);
        })
        expect(mockOnClick).toHaveBeenCalled();
    });
});