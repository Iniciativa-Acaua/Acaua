import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { CONTATO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade | Acuã Iniciativa",
  description: "Como a Acuã Iniciativa trata os dados pessoais, conforme a LGPD.",
};

export default function PrivacidadePage() {
  return (
    <LegalPage titulo="Política de Privacidade" atualizado="7 de outubro de 2026">
      <h2>1. Quem somos</h2>
      <p>
        Este site é operado pela Acuã Iniciativa ([RAZÃO SOCIAL], CNPJ [CNPJ]),
        responsável pelo tratamento dos dados pessoais descritos nesta política,
        nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018, a
        LGPD).
      </p>

      <h2>2. Dados que coletamos</h2>
      <ul>
        <li>
          Dados que você nos envia ao entrar em contato: nome, telefone ou
          WhatsApp, e-mail e o conteúdo da sua mensagem.
        </li>
        <li>
          Dados técnicos registrados pela hospedagem para segurança e
          funcionamento do site, como endereço IP, navegador e data de acesso.
        </li>
      </ul>
      <p>
        Este site não tem área de cadastro e não utiliza cookies de publicidade.
      </p>

      <h2>3. Para que usamos os dados</h2>
      <ul>
        <li>
          Responder mensagens e elaborar propostas e orçamentos (procedimentos
          preliminares relacionados a contrato, art. 7º, V, da LGPD).
        </li>
        <li>
          Manter a segurança e o bom funcionamento do site (legítimo interesse,
          art. 7º, IX).
        </li>
        <li>
          Cumprir obrigações legais ou regulatórias, quando aplicável (art. 7º,
          II).
        </li>
      </ul>

      <h2>4. Compartilhamento</h2>
      <p>
        Não vendemos dados pessoais. Podemos compartilhá-los apenas com
        prestadores necessários à operação, como hospedagem ([PROVEDOR DE
        HOSPEDAGEM]) e serviços de e-mail. Ao clicar nos botões de WhatsApp ou
        de redes sociais, você passa a ser regido também pelas políticas dessas
        plataformas.
      </p>

      <h2>5. Por quanto tempo guardamos</h2>
      <p>
        Mantemos os dados pelo tempo necessário para atender à finalidade da
        conversa ou do contrato e para cumprir obrigações legais.
      </p>

      <h2>6. Seus direitos</h2>
      <p>
        Você pode solicitar a confirmação do tratamento, o acesso, a correção, a
        anonimização ou eliminação dos dados, a portabilidade, informações sobre
        compartilhamento e a revogação de consentimento, conforme o art. 18 da
        LGPD. Para exercer qualquer direito, escreva para{" "}
        <a href={`mailto:${CONTATO.email}`}>{CONTATO.email}</a>.
      </p>

      <h2>7. Segurança</h2>
      <p>
        Adotamos medidas técnicas razoáveis para proteger os dados, como
        conexão segura (HTTPS) e controle de acesso. Nenhum sistema é
        totalmente imune a riscos, mas trabalhamos para reduzi-los.
      </p>

      <h2>8. Links externos</h2>
      <p>
        O site pode conter links para páginas de terceiros. Não somos
        responsáveis pelas práticas de privacidade desses sites.
      </p>

      <h2>9. Alterações</h2>
      <p>
        Esta política pode ser atualizada. A data da última revisão aparece no
        topo desta página.
      </p>

      <h2>10. Contato</h2>
      <p>
        Dúvidas sobre esta política:{" "}
        <a href={`mailto:${CONTATO.email}`}>{CONTATO.email}</a>.
      </p>
    </LegalPage>
  );
}