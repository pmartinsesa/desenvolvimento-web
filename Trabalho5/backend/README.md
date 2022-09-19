# TRABALHO 5 - PROGRAMAÇÃO WEB 19/09/2022
# Pedro Martins e Sá; GRR20186104; pmes18

## INFORMAÇÕES SOBRE O BANCO DE DADOS
### Tabelas: 
  - Storages:     [id, name, cnpj]                // tabela de lojas
  - Products:   [id, name, barcode]               // tabela de produtos
  - Employess:   [id, name, cpf, storage_id]      // tabela de funcionários e sua loja 1:N
  - Contracts: [id, employee_id, contractId]      // tabela de contrato de funcionários 1:1
  - products_storages: [storage_id, product_id]   // tabela gerada do relacionamento N:N entre product e storage

### Relacionamento das tabelas:
    - Employess 1:1 Contracts
    - Storages 1:N Employess
    - Storages N:N Products

## DIRETÓRIOS
- backend:  pasta raiz onde possui todas as outras pastas do projeto.
  - app: terá os principais arquivos relacionados ao sistema.
    - controllers: possuí as controllers do projeto, é lá também onde é aplicada todas as regras de negocios da aplicação.
    - javascript: onde está o sweetalert_controller, para criação desse alert, sempre mostrado antes de excluir um registro do banco, foi usado o Stimulus.
    - models: definição das models de acordo com as tabelas citadas acima.
    - views: o frontend da aplicação, é nesse ponto que está implementada o html da aplicação.
  - config: terá os arquivos de configuração geral do projeto, como o rootes.rb, arquivo responsável por definir as rotas da aplicação.
  - db: arquivo que contém as informações sobre o banco de dados
    - migrate: possuí as migrações definidas pelas models e views

## EXECUÇÃO
  ### Dentro da pasta backend:
    - bundle install
    - execute rails db:migrate
    - execute rails db:reset
    - execute rails s
    - acesse http://127.0.0.1:3000/ no seu navegador

## Usuários
  ### admin
    login: admin@admin
    password: 123123

  ### user
    login: user@user
    password: 123123
