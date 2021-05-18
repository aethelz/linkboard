import { useState } from 'react';
import styles from './Header.module.scss';
import NavLink from '@element/NavLink';
import SearchBar from '@element/SearchBar';
import Head from 'next/head';
import { useRouter } from 'next/router';

const boards = [
  ['First Board', '/first'],
  ['Second Board', '/second'],
  ['Third Board', '/third'],
];

const Header = () => {
  const router = useRouter();
  const title =
    boards.find((b) => b[1] === router.asPath)?.[0] ?? 'Unknown Board';
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className={styles.header}>
      <Head>
        <title>{title}</title>
      </Head>

      <h1>{title}</h1>
      <SearchBar onSearchTermChange={setSearchTerm} />
      <div>{searchTerm}</div>
      <nav>
        <ul className={styles.navWrapper}>
          {boards.map(([title, href]) => (
            <NavLink key={href} activeClassName={styles.activeLink} href={href}>
              <a>{title}</a>
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
