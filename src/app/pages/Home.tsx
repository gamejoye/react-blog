import {
  Row,
  Col,
  Typography,
  Divider,
  Card,
  Statistic,
  Image,
  Alert,
} from 'antd';
import Dashboard from '../../common/components/Dashboard';
import bg from '../../asserts/bg.jpeg';
import { useGetBlogsTotalCountQuery } from '../../features/blogs/blogsSlice';
import { useGetFoldersTotalCountQuery } from '../../features/folders/foldersSlice';
import { useGetTagsTotoalCountQuery } from '../../features/tags/tagsSlice';

const { Paragraph, Link } = Typography;

const Home = () => {
  const {
    data: blogsCount,
    isLoading: blogsLoading,
    isFetching: blogsFetching,
  } = useGetBlogsTotalCountQuery();
  const {
    data: foldersCount,
    isLoading: foldersLoading,
    isFetching: foldersFetching,
  } = useGetFoldersTotalCountQuery();
  const {
    data: tagsCount,
    isLoading: tagsLoading,
    isFetching: tagsFetching,
  } = useGetTagsTotoalCountQuery();

  return (
    <Row>
      <Col offset={6} span={12}>
        <Dashboard title="欢迎来到我的博客" />
        <Paragraph>
          <Alert
            message="最新动态：正在进行深度学习和前端技术的研究，欢迎交流！"
            type="info"
            showIcon
          />
        </Paragraph>
        <Paragraph>
          🎉这里是我对编程、技术和生活见解的分享平台。我的博客涵盖了
          <strong>深度学习</strong>、<strong>前端技术、</strong>
          <strong>编译原理</strong>等多个领域。 如果有什么错误的地方，
          欢迎指出。
        </Paragraph>
        <Paragraph>
          如果您对我的文章或网站有任何建议或反馈，或者想了解更多关于我的信息，请访问
          <Link href="/about/i">[关于我]</Link>页面。
        </Paragraph>
        <Row gutter={16}>
          <Col span={8}>
            <Card hoverable>
              <Statistic
                title="博客文章"
                value={blogsCount}
                loading={blogsLoading || blogsFetching}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable>
              <Statistic
                title="标签种类"
                value={tagsCount}
                loading={tagsLoading || tagsFetching}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable>
              <Statistic
                title="归档文件夹"
                value={foldersCount}
                loading={foldersLoading || foldersFetching}
              />
            </Card>
          </Col>
        </Row>
        <Divider />
        <Image src={bg} />
      </Col>
    </Row>
  );
};
export default Home;
