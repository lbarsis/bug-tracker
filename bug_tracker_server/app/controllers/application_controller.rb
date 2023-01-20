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

  get '/users' do
    users = User.all
    users.to_json(include: {tickets: { include: :project }})
  end

  get '/users/:id' do
    tickets = User.find(params[:id])
    tickets.to_json(include: :tickets)
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
    ticket = Ticket.create(
      title: params[:title],
      priority: params[:priority],
      status: params[:status],
      hours: params[:hours],
      description: params[:description],
      project_id: params[:project_id],
      user_id: params[:user_id]
    )
    ticket.to_json
  end

  post '/users' do 
    user = User.create(
      first_name: params[:first_name],
      last_name: params[:last_name],
      phone: params[:phone],
      email: params[:email],
      profile_image: params[:profile_image]
    )
    user.to_json
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

  
  delete '/tickets/:id' do 
    project = Ticket.find(params[:id]).destroy
    project.to_json
  end

  delete '/users/:id' do 
    project = User.find(params[:id]).destroy
    project.to_json
  end

end
