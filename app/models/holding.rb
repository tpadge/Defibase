class Holding < ApplicationRecord
  validates :user_id, :quantity, :name, presence: true
  validates :user_id, uniqueness: {scope: :name}
  validates :quantity, numericality: { greater_than_or_equal_to: 0 }

  belongs_to :user,
    optional: true,
    foreign_key: :user_id,
    class_name: :User
end
