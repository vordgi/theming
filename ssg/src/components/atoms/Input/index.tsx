import cn from 'classnames';
import styles from './styles.module.sass';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.MutableRefObject<HTMLInputElement>;
  label?: string;
}

const Input:React.FC<InputProps> = ({
  id, label, inputRef, className, ...props
}) => (
  <div className={cn(styles.container, className)}>
    {label && <label htmlFor={id} className={styles.label}>{label}</label>}
    <input className={styles.input} id={id} {...props} ref={inputRef} />
    <span className={styles.underline} />
  </div>
);

export default Input;
