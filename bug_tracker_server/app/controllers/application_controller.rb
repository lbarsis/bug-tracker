class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

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

  get '/projects/22' do
    tickets = Project.find(params[:22])
    tickets.to_json
  end

end
