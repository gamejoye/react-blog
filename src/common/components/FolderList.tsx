import { Button, Col, List, Row, Space, Typography } from 'antd';
import { IFolder } from '../types/folder';
import { formatDate } from '../utils/dayjs';

type IProps = {
  folders: IFolder[];
  loading?: boolean;
  handleOnFolderClick: (folder: IFolder) => void;
};

const FolderList: React.FC<IProps> = ({
  folders = [],
  loading = false,
  handleOnFolderClick,
}) => {
  return (
    <Row>
      <Col span={24}>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={folders}
          bordered
          loading={loading}
          renderItem={(folder) => (
            <List.Item
              extra={
                <Button
                  type="link"
                  onClick={() => handleOnFolderClick(folder)}
                >
                  View detail
                </Button>
              }
            >
              <Space>
                <Typography.Text>
                  [{formatDate(folder.createTime)}]
                </Typography.Text>
                {folder.name}
              </Space>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};
export default FolderList;
