# Declaring use of cookies for sessions and cookie config

# TODO - configure domain before deployment
Rails.application.config.session_store :cookie_store, key: "mm_beats", domain: "your_domain.com"
