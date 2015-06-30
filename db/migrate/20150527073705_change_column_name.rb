class ChangeColumnName < ActiveRecord::Migration
  def change
  	rename_column :articles, :body, :description

  end
end
