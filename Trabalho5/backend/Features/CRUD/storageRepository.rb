require './Views/storage.rb'
require './Views/contract.rb'
require './Views/employee.rb'
require './Views/product.rb'

require './Features/CRUD/create.rb'
require './Features/CRUD/read.rb'
require './Features/CRUD/update.rb'
require './Features/CRUD/delete.rb'

def dispatcherCommand(commandAndTable, properties)
    availableCommand = {
        insere: {
            contracts: $createContract,
            products: $createProduct,
            storages: $createStorage,
            employees: $createEmployee
        }, 
         altera: {
            contracts: $updateContract,
            products: $updateProduct,
            storages: $updateStorage,
            employees: $updateEmployee
        },
        exclui: {
            contracts: $deleteContract,
            products: $deleteProduct,
            storages: $deleteStorage,
            employees: $deleteEmployee
        },
        lista: {
            contracts: $getAllContract,
            products: $getAllProduct,
            storages: $getAllStorage,
            employees: $getAllEmployee
        }
    };

    command = commandAndTable[:command];
    table = commandAndTable[:table];

   availableCommand[command.to_sym][table.to_sym].(table, properties);
end
