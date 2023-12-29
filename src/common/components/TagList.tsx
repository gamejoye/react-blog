import { Button, Col, List, Row, Space, Typography } from 'antd';
import { formatDate } from '../utils/dayjs';
import { ITag } from '../types/tag';
import React from 'react';

type IProps = {
  tags: ITag[];
  loading?: boolean;
  handleOnTagClick: (tag: ITag) => void;
};

const TagList: React.FC<IProps> = ({
  tags = [],
  loading = false,
  handleOnTagClick,
}) => {
  return (
    <Row>
      <Col span={24}>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={tags}
          bordered
          loading={loading}
          renderItem={(tag) => (
            <List.Item
              extra={
                <Button type="link" onClick={() => handleOnTagClick(tag)}>
                  View detail
                </Button>
              }
            >
              <Space>
                <Typography.Text>
                  [{formatDate(tag.createTime)}]
                </Typography.Text>
                {tag.name}
              </Space>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};
export default TagList;
