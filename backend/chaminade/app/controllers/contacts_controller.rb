class ContactsController < ApplicationController

  def index
    @contacts = Contact.all
  end

  def show
    @contact = Contact.find(params[:id])
  end

  def create
    @contact = Contact.new(name: params[:name], email: params[:email], message: params[:message])
    if @contact.save
      render json: 'show', formats: [:json], handlers: [:jbuilder]
    else
      render json: {error: 'Contact could not be created'}, status: 422
  end
end

  def update
    @contact = Contact.find(params[:id])
    @contact.name = contact_params[:name]
    @contact.email = contact_params[:email]
    @contact.message = contact_params[:message]
    if @contact.save
      render json: 'show', formats: [:json], handlers: [:jbuilder]
    else
      render json: {error: 'update not workin'}, status: 422
    end
  end

  def destroy
    @contact = Story.find(params[:id])
    @contact.destroy
    render json: {delete: "contact deleted"}, status: 200
  end






end
