import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TextsByLanguageState {
  [languageName: string]: string;
}

const initialState: TextsByLanguageState = {
  javascript: `// Функция для вычисления факториала
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Пример использования
const number = 5;
console.log(\`Factorial of \${number} is \${factorial(number)}\`);
`,
  python: `# Функция для вычисления факториала
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

# Пример использования
number = 5
print(f"Factorial of {number} is {factorial(number)}")`,
  cpp: `#include <iostream>
using namespace std;

// Функция для вычисления факториала
int factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

int main() {
    int number = 5;
    cout << "Factorial of " << number << " is " << factorial(number) << endl;
    return 0;
}`,
};

const editorTextSlice = createSlice({
  name: 'editorText',
  initialState,
  reducers: {
    setTextForLanguage(state, action: PayloadAction<{ languageName: string; text: string }>) {
      state[action.payload.languageName] = action.payload.text;
    },
    clearTextForLanguage(state, action: PayloadAction<string>) {
      state[action.payload] = '';
    },
    resetAllTexts(state) {
      Object.keys(state).forEach((key) => {
        state[key] = '';
      });
    },
  },
});

export const { setTextForLanguage, clearTextForLanguage, resetAllTexts } = editorTextSlice.actions;
export const editorTextReducer = editorTextSlice.reducer;
