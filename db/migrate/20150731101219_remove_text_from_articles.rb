class RemoveBodyFromArticles < ActiveRecord::Migration
  def change
    remove_column :articles, :text, :text
  end
end
