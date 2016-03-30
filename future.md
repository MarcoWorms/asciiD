# AsciiD Concepts  
##### *Essa documentação está em desenvolvimento, incompleta e sujeita a mudanças inesperadas*
---

Proposta: criar um ambiente de desenvolvimento de jogos 2D com [arte ascii](ttps://pt.wikipedia.org/wiki/ASCII_art)

## Conceitos principais:

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
oo                        xxx
oo           e            xxx
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

#### - Collider

O grid de colisão (collider) permite você criar a camada de colisao daquela layer. Ainda estou pensando como farei ele, mas provavelmente utilizarei `1` para habilitar colisao naquele elemento ou `0` para ignorar. Desse jeito você pode ter o controle sobre a colisao independente do display.

```
[
    [0, 0]
    [0, 1]
]
```
no exemplo acima a layer de 2x2 somente acusaria colisão caso o elemento inferior direito colidisse com outro `1` de outra collision mask.

### Layers

Uma layer é um conjunto de grids que especificam tudo que há dentro de uma layer. Cada layer contém apenas uma grid para cada propriedade. Cada layer deve representar uma camada do seu desenho, você pode optar por ter apenas uma layers por, mas conforme a complexidade do desenho aumenta a nescessidade de mais layers aparecerá. Você pode (e deve) abusar da quantidade de layers dentro de um component uma vez que eles permitirão ações aplicaveis para todas as layers dentro dele.

Dentro de uma layer você encontrará a "receita" dela, ou seja, o conjunto de grids que compõe ela. Essa receita terá mais ou menos essa forma:

```javascript
var receita = {
    display: grid_de_display,
    color: grid_de_cor,
    collider: grid_de_colisao
}
```

A AsciiD fornecerá funções auxíliares para a criação de grids e layers.

A atual função para criar layers é:

```javascript
Layer(width, height, gridvalues)
```

onde gridValues representa o objeto da receita, caso algum (ou nenhum) valor seja passado, a receita padrão é:

```javascript
{
    display: 'x',
    color: 'black',
    collider: '1'
}
```

### Component

Um component é um conjunto de layers que formam algo quando juntas, geralmente são os objetos do programa, um objeto "Player" por exemplo deve ser um component. Os components tambem contem a lógica de atualizacao desse objeto, dentro dele existirá um equivalente ao "update()" das engines atuais que sera chamado uma vez por frame. A framerate de cada component é independente, uma vez que utilizarei calls assíncronas para realizar os desenhos.

### DOM Controller

O DOM controller receberá as calls de draw dos components e desenhará no canvas desejado (por padrão ele desenha no primeiro canvas que achar no html)

*continua...*
