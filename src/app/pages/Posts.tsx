import { Row, Col, Typography, Space } from 'antd';
import { useNavigate } from 'react-router';
import { useGetBlogsQuery } from '../../features/blogs/blogsSlice';
import BlogList from '../../common/components/BlogList';
import { ContainerOutlined } from '@ant-design/icons';
import Dashboard from '../../common/components/Dashboard';
import { IBlog } from '../../common/types/blog';

const Posts = () => {
  const {
    data: blogs = [],
    isLoading,
    isSuccess,
    isFetching,
    isError,
    error,
  } = useGetBlogsQuery();
  const navigate = useNavigate();
  const handleOnPostClick = (blog: IBlog) => {
    navigate(`/posts/${blog.id}`);
  };
  return (
    <Row>
      <Col offset={6} span={12}>
        <Dashboard title="博客列表" />
        <BlogList
          blogs={blogs}
          handleOnPostClick={handleOnPostClick}
          isexpired={isFetching || isLoading}
        />
      </Col>
    </Row>
  );
};
export default Posts;
