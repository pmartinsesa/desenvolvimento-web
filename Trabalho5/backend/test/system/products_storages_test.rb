require "application_system_test_case"

class ProductsStoragesTest < ApplicationSystemTestCase
  setup do
    @products_storage = products_storages(:one)
  end

  test "visiting the index" do
    visit products_storages_url
    assert_selector "h1", text: "Products storages"
  end

  test "should create products storage" do
    visit products_storages_url
    click_on "New products storage"

    fill_in "Product", with: @products_storage.product_id
    fill_in "Storage", with: @products_storage.storage_id
    click_on "Create Products storage"

    assert_text "Products storage was successfully created"
    click_on "Back"
  end

  test "should update Products storage" do
    visit products_storage_url(@products_storage)
    click_on "Edit this products storage", match: :first

    fill_in "Product", with: @products_storage.product_id
    fill_in "Storage", with: @products_storage.storage_id
    click_on "Update Products storage"

    assert_text "Products storage was successfully updated"
    click_on "Back"
  end

  test "should destroy Products storage" do
    visit products_storage_url(@products_storage)
    click_on "Destroy this products storage", match: :first

    assert_text "Products storage was successfully destroyed"
  end
end
