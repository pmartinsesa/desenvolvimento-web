$getAllStorage = -> (table, properties) {
    begin
        puts "Inciando a listagem de #{table}!\n\n";

        Storage.find_each do |element|
            puts element.to_json;
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
            puts element.to_json;
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
            puts element.to_json;
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
            puts element.to_json;
        end
    
        puts "\n\nListagem concluida com sucesso!\n\n"
    rescue
        puts "\n\nErro ao listar os objetos, por favor verifique se os parametros passados estão corretos.\n\n";
    end
}