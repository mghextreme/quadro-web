# Webpack

Por _Matias G H_ - [rocket](https://im.benner.com.br/direct/matias.henschel)

Veja o [site oficial](https://webpack.js.org/) da biblioteca.

Talvez pra iniciantes esse assunto soe um pouco complicado, mas quis mostrar alguns recursos que são muito utilizados por quem desenvolve web.

Basicamente esta ferramenta permite que você junte todo o seu código (CSS e JavaScript) em um único arquivo e referencie somente ele na página.

Além disso, a ferramenta interpreta qualquer diferencial que você esteja utilizando. Nesse caso, por exemplo, utilizo SASS, que é uma forma de deixar o CSS mais organizado. A ferramenta interpreta essa linguagem e traduz pra um CSS normal, jogando junto no arquivo único.

## Para rodar

* Instale o [npm](https://www.npmjs.com/) (vem junto com o Node.js)
* Abra um prompt de comando na pasta do projeto
* Rode `npm install`
* Rode `npm run dev`

Isso deve gerar uma pasta `dist`, com os arquivos que vão ser referenciados pela página.
Além disso, rodar no modo `dev` deixa o prompt aberto observando arquivos por mudanças, regerando os arquivos imediatamente caso haja alguma alteração.