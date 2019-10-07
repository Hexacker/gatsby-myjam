import styled from "styled-components"
import { Search } from "styled-icons/octicons/Search"

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
    @media only screen 
    and (max-device-width: 768px) {
    width: 80%;
    margin: 0 auto;
}
`

const Div = styled.div`
  
`

const TextInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 2.5rem;
  border: 3px solid #440E5E;
  border-radius: 4px;
  font-family: inherit;
  outline: none;
  :focus {
    outline: none;
  }
`

const SearchIcon = styled(Search)`
  color: #440E5E;
  position: absolute;
  width: 25px;
  height: 25px;
  top: 50%;
  transform: translate(50%, -50%);
`

export { Container, Div, TextInput, SearchIcon }