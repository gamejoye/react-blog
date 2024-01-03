import { Col, Row } from 'antd';
import Dashboard from '../../common/components/Dashboard';
import { useLocation, useNavigate } from 'react-router';
import { BlogArticleList } from '../../features/blogs/BlogArticleList';
import { IBlog } from '../../common/types/blog';

const ArticleDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const tag = params.get('tag') || '';
  const folder = params.get('folder') || '';
  const handleOnPostClick = (blog: IBlog) => {
    navigate(`/posts/${blog.id}`);
  };

  return (
    <Row>
      <Col offset={6} span={12}>
        <Dashboard title="文章详情" />
        <BlogArticleList
          search={false}
          handleOnPostClick={handleOnPostClick}
          size="large"
          targetTag={tag}
          targetFolder={folder}
        />
      </Col>
    </Row>
  );
};
export default ArticleDetails;
