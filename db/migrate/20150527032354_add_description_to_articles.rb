class AddDescriptionToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :body, :text
  end
end
