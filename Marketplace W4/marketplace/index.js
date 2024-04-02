const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/"

window.onload = async () => {
  const res = await fetch(BASE_URL, {
    headers: {
      authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA0NDM5YzdiNTFlMzAwMWExZDFiZDEiLCJpYXQiOjE3MTE1NTU0ODQsImV4cCI6MTcxMjc2NTA4NH0.pVi9HVlJNH7wALv2Vad2rFSsjnhBYE-dIfU0VN79Y2Q"
    },
  })
  const products = await res.json()
  const row = document.querySelector("#products")
  products.forEach((prod) => {
    row.innerHTML += `
    <div class='col col-3 col-lg-3 col-md-4 col-sm-6 col-sm-12 mb-4'>  
      <div class="card justify-content-between">
        <img src="${prod.imageUrl}" class="card-img-top" alt="${prod._id}_${prod.name}">
        <div class="card-body">
          <h5 class="card-title">${prod.name}</h5>
          <a href="./backoffice.html?id=${prod._id}" class="btn btn-primary">Details</a>
        </div>
      </div> 
    </div>`
  })
}
