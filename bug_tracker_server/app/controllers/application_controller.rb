class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  # Get Requests

  get '/' do 
    "hello world"
  end

  get '/projects' do
    projects = Project.all
    projects.to_json(
      include: {
        tickets: {
          include: :user
        }
      }
    )
  end

  get '/tickets' do
    tickets = Ticket.all
    tickets.to_json(include: :user)
  end

  get '/users' do
    users = User.all
    users.to_json(include: {tickets: { include: :project }})
  end

  get '/projects/:id/tickets' do
    tickets = Project.find(params[:id]).tickets
    tickets.to_json
  end

  get '/users/:id/tickets' do
    tickets = User.find(params[:id]).tickets
    tickets.to_json
  end

  get '/users/:id/projects' do
    tickets = User.find(params[:id]).tickets
    tickets.to_json
  end

  # Post requests
  
  post '/projects' do 
    project = Project.create(
      name: params[:name],
      description: params[:description],
      status: params[:status]
    )
    project.to_json
  end

  #patch requests

  patch '/projects/:id' do 
    project = Project.find(params[:id])
    project = Project.update(
      name: params[:name],
      description: params[:description],
      status: params[:status]
    )
    project.to_json
  end

  # delete requests

  delete '/projects/:id' do 
    project = Project.find(params[:id]).destroy
    project.to_json
  end

end
