import React from 'react'
import { Breadcrumb as AntdBreadcrumb } from 'antd'
import { useParams } from 'react-router-dom'
import useListNews from '../hooks/useListNews'

const Breadcrumb = () => {
    const { id } = useParams()
    const { gotoNewsPage } = useListNews()
    return (
        <AntdBreadcrumb>
            <AntdBreadcrumb.Item>Home</AntdBreadcrumb.Item>
            <AntdBreadcrumb.Item className='cursor-pointer' onClick={gotoNewsPage}>News</AntdBreadcrumb.Item>
            {id ? <AntdBreadcrumb.Item>{id}</AntdBreadcrumb.Item> : null}
        </AntdBreadcrumb>
    )
}

export default Breadcrumb