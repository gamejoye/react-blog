import { Col, Row } from 'antd';
import Dashboard from '../../common/components/Dashboard';
import { ITag } from '../../common/types/tag';
import { useNavigate } from 'react-router';
import { TagList } from '../../features/tags/TagList';

const Tags = () => {
  const navigate = useNavigate();
  const handleOnTagClick = (tag: ITag) => {
    navigate(`/article-details?tag=${tag.name}`);
  };
  return (
    <Row>
      <Col offset={6} span={12}>
        <Dashboard title="标签" />
        <TagList handleOnTagClick={handleOnTagClick} />
      </Col>
    </Row>
  );
};

export default Tags;
