import './App.css';
import { ConfigProvider, Layout } from 'antd';
import { darkTheme, defaultTheme } from '@ant-design/compatible';
import { Outlet } from 'react-router-dom';
import Main from '../common/components/Main';
import Nav from '../common/components/Nav';
import Footer from '../common/components/Footer';
import { useEffect } from 'react';
import { useTheme } from '../common/components/ThemeProvider';
import ThemeFloatButton from '../common/components/ThemeFloatButton';

function App() {
  const theme = useTheme();
  useEffect(() => {
    document.body.style.backgroundColor =
      theme === 'dark' ? 'black' : '#f5f5f5';
  }, [theme]);

  return (
    <ConfigProvider theme={theme === 'dark' ? darkTheme : defaultTheme}>
      <Layout>
        <Nav />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Layout>
      <ThemeFloatButton />
    </ConfigProvider>
  );
}

export default App;
