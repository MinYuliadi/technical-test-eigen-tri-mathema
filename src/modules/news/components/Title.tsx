import React from 'react'
import { Typography } from 'antd';

const { Title: TitleAntd } = Typography

interface TitleProps {
    text: string | undefined;
}

const Title = (props: TitleProps) => {
    return (
        <TitleAntd>
            {props.text}
        </TitleAntd>
    )
}

export default Title