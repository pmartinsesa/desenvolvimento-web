require './Views/storageView.rb'
require './Views/contractView.rb'
require './Views/employeeView.rb'
require './Views/productView.rb'

require './Features/CRUD/crud.rb'

def dispatcherCommand(commandAndTable, properties)
    availableCommand = {
        insere: $insert, 
        altera: $update,
        exclui: $delete,
        lista: $getAll
    };
    repositories = {
       'contracts': Contract,
       'products': Product,
       'storages': Storage,
       'employees': Employee
    }

    command = commandAndTable[:command];
    table = commandAndTable[:table];
    repository = repositories[table.to_sym];

   availableCommand[command.to_sym].(table, properties, repository);
end
