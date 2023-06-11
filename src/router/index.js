import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddCategory from '../views/Category/AddCategory.vue';
import Category from '../views/Category/Category.vue';
import Admin from '../views/Admin.vue';
import Product from '../views/Product/Product.vue';
import AddProduct from '../views/Product/AddProduct.vue';
import ListProducts from '../views/Category/ListProducts.vue';
import EditCategory from '@/views/Category/EditCategory.vue';
import EditProduct from '@/views/Product/EditProduct.vue';
import ShowDetails from '@/views/Product/ShowDetails.vue';
import Signin from '@/views/Signin.vue';
import Signup from '@/views/Signup.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/category/show/:id',
    name: 'ListProducts',
    component: ListProducts
  },
  {
    path: '/admin/category/add',
    name: 'addCategory',
    component: AddCategory
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: Product
  },
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/product/show/:id',
    name: 'ShowDetails',
    component: ShowDetails
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
