class Article < ActiveRecord::Base
	has_many :comments, class_name: Comment, dependent: :destroy
	has_attached_file :photo, :styles => { :small => "110x110#", :big => "600x400#" },
	:url  => "/assets/articles/:id/:style/:basename.:extension",
	:path => ":rails_root/public/assets/articles/:id/:style/:basename.:extension",
	:default_url => "/images/default_:style.jpg"
	validates_presence_of :title, :description, :body
	do_not_validate_attachment_file_type :photo
	validates_attachment_size :photo, :less_than => 5.megabytes
end
