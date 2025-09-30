
# 📚 DocsHub: Plataforma de Documentação Interativa Angular

Este projeto é uma aplicação Single Page Application (SPA) desenvolvida com **Angular 19** que simula uma plataforma de documentação com artigos interativos e animacões.

## 🌟 Recursos Principais

* **Navegação Persistente:** Uma **Navbar** é visível em todas as páginas (**Home** e **Docs**) para navegação.
* **Página Home:** Uma página inicial simples e de boas-vindas.
* **Página Docs:** Carrega dinamicamente artigos de documentação usando um **Service** e um **Model**.
* **Artigos Interativos:** O conteúdo completo do artigo fica inicialmente **escondido**.
* **Animação:** Ao clicar em **"Saiba Mais"**, um card de detalhes é aberto com uma **animação suave** (e a mesma animação é usada para fechar).
* **Estrutura Profissional:** Utilização de *Services* para dados e *Models* para tipagem, garantindo escalabilidade.

## 🛠️ Tecnologias Utilizadas

* **Angular 19+**
* **TypeScript**
* **Angular CLI**
* **HTML5**
* **CSS3 (SCSS)**

## 🚀 Como Executar o Projeto

Siga os passos abaixo para ter o DocsHub rodando em sua máquina local.

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **Angular CLI** instalados globalmente.

```bash
# Instalar o Angular CLI (se necessário)
npm install -g @angular/cli
````

### Instalação

1.  Clone este repositório:

    ```bash
    git clone https://github.com/rochaevertondev/Frontend-Angular.git
    cd frontend-angular

2.  Instale as dependências do projeto:

    ```bash
    npm install

3. Execute o comando para iniciar o servidor de desenvolvimento:

    ```bash
    ng serve -o

### Rodando a Aplicação

A aplicação será aberta em `http://localhost:4200/` e será recarregada ao salvar alterações nos arquivos.

## 📁 Estrutura do Código (Foco)

| Caminho | Tipo | Função |
| :--- | :--- | :--- |
| `src/app/models/article.model.ts` | **Model** | Define a estrutura (`id`, `titulo`, `conteudo`, etc.) de cada artigo. |
| `src/app/models/pessoa.model.ts` | **Model** | Define a estrutura (`id`, `nome`, `idade`, etc.) de cada pessoa. |
| `src/app/services/article.service.ts` | **Service** | Responsável por fornecer (mockar ou buscar de API) a lista de artigos. |
| `src/app/services/pessoa.service.ts` | **Service** | Responsável por fornecer (mockar ou buscar de API) a lista de pessoas. |
| `src/app/pages/home/home.component.ts` | **Página** | Uma página inicial simples e de boas-vindas. |
| `src/app/pages/documents/documents.component.ts` | **Página** | Lista os artigos obtidos do `ArticleService`. |
| `src/app/components/article.component.ts` | **Componente** | Exibe o título, o botão "Saiba Mais" e o card de detalhes com a **animação** de *toggle*. |
| `src/app/components/navbar/navbar.component.ts` | **Componente** | Barra de navegação com links para Home e Docs. |

## 💡 Implementação da Animação

A transição de abertura e fechamento do card de detalhes é feita utilizando o módulo **`@angular/animations`**.

A animação (geralmente nomeada no `metadata` do `ArticleComponent`) faz a transição entre um estado `void` ou `escondido` para o estado `visivel`, manipulando propriedades como `height`, `opacity` ou `transform` para criar o efeito suave.

## 🤝 Contribuição

Sinta-se à vontade para abrir *issues* e enviar *pull requests* para adicionar novas funcionalidades ou correções\!

1.  Faça um *fork* do projeto.
2.  Crie sua *branch* de funcionalidade (`git checkout -b feature/nome-da-feature`).
3.  Faça o *commit* das suas mudanças.
4.  Abra um **Pull Request**.

## 📄 Licença

Este projeto está sob a licença **MIT**.

-----
<div align="center">
<span >
    Desenvolvido por <strong>Everton Rocha</strong>
</span>

<div>
    <img src="./public/LOGO.png" alt="Logo Principal do DocsHub" width="100"/
</div>

