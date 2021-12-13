import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ISearchProduct } from "../types";
import qs from 'qs';

const ProductsListPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState<boolean>(false);
  const { products, last_page } = useTypedSelector((store) => store.product);
  const { fetchProducts } = useActions();
  const [search, setSearch] = useState<ISearchProduct>({
    page: searchParams.get("page"),
    name: searchParams.get("name")
  });
  useEffect(() => {
    async function getProducts() {
        setLoading(true);
        try {
          await fetchProducts(search);
          setLoading(false);
        } catch (ex) {
          setLoading(false);
        }
      }
      getProducts();
  }, [search]);

  const buttons = [];
  for (var i = 1; i <= last_page; i++) {
    buttons.push(i);
  }

  return (
    <>
      <h1 className="text-center">Товари на сайті</h1>
      {loading && <h2>Loading ...</h2>}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.detail}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {buttons.map((item, key) => {

        const page : ISearchProduct = {
          ...search,
          page: item
        } 

        return (
          <Link
          onClick={()=>{setSearch(page);}}
            key={key}
            to={"?" + qs.stringify(page)}
            className="btn btn-success"
          >
            {item}
          </Link>
        );
      })}
    </>
  );
};

export default ProductsListPage;
