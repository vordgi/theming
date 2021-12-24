import cn from 'classnames';
import styles from './styles.module.sass';

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  component?: React.ElementType;
}

const Container:React.FC<ContainerProps> = ({ component: Component = 'div', className, ...props }) => (
  <Component className={cn(styles.container, className)} {...props} />
);

export default Container;
