import React, { PropTypes } from 'react';
import Biomorph from '../../components/Biomorph';
import styles from './Main.module.css';

const Main = ({
  parentGenome,
  descendantGenomes,
  getRandomGenome,
  reproduce,
  selectParentGenome,
  generation
}) => (
  <section>
    <section className={styles.description}>
      <p>1. Click on a parent to generate a biomorph you'll start evolution from</p>
      <p>2. Click any one of the descendants to make it a parent in the next generation.</p>
      <p>3. Repeat this process to observe how the biomorphs evolve over time.</p>
    </section>
    <h2>Parent (generation #{generation})</h2>
    <section className={styles.parent}>
      <Biomorph
        genome={parentGenome}
        onClick={getRandomGenome} />
    </section>
    <h2>Descendants</h2>
    <section className={styles.descendants}>
      {descendantGenomes.map((genome, i) => (
        <Biomorph
          genome={genome}
          onClick={selectParentGenome}
          number={i + 1}
          key={i} />
      ))}
    </section>
  </section>
);

Main.propTypes = {
  parentGenome: PropTypes.array.isRequired,
  descendantGenomes: PropTypes.arrayOf(PropTypes.array).isRequired,
  getRandomGenome: PropTypes.func.isRequired,
  reproduce: PropTypes.func.isRequired,
  selectParentGenome: PropTypes.func.isRequired,
  generation: PropTypes.number.isRequired
};

export default Main;
