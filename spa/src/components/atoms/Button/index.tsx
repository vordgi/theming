import cn from 'classnames';
import styles from './styles.module.sass';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button:React.FC<ButtonProps> = ({ className, ...props }) => (
  <button className={cn(styles.button, className)} {...props} type="button" />
);

export default Button;
