import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import styles from './CodeOutput.module.scss';
import { toggleCodeOutput } from '../../redux/slices/CodeOutputSlice';

export const CodeOutput = () => {
  const { isOpen } = useAppSelector((state) => state.codeOutput);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timerId: NodeJS.Timeout | null;
    if (isOpen) {
      setLoading(true);
      timerId = setTimeout(() => {
        setLoading(false);
        timerId = null;
      }, 1000);
    }
    return () => {
      timerId && clearTimeout(timerId);
    };
  }, [isOpen]);

  function handleOpenCodeOutput() {
    dispatch(toggleCodeOutput(false));
  }

  return (
    <div className={`${styles.container} ${isOpen ? styles.opened : null}`}>
      <button onClick={handleOpenCodeOutput}>Close</button>
      {loading ? <div className={styles.loader} /> : null}
    </div>
  );
};
