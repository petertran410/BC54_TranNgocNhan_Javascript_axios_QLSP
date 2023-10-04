function renderOutProductList(productArray) {
  var contentHTML = "";
  productArray.forEach(function(item) {
    var trString = `<tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>${item.img}</td>
      <td>${item.desc}</td>
      <td>
        <button onclick=editProduct(${item.id}) class="btn btn-danger">Edit</button>
        <button onclick=deleteProduct(${item.id}) class="btn btn-success">Delete</button>
      </td>
    </tr>`

    contentHTML += trString;
  })
  
  document.querySelector("#TableProductList").innerHTML = contentHTML;
}

function fetchAPIforProductList() {
  axios({
    url: `https://65151cb1dc3282a6a3cddd57.mockapi.io/product`,
    method: "GET",
  }).then(function(res) {
    console.log(res.data);
    renderOutProductList(res.data.reverse());
  }).catch(function(err) {
    alert(err);
  });
}

fetchAPIforProductList();

function deleteProduct(id) {
  axios({
    url: `https://65151cb1dc3282a6a3cddd57.mockapi.io/product/${id}`,
    method: "DELETE",
  }).then(function(res) {
    fetchAPIforProductList();
  }).catch(function(err) {
    alert("Fail to delete");
  });
}

function addProduct() {
  var newProduct = layThongTinSanPhamTuForm();

  axios({
    url: `https://65151cb1dc3282a6a3cddd57.mockapi.io/product`,
    method: "POST",
    data: newProduct,
  }).then(function(res) {
    fetchAPIforProductList();
    $("#myModal").modal("hide");
  }).catch(function(err) {
    alert("Fail to add new product");
  });
}

function editProductFromList(info) {
  
}



