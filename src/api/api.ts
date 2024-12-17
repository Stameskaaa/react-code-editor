import { ExecuteCodeResponse } from '../types/types';

interface ICompileData {
  language: string;
  version: string;
  code: string;
}

export async function CompileCode({ language, version, code }: ICompileData) {
  const data = {
    language: language,
    version: version,
    files: [
      {
        content: code,
      },
    ],
  };

  try {
    const response = await fetch('https://emkc.org/api/v2/piston/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();

    return result as ExecuteCodeResponse;
  } catch (error) {
    console.error('Request error:', error);
    throw error;
  }
}
