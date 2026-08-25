import {
  LineChart,
  Target,
  Workflow,
  ShieldCheck,
  Users,
  Rocket,
} from "lucide-react";
import type { Service } from "@/types";

/**
 * Lista de serviços — 100% dinâmica. Adicione, remova ou reordene
 * itens livremente; ServicesGrid e as páginas /servicos renderizam
 * a partir deste array, sem limite fixo de quantidade.
 */
export const services: Service[] = [
  {
    slug: "diagnostico-empresarial",
    icon: Target,
    name: "Diagnóstico Empresarial",
    shortDescription: "Mapeamento completo dos gargalos que travam o crescimento.",
    description:
      "Analisamos processos, indicadores e estrutura da sua empresa para identificar com precisão onde estão os gargalos que impedem o crescimento — e priorizamos o que resolver primeiro.",
    benefits: [
      "Visão clara dos pontos críticos do negócio",
      "Priorização baseada em impacto e esforço",
      "Relatório executivo com plano de ação",
    ],
  },
  {
    slug: "estrategia-e-planejamento",
    icon: LineChart,
    name: "Estratégia e Planejamento",
    shortDescription: "Metas claras e um caminho realista para alcançá-las.",
    description:
      "Construímos, junto com a liderança, um planejamento estratégico objetivo — com metas mensuráveis, prazos definidos e responsáveis claros para cada iniciativa.",
    benefits: [
      "Metas mensuráveis e acompanháveis",
      "Alinhamento entre liderança e equipe",
      "Revisões trimestrais de progresso",
    ],
  },
  {
    slug: "otimizacao-de-processos",
    icon: Workflow,
    name: "Otimização de Processos",
    shortDescription: "Menos retrabalho, mais eficiência operacional.",
    description:
      "Redesenhamos fluxos de trabalho para eliminar retrabalho, reduzir custos operacionais e aumentar a velocidade de entrega, sem depender de mais contratações.",
    benefits: [
      "Redução de custos operacionais",
      "Processos documentados e replicáveis",
      "Ganho de produtividade mensurável",
    ],
  },
  {
    slug: "governanca-e-gestao",
    icon: ShieldCheck,
    name: "Governança e Gestão",
    shortDescription: "Estrutura de decisão sólida para escalar com segurança.",
    description:
      "Implementamos rituais de gestão, indicadores e estrutura de governança que permitem à empresa crescer sem perder controle sobre qualidade e resultado.",
    benefits: [
      "Indicadores confiáveis para decisão",
      "Rituais de gestão leves e eficazes",
      "Menor dependência de decisões individuais",
    ],
  },
  {
    slug: "desenvolvimento-de-lideranca",
    icon: Users,
    name: "Desenvolvimento de Liderança",
    shortDescription: "Times mais autônomos, lideranças mais preparadas.",
    description:
      "Capacitamos gestores para liderar com clareza, delegar com confiança e conduzir equipes mais autônomas — reduzindo a dependência do dono do negócio.",
    benefits: [
      "Lideranças mais autônomas",
      "Cultura de feedback estruturada",
      "Menor rotatividade de equipe",
    ],
  },
  {
    slug: "aceleracao-de-crescimento",
    icon: Rocket,
    name: "Aceleração de Crescimento",
    shortDescription: "Execução acompanhada para acelerar resultados.",
    description:
      "Acompanhamos a execução do plano lado a lado com sua equipe, ajustando a rota conforme os resultados aparecem — para acelerar o crescimento com segurança.",
    benefits: [
      "Acompanhamento próximo da execução",
      "Ajustes rápidos com base em dados",
      "Resultados visíveis em ciclos curtos",
    ],
  },
];
