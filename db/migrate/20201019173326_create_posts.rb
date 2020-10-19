class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.text :title
      t.text :description
      t.text :body
      t.text :media

      t.timestamps
    end
  end
end
