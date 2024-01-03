import { Row, Col } from 'antd';
import { useNavigate } from 'react-router';
import Dashboard from '../../common/components/Dashboard';
import { IBlog } from '../../common/types/blog';
import { BlogList } from '../../features/blogs/BlogList';

const Posts = () => {
  const navigate = useNavigate();
  const handleOnPostClick = (blog: IBlog) => {
    navigate(`/posts/${blog.id}`);
  };
  return (
    <Row>
      <Col offset={6} span={12}>
        <Dashboard title="博客列表" />
        <BlogList
          search={false}
          handleOnPostClick={handleOnPostClick}
        />
      </Col>
    </Row>
  );
};
export default Posts;
