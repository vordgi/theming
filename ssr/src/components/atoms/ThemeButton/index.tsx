import { useContext } from 'react';
import type { ButtonProps } from '../Button';
import Button from '../Button';
import ThemeContext from '../../../contexts/ThemeContext';

const ThemeButton: React.FC<Omit<ButtonProps, 'onClick'>> = (props) => {
  const { theme, onChangeTheme } = useContext(ThemeContext);
  return (
    <Button {...props} onClick={onChangeTheme}>
      {theme}
    </Button>
  );
};

export default ThemeButton;
