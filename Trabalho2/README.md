#################################################
TRABALHO 2 - PROGRAMAÇÃO WEB 25/07/2022
Pedro Martins e Sá; GRR20186104; pmes18
#################################################

---> INFORMAÇÕES SOBRE O BANCO
Tabelas: 
    * Storages:     [id, name, cnpj]                // tabela de lojas
    * Products:   [id, name, barcode]               // tabela de produtos
    * Employess:   [id, name, cpf, storage_id]      // tabela de funcionários e sua loja 1:N
    * Contracts: [id, employee_id, contractId]      // tabela de contrato de funcionários 1:1
    * products_storages: [storage_id, product_id]   // tabela gerada do relacionamento N:N entre product e storage

Relacionamento das tabelas:
    * Employess 1:1 Contracts
    * Storages 1:N Employess
    * Storages N:N Products

---> DIRETÓRIOS
    * /:  pasta raiz contem o arquivo main.rb o principal do projeto.
      * Views:  contém as entidades usadas para criação do banco de dados.
      * Database: contém o banco de dados com o nome de "StorageTable.db".
      * Features:  contém as features do trabalho:
        * CRUD: contém todas as operações de CRUD.
        * Table-Creators: tem os arquivos para criação das tabelas.

---> EXECUÇÃO
    1: execute o script shell "createAllTables.sh" no diretório raiz para criar as tabelas no banco;
    2: execute "ruby populateDatabase.rb" no diretório raiz para popular o banco
    3: execute "ruby main.rb" no diretório raiz
    4: Quando finalizar digite "sair" na linha de comando

    * OBS: os comando seguem o seguinte padrão
        < operação > < tabela >  atributo="valor"
        ** PARA QUE FUNCIONE CORRETAMENTE O "valor" NÃO DEVE CONTER ESPAÇOS, FAVOR SUBSTITUIR POR _
        ** CASO SEJA NECESSÁRIO COLOCAR ALGUMA RELAÇÃO, DEVE SER USADO O ID DO REGISTRO QUE VOCE DESEJA RELACIONAR
           EX: insere employee nome="Pedro_Sa" cpf="123456789" storage="1"

    -> INSERÇÃO
        insere <tabela> atributo1="valor1" ... atributoN="valorN"
        EX: insere storage name="Loja_Do_Seu_Zé" cnpj="123456789"

    -> EXCLUSÃO
        exclui <tabela> atributo1="valor1" ... atributoN="valorN"
        EX: exclui storage name="Loja_Do_Seu_Zé"

    -> LISTAGEM
        lista <tabela>
        EX: lista storage

    -> ALTERAÇÃO
        altera <tabela> id="X" atributo1="valor1" ... atributoN="valorN"
        *OBS: para a alteração deve-se passar o id do registro que vc quer alterar e depois os novos valores dos atributos
        EX: altera storage id="1" name="Loja_Do_Seu_José"
        