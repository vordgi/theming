import cn from 'classnames';
import styles from './styles.module.sass';
import Container from '../../atoms/Conrainer';

export type FooterProps = React.HTMLAttributes<HTMLDivElement>;

const Footer: React.FC<FooterProps> = ({ className, ...props }) => (
  <footer className={cn(styles.footer, className)} {...props}>
    <Container>
      <a href="https://habr.com/ru/post/563572/" target="_blank" rel="noopener noreferrer" aria-label="Habr post">
        <svg width="70" height="24" viewBox="0 0 70 24" fill="inherit" xmlns="http://www.w3.org/2000/svg" data-some={'"70" height="24" viewBox="0 0 70 24" fill="inherit" xmlns="http://www.w3.org/2000/svg"'}>
          <path fillRule="evenodd" clipRule="evenodd" d="M9.68402 7.09114C7.89746 6.96209 6.1708 7.76415 5.11701 9.21259V0H0V23.5717H5.11701V14.9484C5.11701 12.8858 6.29559 11.9037 7.71971 11.9037C9.27151 11.9037 10.2537 12.9546 10.2537 14.8501V23.5717H15.3707V13.043C15.3707 9.33045 12.8858 7.09114 9.68402 7.09114ZM30.0244 23.5717H34.9351V7.53311H30.0244V9.2617C28.9385 7.83109 27.2226 7.02078 25.4279 7.09114C21.1261 7.09114 17.9537 10.7939 17.9537 15.5278C17.9537 20.2618 21.1261 23.994 25.4083 23.994C27.2076 24.0715 28.9313 23.2646 30.0244 21.8332V23.5717ZM23.1493 15.5376C23.1493 16.7658 23.8045 17.9006 24.8681 18.5146C25.9317 19.1287 27.242 19.1287 28.3056 18.5146C29.3692 17.9006 30.0244 16.7658 30.0244 15.5376C30.0244 13.6392 28.4853 12.1001 26.5869 12.1001C24.6884 12.1001 23.1493 13.6392 23.1493 15.5376ZM47.9683 23.994C52.2505 23.994 55.4327 20.2618 55.4327 15.5278C55.4327 10.8037 52.2505 7.09114 47.9978 7.10096C46.2954 7.02741 44.6566 7.75416 43.5683 9.06526V0H38.4611V23.5717H43.3718V21.8529C44.4597 23.2778 46.1776 24.078 47.9683 23.994ZM43.3227 15.5278C43.3227 17.4263 44.8618 18.9654 46.7603 18.9654C48.6588 18.9654 50.1978 17.4263 50.1978 15.5278C50.1978 13.6293 48.6588 12.0903 46.7603 12.0903C44.8618 12.0903 43.3227 13.6293 43.3227 15.5278ZM68.7506 12.434L69.1926 7.33668C68.611 7.17228 68.0094 7.08964 67.4051 7.09114C65.6311 6.97076 63.9392 7.85463 63.0247 9.37955V7.53311H58.1139V23.5717H63.2408V14.8993C63.1403 14.0961 63.4207 13.2922 63.9988 12.7257C64.5768 12.1592 65.3863 11.8951 66.1872 12.0117C67.058 12.0233 67.9221 12.1656 68.7506 12.434Z" fill="inherit" />
        </svg>
      </a>
      {/* <a href="https://gitlab.com/Aleksandr909/theme-sc" target="_blank" rel="noopener noreferrer" aria-label="Gitlab"><a href="https://gitlab.com/Aleksandr909/theme-sc" target="_blank" rel="noopener noreferrer" aria-label="Gitlab">
        <GitLogo height={40} />
      </a> */}
    </Container>
  </footer>
);

export default Footer;
