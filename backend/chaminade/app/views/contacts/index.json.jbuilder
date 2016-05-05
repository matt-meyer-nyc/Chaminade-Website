json.contacts @contacts do |contact|
  json.name contact.name
  json.email contact.email
  json.message contact.message
  json.id contact.id
end
