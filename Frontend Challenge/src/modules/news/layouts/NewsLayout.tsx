import React, { ReactNode } from 'react'
import { Layout } from 'antd'
import Nav from '../components/Nav';

const { Header, Content } = Layout

interface ListNewsLayoutProps {
    children: ReactNode;
}

const NewsLayout = (props: ListNewsLayoutProps) => {
    return (
        <Layout className='layout'>
            <Header>
                <Nav />
            </Header>
            <Content className='content'>
                {props.children}
            </Content>
        </Layout>
    )
}

export default NewsLayout