![imagem](/home/gustavo/Documentos/wordpress/materialEstudo/cisco.png)

# Laboratório – Comparar dados com um hash 

## Objetivos 

Use um programa de hash para verificar a integridade dos dados. 

## Histórico/Cenário 

É importante identificar quando os dados foram corrompidos ou adulterados. Um programa de hash pode ser usado para verificar se os dados foram alterados ou se permaneceram intocados. Um programa de hash executa uma função hash nos dados ou em um arquivo, o que gera um valor (geralmente mais curto). Há muitas funções hash diferentes, algumas muito simples e outras muito complexas. Quando o mesmo hash é realizado nos mesmos dados, o valor gerado é sempre o mesmo. Se for feita qualquer alteração nos dados, o valor de hash gerado será diferente. 

>  Observação: você precisará de privilégios de instalação e algum conhecimento do processo para instalar programas no Windows. 

## Recursos necessários 

* PC com acesso à Internet 

### Etapa 1: Crie um arquivo de texto 

1. - [x] Procure o programa Bloco de Notas em seu computador e abra-o.  
1. - [x]  Digite algo. 
1. - [x]  Escolha Arquivo > Salvar. 
1. - [x]  Navegue até a Área de Trabalho. 
1. - [x]  Digite Hash no campo Nome do arquivo: e clique em Salvar. 

### Etapa 2: Instale o HashCalc 

1. - [x]  Abra um navegador da Web e navegue até http://www.slavasoft.com/download.htm. 
1. - [x]  Clique em Download (Fazer download) na linha HashCalc 2.02. 
1. - [x]  Abra o arquivo hashcalc.zip e execute o arquivo setup.exe. 
1. - [x]  Siga o assistente de instalação para instalar o HashCalc. 
1. - [x]  Clique em Finish (Concluir) na última tela e feche o arquivo README que apareceu. Se desejar, você poderá ler o arquivo. 
1. - [x]  Agora, HashCalc está instalado e funcionando. 

### Etapa 3: Calcule um hash do arquivo Hash.txt 

1. - [x]  Defina os seguintes itens no HashCalc: 
    1. - [x]  Formato dos dados: Arquivo. 
    1. - [x]  Dados: clique no botão ... ao lado do campo de dados, navegue até a Área de Trabalho e escolha o arquivo Hash.txt. 
    1. - [x]  Desmarque a opção HMAC. 
    1. - [x]  Desmarque todos os tipos de hash, exceto MD5. b. Clicar no botão Calculate (Calcular). 
1. - [x]  Qual é o valor ao lado de MD5?
```
578387cd9781680287ade5a05a1bd002
```

### Etapa 4: Faça uma alteração no arquivo Hash.txt 

1. - [x]  Navegue até a Área de Trabalho e abra o arquivo Hash.txt. 
1. - [x]  Faça uma pequena alteração no texto, como a exclusão de uma letra ou adição de um espaço ou período. 
1. - [x] Clique em Arquivo > Salvar e feche o Bloco de Notas.

### Etapa 5: Calcule um novo hash do arquivo Hash.txt 

1. - [x]  Clique no botão Calculate (Calcular) em HashCalc novamente. 
	- [x] Qual é o valor ao lado de MD5? 
	```
	afe6a5ce8de4074b240c8067a29af94e
	```
	- [x] O valor é diferente do valor registado no passo 3? 
	```
	Sim é totalmente diferente.
	```
1. - [x] Coloque uma marca de seleção ao lado de todos os tipos de hash. 
1. - [x]  Clique em Calcular. 
1. - [x]  Observe que muitos dos tipos de hash criam um hash de um comprimento diferente. Por quê? 
	```
	Porquê, cada algoritimo calcula de forma diferente gerando um hash de tamanho diferênte.
	```



***

# Criador
Olá me chamo Gustavo, e criei este material, para mais informações, clique nos links abaixo:

* [LinkTree](https://www.linktree.com.br/gusleaooliveira)


* Disponível em : [Repositório de exercícios](https://github.com/gusleaooliveira/materialEstudo)