import butterChicken from "../assets/images/butter-chicken.jpg";
import palakPaneer from "../assets/images/Saag-Paneer.jpg";
import biryani from "../assets/images/biriyani.webp";
import rajmaChawal from "../assets/images/Rajma-Masala.jpg";
import paneerTikka from "../assets/images/paneer-tikka.webp";
import gulabJamun from "../assets/images/gulabJamun.webp";
import pooriSabji from "../assets/images/puri_bhaji.avif";
import roganJosh from "../assets/images/roganJosh.jpg";
import dosa from "../assets/images/dosa.jpg";
import friedRice from "../assets/images/friedRice.jpg";

export const popularFoods = [
  {
    id: 1,
    image: butterChicken,
    name: "Butter Chicken",
    numberOfOrders: 250,
  },
  {
    id: 2,
    image: palakPaneer,
    name: "Palak Paneer",
    numberOfOrders: 190,
  },
  {
    id: 3,
    image: biryani,
    name: "Hyderabadi Biryani",
    numberOfOrders: 300,
  },
  {
    id: 4,
    image: rajmaChawal,
    name: "Rajma Chawal",
    numberOfOrders: 170,
  },
  {
    id: 5,
    image: paneerTikka,
    name: "Paneer Tikka",
    numberOfOrders: 220,
  },
  {
    id: 6,
    image: gulabJamun,
    name: "Gulab Jamun",
    numberOfOrders: 150,
  },
  {
    id: 7,
    image: pooriSabji,
    name: "Poori Sabji",
    numberOfOrders: 140,
  },
  {
    id: 8,
    image: roganJosh,
    name: "Rogan Josh",
    numberOfOrders: 210,
  },
  {
    id: 9,
    image: dosa,
    name: "Masala Dosa",
    numberOfOrders: 260,
  },
  {
    id: 10,
    image: friedRice,
    name: "Veg Fried Rice",
    numberOfOrders: 180,
  },
];
export const tables = [
  { id: 1, name: "Table 1", status: "Booked", initial: "AM", seats: 4 },
  { id: 2, name: "Table 2", status: "Available", initial: "MB", seats: 2 },
  { id: 3, name: "Table 3", status: "Booked", initial: "JS", seats: 6 },
  { id: 4, name: "Table 4", status: "Available", initial: "HR", seats: 4 },
  { id: 5, name: "Table 5", status: "Booked", initial: "PL", seats: 2 },
  { id: 6, name: "Table 6", status: "Available", initial: "RT", seats: 4 },
  { id: 7, name: "Table 7", status: "Booked", initial: "LC", seats: 6 },
  { id: 8, name: "Table 8", status: "Available", initial: "DP", seats: 2 },
  { id: 9, name: "Table 9", status: "Booked", initial: "NK", seats: 4 },
  { id: 10, name: "Table 10", status: "Available", initial: "SB", seats: 6 },
];
export const startersItem = [
  {
    id: 1,
    name: "Paneer Tikka",
    price: 250,
    category: "Vegetarian",
    bgColor: "#166534"
  },
  {
    id: 2,
    name: "Chicken Tikka",
    price: 300,
    category: "Non-Vegetarian",
    bgColor: "#8b0000"
  },
  {
    id: 3,
    name: "Tandoori Chicken",
    price: 350,
    category: "Non-Vegetarian",
    bgColor: "#8b0000"
  },
  {
    id: 4,
    name: "Samosa",
    price: 100,
    category: "Vegetarian",
    bgColor: "#166534"
  },
  {
    id: 5,
    name: "Aloo Tikki",
    price: 120,
    category: "Vegetarian",
    bgColor: "#166534"
  },
  {
    id: 6,
    name: "Hara Bhara Kebab",
    price: 220,
    category: "Vegetarian",
    bgColor: "#166534"
  }
];

export const mainCourse = [
  {
    id: 1,
    name: "Butter Chicken",
    price: 400,
    category: "Non-Vegetarian",
    bgColor: "#8b0000"
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    price: 350,
    category: "Vegetarian",
    bgColor: "#166534"
  },
  {
    id: 3,
    name: "Chicken Biryani",
    price: 450,
    category: "Non-Vegetarian",
    bgColor: "#8b0000"
  },
  {
    id: 4,
    name: "Dal Makhani",
    price: 180,
    category: "Vegetarian",
    bgColor: "#166534"
  },
  {
    id: 5,
    name: "Kadai Paneer",
    price: 300,
    category: "Vegetarian",
    bgColor: "#166534"
  },
  {
    id: 6,
    name: "Rogan Josh",
    price: 500,
    category: "Non-Vegetarian",
    bgColor: "#8b0000"
  }
];

export const beverages = [
  {
    id: 1,
    name: "Masala Chai",
    price: 50,
    category: "Hot",
    bgColor: "#1e3a8a"
  },
  {
    id: 2,
    name: "Lemon Soda",
    price: 80,
    category: "Cold",
    bgColor: "#1e3a8a"
  },
  {
    id: 3,
    name: "Mango Lassi",
    price: 120,
    category: "Cold",
    bgColor: "#1e3a8a"
  },
  {
    id: 4,
    name: "Cold Coffee",
    price: 150,
    category: "Cold",
    bgColor: "#1e3a8a"
  },
  {
    id: 5,
    name: "Fresh Lime Water",
    price: 60,
    category: "Cold",
    bgColor: "#1e3a8a"
  },
  {
    id: 6,
    name: "Iced Tea",
    price: 100,
    category: "Cold",
    bgColor: "#1e3a8a"
  }
];

