class Message
  attr_accessor :name, :email, :body
  include ActiveModel::Model
  validates :name, :email, :body, presence: true
end
