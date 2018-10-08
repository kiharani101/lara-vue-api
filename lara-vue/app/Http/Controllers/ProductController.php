<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Auth;

class ProductController extends Controller
{
    public function index()
    {
      return Product::orderBy('created_at', 'desc')->get();
    }

    public function store()
    {
      $product =  Product::create(request()->all() + ['user_id' => Auth::id()]);
      return $product;
    }

    public function show($id)
    {
      $product = Product::find($id);
      if($product)
        return response()->json($product);

      return response()->json(['error' => 'Product not found'], 404);
    }

    public function update($id)
    {
      $product = Product::find($id);
      $product->update(request()->all());
      return response()->json($product);
    }

    public function destroy($id)
    {
      try {
        Product::destroy($id);
        return response([], 204);
      } catch (\Exception $e) {
        return response(['Error! Could not delete the product.'], 500);
      }
    }
}
