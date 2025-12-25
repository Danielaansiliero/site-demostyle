# DemoStyle - Loja de Roupas Premium

Site minimalista e sofisticado para loja de roupas de luxo voltada para empresários de sucesso que buscam estilo, elegância e conforto.

## Visão Geral do Projeto

Este é um projeto demo para portfólio, desenvolvido com tecnologias web fundamentais (HTML5, CSS3 e JavaScript Vanilla), sem uso de frameworks. O objetivo é demonstrar habilidades em desenvolvimento front-end com foco em design premium e responsivo.

## Stack Tecnológica

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização com variáveis CSS, Flexbox e Grid
- **JavaScript Vanilla** - Interatividade
- **Sem frameworks** - Código limpo e direto

## Design

### Paleta de Cores (Premium)
- **Preto**: `#1a1a1a` (cor principal)
- **Dourado**: `#c9a962` (destaques)
- **Branco**: `#ffffff` (contraste)
- **Cinza escuro**: `#2d2d2d` (secundário)
- **Cinza claro**: `#f5f5f5` (backgrounds)

### Tipografia
- **Títulos**: Playfair Display (serif elegante)
- **Corpo**: Montserrat (sans-serif moderna)

## Estrutura de Arquivos

```
Site_Demo/
├── index.html              # Página Home
├── produtos.html           # Catálogo de produtos
├── quem-somos.html         # Sobre a empresa
├── blog.html               # Blog de tendências
├── css/
│   └── style.css           # Estilos globais
├── js/
│   ├── main.js             # Scripts principais
│   ├── config.js           # Configurações (WhatsApp) - NÃO versionado
│   └── config.example.js   # Template de configuração
├── images/
│   ├── logo.png
│   ├── hero-bg.jpg
│   ├── products/           # Imagens dos produtos
│   └── blog/               # Imagens do blog
├── .gitignore              # Arquivos ignorados
└── README.md               # Este arquivo
```

## Componentes Principais

### 1. Header (Global)
- Logo à esquerda
- Menu de navegação: Home | Produtos | Quem Somos | Blog
- Efeito sticky ao scroll
- Menu hamburger responsivo em mobile

### 2. Footer (Global)
- 3 colunas: Contato | Redes Sociais | Localização
- Copyright
- Design elegante com fundo escuro

### 3. WhatsApp Fixo (Global)
- Botão flutuante no canto inferior direito
- Ícone do WhatsApp
- Animação sutil de pulse
- Link direto para WhatsApp

### 4. Página Home
- Hero section com imagem de fundo e overlay
- Headline impactante
- CTA "Conheça Nossa Coleção"
- Seção de destaques/novidades
- Seção de valores da marca

### 5. Página Produtos
- Grid de produtos (3 colunas desktop, responsivo)
- Cards com:
  - Imagem com hover effect
  - Nome do produto
  - Preço
  - Descrição
  - Botão "Comprar Agora" que redireciona para WhatsApp

**Produtos incluídos**:
1. Blazer Executivo Premium
2. Camisa Social Slim Fit
3. Calça Alfaiataria
4. Sapato Oxford Couro
5. Relógio Clássico
6. Gravata Seda Italiana

### 6. Página Quem Somos
- Hero com imagem da loja/equipe
- Seção Nossa História
- Cards: Missão | Visão | Valores
- Storytelling visual

### 7. Página Blog
- Grid de artigos
- Cards com:
  - Imagem de capa
  - Título
  - Data
  - Resumo
  - Link "Leia mais"

**Artigos incluídos**:
1. "Tendências de Moda Executiva 2025"
2. "Como Montar um Guarda-Roupa Cápsula de Luxo"
3. "A Arte de se Vestir para o Sucesso"

## Configuração

### 1. Configurar WhatsApp

Copie o arquivo de exemplo e adicione seu número:

```bash
cp js/config.example.js js/config.js
```

Edite `js/config.js` e adicione seu número de WhatsApp (sem o arquivo ir para o GitHub).

### 2. Imagens

As imagens usam placeholders do Unsplash temporariamente. Você pode substituir por:
- Imagens geradas por IA
- Fotos reais da sua coleção

Basta colocar as imagens nas pastas correspondentes em `images/`.

## Proteção de Dados Sensíveis

O arquivo `js/config.js` contém dados sensíveis (número de WhatsApp) e está no `.gitignore`. Apenas o template `js/config.example.js` é versionado no GitHub.

