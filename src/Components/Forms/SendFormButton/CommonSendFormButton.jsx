import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
import React from 'react';

const CommonSendFormButton = ({children, ...otherProps}) => {
  const {submitForm} = useFormikContext();

  const handleSubmit = (event) => {
    submitForm();
  };

  const configSendFormButton = {
    ...otherProps,
    onClick: handleSubmit,
    variant: "contained",
    color: "primary",
    fullWidth: true,
  };

  return (
    <Button {...configSendFormButton}>
      {children}
    </Button>
  );
};

export default CommonSendFormButton;