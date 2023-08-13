function hitungLuas() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);

  if (alas > 0 && tinggi > 0) {
    const luas = 0.5 * alas * tinggi;
    document.getElementById("luas").textContent = luas.toFixed(2);

    document.getElementById("hasil").style.display = "block";
  }
}
