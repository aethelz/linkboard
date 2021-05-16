import styles from './Tile.module.scss';
import Link from 'next/link';
import type { FunctionComponent } from 'react';
import type { LinkProps } from 'next/link';

type Props = {
  href: LinkProps['href'];
};
const Tile: FunctionComponent<Props> = ({ href, children }) => {
  return (
    <div className={styles.wrapper}>
      <Link href={href}>{children}</Link>
    </div>
  );
};

export default Tile;
