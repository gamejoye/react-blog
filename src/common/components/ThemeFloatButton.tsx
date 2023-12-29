import {
  AlertOutlined,
  BgColorsOutlined,
  CoffeeOutlined,
} from '@ant-design/icons';
import { FloatButton } from 'antd';
import { useThemeDispatch } from './ThemeProvider';
import { setThemeItem } from '../utils/theme';

const ThemeFloatButton = () => {
  const setTheme = useThemeDispatch();
  const handleOnLightTheme = () => {
    setTheme('light');
    setThemeItem('light');
  };
  const handleOnDarkTheme = () => {
    setTheme('dark');
    setThemeItem('dark');
  };
  return (
    <FloatButton.Group
      trigger="hover"
      type="primary"
      icon={<BgColorsOutlined />}
    >
      <FloatButton
        tooltip="亮色模式"
        icon={<AlertOutlined />}
        onClick={handleOnLightTheme}
      />
      <FloatButton
        tooltip="暗色模式"
        icon={<CoffeeOutlined />}
        onClick={handleOnDarkTheme}
      />
    </FloatButton.Group>
  );
};

export default ThemeFloatButton;
