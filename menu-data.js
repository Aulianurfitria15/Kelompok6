// menu-data.js

const defaultMenuItems = [
    {
        id: 1,
        name: "Nasi Goreng Special",
        desc: "Nasi goreng dengan topping ayam, telur, dan kerupuk, cocok untuk makan siang yang mengenyangkan.",
        price: 25000,
        image: "nasgor.jpg",
        category: "makanan-berat",
        stock: 15
    },
    {
        id: 2,
        name: "Sate Ayam Madura",
        desc: "10 tusuk sate ayam empuk dengan bumbu kacang khas Madura yang kaya rasa.",
        price: 30000,
        image: "sate.jpg",
        category: "makanan-berat",
        stock: 20
    },
    {
        id: 3,
        name: "Es Krim Coklat Delight",
        desc: "Es krim lembut rasa coklat premium, lumer di mulut, manisnya pas buat pencuci mulut.",
        price: 15000,
        image: "eskrim.jpg",
        category: "makanan-ringan",
        stock: 25
    },
    {
        id: 4,
        name: "Kentang Goreng",
        desc: "Kentang goreng nikmat dengan taburan seasoning khas.",
        price: 20000,
        image: "kentang.jpg",
        category: "makanan-ringan",
        stock: 30
    },
    {
        id: 5,
        name: "Martabak Asin",
        desc: "Martabak telur dengan campuran daun bawang dan juga telur bebek.",
        price: 25000,
        image: "martabak.jpg",
        category: "makanan-ringan",
        stock: 10
    },
    {
        id: 6,
        name: "Soto Ayam",
        desc: "Soto ayam dengan kuah kuning gurih, koya, dan irisan ayam, hangat dan nikmat.",
        price: 20000,
        image: "soto.jpg",
        category: "makanan-berat",
        stock: 12
    }
];

// Fungsi untuk mendapatkan daftar menu.
// Jika localStorage kosong, ia akan mengisinya dengan data default.
function getMenuList() {
    let menuList = localStorage.getItem('menuList');
    if (!menuList) {
        // Jika tidak ada data di localStorage, gunakan data default dan simpan
        localStorage.setItem('menuList', JSON.stringify(defaultMenuItems));
        return defaultMenuItems;
    }
    // Jika ada, parse dan kembalikan
    return JSON.parse(menuList);
}