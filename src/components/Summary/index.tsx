import { SumarryCard, SummaryContainer } from "./styles";
import { ArrowCircleUp } from "phosphor-react";
import { ArrowCircleDown } from "phosphor-react";
import { CurrencyDollar } from "phosphor-react";

export function Summary() {
  return (
    <SummaryContainer>
      <SumarryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>R$ 17.400,00</strong>
      </SumarryCard>

      <SumarryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>R$ 17.400,00</strong>
      </SumarryCard>

      <SumarryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>

        <strong>R$ 17.400,00</strong>
      </SumarryCard>
    </SummaryContainer>
  );
}
