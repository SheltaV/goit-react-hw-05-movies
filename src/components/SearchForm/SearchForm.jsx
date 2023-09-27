import { Formik, Field } from 'formik';
import { SearchForm } from './SearchForm.styled';

export const Searchbar = ({onSubmit}) => {
    return (
        <Formik
            initialValues={{search: ''}}
        onSubmit={onSubmit}>
        <SearchForm>
         <Field
      name="search"
      type="text"
      placeholder="Search movies"
            />
        <button type="submit">Search</button>
        </SearchForm>
        </Formik>)
}
