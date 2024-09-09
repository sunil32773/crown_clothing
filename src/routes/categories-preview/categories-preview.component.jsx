// import "./categories-preview.style.scss";
import { Fragment } from "react";

import { useSelector } from "react-redux";
import { ClimbingBoxLoader } from "react-spinners";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/categories.selector.js";
import CategoryPreview from "../../components/category-preview/category-preview.component.jsx";
import Spinner from "../../components/spinner/spinner.component.jsx";
// import ProductCard from "../../components/product-card/product-card.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  console.log(categoriesMap);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title, i) => {
          const products = categoriesMap[title];
          return <CategoryPreview key={i} title={title} products={products} />;
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
