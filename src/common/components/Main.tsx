import { Layout } from 'antd';
import { PropsWithChildren } from 'react';

const Main: React.FC<PropsWithChildren> = ({ children }) => {
  return <Layout.Content>{children}</Layout.Content>;
};

export default Main;
