import React from 'react'
import { Card as CardComponent } from 'antd';

interface CardProps {
    content: string | null;
    title: string;
    image: string;
    author: string;
    onClick: () => void;
}

const { Meta } = CardComponent

const Card = (props: CardProps) => {
    return (
        <CardComponent
            className='card'
            cover={<img alt={props.title} src={props.image} />}
            onClick={props.onClick}
            hoverable
        >
            <Meta title={props.title} description={props.author} />
        </CardComponent>
    )
}

export default Card