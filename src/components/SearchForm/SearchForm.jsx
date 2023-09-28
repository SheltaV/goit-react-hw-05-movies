import { Formik } from 'formik';
import { SearchForm, SearchHeader, SearchFormButton, SearchFormInput } from './SearchForm.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export const Searchbar = ({onSubmit}) => {
    return (
        <SearchHeader>
        <Formik
            initialValues={{search: ''}}
        onSubmit={onSubmit}>
        <SearchForm>
         <SearchFormInput
      name="search"
      type="text"
      placeholder="Search movies"
            />
            <SearchFormButton type="submit"><AiOutlineSearch size={20} />
            </SearchFormButton>
        </SearchForm>
        </Formik>
        </SearchHeader>
    )
}
