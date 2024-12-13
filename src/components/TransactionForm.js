// src/components/TransactionForm.js
import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { GlobalContext } from '../context/GlobalState';
import '../styles/TransactionForm.css';

const TransactionForm = () => {
  const { dispatch } = useContext(GlobalContext);

  const initialValues = {
    date: '',
    category: '',
    amount: '',
  };

  const validationSchema = Yup.object({
    date: Yup.date().required('Date is required'),
    category: Yup.string().required('Category is required'),
    amount: Yup.number().required('Amount is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: values });
    resetForm();
  };

  return (
    <div className="transaction-form">
      <h2>Ajouter une Transaction</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <label>
              Date:
              <Field type="date" name="date" />
              <ErrorMessage name="date" component="div" />
            </label>
            <label>
              Catégorie:
              <Field type="text" name="category" />
              <ErrorMessage name="category" component="div" />
            </label>
            <label>
              Montant:
              <Field type="number" name="amount" />
              <ErrorMessage name="amount" component="div" />
            </label>
            <button type="submit">Ajouter</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TransactionForm;
