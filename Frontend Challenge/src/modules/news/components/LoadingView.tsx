import { Spin } from 'antd'
import React from 'react'

const LoadingView = () => {
    return (
        <div className='loading-view'>
            <Spin className='spinner' size='large' />
        </div>
    )
}

export default LoadingView