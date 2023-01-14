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

  get '/projects/:id' do
    project = Project.find(params[:id])
    project.to_json
  end

  get '/tickets' do
    tickets = Ticket.all
    tickets.to_json(include: :user)
  end

  get '/users' do
    users = User.all
    users.to_json(include: {tickets: { include: :project }})
  end

  get '/users/:id' do
    tickets = User.find(params[:id])
    tickets.to_json
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

  post '/tickets' do 
    project = Ticket.create(
      title: params[:title],
      priority: params[:priority],
      status: params[:status],
      hours: params[:hours],
      description: params[:description],
      project_id: params[:project_id],
      user_id: params[:user_id]
    )
    project.to_json
  end

  #patch requests

  patch '/projects/:id' do 
    project = Project.find(params[:id])
    project.update(
      name: params[:name],
      description: params[:description],
      status: params[:status]
    )
    project.to_json
  end

  
  patch '/tickets/:id' do 
    project = Ticket.find(params[:id])
    project.update(
      title: params[:title],
      priority: params[:priority],
      status: params[:status],
      hours: params[:hours],
      description: params[:description],
      project_id: params[:project_id],
      user_id: params[:user_id]
    )
    project.to_json
  end

  # delete requests

  delete '/projects/:id' do 
    project = Project.find(params[:id]).destroy
    project.to_json
  end

end
