export interface Menu {
  id: number;
  kategori: string;
  nama: string;
  deskripsi: string;
  harga: number;
  gambar: string;
}

export const menus: Menu[] = [
  {
    id: 1,
    kategori: 'Pizza',
    nama: "Meat Lover's Lovers",
    deskripsi:
      'Irisan sosis sapi, daging sapi cincang, burger sapi, sosis ayam, jamur, paprika merah dan paprika hijau.',
    harga: 49500,
    gambar: 'meat-lover.jpg',
  },
  {
    id: 2,
    kategori: 'Pizza',
    nama: 'Super Supreme',
    deskripsi:
      'Daging ayam dan sapi asap, daging sapi cincang, burger sapi, jamur, paprika merah dan paprika hijau.',
    harga: 49500,
    gambar: 'supreme.jpg',
  },
  {
    id: 3,
    kategori: 'Pizza',
    nama: 'Tuna Melt',
    deskripsi: 'Irisan daging ikan tuna, butiran jagung, saus mayonnaise.',
    harga: 49500,
    gambar: 'tuna-melt.jpg',
  },
  {
    id: 4,
    kategori: 'Pizza',
    nama: 'American Favourite',
    deskripsi: 'Pepperoni sapi, daging sapi cincang, jamur.',
    harga: 49500,
    gambar: 'american-favourite.jpg',
  },

  {
    id: 6,
    kategori: 'Pasta',
    nama: 'Beef Lasagna',
    deskripsi:
      'Dipanggang, daging sapi cincang. krim putih lembut di tiap lapisan.',
    harga: 48000,
    gambar: 'beef-lasagna.jpg',
  },
  {
    id: 7,
    kategori: 'Pasta',
    nama: 'Creamy Beef Fettuccine',
    deskripsi: 'Daging sapi asap dan jamur, ditumis dengan saus krim lembut.',
    harga: 43000,
    gambar: 'creamy-beef-fettuccine.jpg',
  },
  {
    id: 8,
    kategori: 'Rice',
    nama: 'Meatballs Beef Mushroom',
    deskripsi: 'Bola daging sapi dengan saus daging sapi cincang dan jamur.',
    harga: 40000,
    gambar: 'meatballs-beef-mushroom.jpg',
  },
  {
    id: 9,
    kategori: 'Rice',
    nama: 'Black Pepper Chicken',
    deskripsi: 'Ayam dengan saus lada hitam.',
    harga: 40000,
    gambar: 'black-pepper-chicken.jpg',
  },
  {
    id: 10,
    kategori: 'Drinks',
    nama: 'Hazelnut Milkshake',
    deskripsi: '',
    harga: 24000,
    gambar: 'chocolate-milkshake.jpg',
  },
  {
    id: 11,
    kategori: 'Drinks',
    nama: 'Choco Mint',
    deskripsi: '',
    harga: 24000,
    gambar: 'choco-mint.jpg',
  },
  {
    id: 12,
    kategori: 'Drinks',
    nama: 'Toffee Coffee',
    deskripsi: '',
    harga: 24000,
    gambar: 'toffee-coffee.jpg',
  },
  {
    id: 13,
    kategori: 'Drinks',
    nama: 'Green Tea Shake',
    deskripsi: '',
    harga: 24000,
    gambar: 'green-tea-shake.jpg',
  },
  {
    id: 14,
    kategori: 'Drinks',
    nama: 'Strawberry Milkshake',
    deskripsi: '',
    harga: 24000,
    gambar: 'strawberry-milkshake.jpg',
  },
  {
    id: 15,
    kategori: 'Drinks',
    nama: 'Chocolate Milkshake',
    deskripsi: '',
    harga: 24000,
    gambar: 'chocolate-milkshake.jpg',
  },
];
