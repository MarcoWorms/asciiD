# AsciiD Concepts
---
## Introdução
- No ínicio, a minha ideia era criar uma engine/framework para desenvolver jogos html5 focados em [arte ascii](https://pt.wikipedia.org/wiki/ASCII_art). Após conseguir fazer as funções básicas eu estava relativamente satisfeito com o que ja dava pra ser feito nela, mas depois de estudar mais JS eu percebi que a utilizaçao do "class" é horrível e decidi reescrever usando módulos e "factory functions". Enquanto eu estava reescrevendo percebi que poderia tomar um rumo melhor, então esse documento será um registro dos planejamentos futuros desse projeto.  

## Conceitos principais:

 *Para manter nossa sanidade mental, toda vez que eu for me referir ao canvas do HTML5 eu utilizarei a tag \<canvas\>. Quando eu usar canvas normalmente eu estou me referindo ao canvas da AsciiD.*  


- O novo propósito do projeto é a criação de uma framework capaz de fornecer um equivalente ao \<canvas\> em formato ascii. Você poderá injetar esses canvas em diversos DIVs separados na sua página (utilizando um canvas para cada componente) ou entao criar apenas um grande canvas e usar para toda a interface (como você faria normalmente em um jogo usando o \<canvas\>).  


- Você é livre pra escolher se prefere um canvas ou múltiplos, a escolha geralmente vai depender do design do projeto.

### Grids

Um "Grid" é uma array bidimensional.

Exemplo de grid 2x2:  
```javascript
var grid = [["o", "o"], ["o", "o"]]
```




### Layers

Uma layer é um conjunto de grids que especificam tudo que há nessa layer.

### Canvas

Um canvas é um conjunto de layers que será renderizado de acordo com a ordem delas. O ideal é sempre separar seus canvas no máximo numero de layers possíveis para evitar confusão na hora da manutenção.