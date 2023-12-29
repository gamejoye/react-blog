import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { setGithubToken } from '../../common/utils/github-auth';
import { Spin, message } from 'antd';

const GithubAuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const state = params.get('state');
    if (state === 'succeed') {
      const token = params.get('uid');
      if (token !== null) {
        setGithubToken(token);
      }
      message.success('认证成功');
    } else if (state === 'failed') {
      const msg = params.get('msg') || 'unknowError';
      message.error('认证失败: ' + msg);
    }
    navigate('/');
  }, []);
  return <Spin spinning fullscreen />;
};
export default GithubAuthCallback;
