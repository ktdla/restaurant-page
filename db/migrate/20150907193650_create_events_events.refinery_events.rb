# This migration comes from refinery_events (originally 1)
class CreateEventsEvents < ActiveRecord::Migration

  def up
    create_table :refinery_events do |t|
      t.string :title
      t.text :description
      t.string :price
      t.integer :photo_id
      t.integer :category
      t.boolean :recommended
      t.integer :position

      t.timestamps
    end

  end

  def down
    if defined?(::Refinery::UserPlugin)
      ::Refinery::UserPlugin.destroy_all({:name => "refinerycms-events"})
    end

    if defined?(::Refinery::Page)
      ::Refinery::Page.delete_all({:link_url => "/events/events"})
    end

    drop_table :refinery_events

  end

end
