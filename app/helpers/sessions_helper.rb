module SessionsHelper

  # Returns true if the user is logged in, false otherwise.
  def logged_in?
    session[:log_in]  == true
  end

  def log_out
    session[:log_in]  = false
  end
  
end
