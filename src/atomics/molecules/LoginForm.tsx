import React from 'react';
import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';
import AtomInput from '@/atomics/atoms/Input';
import AtomButton from '@/atomics/atoms/Button';
import authService from '@/services/authService';
import useAuthStore from '@/store/authStore';
import { userValidationSchema } from '@/validations/userValidation';
import { useTranslation } from 'react-i18next';

const MoleculeLoginForm = () => {
  const { t } = useTranslation();
  const initialValues = useAuthStore(state => state.initialValues);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userValidationSchema}
      onSubmit={async values => await authService.login(values)}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.formContainer}>
          <AtomInput
            label={t('email')}
            value={values.email}
            type="email-address"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            error={touched.email ? errors.email : undefined}
          />

          <AtomInput
            label={t('password')}
            value={values.password}
            type="password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            error={touched.password ? errors.password : undefined}
          />

          <AtomButton text={t('btn_login')} onPress={handleSubmit} style={styles.button} />
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
