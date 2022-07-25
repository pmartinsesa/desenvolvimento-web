$updateStorage = -> (table, properties) { 
    begin
        puts "Iniciando a alteração de #{properties} na base de dados!\n\n";

        storage = Storage.find(properties[:id]);
        if (properties[:product])
            storageProducts = Product.find(properties[:product]);
            storage.products << storageProducts;
        end

        storage.name = properties[:name] ? properties[:name] : storage.name;
        storage.cnpj = properties[:cnpj] ? properties[:cnpj] : storage.cnpj;

        storage.save;
        
        puts "Objeto alterado com sucesso!\n\n";
    rescue
        puts "Erro ao alterar o objeto, por favor verifique se os parametros passados estão corretos.\n\n";
    end
} 

$updateEmployee = -> (table, properties) { 
    begin
        puts "Iniciando a alteração de #{properties} na base de dados!\n\n";
        
        employee = Employee.find(properties[:id]);
        userStorage = Storage.find(properties[:storage]);

        employee.name = properties[:name] ? properties[:name] : employee.name;
        employee.cpf = properties[:cpf] ? properties[:cpf] : employee.cpf;
        employee.storage = userStorage ? userStorage : employee.storage;

        employee.save;

        puts "Objeto alterado com sucesso!\n\n";
    rescue
        puts "Erro ao alterar o objeto, por favor verifique se os parametros passados estão corretos.\n\n";
    end
}

$updateContract = -> (table, properties) { 
    begin
        puts "Iniciando a alteração de #{properties} na base de dados!\n\n";

        contract = Contract.find(properties[:id]);
        relatedEmployee = Employee.find(properties[:employee]);
        if (relatedEmployee.contract.present?)
            raise;
        end

        contract.contractId = properties[:contractId] ? properties[:contractId] : contract.contractId;
        contract.employee = relatedEmployee ? relatedEmployee : contract.employee;

        contract.save;

        puts "Objeto alterado com sucesso!\n\n";
    rescue
        puts "Erro ao alterar o objeto, por favor verifique se os parametros passados estão corretos.\n\n";
    end
}

$updateProduct = -> (table, properties) { 
    begin
        puts "Iniciando a alteração de #{properties} na base de dados!\n\n";

        product = Product.find(properties[:id]);
        if (properties[:storage])
            storageProducts = Storage.find(properties[:storage]);
            product.storages << storageProducts;
        end

        product.name = properties[:name] ? properties[:name] : product.name;
        product.barcode = properties[:barcode] ? properties[:barcode] : product.barcode;

        product.save;

        puts "Objeto alterado com sucesso!\n\n";
    rescue
        puts "Erro ao alterar o objeto, por favor verifique se os parametros passados estão corretos.\n\n";
    end
}