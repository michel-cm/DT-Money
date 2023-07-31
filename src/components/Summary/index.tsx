import { SumarryCard, SummaryContainer } from "./styles";
import { ArrowCircleUp } from "phosphor-react";
import { ArrowCircleDown } from "phosphor-react";
import { CurrencyDollar } from "phosphor-react";
import { priceFormater } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
  const summary = useSummary();

  return (
    <SummaryContainer>
      <SumarryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormater.format(summary.income)}</strong>
      </SumarryCard>

      <SumarryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormater.format(summary.outcome)}</strong>
      </SumarryCard>

      <SumarryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>

        <strong>{priceFormater.format(summary.total)}</strong>
      </SumarryCard>
    </SummaryContainer>
  );
}
