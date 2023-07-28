import { HeaderContainer, HeaderContent, NewTransationButton } from "./styles";

import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} />

        <NewTransationButton>Nova Transação</NewTransationButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
