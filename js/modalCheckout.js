let checkoutModal;
let total = 0;

function createModalCheckout() {
  // Crear modal container
  const modal = document.createElement('div');
  modal.className = 'modal fade';
  modal.id = 'cartModal';
  modal.tabIndex = -1;
  modal.setAttribute('aria-labelledby', 'cartModalLabel');
  modal.setAttribute('aria-hidden', 'true');
  
  // Crear modal dialog
  const modalDialog = document.createElement('div');
  modalDialog.className = 'modal-dialog modal-lg';

  // Crear modal content
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  // Crear modal header
  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';

  const modalTitle = document.createElement('h5');
  modalTitle.className = 'modal-title';
  modalTitle.id = 'cartModalLabel';
  modalTitle.textContent = 'Carrito de Compras';

  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'btn-close';
  closeButton.setAttribute('data-bs-dismiss', 'modal');
  closeButton.setAttribute('aria-label', 'Close');

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeButton);
  
  // Crear modal body
  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body';

  const productList = document.createElement('ul');
  productList.className = 'list-group mb-3';

  //Items del carrito
  carrito.forEach((product) => {
    const productItem = document.createElement('li');
    productItem.className =
      'list-group-item d-flex justify-content-between align-items-start';

    const productImg = document.createElement('img');
    productImg.src = product.imgSrc;
    productImg.alt = product.imgAlt;
    productImg.className = 'img-thumbnail me-3';
    productImg.style.width = '80px';

    const productDetails = document.createElement('div');
    productDetails.className = 'ms-2 me-auto';

    const productTitle = document.createElement('div');
    productTitle.className = 'fw-bold';
    productTitle.textContent = product.nombre;

    const productDescription = document.createElement('p');
    productDescription.className = 'mb-1';
    const productDescriptionSmall = document.createElement('small');
    productDescriptionSmall.textContent = product.descripcion;
    productDescription.appendChild(productDescriptionSmall);

    const productQuantity = document.createElement('small');
    productQuantity.textContent = `Cantidad: ${product.cantidad}`;

    productDetails.appendChild(productTitle);
    productDetails.appendChild(productDescription);
    productDetails.appendChild(productQuantity);

    const productPriceContainer = document.createElement('div');
    productPriceContainer.className = 'd-flex align-items-center';

    const productPrice = document.createElement('span');
    productPrice.className = 'fw-bold';
    productPrice.textContent = '$' + product.precio;

    const removeButton = document.createElement('button');
    removeButton.className = 'btn btn-sm btn-outline-danger ms-3';
    removeButton.textContent = 'Quitar';
    
    //Btn para quitar item del carrito
    removeButton.addEventListener('click', function () {
      const productoIndex = carrito.findIndex(
        (producto) => producto.id === product.id,
      );
      carrito.splice(productoIndex, 1);
      const contadorCarrito = document.getElementById('contador-carrito');
      total = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
      contadorCarrito.textContent = total;
      if (carrito.length === 0) {
        contadorCarrito.classList.add('d-none');
      }
      subtotalValue.textContent =
        '$' +
        carrito.reduce(
          (acc, producto) => acc + producto.precio * producto.cantidad,
          0,
        );
      productItem.remove();
    });

    productPriceContainer.appendChild(productPrice);
    productPriceContainer.appendChild(removeButton);

    productItem.appendChild(productImg);
    productItem.appendChild(productDetails);
    productItem.appendChild(productPriceContainer);

    productList.appendChild(productItem);
  });

  modalBody.appendChild(productList);

  // Crear subtotal
  const subtotalContainer = document.createElement('div');
  subtotalContainer.className = 'd-flex justify-content-between';

  const subtotalLabel = document.createElement('h5');
  subtotalLabel.textContent = 'Subtotal:';

  const subtotalValue = document.createElement('h5');
  total = carrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0,
  );
  subtotalValue.textContent = '$' + total;

  subtotalContainer.appendChild(subtotalLabel);
  subtotalContainer.appendChild(subtotalValue);

  modalBody.appendChild(subtotalContainer);

  // Crear modal footer
  const modalFooter = document.createElement('div');
  modalFooter.className = 'modal-footer';

  const emptyCartButton = document.createElement('button');
  emptyCartButton.type = 'button';
  emptyCartButton.className = 'btn btn-outline-dark';
  emptyCartButton.textContent = 'Vaciar Carrito';
  emptyCartButton.addEventListener('click', function () {
    carrito.splice(0, carrito.length);
    const contadorCarrito = document.getElementById('contador-carrito');
    contadorCarrito.textContent = 0;
    contadorCarrito.classList.add('d-none');
    total = 0;
    subtotalValue.textContent = '$' + total;
    productList.innerHTML = '';
  });

  const checkoutButton = document.createElement('button');
  checkoutButton.type = 'button';
  checkoutButton.className = 'btn btn-outline-dark';
  checkoutButton.textContent = 'Comenzar Compra';
  checkoutButton.addEventListener('click', function () {
    createModalCompraEnvio();
    checkoutModal.hide();
    
  });

  modal.addEventListener('hidden.bs.modal', function () {
    modal.remove();
  });

  modalFooter.appendChild(emptyCartButton);
  modalFooter.appendChild(checkoutButton);

  // Append all parts to modal content
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);

  // Append modal content to modal dialog
  modalDialog.appendChild(modalContent);

  // Append modal dialog to modal container
  modal.appendChild(modalDialog);

  // Append modal to body
  document.body.appendChild(modal);
  modal.addEventListener('hidden.bs.modal', function () {
    modal.remove();
  });

  // Initialize and show the modal using Bootstrap's modal API
  checkoutModal = new bootstrap.Modal(modal);
  checkoutModal.show();
}
