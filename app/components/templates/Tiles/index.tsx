import styles from './Tiles.module.scss';
import Tile from '@element/Tile';

const mock = new Array(200).fill('TEST NAME');

const Tiles = () => {
  return (
    <main className={styles.wrapper}>
      {mock.map((m) => (
        <Tile href="/test">{m}</Tile>
      ))}
    </main>
  );
};

export default Tiles;
