@holdings.each do |holding|
  json.set! holding.id do
    json.extract! holding, :name, :user_id, :id, :quantity
  end
end