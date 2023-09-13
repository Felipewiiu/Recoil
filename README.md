# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

# Libs utilizadas

-- Recoil -- comando de instalação:  npm i recoil


# RecoilRoot

-- Todo o componente que precise ter acesso aos estados do Recoil precisam estar dentro de <RecoilRoote>

# Sobre o arquivo atom

Esse arquivo é guardado um átamo que no conceito do recoil representa um estado que é composto por vários átomos.

# useSetRecoilState  para que serve?

Essa função tem um propósito específico: permitir que você atualize o estado global gerenciado pelo Recoil.
Utilizei o hook useSetRecoilState para adicionar novos itens à lista de eventos.

# useRecoilValue para que serve?

Utilizei o hook useRecoilValue para ter acesso à lista de eventos.

O useRecoilValue é usado para ler o valor de um átomo Recoil (uma unidade de estado global) em um componente React. Ele aceita um argumento, que é o átomo Recoil que você deseja acessar, e retorna o valor atual desse átomo.

# lembre-se sempre das regras dos hooks:

- Apenas chame Hooks no nível mais alto. Não chame Hooks dentro de loops (for, foreach, while), condições (if, else if) ou funções aninhadas (por exemplo, numa função que é executada dado um evento de onClick).


- Apenas chame Hooks a partir de componentes funcionais. Não chame Hooks a partir de funções comuns, fora de componentes React.