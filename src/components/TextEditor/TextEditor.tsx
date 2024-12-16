import CodeMirror from '@uiw/react-codemirror';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { useState, useCallback } from 'react';
import styles from './TextEditor.module.scss';
import { tokyoNightDay } from '@uiw/codemirror-theme-tokyo-night-day';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { useAppSelector } from '../../hooks/reduxHooks';
import { languageModes } from '../../constants/languageModes';
import { syntaxTree } from '@codemirror/language';
import { linter, Diagnostic } from '@codemirror/lint';
import { lintGutter } from '@codemirror/lint';

export function TextEditor() {
  let { currentTheme } = useAppSelector((state) => state.theme);
  let { activeLangIndex } = useAppSelector((state) => state.lang);
  const [value, setValue] = useState("console.log('hello world!');");

  const onChange = useCallback((val: string, viewUpdate: ViewUpdate) => {
    // console.log('val:', val);
    // console.log(viewUpdate);
    setValue(val);
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
      className={styles.container}
      value={value}
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
