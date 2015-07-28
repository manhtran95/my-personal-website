class Article < ActiveRecord::Base
	has_many :comments, class_name: Comment, dependent: :destroy

	validates_presence_of :title, :description, :text

	 end
