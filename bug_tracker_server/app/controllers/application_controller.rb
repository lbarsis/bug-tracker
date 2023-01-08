class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get '/' do 
    "hello world"
  end

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

  # Get Tickets from Project
  get '/projects/:id/tickets' do
    tickets = Project.find(params[:id]).tickets
    tickets.to_json
  end

  # Get Tickets from User
  get '/users/:id/tickets' do
    tickets = User.find(params[:id]).tickets
    tickets.to_json
  end

  # Get Projects from User
  get '/users/:id/projects' do
    tickets = User.find(params[:id]).tickets
    tickets.to_json
  end
end
