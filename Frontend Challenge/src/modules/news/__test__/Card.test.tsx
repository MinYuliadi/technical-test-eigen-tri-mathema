import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Card from '../components/Card';

const mockProps = {
    content: 'Lorem ipsum',
    title: 'Test Card',
    image: 'https://example.com/image.jpg',
    author: 'John Doe',
    onClick: jest.fn(),
};

describe('Card Component', () => {
    it('renders the card with correct content', () => {
        render(<Card {...mockProps} />);
        const cardTitle = screen.getByText(mockProps.title);
        const cardAuthor = screen.getByText(mockProps.author);
        const cardImage = screen.getByAltText(mockProps.title);

        expect(cardTitle).toBeInTheDocument();
        expect(cardAuthor).toBeInTheDocument();
        expect(cardImage).toBeInTheDocument();
    });

    it('calls onClick when card is clicked', () => {
        render(<Card {...mockProps} />);
        const card = screen.getByText('Test Card');
        act(() => {
            fireEvent.click(card);
        })
        expect(mockProps.onClick).toHaveBeenCalledTimes(1);
    });
});