import cn from 'classnames';
import styles from './styles.module.sass';

export type AppBarProps = React.HTMLAttributes<HTMLElement>;

const AppBar:React.FC<AppBarProps> = ({ className, ...props }) => (
  <header className={cn(styles.appBar, className)} {...props} />
);

export default AppBar;
