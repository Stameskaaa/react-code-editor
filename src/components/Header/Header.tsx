import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { DocumentsIcon } from '../../icons/DocumentsIcon';
import { PlayIcon } from '../../icons/PlayIcon';
import styles from './Header.module.scss';
import { setTheme } from '../../redux/slices/ThemeSlice';
import { languageModes } from '../../constants/languageModes';
import { setLangLanguage } from '../../redux/slices/LanguageSlice';
import { toggleCodeOutput } from '../../redux/slices/CodeOutputSlice';

export const Header = () => {
  const { activeLangIndex } = useAppSelector((state) => state.lang);
  const { currentTheme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      dispatch(setTheme('light'));
    } else {
      dispatch(setTheme('dark'));
    }
  }

  function handleChangeLanguage(i: number, id: string) {
    dispatch(setLangLanguage({ index: i, id }));
  }

  function handleOpenCodeOutput() {
    dispatch(toggleCodeOutput(true));
  }

  return (
    <header className={styles.header}>
      <div className={styles.select_lang__buttons}>
        {languageModes.map((langObj, i) => (
          <button
            key={langObj.name}
            onClick={() => handleChangeLanguage(i, langObj.id)}
            className={`${styles.select_lang__butt} ${
              activeLangIndex === i ? styles.active : null
            }`}>
            {langObj.name}
          </button>
        ))}
      </div>

      <div className={styles.action__buttons}>
        <button className={`${styles.action__butt} ${styles.copy_butt}`}>
          {' '}
          <DocumentsIcon /> Copy
        </button>
        <button
          onClick={handleOpenCodeOutput}
          className={`${styles.action__butt} ${styles.run__butt}`}>
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
