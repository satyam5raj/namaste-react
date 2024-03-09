import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export default function Mode() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label className="inline-flex items-center mt-3">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-gray-600"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light');
          }}
        /><span className="ml-2 text-gray-700">Use dark mode</span>
      </label>
    </ThemeContext.Provider>
  );
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white';
  return (
    <section className={`${className} border border-black rounded-md p-5 mb-4`}>
      <h1 className="text-xl">{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white';
  return (
    <button className={`${className} border border-gray-700 py-1 px-3 mr-2 mt-2`}>
      {children}
    </button>
  );
}

