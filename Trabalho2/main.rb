require './Features/CRUD/index.rb'

def processInput()
    invalidObject = {
        :command => "Invalid", 
        :table => "Invalid"
    }; 

    if(ARGV.length < 2)
        return invalidObject;
    end

    return {
        :command => ARGV[0], 
        :table => ARGV[1]
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

def getProperties()
    properties = {}

    for i in 2..ARGV.length-1 do
        userInputSplited = ARGV[i].split('=');
        properties.merge!({userInputSplited[0].to_sym => userInputSplited[1]})
    end 
    
    return properties;
end    

def main()
    commandAndTable = processInput();
    if(isValidSQLCall(commandAndTable))
        properties = getProperties();
        dispatcherCommand(commandAndTable, properties);
    else
        puts "O comando que você digitou está incorreto, por favor digite novamente."
    end
end

main