import { Col, Row, Typography } from 'antd';

type IProps = {
  title: string;
};

const Dashboard: React.FC<IProps> = ({ title }) => {
  return (
    <Row>
      <Col span={24}>
        <Typography.Title style={{ textAlign: 'center' }}>
          {title}
        </Typography.Title>
      </Col>
    </Row>
  );
};
export default Dashboard;
