class PostsController < ApplicationController
	#carica le funzioni di controllo dei post [:show, :edit, :update, :destroy]
	before_action :find_post, only: [:show, :edit, :update, :destroy]

#richiama l'index dei post (redirect_to @post  --> richiama direttamente l'index

	def index
		@post = Post.all.order("created_at desc").paginate(page: params[:page], per_page: 5)
	end

#per generare/inserire nuovi post

	def new
		@post = Post.new
	end

#per creare nuovi post

	def create
		@post = Post.new post_params
# if parte di ciclo che permette il salvataggio dei post e risp. con un messagio. 
		if @post.save
			redirect_to @post, notice: "Ciao il tuo articolo è stato salvato con successo."
#else altra parte di codice che se non riesce a salvare il post 
		else
			render 'new', notice: "ho no, non sono stato capace di salvare il tuo post."
		end
	end
#per visualizza nella pagina 
	def show
	end
#per eliminare post
	def edit
	end
#ciclo  che dice se il post è stato aggiornato e visualizzerai un messagio senno ritorni in edit
	def update
		if @post.update post_params
			redirect_to @post, notice: "Azz! il tuo articolo è stato salvato con successo."
		else 
			render 'edit'
		end
	end
#per eliminare un post
	def destroy
		@post.destroy
		redirect_to posts_path
	end

	private
#definisce i parametri dei post 
	def post_params
		params.require(:post).permit(:title, :content, :image, :slug)
	end

	def find_post
		@post = Post.friendly.find(params[:id])
	end
#controlla l id dei post della pagina (show.html.erb)
	
		
	
end
