class Coin < ApplicationRecord

  validates :name, presence: true

  
end

## WHAT IF?
# user has many watched_coins
# watched_coins belong to user
# since coin data comes from api, only thing needed from watched