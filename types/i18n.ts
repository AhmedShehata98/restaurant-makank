import "vue-i18n";
import type en from "~/i18n/locales/ar.json";

export type MessageSchema = typeof en;

export interface Root {
  layouts: Layouts;
  pages: Pages;
}

export interface Layouts {
  header: Header;
  footer: Footer;
  navigationBar: NavigationBar;
}

export interface Header {
  nav: Nav;
  localesMenu: LocalesMenu;
  userActionsMenu: UserActionsMenu;
  notifications: Notifications;
}

export interface Nav {
  home: string;
  menu: string;
  offers: string;
  orders: string;
  checkout: string;
  profile: string;
  addingAddress: string;
}

export interface LocalesMenu {
  "en-US": string;
  "ar-SA": string;
}

export interface UserActionsMenu {
  login: Login;
  profile: string;
  logout: string;
}

export interface Login {
  text: string;
  markedWords: string;
}

export interface Notifications {
  title: string;
  markRead: string;
}

export interface Footer {
  description: string;
  socialMedia: SocialMedia;
  websiteLinks: WebsiteLinks;
  termsAndConditions: string;
  copyright: string;
  categories: Categories;
}

export interface SocialMedia {
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
  linkedin: string;
  whatsapp: string;
}

export interface WebsiteLinks {
  title: string;
  links: Links;
}

export interface Links {
  home: string;
  contactUs: string;
  menu: string;
  offers: string;
  privacyPolicy: string;
  cart: string;
  featuredDishes: string;
  aboutUs: string;
}

export interface Categories {
  title: string;
  grills: string;
  burger: string;
  appetizers: string;
  syrian: string;
  asian: string;
}

export interface NavigationBar {
  links: Links2;
}

export interface Links2 {
  home: string;
  products: string;
  orders: string;
  profile: string;
}

export interface Pages {
  home: Home;
  menu: Menu;
  productDetails: ProductDetails;
  orders: Orders;
  checkout: Checkout;
  profile: Profile;
}

export interface Home {
  sections: Sections;
}

export interface Sections {
  hero: Hero;
  offers: Offers;
  ourMenu: OurMenu;
  orderSummeryComponent: OrderSummeryComponent;
  deliveryServices: DeliveryServices;
  featuredDishes: FeaturedDishes;
  downloadApp: DownloadApp;
  offersAndDiscounts: OffersAndDiscounts;
  poster: Poster;
}

export interface Hero {
  searchPlaceholder: string;
  restaurantState: RestaurantState;
  welcome: string;
  title: string;
  titleHighlightWords: string[];
  description: string;
  ctaButton: string;
}

export interface RestaurantState {
  closed: Closed;
}

export interface Closed {
  title: string;
  description: string;
}

export interface Offers {
  infos: Infos;
}

export interface Infos {
  location: string;
  phone: string;
}

export interface OurMenu {
  title: string;
  description: string;
  fullMenuButton: string;
  featuredDishesButton: string;
}

export interface OrderSummeryComponent {
  title: string;
  description: string;
  dishesCount: string;
  total: string;
  cta: string;
}

export interface DeliveryServices {
  title: string;
  highlightedWords: string[];
  services: Services;
  primaryButton: string;
  secondaryButton: string;
}

export interface Services {
  delivery: string;
  deliveryTiming: string;
  fees: string;
  deliveryType: string;
}

export interface FeaturedDishes {
  title: string;
  fullMenuButton: string;
}

export interface DownloadApp {
  title: string;
  description: string;
}

export interface OffersAndDiscounts {
  title: string;
}

export interface Poster {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
}

export interface Menu {
  offersBanner: OffersBanner;
  title: string;
  mobileTitle: MobileTitle;
  description: string;
  searchPlaceholder: string;
  cta: string;
  categories: Categories2;
}

export interface OffersBanner {
  partOne: string;
  partTwo: string;
}

export interface MobileTitle {
  text: string;
  markWords: string[];
}

export interface Categories2 {
  grills: string;
  burger: string;
  appetizers: string;
  syrian: string;
  asian: string;
  drinks: string;
}

export interface ProductDetails {
  currency: string;
  sizes: string;
  extras: string;
  adToCartButton: string;
  aboutProduct: string;
  relatedProducts: string;
  relatedProductsCta: string;
}

