require './Features/CRUD/storageRepository.rb'

def processInput(argv)
    invalidObject = {
        :command => "Invalid", 
        :table => "Invalid"
    }; 

    if(argv.length < 2)
        return invalidObject;
    end

    return {
        :command => argv[0], 
        :table => argv[1]
    };
end

def isValidSQLCall(sqlInput)
    isValidCommand = 
        sqlInput[:command] === 'insere' || sqlInput[:command] === 'lista' || 
        sqlInput[:command] === 'exclui' || sqlInput[:command] === 'altera';
        
    isValidTable = 
        sqlInput[:table] === 'contracts' || sqlInput[:table] === 'products' || 
        sqlInput[:table] === 'storages' || sqlInput[:table] === 'employees';

    return isValidCommand && isValidTable;
end

def getProperties(props)
    hash = {}
    begin
        parsedProps = props.gsub("\"", "").split(/ /);

        for propParsed in parsedProps do
            trueProps = propParsed.gsub("_", " ");
        
            userInputSplited = trueProps.split('=');
            hash.merge!({userInputSplited[0].to_sym => userInputSplited[1]})
        end
        
        return hash;
    rescue
        return hash;
    end
end    

def main()
    puts "Inciando...";
    puts "Para encerrar o programa digite 'sair'";

    while true do
        argv = gets.chomp.split(/ /, 3);
        userWantsFinalizeScript = argv[0] == 'sair';

        if (userWantsFinalizeScript) 
            break;
        end

        commandAndTable = processInput(argv);
        if(isValidSQLCall(commandAndTable))
            properties = getProperties(argv[2]);
            dispatcherCommand(commandAndTable, properties);
        else
            puts "O comando que você digitou está incorreto, por favor digite novamente."
        end
    end

    puts "Encerrando...";
end

main