module CurrentUserConcern
  extend ActiveSupport::Concern

  included do
    before_action :set_current_user, only: :logged_in
  end

  # set current user according to user_id in session
  def set_current_user
    if session[:user_id]
      @current_user = User.find(session[:user_id])
    end
  end
end
