  @tracked_coins.each do |coin|
      json.set! coin.name do
      json.extract! coin, :name, :user_id, :id
  end
  end
