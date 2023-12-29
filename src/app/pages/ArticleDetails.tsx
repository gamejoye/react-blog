import { Col, Row } from 'antd';
import Dashboard from '../../common/components/Dashboard';
import { useLocation, useNavigate } from 'react-router';
import { useGetBlogsQuery } from '../../features/blogs/blogsSlice';
import ArticleList from '../../common/components/ArticleList';

const ArticleDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const tag = params.get('tag') || '';
  const folder = params.get('folder') || '';
  const { data: blogs = [] } = useGetBlogsQuery();
  const filderBlogs = blogs.filter(
    (blog) =>
      blog.tags.find((tagItem) => tagItem.name === tag) !== undefined ||
      blog.folders.find((folderItem) => folderItem.name === folder) !==
      undefined,
  );
  const handleOnPostClick = (id: number) => {
    navigate(`/posts/${id}`);
  };

  return (
    <Row>
      <Col offset={6} span={12}>
        <Dashboard title="文章详情" />
        <ArticleList
          blogs={filderBlogs}
          handleOnPostClick={handleOnPostClick}
          size="large"
        />
      </Col>
    </Row>
  );
};
export default ArticleDetails;
