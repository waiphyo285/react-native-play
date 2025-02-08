import React from 'react';
import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import AtomButton from '../../atomics/atoms/Button';
import ErrorText from '../atoms/TextError';
import authService from '../../services/authService';
import useUserStore from '../../store/userStore';
import { userValidationSchema } from '../../validations/userValidation';

const MoleculeLoginForm = () => {
  const initialValues = useUserStore(state => state.initialValues);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userValidationSchema}
      onSubmit={async values => await authService.login(values)}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.formContainer}>
          <TextInput
            label="Email"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            error={touched.email && Boolean(errors.email)}
            style={styles.input}
          />
          <ErrorText error={errors.email} visible={touched.email} />

          <TextInput
            label="Password"
            secureTextEntry
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            error={touched.password && Boolean(errors.password)}
            style={styles.input}
          />
          <ErrorText error={errors.password} visible={touched.password} />

          <AtomButton text={'Login'} onPress={handleSubmit} style={styles.button} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    padding: 6,
    marginTop: 10,
  },
});

export default MoleculeLoginForm;
