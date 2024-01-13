import { Col, Row } from 'antd';
import Dashboard from '../../common/components/Dashboard';
import { IFolder } from '../../common/types/folder';
import { useNavigate } from 'react-router';
import { FolderList } from '../../features/folders/FolderList';

const Archives = () => {
  const navigate = useNavigate();
  const handleOnFolderClick = (folder: IFolder) => {
    navigate(`/article-details?folder=${folder.name}`);
  };
  return (
    <Row>
      <Col offset={6} span={12}>
        <Dashboard title="归档" />
        <FolderList handleOnFolderClick={handleOnFolderClick} />
      </Col>
    </Row>
  );
};

export default Archives;