## Checklist de Implementação

- [x] README.md com planejamento completo
- [x] Inicializar Git e criar .gitignore
- [x] Criar estrutura de pastas (css/, js/, images/)
- [x] Criar config.js e config.example.js
- [x] CSS global (variáveis, reset, tipografia, componentes comuns)
- [x] Header responsivo com menu hamburger
- [x] Footer com 3 colunas
- [x] Botão WhatsApp fixo
- [x] index.html - Página Home com hero e CTA
- [x] produtos.html - Grid de produtos com cards
- [x] quem-somos.html - História, Missão, Visão, Valores
- [x] blog.html - Grid de artigos
- [x] JavaScript (menu mobile, scroll effects, animações)
- [x] Site totalmente responsivo
- [x] README.md atualizado

## Funcionalidades Implementadas

### JavaScript
- ✅ Menu hamburger responsivo com animações
- ✅ Header com efeito de scroll (sticky)
- ✅ Botão WhatsApp flutuante com animação pulse
- ✅ Botões "Comprar Agora" que redirecionam para WhatsApp com mensagem personalizada
- ✅ Smooth scroll para links internos
- ✅ Animações fade-in ao scroll (Intersection Observer)
- ✅ Footer dinâmico preenchido com dados do config.js
- ✅ Proteção de dados sensíveis via .gitignore

### CSS
- ✅ Design system com variáveis CSS
- ✅ Paleta de cores premium (preto, dourado, branco)
- ✅ Tipografia elegante (Playfair Display + Montserrat)
- ✅ Grid responsivo em todas as páginas
- ✅ Hover effects sofisticados
- ✅ Animações suaves (transitions)
- ✅ Mobile-first e totalmente responsivo

## Como Visualizar

### Opção 1: Abrir diretamente
1. Navegue até a pasta do projeto
2. Configure o `js/config.js` (copie de `js/config.example.js`)
3. Abra `index.html` no navegador

### Opção 2: Servidor Local
Recomendado para evitar problemas com CORS:

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Acesse: `http://localhost:8000`

## Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Tecnologias Utilizadas

- HTML5 semântico
- CSS3 com variáveis personalizadas
- JavaScript Vanilla (ES6+)
- Google Fonts (Playfair Display, Montserrat)
- Unsplash (imagens placeholder)
- Git para controle de versão

## Melhorias Futuras

Possíveis implementações:
- [ ] Sistema de carrinho de compras
- [ ] Integração com gateway de pagamento
- [ ] Sistema de busca de produtos
- [ ] Filtros por categoria/preço
- [ ] Galeria de imagens dos produtos (lightbox)
- [ ] Formulário de contato funcional
- [ ] Newsletter signup
- [ ] Página de artigo individual do blog
- [ ] Sistema de comentários
- [ ] Modo escuro (dark mode)
- [ ] Animações avançadas (GSAP)
- [ ] Performance: lazy loading de imagens
- [ ] SEO: meta tags otimizadas
- [ ] PWA: service worker

## Deploy

### Netlify (Recomendado)

1. **Fazer push para o GitHub** (siga instruções acima)

2. **Deploy no Netlify**:
   - Acesse [netlify.com](https://netlify.com)
   - Clique em "Add new site" → "Import an existing project"
   - Conecte com GitHub
   - Selecione o repositório `site-demostyle`
   - Configure:
     - **Build command**: (deixe vazio)
     - **Publish directory**: (deixe vazio ou `.`)
   - Clique em "Deploy site"

3. **Configurar variáveis de ambiente** (IMPORTANTE):
   - Vá em Site settings → Environment variables
   - Não é necessário para este projeto (WhatsApp já está no config.js local)

4. **Customizar domínio** (opcional):
   - Site settings → Domain management
   - Configure um domínio personalizado

**Arquivo de configuração incluído**: `netlify.toml` com headers de segurança e cache otimizado.

### Outras opções:
- GitHub Pages
- Vercel
- Firebase Hosting

## Contribuições

Este é um projeto de demonstração. Sinta-se livre para fazer fork e adaptar para seus próprios projetos.

## Licença

Projeto demo para portfólio - Uso livre.

## Autor

Desenvolvido como projeto demonstrativo de habilidades em desenvolvimento front-end.

---

**DemoStyle** - Elegância em cada detalhe.