export const soups = [
  {
    id: 1,
    name: "Tomato Soup",
    price: 120,
    category: "Vegetarian",
    bgColor: "#166534"
  },
  {
    id: 2,
    name: "Sweet Corn Soup",
    price: 130,
    category: "Vegetarian",
    bgColor: "#166534"
  },
  {
    id: 3,
    name: "Hot & Sour Soup",
    price: 140,
    category: "Vegetarian",
    bgColor: "#166534"
  },
  {
    id: 4,
    name: "Chicken Clear Soup",
    price: 160,
    category: "Non-Vegetarian",
    bgColor: "#8b0000"
  },
  {
    id: 5,
    name: "Mushroom Soup",
    price: 150,
    category: "Vegetarian",
    bgColor: "#166534"
  },
  {
    id: 6,
    name: "Lemon Coriander Soup",
    price: 110,
    category: "Vegetarian",
    bgColor: "#166534"
  }
];

export const desserts = [
  {
    id: 1,
    name: "Gulab Jamun",
    price: 100,
    category: "Vegetarian",
    bgColor: "#1e3a8a" // Custom rule: Dessert is Blue
  },
  {
    id: 2,
    name: "Kulfi",
    price: 150,
    category: "Vegetarian",
    bgColor: "#1e3a8a" // Custom rule: Dessert is Blue
  },
  {
    id: 3,
    name: "Chocolate Lava Cake",
    price: 250,
    category: "Vegetarian",
    bgColor: "#1e3a8a" // Custom rule: Dessert is Blue
  },
  {
    id: 4,
    name: "Ras Malai",
    price: 180,
    category: "Vegetarian",
    bgColor: "#1e3a8a" // Custom rule: Dessert is Blue
  }
];

export const pizzas = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 350,
    category: "Vegetarian",
    bgColor: "#166534"
  },
  {
    id: 2,
    name: "Veg Supreme Pizza",
    price: 400,
    category: "Vegetarian",
    bgColor: "#166534"
  },
  {
    id: 3,
    name: "Pepperoni Pizza",
    price: 450,
    category: "Non-Vegetarian",
    bgColor: "#8b0000"
  }
];

export const alcoholicDrinks = [
  {
    id: 1,
    name: "Beer",
    price: 200,
    category: "Alcoholic",
    bgColor: "#1e3a8a"
  },
  {
    id: 2,
    name: "Whiskey",
    price: 500,
    category: "Alcoholic",
    bgColor: "#1e3a8a"
  },
  {
    id: 3,
    name: "Vodka",
    price: 450,
    category: "Alcoholic",
    bgColor: "#1e3a8a"
  },
  {
    id: 4,
    name: "Rum",
    price: 350,
    category: "Alcoholic",
    bgColor: "#1e3a8a"
  },
  {
    id: 5,
    name: "Tequila",
    price: 600,
    category: "Alcoholic",
    bgColor: "#1e3a8a"
  },
  {
    id: 6,
    name: "Cocktail",
    price: 400,
    category: "Alcoholic",
    bgColor: "#1e3a8a"
  }
];

export const salads = [
  {
    id: 1,
    name: "Caesar Salad",
    price: 200,
    category: "Vegetarian",
    bgColor: "#166534"
  },
  {
    id: 2,
    name: "Greek Salad",
    price: 250,
    category: "Vegetarian",
    bgColor: "#166534"
  },
  {
    id: 3,
    name: "Fruit Salad",
    price: 150,
    category: "Vegetarian",
    bgColor: "#166534"
  },
  {
    id: 4,
    name: "Chicken Salad",
    price: 300,
    category: "Non-Vegetarian",
    bgColor: "#8b0000"
  },
  {
    id: 5,
    name: "Tuna Salad",
    price: 350,
    category: "Non-Vegetarian", // Fixed missing category
    bgColor: "#8b0000"
  }
];


export const menu = [
  { id: 1, name: "Starters", bgColor: "#b73e3e" ,icon: "🍲", items: startersItem },
  { id: 2, name: "Main Course", bgColor: "#5b45b0" ,icon: "🍛", items: mainCourse },
  { id: 3, name: "Beverages", bgColor: "#7f167f" ,icon: "🍹", items: beverages },
  { id: 4, name: "Soups", bgColor: "#735f32" ,icon: "🍜", items: soups },
  { id: 5, name: "Desserts", bgColor: "#1d2569" ,icon: "🍰", items: desserts },
  { id: 6, name: "Pizzas", bgColor: "#285430" ,icon: "🍕", items: pizzas },
  { id: 7, name: "Alcoholic Drinks", bgColor: "#b73e3e" ,icon: "🍺", items: alcoholicDrinks },
  { id: 8, name: "Salads", bgColor: "#5b45b0" ,icon: "🥗", items: salads }
]