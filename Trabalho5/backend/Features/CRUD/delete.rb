$deleteStorage = -> (table, properties) {
    begin
        puts "Inciando o processo de exclusão de #{properties} na base de dados!\n\n";

        storage = Storage.find_by(properties);
        storage.destroy;

        puts "Objeto excluido com sucesso!\n\n";
    rescue
        puts "Erro ao excluir o objeto, por favor verifique se os parametros passados estão corretos.\n\n";
    end
}

$deleteEmployee = -> (table, properties) {
    begin
        puts "Inciando o processo de exclusão de #{properties} na base de dados!\n\n";

        employee = Employee.find_by(properties);
        employee.destroy;

        puts "Objeto excluido com sucesso!\n\n";
    rescue
        puts "Erro ao excluir o objeto, por favor verifique se os parametros passados estão corretos.\n\n";
    end
}

$deleteContract = -> (table, properties) {
    begin
        puts "Inciando o processo de exclusão de #{properties} na base de dados!\n\n";

        contract = Contract.find_by(properties);
        contract.destroy;

        puts "Objeto excluido com sucesso!\n\n";
    rescue
        puts "Erro ao excluir o objeto, por favor verifique se os parametros passados estão corretos.\n\n";
    end
}

$deleteProduct = -> (table, properties) {
    begin
        puts "Inciando o processo de exclusão de #{properties} na base de dados!\n\n";

        product = Product.find_by(properties);
        product.destroy;

        puts "Objeto excluido com sucesso!\n\n";
    rescue
        puts "Erro ao excluir o objeto, por favor verifique se os parametros passados estão corretos.\n\n";
    end
}