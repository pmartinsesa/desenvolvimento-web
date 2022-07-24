$createStorage = -> (table, properties) {
    begin
        puts "Iniciando a inserção de #{properties} na base de dados!\n\n";

        storage = Storage.new(properties);
        storage.save;

        puts "Objeto adicionado com sucesso!\n\n"; 
    rescue
        puts "Erro ao inserir o objeto, por favor verifique se os parametros passados estão corretos.\n\n";
    end
}

$createEmployee = -> (table, properties) {
    begin
        puts "Iniciando a inserção de #{properties} na base de dados!\n\n";

        userStorage = Storage.find(properties[:storage]);

        employee = Employee.new();
        employee.name = properties[:name];
        employee.cpf = properties[:cpf];
        employee.storage = userStorage;

        employee.save;

        puts "Objeto adicionado com sucesso!\n\n"; 
    rescue
        puts "Erro ao inserir o objeto, por favor verifique se os parametros passados estão corretos.\n\n";
    end
}

$createContract = -> (table, properties) {
    begin
        puts "Iniciando a inserção de #{properties} na base de dados!\n\n";

        relatedEmployee = Employee.find(properties[:employee]);

        if (relatedEmployee.contract.present?)
            raise;
        end

        contract = Contract.new();
        contract.contractId = properties[:contractId];
        contract.employee = relatedEmployee;

        contract.save;

        puts "Objeto adicionado com sucesso!\n\n"; 
    rescue
        puts "Erro ao inserir o objeto, por favor verifique se os parametros passados estão corretos.\n\n";
    end
}


$createProduct = -> (table, properties) {
    begin
        puts "Iniciando a inserção de #{properties} na base de dados!\n\n";

        product = Product.new(properties);
        product.save;

        puts "Objeto adicionado com sucesso!\n\n"; 
    rescue
        puts "Erro ao inserir o objeto, por favor verifique se os parametros passados estão corretos.\n\n";
    end
}

