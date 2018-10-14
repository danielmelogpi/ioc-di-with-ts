## Objetivos
======

Entender como utilizar conceitos de inversao de controle e injecao de dependencias em aplicacoes Node+TS, levando em conta compatibilidade com conceitos funcionais, mas não limitado à functional programming.

Esse experimentou foi iniciado depois de algumas pesquisas com poucos resultados que levassem
em consideracao os recursos funcionais do .js, que potencialmente podem se beneficiar desse tipo
de abordagem.

Um framework maior que implementa esses conceitos é o InversifyJs (https://github.com/inversify/InversifyJS), mas seu foco é fechado em OOP.

### Desafios:
- Como prover, em uma aplicacao NodeJs comum, a capacidade de injetar dependencias sem criar um mar de sintaxe desnecessária?
- Como preservar os recursos de tipagem do TS, mantendo o uso de interfaces de entrada e saida?
- Como permitir que comportamento assincrono, seja baseado em callback ou em Promise, consiga tirar proveito de injecao?
- Como potencializar os fluxos de teste e aumentar a testabilidade da aplicacao?
- Como interagir com frameworks bem estabelecidos de teste, de modo que o uso de qualquer estratégia aqui desenvolvida não impeça o uso de tecnologias mais antigas, como Jest, Mocha ou Chai, por exemplo? Em outras palavras: como ser agnostico quanto as estratégias de teste, complementando-as dentro da estratégia desejada de teste?


O rascunho de uma pequena lib foi adicionado em lib/anarchy-injector, à ser desenvolvido durante a pesquisa

![Capybara chilling](capybara.gif)