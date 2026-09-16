import { Container } from "@/components/ui/Container";
import { ActionLink } from "@/components/ui/ActionLink";
import { PacoImage } from "@/components/ui/PacoImage";

export default function NotFound() {
  return (
    <Container width="normal" className="py-24 sm:py-32">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <p className="pdv-coord text-laranja">Erro 404</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-grafite sm:text-5xl">
            Esta rota não existe no mapa.
          </h1>
          <p className="mt-5 max-w-leitura text-[17px] leading-relaxed text-cinza-texto">
            A página que você procurou não foi encontrada. Ela pode ter mudado de
            endereço ou ainda estar em preparação.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/trilha">Ir para a trilha</ActionLink>
            <ActionLink href="/" variant="secundario">
              Voltar ao início
            </ActionLink>
          </div>
        </div>

        <div className="w-36 justify-self-start md:w-48">
          <PacoImage variant="lupa" ratio="1 / 1" />
        </div>
      </div>
    </Container>
  );
}
