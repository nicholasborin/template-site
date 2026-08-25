import type { NextConfig } from "next";

/**
 * GITHUB PAGES / HOSPEDAGEM 100% ESTÁTICA
 * ------------------------------------------------------------------
 * output: "export" faz o `next build` gerar uma pasta `out/` com
 * HTML/CSS/JS puros — sem servidor Node, exatamente o que o GitHub
 * Pages (ou qualquer hospedagem estática) precisa.
 *
 * trailingSlash: true evita 404 em hosts estáticos, que esperam
 * `/sobre/index.html` em vez de `/sobre.html`.
 *
 * images.unoptimized: true desliga a otimização de imagem do Next
 * (que depende de servidor). Só é necessário se você passar a usar
 * o componente <Image> do next/image no projeto.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
