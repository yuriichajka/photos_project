import * as yup from 'yup';

export const NAME_VAL = yup.string()
    .typeError('Must be a string')
    .required('Please write something')
    .min(3, 'Must be at least 3 characters')
    .max(15, 'Must be 15 characters or less')

export const COMMENT_VAL = yup.string()
    .typeError('Must be a string')
    .required('Please write something')
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
