class User < ApplicationRecord

attr_reader :password

has_many :tracked_coins,
  foreign_key: :user_id,
  class_name: :TrackedCoin

has_many :holdings,
  foreign_key: :user_id,
  class_name: :Holding

validates :email, :password_digest, :session_token, presence: true
validates :email, uniqueness: true
validates :password, length: { minimum: 6 }, allow_nil: true

after_initialize :ensure_session_token!
# after_initialize :bonus!
# after_initialize :free_coins!

# def bonus!
#   self.buying_power ||= 155900
# end

# def free_coins!
#   self.holdings.create(name: 'ethereum', quantity: 32)
#   self.holdings.create(name: 'bitcoin', quantity: 1)
# end

def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end

def self.find_by_credentials(email, password)
  user = User.find_by(email: email)
  return nil unless user
  user.is_password?(password) ? user : nil
end

def is_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end

def reset_session_token!
  self.session_token = SecureRandom::urlsafe_base64
  self.save!
  self.session_token
end

 def ensure_session_token!
    self.session_token ||= SecureRandom::urlsafe_base64
 end

end
