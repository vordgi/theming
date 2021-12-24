import cn from 'classnames';
import styles from './styles.module.sass';

export type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

const Form:React.FC<FormProps> = ({ className, ...props }) => (
  <form className={cn(styles.form, className)} {...props} />
);

export default Form;
