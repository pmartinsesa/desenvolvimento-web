$insert = -> (table, properties, repository) {
    begin
        puts "Iniciando a inserção de #{properties} na base de dados!";

        element = repository.new(properties);
        element.save;

        puts "Objeto adicionado com sucesso!"; 
    rescue
        puts "Erro ao inserir o objeto, por favor verifique se os parametros passados estão corretos.";
    end
}

$update = -> (table, properties, repository) { 
    begin
        puts "Iniciando a alteração de #{properties} na base de dados!";

        element = repository.find(properties[:id]);
        element.update(properties);

        puts "Objeto alterado com sucesso!";
    rescue
        puts "Erro ao alterar o objeto, por favor verifique se os parametros passados estão corretos.";
    end
}

$delete = -> (table, properties, repository) {
    begin
        puts "Inciando o processo de exclusão de #{properties} na base de dados!";

        element = repository.find_by(properties);
        element.delete;

        puts "Objeto excluido com sucesso!";
    rescue
        puts "Erro ao excluir o objeto, por favor verifique se os parametros passados estão corretos.";
    end
}

$getAll = -> (table, properties, repository) {
    begin
        puts "Inciando a listagem de #{table}!";

        repository.find_each do |element|
            puts element.to_json;
        end
    
        puts "Listagem concluida com sucesso!"
    rescue
        puts "Erro ao listar os objetos, por favor verifique se os parametros passados estão corretos.";
    end
}