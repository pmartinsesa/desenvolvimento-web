require "test_helper"

class ProductsStoragesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @products_storage = products_storages(:one)
  end

  test "should get index" do
    get products_storages_url
    assert_response :success
  end

  test "should get new" do
    get new_products_storage_url
    assert_response :success
  end

  test "should create products_storage" do
    assert_difference("ProductsStorage.count") do
      post products_storages_url, params: { products_storage: { product_id: @products_storage.product_id, storage_id: @products_storage.storage_id } }
    end

    assert_redirected_to products_storage_url(ProductsStorage.last)
  end

  test "should show products_storage" do
    get products_storage_url(@products_storage)
    assert_response :success
  end

  test "should get edit" do
    get edit_products_storage_url(@products_storage)
    assert_response :success
  end

  test "should update products_storage" do
    patch products_storage_url(@products_storage), params: { products_storage: { product_id: @products_storage.product_id, storage_id: @products_storage.storage_id } }
    assert_redirected_to products_storage_url(@products_storage)
  end

  test "should destroy products_storage" do
    assert_difference("ProductsStorage.count", -1) do
      delete products_storage_url(@products_storage)
    end

    assert_redirected_to products_storages_url
  end
end
