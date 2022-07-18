def processInput()
    invalidObject = {:command => "Invalid", :table => "Invalid"}; 

    if(ARGV.length < 2)
        return invalidObject;
    end

    return {:command => ARGV[0], :table => ARGV[1]};
end

def isValidSQLCall(sqlInput)
    isValidCommand = sqlInput[:command] === 'insere' || sqlInput[:command] === 'lista' || sqlInput[:command] === 'exclui' || sqlInput[:command] === 'altera';
    isValidTable = sqlInput[:table] === 'contracts' || sqlInput[:table] === 'products' || sqlInput[:table] === 'storages' || sqlInput[:table] === 'employees';

    return isValidCommand && isValidTable;
end

def main()
    userInputProcessed = processInput();
    if(isValidSQLCall(userInputProcessed))
        puts "eba"
    else
        puts "f"
    end
end

main