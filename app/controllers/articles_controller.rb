class ArticlesController < ApplicationController

 before_filter :authorize_admin, except: [:index, :show]

  def index
  	@articles = Article.all
  end

  def show
  	@article = Article.find(params[:id])
  end

  def new
  	@article = Article.new
  end


  def edit
  	@article = Article.find(params[:id])
  end

  def create
  	@article = Article.new(article_params)
  	@article.description = @article.text[0..1000].gsub(/\s\w+\s*$/,'...')

  	if @article.save
  		redirect_to articles_path
  	else
  		render 'new'
  	end
  end

  def update
  	@article = Article.find(params[:id])
  	@article.description = article_params[:text][0..200].gsub(/\s\w+\s*$/,'...')

  	if @article.update(article_params)
  		redirect_to @article
  	else
  		render 'edit'
  	end
  end

  def destroy
  	@article = Article.find(params[:id])
  	@article.destroy

  	redirect_to articles_path
  end

  private
  def article_params
  	params.require(:article).permit(:title, :text)
  end

end
