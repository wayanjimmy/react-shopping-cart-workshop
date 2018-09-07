const products = [
  {
    id: 1,
    name: 'Sepatu Converse',
    price: 3050,
    desc: 'aman',
    imageSrc:
      'https://images.nike.com/is/image/DotCom/PDP_HERO/132170C_001_A_PREM/converse-chuck-taylor-all-star-leather-unisex-high-top-shoe.jpg'
  },
  {
    id: 2,
    name: 'Vans',
    price: 2000,
    desc: 'aman',
    imageSrc: 'https://media.journeys.com/images/products/1_259094_ZM.JPG'
  },
  {
    id: 3,
    name: 'New Balance',
    price: 550,
    desc: 'aman',
    imageSrc:
      'https://media.endclothing.com/media/f_auto,q_auto,w_760,h_760/prodmedia/media/catalog/product/0/5/05-07-2017_newbalance_u520avintage_blue_u520ab_eh_1.jpg'
  }
];

export function getAllProducts() {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
}
