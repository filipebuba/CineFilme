# Projeto Iniciante: CiniFilme

Material de apoio para quem está começando no desenvolvimento de sites. Este README orienta a ordem de estudo, como executar o projeto localmente (com e sem API), atividades práticas e um checklist de qualidade.

## Índice
- [Primeiros Passos](#primeiros-passos)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Ordem de Leitura dos Guias](#ordem-de-leitura-dos-guias)
- [Executar o Projeto Localmente](#executar-o-projeto-localmente)
- [Configurar a API do TMDB](#configurar-a-api-do-tmdb)
- [Metas de Aprendizado (Plano Semanal)](#metas-de-aprendizado-plano-semanal)
- [Atividades Práticas](#atividades-práticas)
- [Checklist de Qualidade](#checklist-de-qualidade)
- [Recursos e Referências](#recursos-e-referências)

## Primeiros Passos
- Tenha um navegador atualizado (Chrome, Edge, Firefox) e um editor de código (VS Code recomendado).
- Baixe/abra a pasta do projeto no seu computador.
- Você pode abrir diretamente `index.html` no navegador para ver a página ou rodar um servidor local (opcional) para evitar restrições de recursos externos.

## Estrutura de Pastas
```
Projeto_Iniciante/
├── Guia_HTML.md
├── Guia_CSS.md
├── Guia_JS.md
├── TMDB_Guia.md
└── screenshots/
    ├── header-preview.svg
    ├── hero-preview.svg
    ├── carousel-preview.svg
    └── modal-tmdb-preview.svg
```
Arquivos da raiz do projeto (fora da pasta `Projeto_Iniciante`):
- `index.html` (estrutura da página)
- `index.css` (estilos)
- `index.js` (lógica principal)
- `promo-bg.js` (fundo dinâmico da seção promocional)
- `data.js` (dados locais de exemplo/fallback)

## Ordem de Leitura dos Guias
1. `Guia_HTML.md` — Entenda a estrutura, semântica e acessibilidade.
2. `Guia_CSS.md` — Aprenda seletores, variáveis, responsividade e boas práticas.
3. `Guia_JS.md` — Veja como o JS monta a interface (capa/carrosséis) e manipula o DOM.
4. `TMDB_Guia.md` — Crie sua conta, gere a API Key e integre dados reais.

## Executar o Projeto Localmente
- Opção 1: abrir direto
  - Clique duas vezes em `index.html` para abrir no navegador.
- Opção 2: servidor simples (recomendado)
  - Via VS Code: extensão “Live Server”.
  - Via Python (se disponível):
    - No terminal, dentro da pasta do projeto: `python -m http.server 8000`
    - Abra `http://localhost:8000/` no navegador.
  - Via Node (se preferir): `npx serve .` e acesse a URL indicada.

Dica: o servidor local ajuda a evitar bloqueios ao carregar imagens externas e facilita o uso dos DevTools (Network, Console).

## Configurar a API do TMDB
- No topo do site, clique em `Configurar TMDB`.
- Informe sua API Key v3 e salve. Ela será persistida em `localStorage`.
- Após salvar, a página passará a usar dados reais do TMDB. Sem API, o site usa `data.js` como fallback.

Alternativa (DevTools/Console):
```
localStorage.setItem('TMDB_API_KEY', 'SUA_CHAVE_AQUI');
```
Atualize a página depois de definir a chave.

Observações úteis:
- Em alguns ambientes, imagens remotas podem sofrer bloqueios. Prefira tamanhos `w780` ou `w1280` e, se necessário, aplique `referrerpolicy="no-referrer"` em imagens de fundo.

## Metas de Aprendizado (Plano Semanal)
- Semana 1 — HTML
  - Ler `Guia_HTML.md`.
  - Exercícios: criar uma nova seção e estruturar títulos `h1`–`h3` corretamente.
- Semana 2 — CSS
  - Ler `Guia_CSS.md`.
  - Exercícios: ajustar a capa (`hero`) com `object-fit: cover`, criar um botão acessível e tornar o layout responsivo.
- Semana 3 — JavaScript
  - Ler `Guia_JS.md`.
  - Exercícios: criar cards via JS, popular o carrossel e adicionar um slide à capa.
- Semana 4 — TMDB
  - Ler `TMDB_Guia.md`.
  - Exercícios: configurar a API Key, buscar filmes populares e integrar dados reais no carrossel.

## Atividades Práticas
- Criar dois novos slides na capa com título, descrição e botões.
- Adicionar uma nova seção de carrossel (ex.: “Em alta”) usando dados locais de `data.js`.
- Ajustar `object-position` da imagem da capa para melhorar o enquadramento.
- Implementar foco visível (`:focus-visible`) em botões e links.

## Checklist de Qualidade
- Semântica: landmarks (`header`, `nav`, `main`, `footer`) e hierarquia de títulos clara.
- Acessibilidade: `alt` descritivo, foco visível, teclas de navegação funcionando.
- Responsividade: verifique em 480px, 768px e telas grandes.
- Imagens: tamanhos adequados (`w780`/`w1280`), `object-fit` correto e `loading="lazy"`.
- Performance: evite sombras/transições pesadas em listas longas.
- SEO: `title`, `meta description` e, quando necessário, Open Graph.

## Recursos e Referências
- Validador HTML: https://validator.w3.org/
- Documentação TMDB: https://developer.themoviedb.org/
- MDN Web Docs (HTML/CSS/JS): https://developer.mozilla.org/
- Lighthouse (DevTools) para auditoria de acessibilidade e performance

Bom estudo! Em caso de dúvidas, siga a ordem dos guias e utilize os exemplos práticos para experimentar pequenas mudanças no projeto. Conforme evoluir, substitua os SVGs em `Projeto_Iniciante/screenshots/` por capturas de tela reais do seu site.