export interface Orders {
  signinTitle: string;
  singinForm: SinginForm;
  itemsCount: string;
  total: string;
  relatedProducts: string;
  relatedProductsCta: string;
}

export interface SinginForm {
  title: string;
  submitBtn: string;
  confirmBtn: string;
  confirmNameBtn: string;
  confirmTitle: string;
  confirmDescription: string;
  clientNameTitle: string;
  clientName: string;
  reSendHint: string;
}

export interface Checkout {
  offersBanner: OffersBanner2;
  freeShippingBanner: FreeShippingBanner;
  productsCount: string;
  form: Form;
  orderInfo: OrderInfo;
  model: Model;
}

export interface OffersBanner2 {
  partOne: string;
  partTwo: string;
}

export interface FreeShippingBanner {
  description: string;
  exteaDescripe: string;
}

export interface Form {
  title: string;
  phoneNumber: string;
  name: string;
  address: string;
  addAddressBtn: string;
  selectAddressPlaceholder: string;
  pickUpFromLocation: string;
  couponPlaceholder: string;
  couponApplyBtn: string;
  choosePaymentMethod: string;
  checkoutBtn: string;
}

export interface OrderInfo {
  orderTotalPrice: string;
  totalPrice: string;
  total: string;
  delivery: string;
  discount: string;
  tax: string;
}

export interface Model {
  title: string;
  description: string;
  submitBtn: string;
  cancelBtn: string;
}

export interface Profile {
  helpText: string;
  helpBtn: string;
  actions: Actions;
  tabs: Tabs;
  ordersFilter: OrdersFilter;
  ordersContent: OrdersContent;
  addressContent: AddressContent;
}

export interface Actions {
  orders: string;
  address: string;
}

export interface Tabs {
  currentOrders: string;
  prevOrders: string;
}

export interface OrdersFilter {
  lastSixMounth: string;
  lastMonth: string;
  lastWeek: string;
  lastDay: string;
}

export interface OrdersContent {
  currentOrdersContent: CurrentOrdersContent;
  previusOrdersContent: PreviusOrdersContent;
}

export interface CurrentOrdersContent {
  callCenterBtn: string;
  orderTracker: OrderTracker;
  orderDetails: OrderDetails;
}

export interface OrderTracker {
  OrderNo: string;
  OrderDate: string;
  OrderStatus: string;
  OrderInProcessStatus: string;
  OrderCompletedStatus: string;
}

export interface OrderDetails {
  orderData: OrderData;
  meData: MeData;
  paymentData: PaymentData;
}

export interface OrderData {
  orderNo: string;
  orderDate: string;
  ShippingToHome: string;
  title: string;
}

export interface MeData {
  title: string;
}

export interface PaymentData {
  title: string;
  total: string;
  totalPrice: string;
  delivery: string;
  discount: string;
  tax: string;
}

export interface PreviusOrdersContent {
  callCenterBtn: string;
  orderTracker: OrderTracker2;
  orderDetails: OrderDetails2;
  reOrderAllBtn: string;
  reOrderBtn: string;
  reviewHint: string;
  reviewModal: ReviewModal;
}

export interface OrderTracker2 {
  OrderNo: string;
  OrderDate: string;
  OrderStatus: string;
}

export interface OrderDetails2 {
  orderData: OrderData2;
  meData: MeData2;
  paymentData: PaymentData2;
}

export interface OrderData2 {
  orderNo: string;
  orderDate: string;
  ShippingToHome: string;
  title: string;
}

export interface MeData2 {
  title: string;
}

export interface PaymentData2 {
  title: string;
  total: string;
  totalPrice: string;
  delivery: string;
  discount: string;
  tax: string;
}

export interface ReviewModal {
  title: string;
  notes: string;
  actions: Actions2;
}

export interface Actions2 {
  submit: string;
  cancel: string;
}

export interface AddressContent {
  title: string;
  addBtn: string;
  addressConfirmBtn: string;
  form: Form2;
}

export interface Form2 {
  addressName: AddressName;
  street: string;
  streetPlaceholder: string;
  country: string;
  city: string;
  neighborhood: string;
  nearestLandmark: string;
  optional: string;
  submitBtn: string;
}

export interface AddressName {
  title: string;
  options: Options;
}

export interface Options {
  home: string;
  work: string;
}
