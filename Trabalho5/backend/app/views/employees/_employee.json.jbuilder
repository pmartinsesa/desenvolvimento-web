json.extract! employee, :id, :cpf, :name, :storage_id, :created_at, :updated_at
json.url employee_url(employee, format: :json)
