class WelcomeController < ApplicationController
	def index
		@post = Post.all.limit(5).order("created_at desc")
	end
end
