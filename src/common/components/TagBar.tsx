import React from 'react';
import { List, Space, Tag } from 'antd';
import { ITag } from '../types/tag';

interface IProps {
  color?: string;
  icon?: React.ReactNode;
  tags: ITag[] | undefined;
}

const TagBar: React.FC<React.PropsWithChildren<IProps>> = ({
  tags = [],
  color,
  icon,
  children,
}) => {
  return (
    <Space>
      {children}
      <List
        size="large"
        locale={{ emptyText: '暂无相关...' }}
        dataSource={tags}
        renderItem={(tag) => (
          <Tag color={color} key={tag.id} icon={icon}>
            {tag.name}
          </Tag>
        )}
      />
    </Space>
  );
};
export default TagBar;
