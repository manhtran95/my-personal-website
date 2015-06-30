class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  include SessionsHelper

def admin?
  session[:password] == 'foobar'
end

def authorize_admin
	# binding pry
    redirect_to root_path, alert: 'Access Denied' unless session[:log_in] == true
  end

end
