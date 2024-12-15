import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { ViewUpdate } from '@codemirror/view';
import { useState, useCallback } from 'react';
import styles from './TextEditor.module.scss';

export function TextEditor() {
  const [value, setValue] = useState("console.log('hello world!');");
  const onChange = useCallback((val: string, viewUpdate: ViewUpdate) => {
    console.log('val:', val);
    console.log(viewUpdate);
    setValue(val);
  }, []);
  return (
    <CodeMirror
      className={styles.container}
      value={value}
      height="200px"
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
  );
}
