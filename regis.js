function togglePopup()
{
    var nama = document.getElementById("profil");
    var alamat = document.getElementById("Alamat");
    var umur = document.getElementById("Umur");
    var kekayaan = document.getElementById("Kekayaan");

    if(nama.value == "")
        {
            alert("Masukkan Nama Kamu");
            nama.focus();
        }
    else if(alamat.value == "")
        {
            alert("Masukkan alamat kamu");
            alamat.focus();
        }
    else if(umur.value == "")
        {
            alert("Masukkan umur kamu");
            umur.focus();
        }
    else if(kekayaan.value == "")
        {
            alert("Masukkan kekayaan kamu");
            kekayaan.focus();
        }
    else{
            document.getElementById("popup-1").classList.toggle("active");
    }

    var nama = document.forms["dataakun"]["profil"].value;
    var alamat = document.forms["dataakun"]["Alamat"].value;
    var umur = document.forms["dataakun"]["Umur"].value;
    var kekayaan = document.forms["dataakun"]["Kekayaan"].value;;

    var tabel = document.getElementById("tabel1");
    var row = tabel.insertRow(-1);
    var kolom1 = row.insertCell(0);
    var kolom5 = row.insertCell(1);
    var kolom6 = row.insertCell(2);
    var kolom7 = row.insertCell(3);

    kolom1.innerHTML = nama;
    kolom5.innerHTML = alamat;
    kolom6.innerHTML = umur;
    kolom7.innerHTML = kekayaan;
}