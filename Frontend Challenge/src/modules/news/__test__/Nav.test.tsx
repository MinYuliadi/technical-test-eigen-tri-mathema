import React from 'react';
import { act, render, screen } from '@testing-library/react';
import Nav from '../components/Nav';

describe('Nav component', () => {
    const mockOnClick = jest.fn(); // Create a mock function for onClick

    const navItems = [
        { label: 'Item 1', onClick: mockOnClick, disabled: false },
        { label: 'Item 2', onClick: mockOnClick, disabled: true },
        { label: 'Item 3', onClick: mockOnClick, disabled: false },
    ];

    it('renders the Nav component correctly', () => {
        render(<Nav navItems={navItems} />);

        // Ensure that the Nav component renders with the correct items
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
        expect(screen.getByText('Item 3')).toBeInTheDocument();
    });

    it('calls the onClick function when a menu item is clicked', () => {
        render(<Nav navItems={navItems} />);

        // Simulate a click on the first menu item
        const item1 = screen.getByText('Item 1');
        act(() => {
            item1.click();
        })

        // Ensure that the mock onClick function was called
        expect(mockOnClick).toHaveBeenCalled();
    });
});