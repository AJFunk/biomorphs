import React, {PropTypes} from 'react';
import IndexLink from 'react-router/lib/IndexLink';
import styles from './Header.module.css';
import { encode } from '../../lib/utils';

const Header = ({genome, generation}) => (
  <nav className={styles.nav}>
    <IndexLink
      className={styles.link}
      activeClassName={styles.activeLink}
      to="/">
      Biomorphs
    </IndexLink>
  </nav>
);

Header.propTypes = {
  genome: PropTypes.array.isRequired,
  generation: PropTypes.number.isRequired
};

export default Header;
