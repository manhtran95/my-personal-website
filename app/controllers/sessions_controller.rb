class SessionsController < ApplicationController
  def new
  end

  def create

   # user = User.find_by(email: params[:session][:email].downcase)
   # if user && user.authenticate(params[:session][:password])
   if ( (params[:session][:email]=="a@a.a") and (params[:session][:password]=="a") )         
     session[:log_in] = true
     #  log_in user
     
     flash[:success] = 'Successful login'
     redirect_to root_url
   else
    flash.now[:danger] = 'Invalid email/password combination'
    render 'new'
  end 

end


def redirect_back_or_default(default)
  redirect_to(session[:return_to] || default)
  session[:return_to] = nil
end

def store_return_to
  session[:return_to] = request.url
end

def destroy
  log_out
  redirect_back_or_default(request.referer)

end

end
