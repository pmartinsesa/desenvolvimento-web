require './Views/storage.rb'
require './Views/product.rb'
require './Views/employee.rb'
require './Views/contract.rb'

require './Features/CRUD/create.rb'

storages = [
    {:name => "Loja A", :cnpj => "55070598000187"},
    {:name => "Loja B", :cnpj => "37633559000169"},
    {:name => "Loja C", :cnpj => "27082464000140"}
]

storages.each do |s|
    $createStorage.('storages', s)
end

employees = [
    {:name => "Funcionario1", :cpf => "1", :storage => "1"},
    {:name => "Funcionario2", :cpf => "2", :storage => "1"},
    {:name => "Funcionario3", :cpf => "3", :storage => "1"},
    {:name => "Funcionario4", :cpf => "4", :storage => "2"},
    {:name => "Funcionario5", :cpf => "5", :storage => "2"},
    {:name => "Funcionario6", :cpf => "6", :storage => "2"},
    {:name => "Funcionario7", :cpf => "7", :storage => "3"},
    {:name => "Funcionario8", :cpf => "8", :storage => "3"},
    {:name => "Funcionario9", :cpf => "9", :storage => "3"},
]

employees.each do |e|
    $createEmployee.('employees', e)
end

products = [
    {:name => "Produto1", :barcode => "123132132", :storage => "1"},
    {:name => "Produto2", :barcode => "546456465", :storage => "1"},
    {:name => "Produto3", :barcode => "879875462", :storage => "1"},
    {:name => "Produto4", :barcode => "498674897", :storage => "2"},
    {:name => "Produto5", :barcode => "045165489", :storage => "2"},
    {:name => "Produto6", :barcode => "123123111", :storage => "2"},
    {:name => "Produto7", :barcode => "789789456", :storage => "3"},
    {:name => "Produto8", :barcode => "568418564", :storage => "3"},
    {:name => "Produto9", :barcode => "456564023", :storage => "3"},
]

products.each do |p|
    $createProduct.('products', p)
end

contracts = [
    {:contractId => "123", :employee => "1"},
    {:contractId => "234", :employee => "2"},
    {:contractId => "345", :employee => "3"},
    {:contractId => "456", :employee => "4"},
    {:contractId => "567", :employee => "5"},
    {:contractId => "678", :employee => "6"},
    {:contractId => "789", :employee => "7"},
    {:contractId => "890", :employee => "8"},
    {:contractId => "901", :employee => "9"},
]

contracts.each do |c|
    $createContract.('contracts', c)
end
