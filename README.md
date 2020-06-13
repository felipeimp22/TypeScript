# TypeScript First configuration:

Aqui veremos as primeiras formas de tipagem, e como configurar o primeiro contato com typescript.

# Iniciando o projeto:

Para começar, basta iniciar um projeto node de forma normal, digitando os seguintes comando:

> npm init 
ou
>yarn init

após a instalação, é necessario instalar o typescript com o seguinte comando:

>yarn add typescript -D

Lembrando que pode ser instalado tanto com yarn ou npm, por exemplo npm install typescript -D,
o -D significa que a instalação sera feita como dependencia de desenvolvimento, pois no final das contas
o typescript sera transpilado para javascript padrão, então ele não importa para a produção, apenas para o
desenvolvimento.

## Iniciando a api:
Nesse código é demonstrado como iniciar uma api de forma simples com express, entao iremos começar instalando 
express:

> yarn add express

Logo após a instalação percebemos que ao declarar alguma variavel como "express" o intellisense do visual code 
não funcionará e provavelmente 3 pontinhos apareceram ao lado do import.

Isso acontece pois precisamos instalar as tipagens da biblioteca para TS.
Na maioria das vezes, as bibliotecas com suporte a TS possuem outra biblioteca de tipagem, porem algumas coisas mudam,
em sua maioria as bibliotecas se chamarão @types/nomedalib, ou seja ela tera o mesmo nome que sua biblioteca inicial 
porem tera o "@types/" na frente, seguindo essa logica instalaremos a outra biblioteca do expressa da seguinte maneira:

> yarn add  -D @types/express

# CONFIGURAndo TS:
Para configurar precisamos rodar um comando para que apareça um arquivo tsconfig.json.

> yarn tsc --init

Após rodar esse comando com sucesso, ira aparecer um arquivo tsconfig.json




> ... Em andamento. 
# Em andamento. Irei terminar de escrever em breve :D



