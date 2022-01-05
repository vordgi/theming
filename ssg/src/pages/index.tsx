import { useEffect, useState } from 'react';
import type { GetStaticProps } from 'next/types';
import type { Theme } from '../types/theme';
import ThemeContext from '../contexts/ThemeContext';
import SignUpForm from '../components/molecules/SignUpForm';
import Layout from '../components/templates/Layout';
import MockBlock from '../components/organisms/MockBlock';

const HomePage: React.FC<{ mockData: string[] }> = ({ mockData }) => {
  const [theme, setTheme] = useState<Theme>(process.env.NEXT_PUBLIC_THEME as Theme || 'light');
  const changeTheme = (newTheme: Theme) => {
    document.cookie = `theme=${newTheme};path=/;max-age=31536000`;
    document.documentElement.classList.remove('theme-dark', 'theme-light');
    document.documentElement.classList.add(`theme-${newTheme}`);
    setTheme(newTheme);
  };

  const onChangeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    changeTheme(newTheme);
  };

  useEffect(() => {
    const savedTheme = document.cookie.match(/theme=([^;]*)/)?.[1] as Theme | undefined;
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) changeTheme(savedTheme);
    else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      changeTheme('dark');
    } else {
      changeTheme('light');
    }
  }, []);

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (e.matches) {
        changeTheme('dark');
      } else {
        changeTheme('light');
      }
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, onChangeTheme }}>
      <Layout>
        <MockBlock mockData={mockData} />
        <SignUpForm />
      </Layout>
    </ThemeContext.Provider>
  );
};

export const getStaticProps: GetStaticProps = () => ({
  props: {
    mockData: [...new Array(500)].map((_v, i) => `Item №${i + 1}.`),
  },
});

export default HomePage;
