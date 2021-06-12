import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotion";
import { LEADERS } from "../shared/leaders";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  leaders: LEADERS,
  promotions: PROMOTIONS,
};

//A reducer is a pure function that...
export const Reducer = (state = initialState, action) => {
  return state;
};
