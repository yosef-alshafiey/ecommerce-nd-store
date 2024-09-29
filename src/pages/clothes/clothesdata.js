// استيراد الصور للنساء
import w1 from '../../assets/women_clothes/n2.jpg';
import w11 from '../../assets/women_clothes/n1.jpg';
import w2 from '../../assets/women_clothes/p2.jpg';
import w22 from '../../assets/women_clothes/p22.jpg';
import w3 from '../../assets/women_clothes/p9.jpg';
import w33 from '../../assets/women_clothes/p99.jpg';
import w333 from '../../assets/women_clothes/p999.jpg';
import w4 from '../../assets/women_clothes/b1.jpg';
import w44 from '../../assets/women_clothes/b11.jpg';
import w444 from '../../assets/women_clothes/b111.jpg';
import w5 from '../../assets/women_clothes/a1.jpg';
import w55 from '../../assets/women_clothes/a11.jpg';
import w555 from '../../assets/women_clothes/a1111.jpg';

// استيراد الصور للرجال
import m1 from '../../assets/men_clothes/n1.jpg';
import m11 from '../../assets/men_clothes/n11.jpg';
import m2 from '../../assets/men_clothes/n2.jpg';
import m22 from '../../assets/men_clothes/n22.jpg';
import m3 from '../../assets/men_clothes/n3.jpg';
import m33 from '../../assets/men_clothes/n33.jpg';
import m333 from '../../assets/men_clothes/n333.jpg';
import m4 from '../../assets/men_clothes/n4.jpg';
import m44 from '../../assets/men_clothes/n44.jpg';
import m5 from '../../assets/men_clothes/n5.jpg';
import m55 from '../../assets/men_clothes/n55.jpg';
import m555 from '../../assets/men_clothes/n555.jpg';
import m6 from '../../assets/men_clothes/n6.jpg';
import m66 from '../../assets/men_clothes/n66.jpg';
import m7 from '../../assets/men_clothes/p1.jpg';
import m77 from '../../assets/men_clothes/p11.jpg';
import m777 from '../../assets/men_clothes/p111.jpg';
import m8 from '../../assets/men_clothes/p10.jpg';
import m88 from '../../assets/men_clothes/p100.jpg';
import m888 from '../../assets/men_clothes/p1000.jpg';

// كائن لتخزين جميع الصور
const images = {
  women: {
    w1,
    w11,
    w2,
    w22,
    w3,
    w33,
    w333,
    w4,
    w44,
    w444,
    w5,
    w55,
    w555,
  },
  men: {
    m1,
    m11,
    m2,
    m22,
    m3,
    m33,
    m333,
    m4,
    m44,
    m5,
    m55,
    m555,
    m6,
    m66,
    m7,
    m77,
    m777,
    m8,
    m88,
    m888,
  },
};

// بيانات المنتجات
const productsData = [
  {
    id: 1,
    title: "T-shirt",
    price: 89.79,
    description: "Regular fit puffer jacket. High collar and long sleeve. Welt pockets at the hip. Elasticated trims. Zip-up front.",
    images: [images.men.m1, images.men.m11],
    rating: 4,
    stock: 10,
    category: "Men",
    size: ["s", "m", "lg", "xl"],
  },
  {
    id: 2,
    title: "BLAZER",
    price: 81.79,
    description: "Open blazer with a lapel collar and padded shoulders. Turn-up sleeves falling below the elbow with sleeve tabs and a golden button. Front flap pockets.",
    images: [images.women.w1, images.women.w11],
    rating: 5,
    stock: 10,
    category: "Women",
    size: ["s", "m", "lg", "xl"],
  },
  {
    id: 3,
    title: "JACKET",
    price: 110.79,
    description: "jacket with a high collar and long sleeves. Featuring hip pockets, an inside pocket, an elasticated hem and a zip-up front.",
    images: [images.women.w2, images.women.w22],
    rating: 4.5,
    stock: 10,
    category: "Women",
    size: ["s", "m", "lg", "xl"],
  },
  {
    id: 4,
    title: "BIKER JACKET",
    price: 190.79,
    description: "Collared jacket with long sleeves and shoulder tabs. Featuring front zip pockets, a hem featuring a matching belt with metal.",
    images: [images.women.w3,images.women.w33,images.women.w333],
    rating: 4.5,
    stock: 10,
    category: "Women",
    size: ["s", "m", "lg", "xl"],
  },
  {
    id: 5,
    title: "OVERSIZE BLAZER",
    price: 140.79,
    description: "Oversize blazer with a Johnny collar. Long sleeves with padded shoulders and opening trims.",
    images: [images.women.w4,images.women.w44,images.women.w444],
    rating: 4.1,
    stock: 10,
    category: "Women",
    size: ["s", "m", "lg", "xl"],
  },
  {
    id: 55,
    title: "Blouse",
    price: 140.79,
    description: "Blouse with a Johnny collar. Long sleeves with padded shoulders and opening trims.",
    images: [images.women.w5,images.women.w55,images.women.w555],
    rating: 4.1,
    stock: 10,
    category: "Women",
    size: ["s", "m", "lg", "xl"],
  },
  {
    id: 6,
    title: "SWEATSHIRT",
    price: 89.79,
    description: "High neck sweatshirt with front zip fastening, long sleeves and ribbed trims.",
    images: [images.men.m2, images.men.m22],
    rating: 4.5,
    stock: 10,
    category: "Men",
    size: ["s", "m", "lg", "xl"],
  },
  {
    id: 7,
    title: "PADDED JACKET",
    price: 99.99,
    description: "Puffer jacket with a high collar and long sleeves. Featuring hip pockets, an inside pocket, an elasticated hem and a zip-up front.",
    images: [images.men.m3, images.men.m33],
    rating: 5,
    stock: 10,
    category: "Men",
    size: ["s", "m", "lg", "xl"],
  },
  {
    id: 8,
    title: "PUFFER JACKET",
    price: 100.99,
    description: "Regular fit puffer jacket. High collar and long sleeve. Welt pockets at the hip. Elasticated trims. Zip-up front.",
    images: [images.men.m4, images.men.m44],
    rating: 4.5,
    stock: 10,
    category: "Men",
    size: ["s", "m", "lg", "xl"],
  },
];



// تصدير بيانات المنتجات
export default productsData;
