import styles from './styles.module.sass';
import Container from '../../atoms/Conrainer';
import AppBar from '../../atoms/AppBar';
import ThemeButton from '../../atoms/ThemeButton';

const Header: React.FC = () => (
  <AppBar>
    <Container className={styles.headerContainer}>
      <h1>
        Themization
      </h1>
      <ThemeButton />
    </Container>
  </AppBar>
);

export default Header;
