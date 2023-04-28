import { useEffect, useState } from 'react';

type Props = {
  key: string;
  initailValue: any;
};

const useSaveMessage = ({ key, initailValue }: Props) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initailValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  console.log('value', value);

  return [value, setValue];
};

export default useSaveMessage;
