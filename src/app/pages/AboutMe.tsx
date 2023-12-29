import { Col, Image, Row, Typography } from 'antd';
import Dashboard from '../../common/components/Dashboard';
import { MailOutlined, QqOutlined, TrophyOutlined } from '@ant-design/icons';
import IconText from '../../common/components/IconText';
import hg from '../../asserts/hg.jpeg';

const { Paragraph, Text, Link } = Typography;

const AboutMe = () => {
  return (
    <Row>
      <Col offset={6} span={12}>
        <Dashboard title="关于我" />
        <Typography>
          <Paragraph>
            大家好，我是 <strong>gamejoye</strong>，也可以叫我{' '}
            <strong>春日野小穹</strong>。
            我目前是一名21岁的本科生，同时也是一名业余的 OIer 和 ACMer。
          </Paragraph>
          <Paragraph>
            我对前端开发、React
            和深度学习领域有着浓厚的兴趣。我喜欢通过不同的方式来提升自己的技能，
            包括在
            <Link href="https://leetcode.cn/u/gamejoye-lin/" target="_blank">
              力扣
            </Link>
            、
            <Link
              href="https://codeforces.com/profile/gamejoye"
              target="_blank"
            >
              Codeforces
            </Link>{' '}
            上解决问题， 以及在{' '}
            <Link href="https://space.bilibili.com/509394339" target="_blank">
              Bilibili
            </Link>{' '}
            上的相关教程和视频。
          </Paragraph>
          <Paragraph>
            我一直在努力学习和实践，希望能在这些领域取得更多的成就。 这是我的
            <Link href="https://github.com/gamejoye" target="_blank">
              GitHub
            </Link>
            账号
          </Paragraph>
          <Paragraph>
            联系方式
            <ul>
              <li>
                <IconText icon={QqOutlined} text="3032535923" />
              </li>
              <li>
                <IconText icon={MailOutlined} text="gamejoye@gmail.com" />
              </li>
            </ul>
          </Paragraph>
          <Paragraph>
            奖项
            <ul>
              <li>
                <IconText icon={TrophyOutlined} text="ICPC区域赛(杭州)铜奖" />
              </li>
              <li>
                <IconText icon={TrophyOutlined} text="CCPC区域赛(哈尔滨)铜奖" />
              </li>
              <li>
                <IconText icon={TrophyOutlined} text="百度之星(福建省)银奖" />
              </li>
            </ul>
          </Paragraph>
        </Typography>
      </Col>
      <Col offset={6} span={12}>
        <Col span={24}>
          <Image src={hg} />
        </Col>
      </Col>
    </Row>
  );
};

export default AboutMe;
