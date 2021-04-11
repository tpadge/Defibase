json.coins do
  @coins.each do |coin|
    json.set! coin.id do
      json.extract! coin, :id, :symbol, :name
    end
  end
end