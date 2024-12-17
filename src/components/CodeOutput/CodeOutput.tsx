import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import styles from './CodeOutput.module.scss';
import { toggleCodeOutput } from '../../redux/slices/CodeOutputSlice';
import { CompileCode } from '../../api/api';
import { languageModes } from '../../constants/languageModes';
import { OutputContent } from './OutputContent/OutputContent';
import { ExecuteCodeResponse } from '../../types/types';

export const CodeOutput = () => {
  const { isOpen, executeFlag } = useAppSelector((state) => state.codeOutput.state);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const codeObject = useAppSelector((state) => state.editorText);
  const { activeLangId, activeLangIndex } = useAppSelector((state) => state.lang);
  const [outputData, setOutputData] = useState<ExecuteCodeResponse>({
    language: '',
    version: '',
    run: { output: '' },
  });
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (isOpen) {
      ExecuteCode();
    }
  }, [executeFlag]);

  async function ExecuteCode() {
    try {
      setLoading(true);
      const output = await CompileCode({
        language: languageModes[activeLangIndex].id,
        version: languageModes[activeLangIndex].version,
        code: codeObject[activeLangId],
      });
      setOutputData(output);

      // console.log('Code Output:', output.run.output);
    } catch (error) {
      console.error('Execution failed:', error);
      setErrors(errors);
    } finally {
      setLoading(false);
    }
  }

  function handleOpenCodeOutput() {
    dispatch(toggleCodeOutput(false));
  }

  return (
    <div className={`${styles.container} ${isOpen ? styles.opened : null}`}>
      <button onClick={handleOpenCodeOutput}>Close</button>

      <OutputContent
        error={errors}
        language={outputData?.language}
        loading={loading}
        result={outputData?.run?.output}
      />
    </div>
  );
};
