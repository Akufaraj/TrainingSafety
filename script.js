// /**
//  * Fungsi untuk membuka atau menutup Modal
//  * @param {string} modalId - ID elemen modal
//  */
// function toggleModal(modalId) {
//     const modal = document.getElementById(modalId);
//     modal.classList.toggle('hidden');
// }

// /**
//  * Menangani pengiriman formulir
//  */
// document.getElementById('trainingForm').addEventListener('submit', function(e) {
//     e.preventDefault(); // Mencegah halaman reload

//     // Mengambil data dari form
//     const nama = document.getElementById('nama').value;
//     const program = document.getElementById('program').value;

//     // Logika sederhana (Bisa dihubungkan ke API/Database nanti)
//     if (nama && program) {
//         alert(`Selamat ${nama}! Pendaftaran Anda untuk program ${program} berhasil dikirim.`);
        
//         // Reset form dan tutup modal
//         this.reset();
//         toggleModal('modal-pendaftaran');
//     } else {
//         alert("Mohon lengkapi semua data.");
//     }
// });

// // Menutup modal jika user klik di luar area modal
// window.onclick = function(event) {
//     const modal = document.getElementById('modal-pendaftaran');
//     if (event.target == modal) {
//         modal.classList.add('hidden');
//     }
// }

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const successModal = document.getElementById("successModal"); // Ambil elemen popup sukses
    const openButtons = document.querySelectorAll(".openModal");
    const closeBtn = document.getElementById("closeModal");
    const form = document.getElementById("trainingForm");
    const closeSuccessBtn = document.getElementById("closeSuccess"); // Ambil tombol tutup popup sukses

    // Menangani buka modal pendaftaran
    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            modal.classList.remove("hidden");
        });
    });

    // Menangani tutup modal pendaftaran
    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    // Menangani pengiriman form
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const scriptURL = "https://script.google.com/macros/s/AKfycbyofdtu2xvg6rTEh0Yk80MYiST3DFEPh1VuVrdY8S8ynD2ARuV5wlnPHdu0HAxIYJdA/exec";

        // Ambil data untuk ditampilkan di popup sukses sebelum form di-reset
        const namaUser = document.getElementById("nama").value;
        const programUser = document.getElementById("program").value;

        const formData = new FormData();
        formData.append("nama", namaUser);
        formData.append("perusahaan", document.getElementById("perusahaan").value);
        formData.append("jabatan", document.getElementById("jabatan").value);
        formData.append("nomorhp", document.getElementById("nomorhp").value);
        formData.append("tanggallahir", document.getElementById("tanggallahir").value);
        formData.append("goldar", document.getElementById("goldar").value);
        formData.append("email", document.getElementById("email").value);
        formData.append("namauser", document.getElementById("namauser").value);
        formData.append("telpuser", document.getElementById("telpuser").value);
        formData.append("alamatemailuser", document.getElementById("alamatemailuser").value);
        formData.append("nomeridanzen", document.getElementById("nomeridanzen").value);
        formData.append("program", programUser);

        fetch(scriptURL, {
            method: "POST",
            mode: "no-cors", 
            body: formData
        })
        .then(() => {
            // 1. Masukkan data ke teks di dalam successModal
            document.getElementById("displayNama").innerText = namaUser;
            document.getElementById("displayProgram").innerText = programUser;

            // 2. Sembunyikan modal pendaftaran
            modal.classList.add("hidden");

            // 3. Tampilkan popup sukses
            successModal.classList.remove("hidden");

            // 4. Reset form
            form.reset();
        })
        .catch(error => {
            alert("Gagal mengirim data! Silakan coba lagi.");
            console.error("Error detail:", error);
        });
    });

    // Menangani tutup popup sukses
    closeSuccessBtn.addEventListener("click", () => {
        successModal.classList.add("hidden");
    });
});




