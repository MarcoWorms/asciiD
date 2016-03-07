# AsciiD Concepts  
##### *Essa documentação está em desenvolvimento, incompleta e sujeita a mudanças inesperadas*
---
## Introdução
- No ínicio, a minha ideia era criar uma engine/framework para desenvolver jogos html5 focados em [arte ascii](https://pt.wikipedia.org/wiki/ASCII_art). Após conseguir fazer as funções básicas eu estava relativamente satisfeito com o que ja dava pra ser feito nela, mas depois de estudar mais JS eu percebi que a utilizaçao do "class" é horrível e decidi reescrever usando módulos e "factory functions". Enquanto eu estava reescrevendo percebi que poderia tomar um rumo melhor, então esse documento será um registro dos planejamentos futuros desse projeto.

## Conceitos principais:

 *Para manter nossa sanidade mental, toda vez que eu for me referir ao canvas do HTML5 eu utilizarei a tag \<canvas\>. Quando eu usar canvas normalmente eu estou me referindo ao canvas da AsciiD.*  


- O novo propósito do projeto é a criação de uma framework capaz de fornecer um equivalente ao \<canvas\> para desenvolvimento de aplicativos ou jogos com arte ascii. Você poderá injetar esses canvas em diversos DIVs separados na sua página (utilizando um canvas para cada componente da aplicação) ou entao criar apenas um grande canvas e usar para toda a interface (como você faria normalmente em um jogo usando o \<canvas\>).  


- Você é livre pra escolher se prefere um canvas ou múltiplos, a escolha geralmente vai depender do design do projeto.

### Grids

Um "Grid" é uma array bidimensional.

```javascript
// Exemplo de grid 2x2
var grid_2x2 = [["o", "o"], ["o", "o"]]
// Exemplo de grid 3x3
var grid_3x3 = [["x", "x", "x"], ["x", "x", "x"], ["x", "x", "x"]]
```

esses grids representam respectivamente:
```
oo
oo
```
e
```
xxx
xxx
xxx
```

Na AsciiD cada grid representa uma propriedade de uma layer. Cada layer deve ter apenas uma grid para cada propriedade. Uma layer pode não conter nenhuma grid, mas nesse caso ela será uma layer vazia.

Você raramente irá definir as grids manualmente no código, elas devem ser carregadar via .txt externos.

As grids suportadas pela AsciiD no momento são:

##### - Display  
A grid de display representa o output ascii que aquela layer terá. Os exemplos acima são grids de display, cada elemento nessa grid deve conter apenas 1 caracter. Um exemplo de grid de display dessa arte ascii:
```
/----\
|    |
\----/
```
seria
```
[
    ["/", "-", "-", "-", "-", "\"],
    ["|", " ", " ", " ", " ", "|"],
    ["\", "-", "-", "-", "-", "/"]
]
```

Detalhe importante: o elemento `""` (vazio) é diferente do `" "` (espaço). O elemento vazio é tratado como transparente, ou seja, o que mostrará nele será a layer de traz, já o elemento com espaço deixará aquele display "em branco" (vazio, mas é importante lembrar que o display vazio é diferente de um elemento vazio)

##### - Color  
A grid de color representa a cor de cada elemento da grid de display. Você poderá definir uma cor padrão para cada layer caso você não queira usar a grid de cor, nesse caso ela será criada automaticamente com a cor padrão. Um exemplo de grid que pintaria o quadrado acima de verde:
```
[
    ["green", "green", "green", "green", "green", "green"],
    ["green", "green", "green", "green", "green", "green"],
    ["green", "green", "green", "green", "green", "green"]
]
```
a grid de cor segue os padrões de cores que o CSS usa, você pode definir as cores tanto pelo nome (`green`), hexadecimal (`#00FF00`) ou RGB (`rgb(0, 255, 0)`)

Mais grids serão adicionada conforme a nescessidade, uma das grids que provavelmente implementarei é a "onclick" que define os callbacks de click para cada elemento da grid de display.

### Layers

Uma layer é um conjunto de grids que especificam tudo que há dentro de uma layer.

*continua...*

### Container

Um container é um conjunto de layers que formam algo quando juntas, geralmente são os objetos ou componentes do programa, um objeto "Player" por exemplo deve ser um container. Os containers tambem contem a lógica de atualizacao desse objeto, dentro dele existirá um equivalente ao "update()" das engines atuais que sera chamado uma vez por frame. A framerate de cada container é independente, uma vez que utilizarei calls assíncronas para realizar os desenhos no canvas.

### Canvas

O canvas renderiza e responde aos containers dentro dele.

*continua...*
