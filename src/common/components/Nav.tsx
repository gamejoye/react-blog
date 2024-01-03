import {
  CloudServerOutlined,
  ContainerOutlined,
  GithubOutlined,
  HomeOutlined,
  SearchOutlined,
  TagOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Modal } from 'antd';
import { ItemType, MenuItemType } from 'antd/es/menu/hooks/useItems';
import { useLocation, useNavigate } from 'react-router-dom';
import { GITHUB_URL } from '../constants/base';
import useToken from 'antd/es/theme/useToken';
import { useState } from 'react';
import { IBlog } from '../types/blog';
import { BlogList } from '../../features/blogs/BlogList';

const items: ItemType<MenuItemType>[] = [
  {
    key: '/',
    label: '主页',
    icon: <HomeOutlined />,
  },
  {
    key: '/posts',
    label: '文章',
    icon: <ContainerOutlined />,
  },
  {
    key: '/archives',
    label: '归档',
    icon: <CloudServerOutlined />,
  },
  {
    key: '/tags',
    label: '标签',
    icon: <TagOutlined />,
  },
  {
    key: '/about/i',
    label: '关于我',
    icon: <UserOutlined />
  }
];

const miscellaneousItems: ItemType<MenuItemType>[] = [
  {
    key: '0',
    label: (
      <a href={GITHUB_URL}>
        <GithubOutlined />
      </a>
    ),
  },
];

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { colorBgContainer } = useToken()[1];
  const [searchModalShow, setSearchModalShow] = useState(false);
  const path = location.pathname;

  const handleOnSelect = ({ key }: { key: string }) => {
    navigate(key);
  };
  const showModal = () => {
    setSearchModalShow(true);
  };
  const closeModal = () => {
    setSearchModalShow(false);
  };
  const handleOnPostClick = (blog: IBlog) => {
    navigate(`/posts/${blog.id}`);
    closeModal();
  };
  return (
    <Layout.Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        backgroundColor: colorBgContainer,
      }}
    >
      <Menu
        mode="horizontal"
        items={items}
        onSelect={handleOnSelect}
        selectedKeys={[path]}
        style={{ flex: 1, justifyContent: 'center' }}
      />
      <Button
        style={{ maxWidth: 200, borderRadius: 20 }}
        icon={<SearchOutlined />}
        size="large"
        onClick={showModal}
      >
        搜索博客内容
      </Button>
      <Menu mode="horizontal" items={miscellaneousItems} />
      <Modal
        title="要记得天天开心"
        footer={null}
        open={searchModalShow}
        onCancel={closeModal}
        styles={{
          body: {
            maxHeight: '70vh',
            overflow: 'scroll',
          },
        }}
      >
        <BlogList
          search={true}
          size='small'
          handleOnPostClick={handleOnPostClick}
        />
      </Modal>
    </Layout.Header>
  );
};

export default Nav;
