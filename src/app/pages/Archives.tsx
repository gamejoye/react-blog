import { Col, Row } from 'antd';
import { useGetFoldersQuery } from '../../features/folders/foldersSlice';
import Dashboard from '../../common/components/Dashboard';
import FolderList from '../../common/components/FolderList';
import { IFolder } from '../../common/types/folder';
import { useNavigate } from 'react-router';

const Archives = () => {
  const navigate = useNavigate();
  const {
    data: folders = [],
    isLoading,
    isSuccess,
    isFetching,
    isError,
    error,
  } = useGetFoldersQuery();
  const handleOnFolderClick = (folder: IFolder) => {
    navigate(`/article-details?folder=${folder.name}`);
  };
  return (
    <Row>
      <Col offset={6} span={12}>
        <Dashboard title="归档" />
        <FolderList
          folders={folders}
          handleOnFolderClick={handleOnFolderClick}
          loading={isLoading || isFetching}
        />
      </Col>
    </Row>
  );
};

export default Archives;
