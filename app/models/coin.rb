class Coin < ApplicationRecord

  validates :name, :symbol, presence: true

end
