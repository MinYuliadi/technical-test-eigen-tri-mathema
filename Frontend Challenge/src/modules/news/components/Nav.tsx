import React from 'react'
import { Menu } from 'antd'

const navItems = [
  "Home",
  "News",
]

const Nav = () => {
  return (
    <Menu
      theme='dark'
      mode='horizontal'
      defaultSelectedKeys={['1']}
      style={{ width: "100%" }}
      items={navItems.map((item, index) => {
        return {
          key: index,
          label: item,
          disabled: index === 0
        }
      })}
    />
  )
}

export default Nav