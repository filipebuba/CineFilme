# TMDB Guia para Iniciantes

Este guia explica o que é o TMDB, como criar uma conta, obter uma API Key e integrar no projeto CiniFilme.

## O que é o TMDB?
TMDB (The Movie Database) é uma base colaborativa de dados sobre filmes e séries. Oferece API gratuita para desenvolvedores e é mantida pela comunidade.

Site: https://www.themoviedb.org/
Documentação: https://developer.themoviedb.org/reference/intro

## Conta (estudante vs. padrão)
Não existe um plano “estudante” oficial no TMDB. A conta padrão gratuita já permite gerar uma API Key e usar a maioria dos recursos da API para projetos de aprendizado.

## Como criar uma conta
1. Acesse https://www.themoviedb.org/ e clique em “Join TMDB” ou “Criar conta”.
2. Preencha nome, e-mail e senha.
3. Verifique seu e-mail e faça login.

## Como obter sua API Key
1. Logado, abra seu perfil → “Settings” (Configurações).
2. Vá em “API”.
3. Solicite uma API Key: informe nome do projeto e aceite os termos.
4. Você terá uma **API Read Access Token (v4)** e uma **API Key (v3)**. Em projetos simples, use a v3 (`api_key=...`).

## Usando a API no projeto
O projeto inclui um modal “Configurar TMDB” para guardar a chave:
1. Clique em “Configurar TMDB” no topo.
2. Informe sua API Key v3.
3. Ela será salva em `localStorage` e o site passará a usar dados reais.

Exemplo de chamada à API:
```js
const API_KEY = localStorage.getItem('TMDB_API_KEY');
const BASE = 'https://api.themoviedb.org/3';
const url = `${BASE}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`;
const res = await fetch(url);
const data = await res.json();
```

## Imagens do TMDB
As imagens são acessadas por caminhos relativos como `/t/p/` e tamanhos fixos:
- Posters: `https://image.tmdb.org/t/p/w500/POSTER.jpg`
- Backdrops: `https://image.tmdb.org/t/p/w1280/BACKDROP.jpg` (ou `w780`)

No projeto, priorizamos backdrops para a capa e o fundo dinâmico, pois têm proporção mais larga, que funciona melhor em tela cheia.

## Boas Práticas
- Use `language=pt-BR` para resultados em português.
- Respeite os termos de uso e a atribuição (creditar o TMDB ao utilizar dados/imagens).
- Evite exceder limites de requisições; faça cache simples se necessário.
- Trate erros de rede com `try/catch` e exiba mensagens amigáveis.

## Links úteis
- API v3: https://developer.themoviedb.org/reference/discover-movie
- Autenticação e tokens v4: https://developer.themoviedb.org/docs/authentication
- Imagens: https://developer.themoviedb.org/docs/image-basics