class Producto{
    constructor(name,price,year){
        this.name=name;
        this.price=price;
        this.year=year;
    }
}

class UI{
    addProduct(product) {
       const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
    <div class="card mb-4">
        <div class="card-header">
            <h5 class="mb-0">${product.name}</h5>
        </div>

        <div class="card-body">
            <p class="card-text mb-2">
                <strong>Precio:</strong> Q${product.price}
            </p>

            <p class="card-text mb-3">
                <strong>Año:</strong> ${product.year}
            </p>

            <a href="#" class="btn btn-danger" name="delete">
                Eliminar
            </a>
        </div>
    </div>
`;
        productList.appendChild(element);
    }
     
    resetForm(){
        document.getElementById('product-form').reset();

    }

    deleteProduct(element) {
        if (element.name === 'delete') {
             element.parentElement.parentElement.parentElement.remove();
             this.showMessage('Producto eliminado correctamente', 'info');
         }
}

    showMessage(message, cssClass) {
    const div = document.createElement('div');
    div.className = `alert alert-${cssClass} mt-2` ;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const app = document.querySelector('#App');
    container.insertBefore(div, app);
    setTimeout(function(){
        document.querySelector('.alert').remove();
        }, 3000)
    }
}

//DOM Eventos
document.getElementById('product-form')
    .addEventListener('submit', function(e){
     e.preventDefault();

    const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
            const year = document.getElementById('year').value;

        const product = new Producto(name,price,year);

        const ui = new UI();

        if(name ==='' || price ==='' || year ===''){
           return ui.showMessage('Complete los campos por favor', 'danger');
        }
        ui.addProduct(product);
        ui.resetForm();
        ui.showMessage('Producto agregado correctamente', 'success');
});

document.getElementById('product-list').addEventListener('click',function(e){
   const ui = new UI();
   ui.deleteProduct(e.target);
})
