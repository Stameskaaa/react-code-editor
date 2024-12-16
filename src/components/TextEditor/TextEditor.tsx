import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { ViewUpdate } from '@codemirror/view';
import { useState, useCallback } from 'react';
import styles from './TextEditor.module.scss';
import { tokyoNightDay } from '@uiw/codemirror-theme-tokyo-night-day';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { useAppSelector } from '../../hooks/reduxHooks';

export function TextEditor() {
  let { currentTheme } = useAppSelector((state) => state.theme);
  const [value, setValue] = useState("console.log('hello world!');");

  const onChange = useCallback((val: string, viewUpdate: ViewUpdate) => {
    // console.log('val:', val);
    // console.log(viewUpdate);
    setValue(val);
  }, []);

  return (
    <CodeMirror
      className={styles.container}
      value={value}
      height="100%"
      theme={currentTheme === 'dark' ? tokyoNight : tokyoNightDay}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
  );
}
