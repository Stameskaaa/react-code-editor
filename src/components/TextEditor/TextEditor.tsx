import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { useCallback } from 'react';
import styles from './TextEditor.module.scss';
import { tokyoNightDay } from '@uiw/codemirror-theme-tokyo-night-day';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { languageModes } from '../../constants/languageModes';
import { syntaxTree } from '@codemirror/language';
import { linter, Diagnostic } from '@codemirror/lint';
import { lintGutter } from '@codemirror/lint';
import { setTextForLanguage } from '../../redux/slices/EditorTextSlice';

export function TextEditor() {
  const { currentTheme } = useAppSelector((state) => state.theme);
  const { activeLangIndex, activeLangId } = useAppSelector((state) => state.lang);
  const textObject = useAppSelector((state) => state.editorText);
  const dispatch = useAppDispatch();

  console.log(activeLangId);

  const onChange = useCallback((value: string) => {
    dispatch(setTextForLanguage({ languageName: activeLangId, text: value }));
  }, []);

  const regexpLinter = linter((view) => {
    let diagnostics: Diagnostic[] = [];

    syntaxTree(view.state)
      .cursor()
      .iterate((node) => {
        if (node.name === 'RegExp') {
          diagnostics.push({
            from: node.from,
            to: node.to,
            severity: 'warning',
            message: 'Regular expressions are FORBIDDEN',
            actions: [
              {
                name: 'Remove',
                apply(view, from, to) {
                  view.dispatch({ changes: { from, to } });
                },
              },
            ],
          });
        }
      });

    return diagnostics;
  });

  return (
    <CodeMirror
      autoFocus
      className={styles.container}
      value={textObject[activeLangId]}
      height="100%"
      theme={currentTheme === 'dark' ? tokyoNight : tokyoNightDay}
      extensions={[
        languageModes[activeLangIndex].mode,
        regexpLinter,
        lintGutter(),
        EditorView.lineWrapping,
      ]}
      onChange={onChange}
    />
  );
}
