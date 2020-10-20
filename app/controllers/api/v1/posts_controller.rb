class Api::V1::PostsController < Api::V1::ApiController
  # GET /api/v1/posts
  def index
    @posts = Post.all

    render json: @posts, status: :ok
  end
  
  # POST /api/v1/posts
  def create
    # @list = List.new(list_params)
    
    # if @list.save
    #   render json: @list, status: :created
    # else
    #   render json: @list.errors, status: :unprocessable_entity
    # end
  end

  # GET /api/v1/posts/1
  def show
    @post = Post.find(params[:id])

    render json: @post, status: :ok
  end

  # PATCH OR PUT /api/v1/posts/1
  def update
    # @list = List.find(params[:id])

    # if @list.update(list_params)
    #   render json: @list, status: :ok
    # else
    #   render json: @list.errors, status: :unprocessable_entity
    # end
  end

  # DELETE /api/v1/posts/1
  def destroy
    # @list = List.find(params[:id])

    # if @list.destroy
    #   head(:ok)
    # else
    #   head(:unprocessable_entity)
    # end
  end

  # private

  # def posts_params
  # #   params.require(:list).permit(
  # #     :name, :purchase_date, :total_price, 
  # #     :total_products, :completed, 
  # #     products_attributes: [
  # #       :uuid, :name, :quantity, :purchased, 
  # #       :price, :total_price, :_destroy
  # #     ])
  # end
end
