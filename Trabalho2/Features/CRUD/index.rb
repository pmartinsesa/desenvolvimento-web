require './Views/storageView.rb'

$insert = -> (table, properties) {
    puts "Iniciando a inserção de #{properties} na base de dados!";

    storage = Storage.new (properties);
    storage.save;

    puts "Adicionado com sucesso!";
}

$update = -> (table, properties) { puts "updateando" }
$delete = -> (table, properties) { puts "deletando" }
$getAll = -> (table, properties) { 
    puts "Inciando a listagem de #{table}";

    Storage.find_each do |storage|
        puts storage.to_json;
    end
    puts "Finalizado"
}

def dispatcherCommand(commandAndTable, properties)
    availableCommand = {
        insere: $insert, 
        altera: $update,
        exclui: $delete,
        lista: $getAll
    };

    command = commandAndTable[:command];
    table = commandAndTable[:table];

    availableCommand[command.to_sym].(table, properties);
end
