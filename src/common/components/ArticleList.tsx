import { Button, Col, List, Row, Typography } from 'antd';
import { IBlog } from '../types/blog';

type IProps = {
  blogs: IBlog[];
  isexpired?: boolean;
  size?: 'small' | 'large' | 'default';
  handleOnPostClick: (id: number) => void;
};

const ArticleList: React.FC<IProps> = ({
  blogs,
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
              extra={
                <Button type="link" onClick={() => handleOnPostClick(blog.id)}>
                  View post
                </Button>
              }
            >
              <Typography.Text mark>[TITLE]</Typography.Text> {blog.title}
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};
export default ArticleList;
