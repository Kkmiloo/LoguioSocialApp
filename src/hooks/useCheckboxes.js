import { useState } from 'react';

const useCheckbox = (data) => {
  const initialCheckboxState = data.reduce((acc, curr) => ({ ...acc, [curr]: false }), {});
  const [checkboxes, setCheckboxes] = useState(initialCheckboxState);

  const handleValueChange = (item) => {
    setCheckboxes((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return [checkboxes, handleValueChange];
};

export default useCheckbox;
