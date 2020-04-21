# Boas vindas ao repositório do projeto de réplica da página de cadastro do Facebook!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo e, se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

⚠ **Importante:** O desenvolvimento deste projeto será em dupla. Atentem-se às orientações da facilitação da turma para formar a sua.

## O que deverá ser desenvolvido

Todos os requisitos tem como base a página do **Facebook**.
Use a imagem do site, além de acessar [a página de cadastro/login](https://www.facebook.com/).
Tente ser o mais fiel possível.

Use a inspeção de código para verificar a estrutura da página de cadastro/login do **Facebook**.

Antes de iniciar o projeto, leia atentamente a seção "Entregáveis".
Você irá desenvolver este projeto em **dupla** e é fundamental que siga as instruções do repositório.

---

## Entregáveis

Para entregar o seu projeto você deverá criar um _Pull Request_ para este repositório no **GitHub**.

Este _Pull Request_ deverá conter, necessariamente, os arquivos `index.html`, `style.css` e `script.js`, que conterão seu código **_HTML_**, **_CSS_** e **_JavaScript_**, respectivamente. ⚠️ É importante que seus arquivos tenham exatamente estes nomes! ⚠️

Você pode adicionar outros arquivos se julgar necessário.

---

## Requisitos do projeto

A seguir, estão listados todos os requisitos do projeto. Leia-os atentamente e siga à risca o que for pedido. Em particular, atente-se para os nomes de classes e ids que alguns elementos de seu projeto devem possuir. **Não troque ids por classes ou vice-versa**. O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução `1366 x 768` (1366 pixels de largura por 768 pixels de altura). Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação [deste plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome` para facilitar a configuração dessa resolução.

Caso você faça o _download_ de bibliotecas externas, utilize o diretório _libs_ (a partir da raiz do projeto) para colocar os arquivos (*.css, *.js, etc...) baixados.

### 1 - Posicionamento de elementos utilizando _CSS Flexbox_.

### 2 - Uma barra azul na parte superior da página do **Facebook** com a classe `"top-bar"`.

### 3 - O logotipo do **Facebook** no canto superior esquerdo com a classe `"facebook-logo"`.

### 4 - Um campo de entrada de texto no canto superior direito para receber o email ou o telefone do usuário com o id `"user-email-phone"`.

### 5 - Um título com o texto 'Email ou telefone' acima do campo de entrada de texto para email ou telefone com o id `"user-email-phone-label"`.

### 6 - Um campo de entrada de texto para digitar a senha do usuário, posicionado no canto superior direito. O campo também deve estar posicionado à direita do campo de entrada de texto para email ou telefone.

  Pontos importantes:
    * Ao digitar a senha, o padrão deve ser '*****'.

### 7 - Um botão com o id `"button-login"` e o texto 'Entrar', à direita do campo de entrada de texto para senha.

  Pontos importantes:
    * Ao clicar no botão, um `alert` deve ser exibido com o email ou telefone digitado pelo usuário.

### 8 - Um texto 'O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.' abaixo da barra superior azul do **Facebook**, no canto esquerdo.

### 9 - Uma imagem com id `"facebook-networking"`, que ficará abaixo do item 8. Essa imagem deve conter o mapa do mundo e as conexões entre as pessoas.

  Pontos importantes:
    * Dê o nome "networking.png" para a imagem.

### 10 - Um texto 'Abra uma conta' posicionado abaixo da caixa de texto de email/telefone.

### 11 - Um texto 'É rápido e fácil.' posicionado abaixo do texto 'Abra uma conta'.

### 12 - Um campo de entrada de texto para o nome do usuário. Posicione esse campo abaixo do texto 'É rápido e fácil.'.

  Pontos importantes:
    * Defina o `placeholder` com o valor "Nome".

### 13 - Um campo de entrada de texto para o sobrenome do usuário. Posicione esse campo à direita do campo nome.

  Pontos importantes:
    * Defina o `placeholder` com o valor "Sobrenome".

### 14 - Um campo de entrada de texto para o celular ou email. Posicione esse campo abaixo do sobrenome do usuário.

  Pontos importantes:
    * Defina o `placeholder` com o valor "Celular ou email".

### 15 - Um campo de entrada de texto para a nova senha do usuário. Posicione esse campo abaixo do celular/email.

  Pontos importantes:
    * Lembre-se de respeitar a formatação de senha '*****'.
    * Defina o `placeholder` com o valor "Nova senha".

### 16 - Um texto 'Data de nascimento' abaixo do campo de entrada de texto de nova senha.

### 17 - Um campo para selecionar a data de nascimento.

  Pontos importantes:
    * Diferentemente do Facebook, esse campo deve ser composto de um único _input_, e você deverá utilizar alguma biblioteca para transformá-lo em um _datepicker_.
    * Defina o `placeholder` com o valor "dd/mm/aaaa".

### 18 - Um texto 'Gênero' abaixo dos campos de data.

### 19 - Três `radio buttons` com os nomes 'Feminino', 'Masculino' e 'Personalizado'.

  Pontos importantes:
    * Posicione abaixo do texto 'Gênero'.

### 20 - Um botão com o texto 'Cadastre-se' e id `"facebook-register"`.

  Pontos importantes:
    * Esse botão deve pegar os dados dos itens 12 até 19 e validá-los.
    * Caso tudo esteja certo, exiba um `alert` com todos os dados no seguinte formato:
      Por exemplo:
        Se a pessoa que usa digitar o nome "João" e selecionar "Personalizado", o conteúdo da mensagem no `alert` deve ser 'João - Personalizado'.
    * Caso alguma validação dê errado, exiba um `alert` com a mensagem 'Dados inválidos'.

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone https://github.com/tryber/sd-04-block6-project-facebook-signup.git`.

2. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-facebook-signup-project`

3. Crie na raiz do projeto os arquivos que você precisará desenvolver:
  * Verifique que você está na raiz do projeto
    * Exemplo: `pwd` -> o retorno vai ser algo tipo _/Users/joaozinho/code/**sd-04-block6-project-facebook-signup**_
  * Crie os arquivos `index.html`, `style.css` e `script.js`
    * Exemplo:
      * `touch index.html style.css script.js`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto facebook signup'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-facebook-signup-project`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-04-block6-project-facebook-signup/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-04-block6-project-facebook-signup/pulls) e confira que o seu _Pull Request_ está criado

  ---

  ### DURANTE O DESENVOLVIMENTO

* ⚠ **PULL REQUESTS COM ISSUES NO CODE CLIMATE NÃO SERÃO AVALIADAS, ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

  ---

  ### DEPOIS DE TERMINAR O DESENVOLVIMENTO

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-04`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

⚠ Lembre-se que garantir que todas as _issues_ comentadas pelo CodeClimate estão resolvidas! ⚠

---

### REVISANDO UM PULL REQUEST

⚠⚠⚠

À medida que você e demais estudantes forem entregando os projetos, vocês receberão alertas **via Slack** para também fazer a revisão dos _Pull Requests_ dos seus colegas. Atentem-se às mensagens do _"Pull Reminders"_ no _Slack_!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.
