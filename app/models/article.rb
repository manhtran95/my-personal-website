class Article < ActiveRecord::Base
	has_many :comments, class_name: Comment, dependent: :destroy

	validates :title, presence: true
		validates :text, presence: true

	 end
