$getAllStorage = -> (table, properties) {
    begin
        puts "Inciando a listagem de #{table}!\n\n";

        Storage.find_each do |element|
            puts "Loja #{element.name.to_json}:\n"
            puts "\t#{element.to_json}\n\n";
            puts "\tIniciando a listagem da tabela de relações com os produtos:\n\n"
            puts "\t\t#{element.products.to_json}";
        end

        puts "\n\nListagem concluida com sucesso!\n\n"
    rescue
        puts "\n\nErro ao listar os objetos, por favor verifique se os parametros passados estão corretos.\n\n";
    end
}

$getAllEmployee = -> (table, properties) {
    begin
        puts "Inciando a listagem de #{table}!\n\n";

        Employee.find_each do |element|
            puts "Funcionario #{element.name.to_json}:\n"
            puts"\t#{element.to_json}\n\n";
        end
    
        puts "\n\nListagem concluida com sucesso!\n\n"
    rescue
        puts "\n\nErro ao listar os objetos, por favor verifique se os parametros passados estão corretos.\n\n";
    end
}

$getAllContract = -> (table, properties) {
    begin
        puts "Inciando a listagem de #{table}!\n\n";

        Contract.find_each do |element|
            puts "Contrato #{element.contractId.to_json}:\n"
            puts"\t#{element.to_json}\n\n";
        end
    
        puts "\n\nListagem concluida com sucesso!\n\n"
    rescue
        puts "\n\nErro ao listar os objetos, por favor verifique se os parametros passados estão corretos.\n\n";
    end
}

$getAllProduct = -> (table, properties) {
    begin
        puts "Inciando a listagem de #{table}!\n\n";

        Product.find_each do |element|
            puts "Produto #{element.name.to_json}:\n"
            puts "\t#{element.to_json}\n\n";
            puts "\tIniciando a listagem da tabela de relações com as lojas:\n\n"
            puts "\t\t#{element.storages.to_json}";
        end
    
        puts "\n\nListagem concluida com sucesso!\n\n"
    rescue
        puts "\n\nErro ao listar os objetos, por favor verifique se os parametros passados estão corretos.\n\n";
    end
}