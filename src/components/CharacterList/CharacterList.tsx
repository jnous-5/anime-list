import styles from "./CharacterList.module.css";

/**
 * Renders a list of anime characters.
 *
 * @param {CharacterListProps} props
 * @returns {JSX.Element}
 */
const CharacterList = (): JSX.Element => {
  return (
    <div className={`${styles.wrapper} flex flex-wrap`}>
      <div className={`${styles.item} flex-0 h-60 relative`}>
        <img
          className="w-full h-full object-cover"
          src="https://media.kitsu.io/characters/images/188/original.jpg"
          alt="Eva Heinemann"
        />
        <div
          className={`${styles.caption} absolute bottom-0 left-0 right-0 px-4 py-5`}
        >
          <h3 className="text-white text-center mb-2">Eva Heinemann</h3>
        </div>
      </div>

      <div className={`${styles.item} flex-0 h-60 relative`}>
        <img
          className="w-full h-full object-cover"
          src="https://media.kitsu.io/characters/images/188/original.jpg"
          alt="Eva Heinemann"
        />
        <div
          className={`${styles.caption} absolute bottom-0 left-0 right-0 px-4 py-5`}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <h3 className="text-white text-center mb-2">Eva Heinemann</h3>
        </div>
      </div>

      <div className={`${styles.item} flex-0 h-60 relative`}>
        <img
          className="w-full h-full object-cover"
          src="https://media.kitsu.io/characters/images/188/original.jpg"
          alt="Eva Heinemann"
        />
        <div
          className={`${styles.caption} absolute bottom-0 left-0 right-0 px-4 py-5`}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <h3 className="text-white text-center mb-2">Eva Heinemann</h3>
        </div>
      </div>

      <div className={`${styles.item} flex-0 h-60 relative`}>
        <img
          className="w-full h-full object-cover"
          src="https://media.kitsu.io/characters/images/188/original.jpg"
          alt="Eva Heinemann"
        />
        <div
          className={`${styles.caption} absolute bottom-0 left-0 right-0 px-4 py-5`}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <h3 className="text-white text-center mb-2">Eva Heinemann</h3>
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
