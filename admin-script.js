// Data Simulasi (Nantinya data ini berasal dari database)
const daftarPendaftar = [
    { id: 1, nama: "Budi Santoso", program: "Strategic Leadership", tanggal: "2026-02-10", status: "Approved" },
    { id: 2, nama: "Siti Aminah", program: "Data Analytics", tanggal: "2026-02-11", status: "Pending" },
    { id: 3, nama: "Andi Wijaya", program: "Design Thinking", tanggal: "2026-02-09", status: "Approved" },
    { id: 4, nama: "Rina Permata", program: "Strategic Leadership", tanggal: "2026-02-11", status: "Rejected" }
];

/**
 * Fungsi untuk merender tabel
 */
function renderTable(data) {
    const tableBody = document.getElementById('adminTableBody');
    tableBody.innerHTML = '';

    data.forEach(pendaftar => {
        const row = `
            <tr class="hover:bg-slate-50 transition">
                <td class="px-6 py-4 font-medium text-slate-900">${pendaftar.nama}</td>
                <td class="px-6 py-4 text-slate-600">${pendaftar.program}</td>
                <td class="px-6 py-4 text-slate-600">${pendaftar.tanggal}</td>
                <td class="px-6 py-4">
                    <span class="px-3 py-1 rounded-full text-xs font-bold ${getStatusClass(pendaftar.status)}">
                        ${pendaftar.status}
                    </span>
                </td>
                <td class="px-6 py-4">
                    <button class="text-blue-600 hover:text-blue-800 font-semibold mr-3">Edit</button>
                    <button class="text-red-600 hover:text-red-800 font-semibold">Hapus</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

/**
 * Helper warna status
 */
function getStatusClass(status) {
    switch(status) {
        case 'Approved': return 'bg-green-100 text-green-700';
        case 'Pending': return 'bg-amber-100 text-amber-700';
        case 'Rejected': return 'bg-red-100 text-red-700';
        default: return 'bg-slate-100 text-slate-700';
    }
}

// Fitur Pencarian Sederhana
document.getElementById('searchInput').addEventListener('input', function(e) {
    const keyword = e.target.value.toLowerCase();
    const filteredData = daftarPendaftar.filter(p => 
        p.nama.toLowerCase().includes(keyword) || p.program.toLowerCase().includes(keyword)
    );
    renderTable(filteredData);
});

// Jalankan saat halaman dibuka
renderTable(daftarPendaftar);