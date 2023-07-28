import { HeaderContainer, HeaderContent, NewTransationButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

import logo from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransationButton>Nova Transação</NewTransationButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
