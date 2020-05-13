#!/usr/bin/env python3

from requests import get
from random import choice

resp = get(url="https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking")
nome = choice(resp.json()[0]['res'])

print(f"Olá, {nome['nome'].lower().capitalize()} seja bem vindo!")
