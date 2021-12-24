import styles from './styles.module.sass';
import Input from '../../atoms/Input';
import Form from '../../atoms/Form';
import ButtonStyled from '../../atoms/Button';

const SignUpForm: React.FC = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // eslint-disable-next-line no-alert
    window.alert(`Good job, ${data.name} ${data.surname}`);
  };
  return (
    <div className={styles.formContainer}>
      <Form onSubmit={onSubmit}>
        <Input
          name="name"
          placeholder="Name *"
          required
        />
        <Input
          name="surname"
          placeholder="Surname *"
          required
        />
        <Input
          name="email"
          placeholder="Email"
          type="email"
        />
        <Input
          name="phone"
          placeholder="Phone"
          type="phone"
        />
        <ButtonStyled color="primary">
          submit
        </ButtonStyled>
      </Form>
    </div>
  );
};

export default SignUpForm;
