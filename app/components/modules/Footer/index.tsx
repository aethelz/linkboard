import styles from './Footer.module.scss';
import NavLink from '@element/NavLink';

const Footer = () => {
  const isLogged = false;
  return (
    <footer className={styles.footer}>
      <div></div>
      <nav>
        <ul className={styles.navWrapper}>
          <NavLink href="/editor">
            <a>Editor</a>
          </NavLink>
          {isLogged ? (
            <NavLink href="/logout">
              <a>Logout</a>
            </NavLink>
          ) : (
            <NavLink href="/login">
              <a>Login</a>
            </NavLink>
          )}
        </ul>
      </nav>
      <div>Made by aethelz</div>
    </footer>
  );
};

export default Footer;
