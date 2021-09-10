import React from 'react';
import {useFormik} from 'formik';
import {StyleSheet, View} from 'react-native';
import {Button, HelperText, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {clientApi} from '../../api/ClientApi';
import {Client} from '../../api/entitys/client.entity';
import {showErrors} from '../../utils/utils';
import Toast from 'react-native-toast-message';
import {createClientSchema} from '../../api/validations/client.validation';
import DatetimePickerCustom from '../ui/datetime-picker/DatetimePickerCustom';

interface MyProps {}
const defaultProps: MyProps = {};
const FormCreateClient = (props: MyProps) => {
  props = {...defaultProps, ...props};
  const {} = props;

  const initialProduct: Client = {
    name: '',
    lastname: '',
    dateBirthday: '',
  };

  const {handleChange, handleSubmit, values, errors, isValid, setFieldValue} =
    useFormik({
      initialValues: initialProduct,
      onSubmit: async (values: Client, {resetForm}) => {
        // reseteo el formulario despues de crear el registro
        try {
          let client = await clientApi.create(values);
          if (client) {
            // limpiar el formulario
            resetForm({
              values: initialProduct,
            });
            Toast.show({
              type: 'success',
              text1: 'Completed',
              text2: `Client: ${client.name} ${client.lastname} Successfully Created 👋`,
            });
          }
        } catch (error) {
          Toast.show({
            type: 'error',
            text1: 'Error en el servidor',
            text2: 'Ocurrio un error en la creacion del producto',
          });
        }
      },
      validationSchema: createClientSchema,
    });

  return (
    <>
      <View>
        <TextInput
          value={values.name}
          onChangeText={handleChange('name')}
          style={styles.input}
          placeholder="Example: Maximo"
          mode="outlined"
          label="Name"
        />
        <HelperText type="error" visible={showErrors(errors.name)}>
          {errors.name}
        </HelperText>
        <TextInput
          value={values.lastname}
          onChangeText={handleChange('lastname')}
          style={styles.input}
          placeholder="Example: Apaza"
          mode="outlined"
          label="Lastname"
        />
        <HelperText type="error" visible={showErrors(errors.lastname)}>
          {errors.lastname}
        </HelperText>

        <TextInput
          value={values.dateBirthday.toString()}
          style={styles.input}
          placeholder="Example: 2021-09-01"
          mode="outlined"
          label="Date BirthDay"
          disabled={true}
        />
        <HelperText type="error" visible={showErrors(errors.dateBirthday)}>
          {errors.dateBirthday}
        </HelperText>

        <DatetimePickerCustom
          handleChange={setFieldValue}
          name="dateBirthday"
        />

        <Button mode="contained" onPress={handleSubmit} disabled={!isValid}>
          <Icon name="save" size={20} /> Save Client
        </Button>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    marginTop: 10,
  },
});
export default FormCreateClient;
