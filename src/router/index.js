import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddCategory from '../views/Category/AddCategory.vue';
import Category from '../views/Category/Category.vue';
import Admin from '../views/Admin.vue';
import Product from '../views/Product/Product.vue';
import AddProduct from '../views/Product/AddProduct.vue';
import EditCategory from '@/views/Category/EditCategory.vue';
import EditProduct from '@/views/Product/EditProduct.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
