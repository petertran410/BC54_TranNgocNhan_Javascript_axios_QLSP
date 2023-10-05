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
        <button onclick=editProductFromList(${item.id}) class="btn btn-danger">Edit</button>
        <button onclick=deleteProductFromList(${item.id}) class="btn btn-success">Delete</button>
      </td>
    </tr>`

    contentHTML += trString;
  })
  
  document.querySelector("#TableProductList").innerHTML = contentHTML;
}

function fetchAPIforProductList() {
  LoadingOn();
  axios({
    url: `https://65151cb1dc3282a6a3cddd57.mockapi.io/product`,
    method: "GET",
  }).then(function(res) {
    LoadingOff();
    console.log(res.data);
    renderOutProductList(res.data.reverse());
  }).catch(function(err) {
    LoadingOff();
    alert(err);
  });
}

fetchAPIforProductList();

function deleteProductFromList(id) {
  LoadingOn();
  axios({
    url: `https://65151cb1dc3282a6a3cddd57.mockapi.io/product/${id}`,
    method: "DELETE",
  }).then(function(res) {
    fetchAPIforProductList();
  }).catch(function(err) {
    LoadingOff();
    alert("Fail to delete");
  });
}

function addProductFromList() {
  LoadingOn();
  var newProduct = layThongTinSanPhamTuForm();

  axios({
    url: `https://65151cb1dc3282a6a3cddd57.mockapi.io/product`,
    method: "POST",
    data: newProduct,
  }).then(function(res) {
    fetchAPIforProductList();
    $("#myModal").modal("hide");
  }).catch(function(err) {
    LoadingOff();
    alert("Fail to add new product");
  });
}

var IDList = null;

function editProductFromList(id) {
  LoadingOn();
  IDList = id;

  axios({
    url: `https://65151cb1dc3282a6a3cddd57.mockapi.io/product/${id}`,
    method: "GET",
  }).then(function(res) {
    console.log(res.data);
    $("#myModal").modal("show");
    showThongTinSanPhamTuForm(res.data)
    LoadingOff();
  }).catch(function(err) {
    LoadingOff();
    console.log(err);
  })
}

function updateProductFromList() {
  LoadingOn();
  var productFromList = layThongTinSanPhamTuForm();

  axios({
    url: `https://65151cb1dc3282a6a3cddd57.mockapi.io/product/${IDList}`,
    method: "PUT",
    data: productFromList,
  }).then(function(res) {
    $("#myModal").modal("hide");
    fetchAPIforProductList();
  }).catch(function(err) {
    console.log(err);
    LoadingOff();
  })
}



