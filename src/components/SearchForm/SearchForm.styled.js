import styled from "styled-components";
import { Form, Field } from 'formik';

export const SearchForm = styled(Form)`
margin: 0 auto;
padding-top: 20px;
display: flex;
gap: 4px;
`

export const SearchHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #8776cc;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  background-position: center;
  opacity: 0.6;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    opacity: 1;
  }
`

export const SearchFormInput = styled(Field)`
  display: inline-block;
  font: inherit;
  font-size: 18px;
`