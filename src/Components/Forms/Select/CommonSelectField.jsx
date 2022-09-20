import { MenuItem, TextField } from '@mui/material';
import React from 'react';
import { useField, useFormikContext } from 'formik';

const CommonSelectField = ({name, options, ...otherProps}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (event) => {
    const {value} = event.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
  };

  if(meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  };

  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((item,index) => {
        return (
          <MenuItem key={index} value={item}>
            {options[item]}
          </MenuItem>
        )
      })}
    </TextField>
  );
};

export default CommonSelectField;