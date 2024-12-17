import CodeMirror from '@uiw/react-codemirror';
import { useCallback } from 'react';
import styles from './TextEditor.module.scss';
import { tokyoNightDay } from '@uiw/codemirror-theme-tokyo-night-day';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { languageModes } from '../../constants/languageModes';
import { setTextForLanguage } from '../../redux/slices/EditorTextSlice';
import { highlightSelectionMatches } from '@codemirror/search';
import { EditorView } from '@codemirror/view';

export function TextEditor() {
  const { currentTheme } = useAppSelector((state) => state.theme);
  const { activeLangIndex, activeLangId } = useAppSelector((state) => state.lang);
  const { isOpen } = useAppSelector((state) => state.codeOutput.state);
  const textObject = useAppSelector((state) => state.editorText);
  const dispatch = useAppDispatch();

  const onChange = useCallback(
    (value: string) => {
      dispatch(setTextForLanguage({ languageName: activeLangId, text: value }));
    },
    [activeLangId],
  );

  return (
    <CodeMirror
      autoFocus
      className={`${styles.container} ${isOpen ? styles.reduced : null}`}
      value={textObject[activeLangId]}
      theme={currentTheme === 'dark' ? tokyoNight : tokyoNightDay}
      extensions={[
        languageModes[activeLangIndex].mode,
        EditorView.lineWrapping,
        highlightSelectionMatches(),
      ]}
      onChange={onChange}
    />
  );
}
