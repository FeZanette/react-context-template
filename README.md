# React Context - Template de Aula

Template no codesandbox <br>
https://codesandbox.io/s/template-context-i4kjw1


PASSO-APASSO:

1. Iniciar analisando o código a partir do index.js

2. Na pasta src, criar pasta contexts e dentro dela o arquivo GlobalContext.js. Dentro desse arquivo será exportado o contexto criado. Será criado um hook createContext para criar um contexto que é nativo do React. GlobalContext não é um componente funcional

3. No App, englobar a Router com o GlobalContext.Provider. O valor do contexto será toda a lógica extraída do Router. Na tag de abertura passar um value com um objeto vazio para não quebrar o código

4. No Router, recortar todo o código que está entre a função de abertura e o return e colar no App após a função de abertura. Importar o que está pedindo como erro no navegador. O App agora vai ser o responsável por distribuir essas informações que estavam no Router, não mais por props, mas pelo contexto.

5. No método anterior tinha que passar as props para o Router (no App) para serem passadas para os componentes. Agora, cria-se uma variável context com um objeto e os atributos a serem passados (estados e funções). Chamar essa variável no value do GlobalContext.Provider.

6. Limpar o Router, tirar os atributos chamados dentro de cada Route.

7. Como não se está mais passando as props para os componentes, gera um erro. Na HomePage, apagar a props dentro da função de abertura e nos atributos desestruturados. Criar variável context chamando o hook useContext e dentro o contexto criado GlobalContext. Nos atributos desestruturados igualar à variável context. Apagar a função addToPokedex dos atributos desestruturados e dentro do map do componente Card. 

8. No Card, apagar addToPokedex dos atributos desestruturados das props. Criar variável context chamando o hook useContext e dentro o contexto criado GlobalContext. Criar os atributos desestruturados (addToPokedex) e igualar à variável context.

9. No PokedexPage, apagar a props dentro da função de abertura e nos atributos desestruturados. Apagar a função removeFromPokedex das props desestruturadas. Criar variável context chamando o hook useContext e dentro o contexto criado GlobalContext. No atributo desestruturado igualar à variável context. Apagar a função removeFromPokedex dos atributos desestruturados e dentro do map do componente Card. 

10. No Card, remover o removeFromPokedex dos atributos desestruturados das props e adicinar na desestruturação do context.