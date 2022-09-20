import React from 'react';
import {
  Formik,
  Form,
  useFormikContext
} from 'formik';
import {
  Container,
  Grid,
  Typography
} from '@mui/material';
import * as Yup from 'yup';
import CommonTextField from '../Forms/TextField/CommonTextField';
import CommonSelectField from '../Forms/Select/CommonSelectField';
import CommonDateTimePicker from '../Forms/DateTimePicker/CommonDateTimePicker';
import CommonCheckbox from '../Forms/Checkbox/CommonCheckbox';
import CommonSendFormButton from '../Forms/SendFormButton/CommonSendFormButton';
import countries from '../../data/countries.json';

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  country: '',
  arrivalDate: '',
  departureDate: '',
  message: '',
  termsOfService: false,
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string('Solo se aceptan letras en este campo.')
    .required('Este campo es obligatorio.'),
  lastName: Yup.string('Solo se aceptan letras en este campo.')
    .required('Este campo es obligatorio.'),
  email: Yup.string()
    .email('Ingrese un correo electronico válido.')
    .required('Este campo es obligatorio.'),
  phone: Yup.number()
    .integer('Solo se aceptan números en este campo.')
    .typeError('Por favor ingrese un número de telefono válido.')
    .required('Este campo es obligatorio.'),
  addressLine1: Yup.string()
    .required('Este campo es obligatorio.'),
  addressLine2: Yup.string(),
  city: Yup.string()
    .required('Debes ingresar una ciudad.'),
  state: Yup.string()
    .required('Debes ingresar una provincia/estado.'),
  country: Yup.string()
    .required('Debes ingresar un país.'),
  arrivalDate: Yup.date()
    .required('Debes informar la fecha de llegada.'),
  departureDate: Yup.date()
    .required('Debes informar la fecha de salida.'),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], "Debes aceptar los terminos y condiciones.")
    .required('Debes aceptar los terminos y condiciones.'),
});

const containerStyles = {
  marginTop: '2rem',
  marginBottom: '2rem',
}

const BookingForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  }
  return (
    <Container
      maxWidth="md"
      sx={containerStyles}
    >
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={handleSubmit}
      >
        <Form>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
            >
              <Typography variant="h5">
                Información personal
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
            >
              <CommonTextField
                name="firstName"
                label="Nombre"
              />
            </Grid>

            <Grid
              item
              xs={6}
            >
              <CommonTextField
                name="lastName"
                label="Apellido"
              />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <CommonTextField
                name="email"
                label="Correo electronico"
              />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <CommonTextField
                name="phone"
                label="Telefono"
              />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <Typography variant="h5">
                Información de contacto
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
            >
              <CommonTextField
                name="addressLine1"
                label="Direccion"
              />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <CommonTextField
                name="addressLine2"
                label="Direccion (Segunda linea)"
              />
            </Grid>

            <Grid
              item
              xs={6}
            >
              <CommonTextField
                name="city"
                label="Ciudad"
              />
            </Grid>

            <Grid
              item
              xs={6}
            >
              <CommonTextField
                name="state"
                label="Provincia"
              />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <CommonSelectField
                name="country"
                label="Pais"
                options={countries}
              />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <Typography variant="h5">
                Información de reserva
              </Typography>
            </Grid>

            <Grid
              item
              xs={6}
            >
              <CommonDateTimePicker
                name="arrivalDate"
                label="Fecha de llegada"
              />
            </Grid>

            <Grid
              item
              xs={6}
            >
              <CommonDateTimePicker
                name="departureDate"
                label="Fecha de salida"
              />
            </Grid>

            <Grid 
              item
              xs={12}
            >
              <CommonTextField 
                name="message"
                label="Dejanos un mensaje con tu reserva"
                multiline={true}
                rows={6}
              />
            </Grid>

            <Grid 
              item
              xs={12}
            >
              <CommonCheckbox
                name="termsOfService"
                legend="Terminos y condiciones"
                label="Acepto los terminos y condiciones." 
              />
            </Grid>

            <Grid 
              item
              xs={12}
            >
              <CommonSendFormButton>
                Confirmar
              </CommonSendFormButton>
            </Grid>

          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};

export default BookingForm;