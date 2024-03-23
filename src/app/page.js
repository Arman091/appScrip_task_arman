import Image from "next/image";
import Products from "@/components/products/products";
import Footer from "@/components/footer/footer";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "T-shirt",
      description: "Comfortable cotton t-shirt",
      image: "https://5.imimg.com/data5/CO/XW/MY-44197581/ladies-stylish-purse.jpg",
      category: "women",
      price: 15,
    },
    {
      id: 2,
      name: "Jeans",
      description: "Classic denim jeans",
      image: "https://sslimages.shoppersstop.com/sys-master/images/h9d/hd3/27614554587166/INFLWD-28_INDIGO_alt1.jpg_2000Wx3000H",
      category: "women",
      price: 30,
    },
    {
      id: 3,
      name: "Sneakers",
      description: "Stylish sneakers",
      image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16513990/2022/1/26/d8f01fca-59e2-4f82-8214-9cd61d373be41643184909272-Roadster-Men-White-Sneakers-6661643184908868-1.jpg",
      category: "men",
      price: 50,
    },
    {
      id: 4,
      name: "Dress",
      description: "Elegant black dress",
      image: "https://assets.ajio.com/medias/sys_master/root/20230602/5PSS/64790b54d55b7d0c63323468/zima-leto-black-a-line-solid--dress.jpg",
      category: "women",
      price: 45,
    },
    {
      id: 5,
      name: "Hoodie",
      description: "Warm hoodie for chilly days",
      image: "https://img.ltwebstatic.com/images3_pi/2023/09/13/c3/1694588205707fa97a5266ac3275d7ac257f17f538_thumbnail_720x.webp",
      category: "men",
      price: 25,
    },
    {
      id: 6,
      name: "Skirt",
      description: "Floral-printed skirt",
      image: "https://m.media-amazon.com/images/I/71hLoiaX6cL._AC_UY1100_.jpg",
      category: "baby",
      price: 35,
    },
    {
      id: 7,
      name: "Jacket",
      description: "Stylish jacket for all occasions",
      image: "https://m.media-amazon.com/images/I/71CuJOjpXUL._AC_UY1100_.jpg",
      category: "baby",
      price: 55,
    },
    {
      id: 8,
      name: "Boots",
      description: "Leather boots for rugged terrain",
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/z/h/g/8-br-132-8-pos-planet-of-shoes-brown-original-imaggkr7nf38sn9h.jpeg?q=20&crop=true",
      category: "men",
      price: 60,
    },
    {
      id: 9,
      name: "Sweater",
      description: "Cozy knitted sweater",
      image: "https://contents.mediadecathlon.com/p2437444/067f3912cb656b48ec7cf255da79de60/p2437444.jpg?format=auto&quality=70&f=650x0",
      category: "women",
      price: 40,
    },
    {
      id: 10,
      name: "Pants",
      description: "Casual pants for everyday wear",
      image: "https://m.media-amazon.com/images/I/61oGvGh+S-L._SL1201_.jpg",
      category: "baby",
      price: 20,
    },
    {
      id: 11,
      name: "Blouse",
      description: "Chic blouse for formal occasions",
      image: "https://indiansilkhouse.com/media/catalog/product/cache/a8725803dd87b79b16452131d8e7b0f3/n/o/no58.jpg",
      category: "women",
      price: 35,
    },
    {
      id: 12,
      name: "Shorts",
      description: "Comfortable shorts for summer",
      image: "https://www.shopcoveusa.com/cdn/shop/products/DSC06108_1200x1200.jpg?v=1655135255",
      category: "baby",
      price: 18,
    },
  ];
  return (
    <main>
     
      <Products products={products}/>
      <Footer/>
    </main>
  );
}
