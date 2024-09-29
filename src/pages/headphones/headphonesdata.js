// @ts-ignore
import c2 from '../../assets/headphones/c2.jpg';
// @ts-ignore
import c22 from '../../assets/headphones/c22.jpg';
// @ts-ignore
import c222 from '../../assets/headphones/c222.jpg';
// @ts-ignore
import c2222 from '../../assets/headphones/c2222.jpg';

// @ts-ignore
import h2 from '../../assets/headphones/h2.jpg';
// @ts-ignore
import h22 from '../../assets/headphones/h22.jpg';
// @ts-ignore
import h222 from '../../assets/headphones/h222.jpg';

// @ts-ignore
import h3 from '../../assets/headphones/h33.jpg';
// @ts-ignore
import h33 from '../../assets/headphones/h33.jpg';

// @ts-ignore
import n11 from '../../assets/headphones/n11.jpg';
// @ts-ignore
import n111 from '../../assets/headphones/n111.jpg';

// @ts-ignore
import h4 from '../../assets/headphones/h4.jpg';
// @ts-ignore
import h44 from '../../assets/headphones/h44.jpg';
// @ts-ignore
import h444 from '../../assets/headphones/h444.jpg';

// @ts-ignore
import x1 from '../../assets/headphones/x1.jpg';
// @ts-ignore
import x11 from '../../assets/headphones/x11.jpg';
// @ts-ignore
import x111 from '../../assets/headphones/x111.jpg';
// @ts-ignore
import x1111  from '../../assets/headphones/x1111.jpg';
// @ts-ignore
import x11111  from '../../assets/headphones/x11111.jpg';

// @ts-ignore
import x22 from '../../assets/headphones/x22.jpg';
// @ts-ignore
import x222 from '../../assets/headphones/x222.jpg';
import { Category } from '@mui/icons-material';

const productsData = [
  {
    id: 1,
    title: "Celestee Headphones",
    price: 99.99,
    description: "The Celestee is the true successor to Focal's previous closed-back, the Elegia. Styled in navy-blue with copper finish",
    images: [
      c222,
      c22,
      c2,
      c2222
    ],
    rating: 4, // يجب أن تكون قيمة رقمية
    stock: 10,
    Category:"headphones"
  },
  {
    id: 2,
    title: "Clear Headphones",
    price: 91.2,
    description: "The Focal Clear will bring you 5% short of Utopia. Meaning the Focal Clear is about 95% of its bigger brother.",
    images: [
      h2,
      h22,
      h222,
    ],
    rating: 3, 
    stock: 10,
    Category:"headphones"

  },{
    id: 3,
    title: "In-Ear Headphones",
    price: 91.2,
    description: "﻿The Moondrop Kato is the perfect entry-level in-ear headphone for anyone looking to dive into the world of audio but are unsure where to start.",
    images: [
      h3,
      h33,
    ],
    rating: 5, 
    stock: 10,
    Category:"headphones"

  },{
    id: 4,
    title: "Sundara Headphones",
    price: 67.2,
    description: "Hifiman Sundara Planar Magnetic Headphones are an engineering marvel that redefines audio excellence.",
    images: [
      h4,
      h44,
      h444,
    ],
    rating: 3.5, 
    stock: 10,
    Category:"headphones"

  },
  {
    id: 5,
    title: "Mg Headphones",
    price: 81.2,
    description: "Focal Clear Mg Headphones stand out for their chic and elegant design.",
    images: [
      n111,
      n11,
    ],
    rating: 3, 
    stock: 10,
    Category:"headphones"

  },
  {
    id: 6,
    title: "VK Headphones",
    price: 81.2,
    description: "Today’s audiophiles monitor their music with measured purpose on a wide range of devices from headphone amplifiers",
    images: [
      x1,x11,x111,x1111,x11111
    ],
    rating: 3, 
    stock: 10,
    Category:"headphones"

  },
  {
    id: 1,
    title: " Stellia Headphones",
    price: 99.99,
    description: "This is the ultimate office headphone. Designed in France by people who really care about their work",
    images: [
      x22,
      x222
    ],
    rating: 3.8, 
    stock: 10,
    Category:"headphones"

  },
  
];

export default productsData;
