import ProductItem from "./ProductItem";
import * as request from "../../utils/request";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductList() {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const page = useRef(params.page ? parseInt(params.page) : 1);
  const nextPage = (e) => {
    e.preventDefault();
    page.current++;
    document.documentElement.scroll({
      top: 0,
      behavior: "smooth",
    });
    // fetchAPI()
    navigate(`/${page.current}`);
  };
  const prevPage = (e) => {
    e.preventDefault();
    if (page.current > 1) {
      page.current--;
      document.documentElement.scroll({
        top: 0,
        behavior: "smooth",
      });
      // fetchAPI()
      navigate(`/${page.current}`);
    }
  };
  const fetchAPI = async () => {
    try {
      dispatch({
        type: "loading/switch",
        payload: true,
      });
      const res = await request.get("/products", {
        params: {
          page: page.current,
          limit: 8,
        },
      });
      setProducts(res.data.listProduct);
      if (res.data.listProduct.length === 0) {
        navigate("/");
      }
      dispatch({
        type: "loading/switch",
        payload: false,
      });
    } catch (error) {
      toast.error("Có lỗi xảy ra");
      navigate("/");
    }
  };
  useEffect(() => {
    if (!params.page) {
      page.current = 1;
    }
    fetchAPI();
  }, [params]);
  return (
    <>
      <div className="product-list grid gap-4 grid-cols-4 mx-auto flex flex-wrap justify-center items-center py-5">
        {products.map((product) => {
          const { image, _id, name, price } = product;
          return (
            <ProductItem
              key={_id}
              id={_id}
              imgUrl={image}
              productName={name}
              productPrice={price}
            />
          );
        })}
      </div>

      {!loading && (
        <div className="action-btn flex justify-center py-5 gap-6">
          <button
            className="bg-red-500 hover:bg-red-600 transition px-3 py-2 rounded-md font-bold text-white text-lg"
            onClick={prevPage}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>

          <button
            className="bg-emerald-500 hover:bg-emerald-600 transition px-3 py-2 rounded-md font-bold text-white text-lg"
            onClick={nextPage}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      )}
    </>
  );
}
