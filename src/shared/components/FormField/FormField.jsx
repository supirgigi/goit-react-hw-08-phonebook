import { useMemo } from 'react';
import { nanoid } from 'nanoid';

const FormField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div>
      <label htmlFor={id}></label>
      <input id={id} onChange={handleChange} {...props} />
    </div>
  );
};

export default FormField;
