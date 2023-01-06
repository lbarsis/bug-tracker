class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  # Get all Projects
  get '/projects' do
    projects = Project.all
    projects.to_json
  end

  # Get all Tickets
  get '/tickets' do
    tickets = Ticket.all
    tickets.to_json
  end

  # Get all Users
  get '/users' do
    users = User.all
    users.to_json
  end

  
end
