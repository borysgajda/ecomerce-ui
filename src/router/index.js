import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AddCategory from '@/views/Category/AddCategory.vue';
import Category from '@/views/Category/Category.vue';
import Admin from '@/views/Admin.vue';
import Cart from '@/views/Cart.vue';
import Product from '@/views/Product/Product.vue';
import AddProduct from '@/views/Product/AddProduct.vue';
import ListProducts from '@/views/Category/ListProducts.vue';
import EditCategory from '@/views/Category/EditCategory.vue';
import EditProduct from '@/views/Product/EditProduct.vue';
import ShowDetails from '@/views/Product/ShowDetails.vue';
import WishList from '@/views/Product/WishList.vue';
import Signin from '@/views/Signin.vue';
import Signup from '@/views/Signup.vue';
import Success from '@/views/Payment/Success.vue';
import Failed from '@/views/Payment/Failed.vue';
import Checkout from '@/views/Checkout/Checkout.vue';
import AskQuestion from '@/views/AskQuestion.vue';
import About from '@/views/About.vue';
import CompanyData from '@/views/CompanyData.vue';
import Carier from '@/views/Carier.vue';
import Statue from '@/views/Statue.vue';
import Delivery from '@/views/Delivery.vue';
import Payment from '@/views/Payment.vue';
import Privacy from '@/views/Privacy.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/wishList',
    name: 'WishList',
    component: WishList
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
    path: '/category',
    name: 'CategoryNoAdmin',
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
    path: '/product',
    name: 'Product',
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
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/payment/Failed',
    name: 'PaymentFailed',
    component: Failed
  },
  {
    path: '/payment/success',
    name: 'PaymentSuccess',
    component: Success
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/ask',
    name: 'Ask',
    component: AskQuestion
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/companyData',
    name: 'CompanyData',
    component: CompanyData
  },
  {
    path: '/carier',
    name: 'Carier',
    component: Carier
  },
  {
    path: '/statue',
    name: 'Statue',
    component: Statue
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: Delivery
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
