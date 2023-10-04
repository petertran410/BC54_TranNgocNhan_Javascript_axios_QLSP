function layThongTinSanPhamTuForm() {
  var name = document.querySelector("#ProductName").value;
  var price = document.querySelector("#ProductPrice").value;
  var image = document.querySelector("#ProductImage").value;
  var desc = document.querySelector("#ProductDesc").value;

  return {
    name: name,
    price: price,
    img: image,
    desc: desc,
  };
}

function showThongTinSanPhamTuForm(info) {
  document.querySelector("#ProductName").value = info.name;
  document.querySelector("#ProductPrice").value = info.price;
  document.querySelector("#ProductImage").value = info.img;
  document.querySelector("#ProductDesc").value = info.desc;
}