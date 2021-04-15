class TrackedCoin < ApplicationRecord

  validates :name, presence: true

  belongs_to :user,
    optional: true,
    foreign_key: :user_id,
    class_name: :User

end
