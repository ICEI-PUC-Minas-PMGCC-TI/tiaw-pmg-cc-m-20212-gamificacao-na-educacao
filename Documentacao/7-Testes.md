# Avaliação da Aplicação

## Plano de Testes

O plano de testes foi implementado com base nas necessidades de cada
artefato para atingir seu objetivo esperado pelos usuários.

## Teste 1: Página de notícias

> Descrição do artefato:
>
> Ao ser acessada, a página irá carregar vários cards com resumos de
> notícias sobre Gamificação, com imagem, título, descrição e botão.
> Existe um botão abaixo dos cards para carregar mais cards,
> possibilitando a visualização de mais do que os 3 que são carregados
> diretamente do banco de dados (nesse caso, o arquivo .json).

|#|Cenário               |Pré-Condições |Ações                                                                          |Resultados Esperados|
|-|----------------------|--------------|-------------------------------------------------------------------------------|--------------------|
|1|Carregar mais notícias|Site funcional|1. Acessar a tela de notícias<br>2. Clicar em botão de carregar mais.          |Ao clicar em carregar mais, mais notícias serão carregadas.|
|2|Acessar notícia       |Site funcional|1. Clicar no botão "Ver notícia", no título da notícia ou na imagem da notícia.|Uma nova aba irá abrir com o site registrado no JSON, como nenhum site está registrado no momento, será redirecionado para a página "#".|

- Artefato desenvolvido por [Gabriel Parfan Guimarães](https://github.com/Parfan)

---

## Teste 2: Páginas de exemplos

> Descrição do artefato:
>
> Ao ser acessada, a página irá carregar vários cards com exemplos de
> Gamificação, com foto, título, descrição curta e um botão para ver
> mais sobre o exemplo. Existe um botão abaixo dos cards para carregar
> mais cards, possibilitando a visualização de mais do que os 4 que são
> carregados diretamente do banco de dados (nesse caso, o arquivo .json).

|#|Cenário               |Pré-Condições |Ações                                                                 |Resultados Esperados|
|-|----------------------|--------------|----------------------------------------------------------------------|--------------------|
|1|Carregar mais exemplos|Site funcional|1. Acessar a tela de exemplos.<br>2. Clicar em botão de carregar mais.|Ao clicar em carregar mais, mais exemplos serão carregados.|
|2|Acessar exemplo       |Site funcional|1. Clicar no botão "Mais sobre" ou na imagem do exemplo.              |Após selecionar o exemplo, ir para a página de exemplo, clicando na LOGO, volta à página de exemplos.|

- Artefato desenvolvido por [Gabriel Parfan Guimarães](https://github.com/Parfan)

---

## Teste 3: Cadastro de usuário

> Descrição do artefato:
>
> Programa que mostra os usuários já cadastrados e permite adicionar
> mais no localStorage.

|#|Cenário             |Pré-Condições |Ações                                                                                                                            |Resultados Esperados|
|-|--------------------|--------------|---------------------------------------------------------------------------------------------------------------------------------|--------------------|
|1|Cadastro de usuários|Site funcional|1. Clicar no botão "Usuários cadastrados".<br>2. Preencher os campos "login", "email", "senha" e "nome" e clicar no botão salvar.|1. Ver uma lista com todos os usuários cadastrados, incluindo 3 exemplos.<br>2. Usuário ser adicionado ao localStorage e aparecer na lista de usuários.|

- Artefato desenvolvido por [Carlos Augusto Lopes Xavier](https://github.com/Wyvern9011)
