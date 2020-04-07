# Api

Para te explicar o que é uma API, a maneira mais fácil é mostrando um exemplo de como usamos, vamos para um exemplo?


## Como consumir uma API, com python?
O programa deve randomicamente pegar o nome de uma pessoa qualquer e mostrar uma mensagem de boas-vindas para essa pessoa:   


### Resposta
Vamos dizer que estamos usando o python3:

```python
#!/usr/bin/env python3
```

Após vamos importar a biblioteca **requests**, pegando o método **get**, que faz uma requisição **HTTP** para um servidor, que retorna isso para nosso programa.

E também será importado o método **choice**, para randomizar uma lista, vindo da biblioteca **random**.

```python
from requests import get
from random import choice

```

Temos que fazer uma requisição para o servidor através do método **get**, e mandando no parâmetro **url** a **uri** da api que vamos consumir, no caso do IBGE (que retorna uma lista de nomes), e salvar em uma variável:

```python
resp = get(url="https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking")
```

Para entender o próximo código vamos entender o que a requisição dessa api retorna:

```json
[{
  'localidade': 'BR',
  'sexo': None,
  'res': [
    {'nome': 'MARIA', 'frequencia': 11734129, 'ranking': 1},  
    {'nome': 'JOSE', 'frequencia': 5754529, 'ranking': 2},
    {'nome': 'ANA', 'frequencia': 3089858, 'ranking': 3},
    {'nome': 'JOAO', 'frequencia': 2984119, 'ranking': 4},
    {'nome': 'ANTONIO', 'frequencia': 2576348, 'ranking': 5},
    {'nome': 'FRANCISCO', 'frequencia': 1772197, 'ranking': 6},
    {'nome': 'CARLOS', 'frequencia': 1489191, 'ranking': 7},
    {'nome': 'PAULO', 'frequencia': 1423262, 'ranking': 8},
    {'nome': 'PEDRO', 'frequencia': 1219605, 'ranking': 9},
    {'nome': 'LUCAS', 'frequencia': 1127310, 'ranking': 10},
    {'nome': 'LUIZ', 'frequencia': 1107792, 'ranking': 11},
    {'nome': 'MARCOS', 'frequencia': 1106165, 'ranking': 12},
    {'nome': 'LUIS', 'frequencia': 935905, 'ranking': 13},
    {'nome': 'GABRIEL', 'frequencia': 932449, 'ranking': 14},
    {'nome': 'RAFAEL', 'frequencia': 821638, 'ranking': 15},
    {'nome': 'FRANCISCA', 'frequencia': 725642, 'ranking': 16},
    {'nome': 'DANIEL', 'frequencia': 711338, 'ranking': 17},
    {'nome': 'MARCELO', 'frequencia': 693215, 'ranking': 18},
    {'nome': 'BRUNO', 'frequencia': 668217, 'ranking': 19},
    {'nome': 'EDUARDO', 'frequencia': 632664, 'ranking': 20}
    ]
}]
```

Como visto, o método **json()** retorna um json (que é salvo aqui dentro de uma lista do python).

Dentro desse json, temos a chave **localidade**, **sexo**, e **res**.

Res tem uma lista de dicionários com as chaves de **nome**, **frequência**, e **ranking**.

Para pegarmos apenas a lista devemos pegar no índice 0 ```resp.json()[0]``` da lista que o json retorna. Dentro disso devemos pegar o res, através do atributo res ```['res']```, ficando ```resp.json()[0]['res']```.

Pegamos esse código anterior, e colocamos para randomizar, com o método **choice** e vamos salvar na variável nome.

```python
nome = choice(resp.json()[0]['res'])
```

Após, vamos pegar a chave do nome (```nome['nome']```), converter para letras minúsculas (com o método lower ```.lower()```) e colocar a primeira letra em maiúsculo (com o método ```.capitalize()```), ficando ```nome['nome'].lower().captalize()```.

Esse nome sorteado e arrumado anteriormente, será substituído no local em que se encontra (dentro das chaves -```{ }```) e concatenado com o texto que desejamos ver.

```python
print(f"Olá, {nome['nome'].lower().capitalize()} seja bem vindo!")
```

O resultado do programa sendo executado será, por exemplo:
```text
[usuario@manjaro]$ python3 exemplo.py
Olá, Jose seja bem vindo!
[usuario@manjaro]$
```

## O que é uma API?

Portanto uma **API**, ou Interface de Programação de Aplicações, nada mais é do que um backend que pode ser acessado através de uma **URI**, e que retorna o resultado para uma **requisição HTTP**.

Neste exemplo acima utilizamos a API, criada pelo IBGE, que quando fazemos uma requisição nos retorna a resposta no formato de um json.

Assim, reutilizamos os código de terceiros, não precisando reproduzir e podendo ser acessada por uma pagina web, por um aplicativo mobile e/ou  por um aplicativo desktop.


> **Observações:**
>
>  As apis, aceitam requisições que peçam dados através do método **GET**, podem enviar dados através do método **POST**, e deletando através do método **DELETE**, tendo outros médotos e que cada api usa de sua maneira.
>
> As **URI's**, como a do nosso exemplo, é um padrão parecido com as urls que digitamos no navegador, mas que servem para a comunicação com a API sendo um padrão a ser seguido.


---
# Criador
Olá me chamo Gustavo, e criei este material, para mais informações, clique no link abaixo:

* [LinkTree](https://www.linktree.com.br/gusleaooliveira)
