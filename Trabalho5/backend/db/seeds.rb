storages = Storage.create([
  {:name => "Loja A", :cnpj => "55070598000187"},
  {:name => "Loja B", :cnpj => "37633559000169"},
  {:name => "Loja C", :cnpj => "27082464000140"}
])

employees =  Employee.create([
  {:name => "Funcionario1", :cpf => "1", :storage => storages[0]},
  {:name => "Funcionario2", :cpf => "2", :storage => storages[0]},
  {:name => "Funcionario3", :cpf => "3", :storage => storages[0]},
  {:name => "Funcionario4", :cpf => "4", :storage => storages[1]},
  {:name => "Funcionario5", :cpf => "5", :storage => storages[1]},
  {:name => "Funcionario6", :cpf => "6", :storage => storages[1]},
  {:name => "Funcionario7", :cpf => "7", :storage => storages[2]},
  {:name => "Funcionario8", :cpf => "8", :storage => storages[2]},
  {:name => "Funcionario9", :cpf => "9", :storage => storages[2]},
])

products = Product.create([
  {:name => "Produto1", :barcode => "123132132"},
  {:name => "Produto2", :barcode => "546456465"},
  {:name => "Produto3", :barcode => "879875462"},
  {:name => "Produto4", :barcode => "498674897"},
  {:name => "Produto5", :barcode => "045165489"},
  {:name => "Produto6", :barcode => "123123111"},
  {:name => "Produto7", :barcode => "789789456"},
  {:name => "Produto8", :barcode => "568418564"},
  {:name => "Produto9", :barcode => "456564023"},
])

contracts = Contract.create([
  {:contractId => "123", :employee => employees[0]},
  {:contractId => "234", :employee => employees[1]},
  {:contractId => "345", :employee => employees[2]},
  {:contractId => "456", :employee => employees[3]},
  {:contractId => "567", :employee => employees[4]},
  {:contractId => "678", :employee => employees[5]},
  {:contractId => "789", :employee => employees[6]},
  {:contractId => "890", :employee => employees[7]},
  {:contractId => "901", :employee => employees[8]},
])

