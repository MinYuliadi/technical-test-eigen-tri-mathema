import React, { ReactNode } from 'react'
import { Layout } from 'antd'
import Nav from '../components/Nav';
import useListNews from '../hooks/useListNews';

const { Header, Content } = Layout

interface ListNewsLayoutProps {
    children: ReactNode;
}

const NewsLayout = (props: ListNewsLayoutProps) => {
    const { gotoNewsPage } = useListNews()
    const navItems = [
        {
            label: "Home",
            onClick: () => {},
            disabled: true
        },
        {
            label: "News",
            onClick: gotoNewsPage,
            disabled: false
        }
    ]
    return (
        <Layout className='layout'>
            <Header>
                <Nav navItems={navItems} />
            </Header>
            <Content className='content'>
                {props.children}
            </Content>
        </Layout>
    )
}

export default NewsLayout