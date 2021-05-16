import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import type { FunctionComponent } from 'react';
import type { LinkProps } from 'next/link';

type Props = {
  href: LinkProps['href'];
  activeClassName?: string;
};
const NavLink: FunctionComponent<Props> = ({
  href,
  children,
  activeClassName = '',
}) => {
  const router = useRouter();
  const classes = classNames({
    [activeClassName]: router.asPath === href,
  });
  return (
    <li className={classes}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default NavLink;
