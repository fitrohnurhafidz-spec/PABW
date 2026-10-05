const profil = {
  nama: "fitroh nur hafidz",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 4,
  kontak: {
    email: "mahasiswa@alumni.id",
  },
};

let kategoriAktif = "semua";

const kalimat = `Nama saya ${profil.nama}, seorang ${profil.peran} yang mempelajari${profil.keahlian.length} hal dasar.`;

const kota = profil.kontak?.kota ?? "Belum ditentukan";

console.log(kalimat);
console.log(`Kota Tempat Tinggal: ${kota}`);
console.log("Tipe data nama:", typeof profil.nama);
console.log("Tipe data jumlahProyek:", typeof profil.jumlahProyek);
