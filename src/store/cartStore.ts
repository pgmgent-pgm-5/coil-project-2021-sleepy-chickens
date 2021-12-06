import create from "zustand";

import { DishCart } from '../interfaces/interfaces';

interface props {
  id: number,
  name: string,
  description: string, 
  picture: string,
  price: number
  restaurantId: number
}

interface DishState {
  dishes: DishCart[];
  addDish: ({id, name, description, picture, price, restaurantId}: props) => void;
  removeDish: (id: number) => void;
  minusDish: (id: number) => void;
}

export const useStore = create<DishState>((set) => ({
  dishes: [],
  addDish: ({ id, name, description, picture, price, restaurantId }: props) => {
    set((state) => {
      const dishes = {...state.dishes};
      if (!dishes[id]) {
        dishes[id] = {
          id,
          name,
          picture,
          price,
          description,
          quantity: 0,
          restaurantId
        }
      }
      dishes[id].quantity += 1;
      return { dishes }
    }
    );
  },
  removeDish: (id) => {
    set((state) => {
      delete state.dishes[id];
    });
  },
  minusDish:(id) => {
    set((state) => {
      const dishes = { ...state.dishes};
      if (!dishes[id]) {
        return { dishes };
      }
      const quantity = dishes[id].quantity - 1;

      if (quantity <= 0) {
        delete state.dishes[id];
      } else {
        dishes[id].quantity = quantity;
      }
      return { dishes }
    })
  }
}));