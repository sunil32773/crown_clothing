import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);


export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
  }, {}) 
}
) 

export const selectIsLoading = createSelector(
  [selectCategoryReducer], 
  (categoriesSlice) => categoriesSlice.isLoading 
)


//   return state.categories.categories.reduce((acc, category) => {
//     // DESTRUCTURING title and items from dacSnapshot.
//     const { title, items } = category;
    
//     // assigning title with items and returning new object
//     acc[title.toLowerCase()] = items;
//     console.log("selector fired")
//     return acc;
//   }, {});
// };
// export const selectCurrentUser = state => state.user.currentUser;
