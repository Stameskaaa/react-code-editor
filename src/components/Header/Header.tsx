import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { DocumentsIcon } from '../../icons/DocumentsIcon';
import { PlayIcon } from '../../icons/PlayIcon';
import styles from './Header.module.scss';
import { useState } from 'react';
import { setTheme } from '../../redux/slices/themeSlice';

interface Props {
  languageList: string[];
}
export const Header: React.FC<Props> = ({ languageList }) => {
  const [activeLangIndex, setActiveLangIndex] = useState<number>(0);
  const { currentTheme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      dispatch(setTheme('light'));
    } else {
      dispatch(setTheme('dark'));
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.select_lang__buttons}>
        {languageList.map((lang, i) => (
          <button
            key={lang}
            onClick={() => setActiveLangIndex(i)}
            className={`${styles.select_lang__butt} ${
              activeLangIndex === i ? styles.active : null
            }`}>
            {lang}
          </button>
        ))}
      </div>

      <div className={styles.action__buttons}>
        <button className={`${styles.action__butt} ${styles.copy_butt}`}>
          {' '}
          <DocumentsIcon /> Copy
        </button>
        <button className={`${styles.action__butt} ${styles.run__butt}`}>
          <PlayIcon /> Run
        </button>

        <label className={styles.theme_switch__label}>
          <input
            onChange={handleCheckboxChange}
            type="checkbox"
            id="themeSwitch"
            name="theme-switch"
            checked={currentTheme === 'dark' ? false : true}
            className={styles.theme_switch__input}
          />
          <span />
        </label>
      </div>
    </header>
  );
};
