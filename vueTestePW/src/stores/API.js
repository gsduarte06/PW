import * as api from "../api/api";
import { defineStore } from 'pinia'
var API_BASE_URL = 'https://fakestore.iotechpis.com'


export const useProductsStore = defineStore('products', {

  state: ()=>({
    Allproducts :[]
  }),

  getters: {
    getProducts() {
      return this.Allproducts;
    }
  },

  actions: {
     async getAllProducts() {
      try {
        const data = await api.get(API_BASE_URL, 'products');
        this.Allproducts = object.keys(data);
      } catch (error) {
        console.error("Error in store fetching products:", error);
        throw error;
      }
    },
    },
  });