//id the form
const productForm = document.querySelector("form"); //search html element

//def constructor
function Product(name, price, category){
    this.name = name;
    this.price = price;
    this.category = category;
}

//retrieve the info
function registerProduct(event){
    //test
   event.preventDefault();
   //use input name to pull data
   const name = productForm.elements['productName'].value;
   const price = productForm.elements['productPrice'].value;
   const category = productForm.elements['productCat'].value;

   //create obj
   const newProduct = new Product(name, price, category);
   console.log(newProduct);

   //use info - create row on table
}