import { CodeOutput } from '../CodeOutput/CodeOutput';
import { TextEditor } from '../TextEditor/TextEditor';
import styles from './CodeWorkspace.module.scss';

export const CodeWorkspace = () => {
  return (
    <div className={styles.container}>
      <TextEditor />
      <CodeOutput />
    </div>
  );
};
