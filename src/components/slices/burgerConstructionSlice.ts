import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient } from '../../utils/types';

<<<<<<< HEAD
export interface IBurgerConstructor {
=======
interface IBurgerConstructor {
>>>>>>> 1f534b5f7b255a7d9f8dc23735cd38d4d440987c
  ingredients: TConstructorIngredient[];
  bun: TConstructorIngredient | TIngredient | null;
}

<<<<<<< HEAD
export const initialState: IBurgerConstructor = {
=======
const initialState: IBurgerConstructor = {
>>>>>>> 1f534b5f7b255a7d9f8dc23735cd38d4d440987c
  ingredients: [],
  bun: null
};

export const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    addIngredient: {
      reducer: (state, action: PayloadAction<TConstructorIngredient>) => {
        if (action.payload.type === 'bun') {
          state.bun = action.payload;
        } else {
          state.ingredients.push(action.payload);
        }
      },
      prepare: (ingredient: TIngredient) => {
        const id = nanoid();
        return { payload: { ...ingredient, id } };
      }
    },
    changeIngredient: (
      state,
      action: PayloadAction<{ from: number; to: number }>
    ) => {
      const { from, to } = action.payload;
      const ingredients = [...state.ingredients];
      ingredients.splice(to, 0, ingredients.splice(from, 1)[0]);
      state.ingredients = ingredients;
    },
    deleteIngredient: (state, action: PayloadAction<string>) => {
      state.ingredients = state.ingredients.filter(
        (ingredient) => ingredient.id !== action.payload
      );
    },
    emptyIngredient: (state) => {
      state.bun = null;
      state.ingredients = [];
    }
  },
  selectors: {
    selectBurgerConstructor: (state) => state
  }
});

export const {
  addIngredient,
  deleteIngredient,
  changeIngredient,
  emptyIngredient: emptyIngredient
} = burgerConstructorSlice.actions;

export const { selectBurgerConstructor } = burgerConstructorSlice.selectors;
