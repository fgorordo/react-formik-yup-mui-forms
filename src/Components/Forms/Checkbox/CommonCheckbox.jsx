import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import React from 'react';

const CommonCheckbox = ({name, label, legend, ...otherProps}) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (event) => {
    const { checked } = event.target;
    setFieldValue(name, checked);
  };

  const configCheckbox = {
    ...field,
    onChange: handleChange,

  };

  const configFormControl = {};

  if(meta && meta.touched && meta.error) {
    configFormControl.error = true;
  };

  return (
    <FormControl 
      { ...configFormControl }
    >
      <FormLabel 
        component="legend"
      >
        { legend}
      </FormLabel>
        <FormGroup>
          <FormControlLabel 
            control={<Checkbox { ...configCheckbox }/>}
            label={label}
          />
          {meta.touched && meta.error && <span style={{color:"#d32f2f",fontSize:"14px", fontWeight:"400"}}>{meta.error}</span>}
        </FormGroup>
    </FormControl>
  );
};

export default CommonCheckbox;