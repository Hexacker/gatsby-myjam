import styled from "styled-components"
import { Cart } from "styled-icons/evil/Cart"
import { User } from "styled-icons/evil/User"

const Header = styled.header`
  margin: 1rem auto;
  max-width: 1260px;
  display: grid;
  grid-template-columns: 100px auto 200px;
  grid-gap: 50px;
  align-items: center;
  box-sizing: border-box;
  @media only screen 
  and (max-device-width: 768px) {
    grid-gap: 20px;
    grid-template-columns: 1fr;
}
`

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-bottom: 3px solid #440E5E;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`

const CartIcon = styled(Cart)`
  color: #440E5E;
  width: 50px;
  height: 50px;
`

const UserIcon = styled(User)`
  color: #440E5E;
  width: 50px;
  height: 50px;
`

export { Header, Container, Grid, CartIcon, UserIcon }