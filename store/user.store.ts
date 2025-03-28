import { defineStore } from "pinia";
import { STORE_KEYS } from "./store-keys";

export type UserStateType = {
  user: any;
  isAuthenticated: boolean;
};
export type UserGetterType = {};
export type UserActionsType = {
  setUser: (user: any) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};
export const useUserStore = defineStore<
  string,
  UserStateType,
  UserGetterType,
  UserActionsType
>(STORE_KEYS.USER, {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  getters: {},
  actions: {
    setUser(user: any) {
      this.user = user;
    },
    setIsAuthenticated(isAuthenticated: boolean) {
      this.isAuthenticated = isAuthenticated;
    },
  },
});
