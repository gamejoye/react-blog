import { Col, Row } from 'antd';
import Dashboard from '../../common/components/Dashboard';
import { useGetTagsQuery } from '../../features/tags/tagsSlice';
import TagList from '../../common/components/TagList';
import { ITag } from '../../common/types/tag';
import { useNavigate } from 'react-router';

const Tags = () => {
  const navigate = useNavigate();
  const {
    data: tags = [],
    isLoading,
    isSuccess,
    isFetching,
    isError,
    error,
  } = useGetTagsQuery();
  const handleOnTagClick = (tagItem: ITag) => {
    navigate(`/article-details?tag=${tagItem.name}`);
  };
  return (
    <Row>
      <Col offset={6} span={12}>
        <Dashboard title="标签" />
        <TagList
          tags={tags}
          handleOnTagClick={handleOnTagClick}
          loading={isLoading || isFetching}
        />
      </Col>
    </Row>
  );
};

export default Tags;
