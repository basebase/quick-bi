import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
import { NavLink, Link } from "react-router-dom";


type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: '数据分析',
    icon: <MailOutlined />,
    children: [
      { key: '1', label: <Link to='/ybp'>仪表盘</Link>},
      { key: '2', label: <Link to='/dzbg'>电子表格</Link>},
      { key: '3', label: <Link to='sjdp'>数据大屏</Link> },
      { key: '4', label: <Link to='jxfx'>即席分析</Link> },
      { key: '5', label: <Link to='zzqs'>自助取数</Link> },
    ],
  },
  {
    key: 'sub2',
    label: '数据构建',
    icon: <AppstoreOutlined />,
    children: [
      { key: '6', label: <Link to='sjtb'>数据填报</Link> },
      { key: '7', label: <Link to='sjzb'>数据准备</Link> },
      { key: '8', label: <Link to='sjj'>数据集</Link> },
      { key: '9 ', label: <Link to='sjy'>数据源</Link> },
    ],
  },
  {
    key: 'sub4',
    label: '空间管理',
    icon: <SettingOutlined />,
    children: [
      { key: '10', label: <Link to='kjcyyxx'>空间成员与信息</Link> },
    ],
  },
];

const Sidebar: React.FC = () => {
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('1');

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        className='menu'
        theme='dark'
        onClick={onClick}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default Sidebar;