import React from 'react'
import { Menu } from 'antd'

interface iNav {
  navItems: {
    label: string,
    onClick: () => void,
    disabled: boolean
  }[]
}

const Nav = (props: iNav) => {
  return (
    <Menu
      theme='dark'
      mode='horizontal'
      defaultSelectedKeys={['1']}
      style={{ width: "100%" }}
      items={props.navItems.map((item, index) => {
        return {
          key: index,
          label: item.label,
          disabled: item.disabled,
          onClick: item.onClick
        }
      })}
    />
  )
}

export default Nav