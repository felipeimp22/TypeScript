![alt text](https://miro.medium.com/max/3200/1*7QwRdAxb9Q8wejjQJiFJsQ.png "TS")

# TypeScript First configuration:

### Olá Mundo ! (hello world) :´D
Nesse Repositorio veremos os primeiros passos de como configurar o TypeScript, automatizar suas transpilações e ter um servidor de desenvolvimento "localhost",
configurar o ES e Prettier para TypeScript e ainda ver nas pastas dos projetos um pouco de arquitetura de rotas e algumas tipagens
### Observações:
Esse repositorio tera 2 projetos:
* 1- primeira configuração com typescript e alguns exemplos de de tipagem.
* 2- projeto configurado e automatizado com uma estrutura bacana de rotas e servidor de desenvolvimento.

### Bora Começar :D

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

# Configurando TS:
Para configurar precisamos rodar um comando para que apareça um arquivo tsconfig.json, comando:

> yarn tsc --init

Após rodar esse comando com sucesso, ira aparecer um arquivo tsconfig.json

iremos localizar a seguinte configuração:

//"outDir" 
// "rootDir"

Após localizarmos a configuração outDir comentada, iremos descomentar e passar um diretorio que será a pasta aonde o TS irá
colocar as transpilações, exemplo:

* "outDir": "./dist",
* "rootDir": "./src",

Mesmo que essa pasta não exista, quando o TS for transpilar ele irá criar, caso você crie manualmente, o resultado será o mesmo.

Essas configurações indicam que a pasta src sera aonde ele ira procurar os arquivos TS, ou seja tudo que tiver dentro de src, ele
também ira identificar e irá colocar a transpilação na pasta ./dist

Assim que Finalizar a configuração você pode rodar o comando:

> yarn tsc

Que ele irá identificar automáticamente todos os arquivos TS do projeto e ira compilar automaticamente, caso queira compilar o 
arquivo separadamente basta rodar o comando de exemplo:

> yarn tsc src/index.ts   <- Passar o diretorio que ira transpilar.

Ficando esses dois comandos para transpilar:

* yarn tsc src/index.js   <- vai buscar o diretorio e transpila manualmente o arquivo,e apenas o arquivo informado.
* yarn tsc     <- irá buscar todos os arquivos TS do projeto e transpilar automáticamente.



--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
#Automatizando o processo: 

Na maior parte das vezes, não iremos ficar rodando diversos comandos para transpilações em nosso projeto, isso faria com que perdessemos 
muito rendimento no dia, então vamos automatizar esse processo.

Iremos utilizar um pacote chamado: ts-node-dev.
para instalar vamos usar o comando:

> yarn add -D ts-node-dev


> ... Em andamento. 
# Em andamento. Irei terminar de escrever em breve :D



