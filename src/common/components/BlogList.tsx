import { Button, Col, List, Row, Typography } from 'antd';
import { IBlog } from '../types/blog';
import {
  EyeTwoTone,
  LikeTwoTone,
  MessageTwoTone,
  StarTwoTone,
} from '@ant-design/icons';
import IconText from './IconText';

type IProps = {
  blogs: IBlog[];
  isexpired?: boolean;
  size?: 'small' | 'large' | 'default';
  handleOnPostClick: (blog: IBlog) => void;
};

const BlogList: React.FC<IProps> = ({
  blogs = [],
  isexpired = false,
  size = 'default',
  handleOnPostClick,
}) => {
  return (
    <Row>
      <Col span={24}>
        <List
          itemLayout="vertical"
          size={size}
          dataSource={blogs}
          loading={isexpired}
          pagination={{ pageSize: 10 }}
          renderItem={(blog) => (
            <List.Item
              actions={[
                <IconText
                  icon={MessageTwoTone}
                  text={blog.commentsCount + ''}
                />,
                <IconText icon={EyeTwoTone} text={blog.views + ''} />,
              ]}
              extra={
                <Button type="link" onClick={() => handleOnPostClick(blog)}>
                  View post
                </Button>
              }
            >
              <List.Item.Meta
                title={
                  <Typography.Title level={3}>{blog.title}</Typography.Title>
                }
              />
              <Typography.Paragraph ellipsis={{ rows: 2, symbol: 'more' }}>
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </Typography.Paragraph>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};
export default BlogList;
