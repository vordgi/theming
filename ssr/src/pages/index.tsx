import { useEffect, useState } from 'react';
import type { GetServerSideProps } from 'next/types';
import type { Theme } from '../types/theme';
import ThemeContext from '../contexts/ThemeContext';
import SignUpForm from '../components/molecules/SignUpForm';
import Layout from '../components/templates/Layout';
import MockBlock from '../components/organisms/MockBlock';

const HomePage: React.FC<{ mockData: string[]; theme: Theme }> = ({
  mockData, theme: defaultTheme,
}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const userDeviceTheme = ctx.req.headers['sec-ch-prefers-color-scheme'] as string;
  const cookieTheme = ctx.req.cookies.theme;
  const userDetectedTheme = cookieTheme || userDeviceTheme;
  const defaultTheme = process.env.NEXT_PUBLIC_THEME || 'light';
  const theme = (userDetectedTheme === 'light' || userDetectedTheme === 'dark') ? userDetectedTheme : defaultTheme;
  return ({
    props: {
      mockData: [...new Array(500)].map((_v, i) => `Item №${i + 1}.`),
      theme,
    },
  });
};

export default HomePage;
