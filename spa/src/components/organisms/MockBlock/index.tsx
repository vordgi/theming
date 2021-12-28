import styles from './styles.module.sass';
import Button from '../../atoms/Button';

const MockBlock: React.FC<{ mockData: string[] }> = ({ mockData }) => (
  <>
    <h1>
      List of 500 items
    </h1>
    <div className={styles.grid}>
      {mockData.map((title) => (
        <div key={title} className={styles.card}>
          <h2>
            {title}
          </h2>
          <p>
            Some description.
          </p>
          <Button>
            Lorem
          </Button>
        </div>
      ))}
    </div>
  </>
);

export default MockBlock;
