import Button from '../../atoms/Button';

const MockBlock: React.FC<{ mockData: string[] }> = ({ mockData }) => (
  <>
    <div>
      <img src="/new-year.jpg" alt="new year" width="200" height="160" />
    </div>
    <h1>
      List of 200 items
    </h1>
    {mockData.map((title) => (
      <div key={title}>
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
  </>
);

export default MockBlock;
