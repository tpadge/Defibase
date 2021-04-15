  @tracked_coins.each do |coin|
      json.set! coin.id do
      json.extract! coin, :name, :user_id, :id
  end
  end
