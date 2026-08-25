import { HeartHandshake, GraduationCap, Gauge, Lock, Sparkles, HeadphonesIcon } from "lucide-react";
import type { Feature } from "@/types";

export const features: Feature[] = [
  {
    icon: HeartHandshake,
    title: "Atendimento personalizado",
    description: "Nenhum projeto é padronizado. Cada plano é construído para a realidade da sua empresa.",
  },
  {
    icon: GraduationCap,
    title: "Experiência comprovada",
    description: "Mais de uma década conduzindo projetos em diferentes segmentos e portes de negócio.",
  },
  {
    icon: Gauge,
    title: "Agilidade na execução",
    description: "Entregas em ciclos curtos, com resultados visíveis desde as primeiras semanas.",
  },
  {
    icon: Lock,
    title: "Segurança e confidencialidade",
    description: "Seus dados e informações estratégicas são tratados com total sigilo contratual.",
  },
  {
    icon: Sparkles,
    title: "Metodologia própria",
    description: "Processo testado e refinado em centenas de projetos, adaptado ao seu contexto.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte contínuo",
    description: "Acompanhamento próximo mesmo após a entrega, para garantir a sustentação dos resultados.",
  },
];
