import styles from "./CharacterList.module.css";
import { CharacterListProps } from ".";

/**
 * Renders a list of anime characters.
 *
 * @param {CharacterListProps} props
 * @returns {JSX.Element}
 */
const CharacterList = ({ data }: CharacterListProps): JSX.Element => {
  return (
    <div className={`${styles.wrapper} flex flex-wrap`}>
      {data.length === 0 && (
        <div className={`${styles.item} flex-0`}>
          <p>No information.</p>
        </div>
      )}

      {data.map((character) => (
        <div
          key={character.id}
          className={`${styles.item} flex-0 h-60 relative`}
        >
          <img
            className="w-full h-full object-cover"
            src={character.image}
            alt={character.name}
          />
          <div
            className={`${styles.caption} absolute bottom-0 left-0 right-0 px-4 py-5`}
          >
            <h3 className="text-white text-center mb-2">{character.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
