import styles from './styles.module.sass';
import Header from '../../molecules/Header';
import Container from '../../atoms/Conrainer';
import Footer from '../../molecules/Footer';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Container component="main" className={styles.main}>
      {children}
    </Container>
    <Footer />
  </>
);

export default Layout;
