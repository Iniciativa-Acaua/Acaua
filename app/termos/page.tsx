import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { CONTATO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso | Acuã Iniciativa",
  description: "Condições de uso do site da Acuã Iniciativa.",
};

export default function TermosPage() {
  return (
    <LegalPage titulo="Termos de Uso" atualizado="7 de outubro de 2026">
      <h2>1. Aceitação</h2>
      <p>
        Ao acessar este site, você concorda com estes termos. Se não concordar,
        recomendamos não utilizá-lo.
      </p>

      <h2>2. Sobre o site</h2>
      <p>
        O site apresenta a Acuã Iniciativa e seus serviços de tecnologia,
        marketing e segurança. O conteúdo tem caráter informativo e não
        constitui proposta comercial vinculante. Prazos e valores são definidos
        apenas em orçamento ou contrato firmado entre as partes.
      </p>

      <h2>3. Uso permitido</h2>
      <p>
        Você se compromete a usar o site de forma lícita, sem tentar acessar
        áreas restritas, sobrecarregar a infraestrutura, explorar falhas ou
        prejudicar outros usuários.
      </p>

      <h2>4. Propriedade intelectual</h2>
      <p>
        A marca, o logotipo, os textos, as ilustrações e o código deste site
        pertencem à Acuã Iniciativa ou a terceiros que autorizaram o uso. É
        proibida a reprodução sem autorização prévia. Os projetos exibidos no
        portfólio pertencem aos respectivos clientes.
      </p>

      <h2>5. Links externos</h2>
      <p>
        O site pode apontar para páginas de terceiros. Não controlamos nem nos
        responsabilizamos pelo conteúdo ou pelas práticas desses sites.
      </p>

      <h2>6. Limitação de responsabilidade</h2>
      <p>
        Nos esforçamos para manter as informações corretas e o site disponível,
        mas não garantimos funcionamento ininterrupto nem ausência de erros.
      </p>

      <h2>7. Privacidade</h2>
      <p>
        O tratamento de dados pessoais segue nossa{" "}
        <a href="/privacidade">Política de Privacidade</a>.
      </p>

      <h2>8. Alterações</h2>
      <p>
        Podemos atualizar estes termos a qualquer momento. A versão vigente é a
        publicada nesta página.
      </p>

      <h2>9. Lei aplicável e foro</h2>
      <p>
        Estes termos são regidos pelas leis da República Federativa do Brasil.
        Fica eleito o foro da comarca de [CIDADE/UF] para resolver eventuais
        controvérsias.
      </p>

      <h2>10. Contato</h2>
      <p>
        Dúvidas sobre estes termos:{" "}
        <a href={`mailto:${CONTATO.email}`}>{CONTATO.email}</a>.
      </p>
    </LegalPage>
  );
}