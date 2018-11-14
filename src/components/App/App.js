import React, { PropTypes } from 'react';
import Header from '../Header';
import styles from './App.module.css';

const App = ({ children}) => (
  <main className={styles.container}>
    <Header />
    <div className={styles.content}>
      {children}
    </div>
    <footer className={styles.footer}>
      Author: <a href="https://github.com/ajfunk" target="_blank">AJ Funk</a>
      {' '}
      <a href="https://github.com/ajfunk/biomorphs" target="_blank">View source code</a>
    </footer>
  </main>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
