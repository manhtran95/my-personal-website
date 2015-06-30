a1 = "abc"
a2 = "abc"
#puts a1==a2

params[:session][:log_in] = true
def logged_in?
    #!current_user.nil?
    params[:session][:log_in] == true
  end

 puts logged_in?