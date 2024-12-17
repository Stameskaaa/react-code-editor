import React from 'react';
import styles from './OutputContent.module.scss';

interface Props {
  loading: boolean;
  language: string;
  result: string;
  error: any;
}

export const OutputContent: React.FC<Props> = ({ loading, error, language, result }) => {
  if (loading) {
    return <div className={styles.loader} />;
  }

  if (error) {
    return <div className={styles.error}>Some error will be occured</div>;
  }

  if (!language && !result) {
    return <p className={styles.warning}>Выполните компиляцию кода</p>;
  }

  return (
    <div className={styles.container}>
      {language && (
        <>
          <h1>Language:</h1>
          <p>{language}</p>
        </>
      )}
      {result && (
        <>
          <h1>Result:</h1>
          <p>{result}</p>
        </>
      )}
    </div>
  );
};
