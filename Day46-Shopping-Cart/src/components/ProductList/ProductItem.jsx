import { toast } from "react-toastify";
import cartSvg from "../../assets/shopping-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductItem({ imgUrl, productName, productPrice, id }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsCart);
  const indexProduct = products.findIndex((product) => product._id === id);

  const quantity = indexProduct === -1 ? 0 : products[indexProduct].quantity;
  const handleAddCart = () => {
    dispatch({
      type: "cart/add",
      payload: {
        _id: id,
        name: productName,
        price: productPrice * (quantity + 1),
        quantity: quantity + 1,
        imgUrl,
      },
    });

    toast.success("Đã thêm vào giỏ hàng!!!");
  };
  return (
    <div className="product-item max-w-xs bg-white shadow-md rounded-md overflow-hidden transition-transform transform hover:scale-105 p-4">
      <Link to={`/product/${id}`} className="block">
        <img
          src={imgUrl}
          alt={productName}
          className="w-full h-48 object-cover"
        />
        <div className="pt-4 pb-4">
          <p className="product-name text-xl font-bold mb-2 truncate">
            {productName}
          </p>
          <p className="product-price text-lg font-bold mb-2">
            ${productPrice}
          </p>
        </div>
      </Link>

      <button
        className="add-to-cart-btn inline-block p-3 rounded-md bg-sky-500 hover:bg-sky-600 transition focus:outline-none"
        onClick={handleAddCart}
      >
        <img src={cartSvg} alt="" className="w-6 h-6" />
      </button>
    </div>
  );
}
export default ProductItem;
