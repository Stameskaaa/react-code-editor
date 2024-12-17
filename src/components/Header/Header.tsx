import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { DocumentsIcon } from '../../icons/DocumentsIcon';
import { PlayIcon } from '../../icons/PlayIcon';
import styles from './Header.module.scss';
import { setTheme } from '../../redux/slices/ThemeSlice';
import { languageModes } from '../../constants/languageModes';
import { setLangLanguage } from '../../redux/slices/LanguageSlice';
import { doExecute, toggleCodeOutput } from '../../redux/slices/CodeOutputSlice';
import { useState } from 'react';
import { ConsoleIcons } from '../../icons/ConsoleIcons';

export const Header = () => {
  const { activeLangIndex, activeLangId } = useAppSelector((state) => state.lang);
  const { currentTheme } = useAppSelector((state) => state.theme);
  const [copied, setCopied] = useState(false);
  const editorTextData = useAppSelector((state) => state.editorText);
  const test = { text: 'dsadsaadsads' };
  const dispatch = useAppDispatch();

  function handleChangeTheme(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      dispatch(setTheme('light'));
    } else {
      dispatch(setTheme('dark'));
    }
  }

  function handleChangeLanguage(i: number, id: string) {
    dispatch(setLangLanguage({ index: i, id }));
  }

  function handleCopy() {
    navigator.clipboard
      .writeText(editorTextData[activeLangId])
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error('Ошибка при копировании:', error);
      });
  }

  function handleOpenCodeOutput() {
    dispatch(toggleCodeOutput(true));
    dispatch(doExecute());
  }

  function handleShowOutput() {
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
        <button onClick={handleCopy} className={`${styles.action__butt} ${styles.copy_butt}`}>
          <DocumentsIcon /> {copied ? 'Copied' : 'Copy'}
        </button>
        <button
          onClick={handleOpenCodeOutput}
          className={`${styles.action__butt} ${styles.run__butt}`}>
          <PlayIcon /> Run
        </button>

        <button
          onClick={handleShowOutput}
          className={`${styles.action__butt} ${styles.show__butt}`}>
          {' '}
          <ConsoleIcons /> Show
        </button>

        <label className={styles.theme_switch__label}>
          <input
            onChange={handleChangeTheme}
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
