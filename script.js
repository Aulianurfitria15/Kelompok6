let iso; // <-- Pindahkan ke global agar bisa diakses di seluruh file

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const menuContainer = document.getElementById('menuContainer');

    // Make sure images are loaded before initializing Isotope
    // This uses the imagesLoaded library
    imagesLoaded( menuContainer, function() {
        iso = new Isotope(menuContainer, {
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });
    });

    // Filter menu items on category button click
    document.querySelectorAll('.category-buttons .btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.category-buttons .btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');
            if (iso) { // Check if Isotope is initialized
                iso.arrange({ filter: filterValue });
            }
        });
    });

    // Filter menu items from dropdown clicks
    document.querySelectorAll('.dropdown-item[data-filter]').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const filterValue = this.getAttribute('data-filter');
            if (iso) { // Check if Isotope is initialized
                iso.arrange({ filter: filterValue });
            }
            // Also update the category buttons to show active state if applicable
            document.querySelectorAll('.category-buttons .btn').forEach(btn => btn.classList.remove('active'));
            const matchingButton = document.querySelector(`.category-buttons .btn[data-filter="${filterValue}"]`);
            if (matchingButton) {
                matchingButton.classList.add('active');
            } else {
                // If no matching button (e.g., specific sub-category not in main buttons)
                document.querySelector('.category-buttons .btn[data-filter="*"]').classList.add('active');
            }
            // Scroll to menu section after filtering
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Nonaktifkan semua modal terkait add-to-cart/pesanan
    // Handle "Add to Cart" button clicks
    // (Bagian ini di-nonaktifkan, logika modal pesanan berhasil dipindahkan ke index.html)
    // let cartCount = 0;
    // document.querySelectorAll('.btn-add-to-cart').forEach(button => {
    //     button.addEventListener('click', function() {
    //         cartCount++;
    //         document.querySelector('.btn-cart .badge').textContent = cartCount;

    //         const itemName = this.getAttribute('data-item');
    //         const toastMessageElement = document.getElementById('toastMessage');
    //         toastMessageElement.textContent = `${itemName} berhasil ditambahkan ke keranjang!`;

    //         const cartToast = new bootstrap.Toast(document.getElementById('cartToast'));
    //         cartToast.show();
    //     });
    // });

    // Update current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

// Event listener untuk tombol kategori "Makanan Berat" di navbar
const makananBeratNav = document.querySelector('.navbar .nav-link[data-filter=".makanan-berat"]');
if (makananBeratNav) {
    makananBeratNav.addEventListener('click', function(e) {
        e.preventDefault();
        const filterValue = this.getAttribute('data-filter');
        if (iso) {
            iso.arrange({ filter: filterValue });
            setTimeout(() => {
                // Cari item yang tampil setelah filter
                const firstVisible = document.querySelector('.element-item.makanan-berat[style*="display: block"], .element-item.makanan-berat:not([style])');
                if (firstVisible) {
                    firstVisible.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
        document.querySelectorAll('.category-buttons .btn').forEach(btn => btn.classList.remove('active'));
        const matchingButton = document.querySelector(`.category-buttons .btn[data-filter="${filterValue}"]`);
        if (matchingButton) {
            matchingButton.classList.add('active');
        }
    });
}

