# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key    => '_ajaxtest_session',
  :secret => 'c306d093d5760458921842af7fa9e72229f1ca169f391045a8a4ba80fe4de7b15c845c9f9005777b5faaeda18b7933a6078015e41cea50ae9b7758ca0e0440fc'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
