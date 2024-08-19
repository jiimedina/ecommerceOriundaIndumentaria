let modalDetalle;

function crearModalDetalle(
  id,
  nombre,
  descripcion,
  precio,
  categoria,
  imgSrc,
  imgAlt,
    descripcionLarga
) {
  // Create modal container
  const modal = document.createElement('div');
  modal.className = 'modal fade ms-1';
  modal.id = 'exampleModal';
  modal.tabIndex = -1;
  modal.setAttribute('aria-labelledby', 'exampleModalLabel');
  modal.setAttribute('aria-hidden', 'true');

  // Create modal dialog
  const modalDialog = document.createElement('div');
  modalDialog.className =
    'mw-1920 ml-2 mx-auto modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen';

  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.className = 'row modal-content';

  // Create modal header
  const modalHeader = document.createElement('div');
  modalHeader.className = 'col-12 modal-header';

  const modalTitle = document.createElement('h2');
  modalTitle.className = 'modal-title txt-small';
  modalTitle.id = 'exampleModalLabel';
  modalTitle.textContent = 'Detalle del producto';

  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'btn-close';
    closeButton.setAttribute('data-bs-dismiss', 'modal');
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.addEventListener('click', function () {
        modalDetalle.hide();
    });

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeButton);

  // Create modal body
  const modalBody = document.createElement('div');
  modalBody.className = 'col-12 modal-body d-flex';

  const row = document.createElement('div');
  row.className = 'row';

  const col1 = document.createElement('div');
  col1.className = 'col-12 col-md-4 py-2';

  const carousel = document.createElement('div');
  carousel.id = 'carouselProductos' + id;
  carousel.className = 'carousel slide carousel-fade';
  carousel.setAttribute('data-bs-ride', 'carousel');

  const carouselInner = document.createElement('div');
  carouselInner.className = 'carousel-inner';

  const carouselItem1 = document.createElement('div');
  carouselItem1.className = 'carousel-item active';
  const img1 = document.createElement('img');
  img1.src = imgSrc;
  img1.className = 'img-fluid d-block w-100';
  img1.alt = imgAlt;
  carouselItem1.appendChild(img1);

  carouselInner.appendChild(carouselItem1);


  carousel.appendChild(carouselInner);
  

  col1.appendChild(carousel);

  const col2 = document.createElement('div');
  col2.className = 'col-md-7 card-body';

  const p4 = document.createElement('div');
  p4.className = 'p-4';

  const h3 = document.createElement('h3');
  h3.className = 'card-text fw-bold text-dark-orange fs-2';
  h3.textContent = nombre;

  const h4 = document.createElement('h4');
  h4.className = 'card-text fw-bold text-dark-orange fs-5';
  h4.textContent = descripcion;

  const p1 = document.createElement('p');
  p1.textContent = descripcionLarga;

  const p2 = document.createElement('p');
  p2.className = 'fs-3 fw-bold';
  p2.textContent = '$' + precio;

  const quantityDiv = document.createElement('div');
  quantityDiv.className = 'd-flex align-items-center mt-2 mb-2';

  const decrementBtn = document.createElement('button');
  decrementBtn.className = 'btn btn-outline-dark';
  decrementBtn.id = 'decrement-btn';
  decrementBtn.textContent = '-';
    decrementBtn.addEventListener('click', function () {
        var currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
          quantityInput.value = currentValue - 1;
        }
        });

  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.id = 'quantity-input';
  quantityInput.className = 'form-control text-center mx-2';
  quantityInput.value = 1;
  quantityInput.min = 1;
  quantityInput.max = 99;
  quantityInput.style.width = '60px';

  const incrementBtn = document.createElement('button');
  incrementBtn.className = 'btn btn-outline-dark';
  incrementBtn.id = 'increment-btn';
  incrementBtn.textContent = '+';
    incrementBtn.addEventListener('click', function () {
        var currentValue = parseInt(quantityInput.value);
        if (currentValue < 99) {
          quantityInput.value = currentValue + 1;
        }
        }
    );

  quantityDiv.appendChild(decrementBtn);
  quantityDiv.appendChild(quantityInput);
  quantityDiv.appendChild(incrementBtn);

  p4.appendChild(h3);
  p4.appendChild(h4);
  p4.appendChild(p1);
  p4.appendChild(p2);
  p4.appendChild(quantityDiv);

  col2.appendChild(p4);

  const accordionDiv = document.createElement('div');
  const accordion = document.createElement('div');
  accordion.className = 'accordion accordion-flush';
  accordion.id = 'accordionFlushExample';

  const accordionItem1 = document.createElement('div');
  accordionItem1.className = 'accordion-item';

  const accordionHeader1 = document.createElement('h2');
  accordionHeader1.className = 'accordion-header';
  accordionHeader1.id = 'flush-headingOne';

  const accordionButton1 = document.createElement('button');
  accordionButton1.className = 'accordion-button';
  accordionButton1.type = 'button';
  accordionButton1.setAttribute('data-bs-toggle', 'collapse');
  accordionButton1.setAttribute('data-bs-target', '#flush-collapseOne');
  accordionButton1.setAttribute('aria-expanded', 'false');
  accordionButton1.setAttribute('aria-controls', 'flush-collapseOne');
  accordionButton1.textContent = 'Descripción y Composición';

  accordionHeader1.appendChild(accordionButton1);

  const accordionCollapse1 = document.createElement('div');
  accordionCollapse1.id = 'flush-collapseOne';
  accordionCollapse1.className = 'accordion-collapse collapse';
  accordionCollapse1.setAttribute('aria-labelledby', 'flush-headingOne');
  accordionCollapse1.setAttribute('data-bs-parent', '#accordionFlushExample');

  const accordionBody1 = document.createElement('div');
  accordionBody1.className = 'accordion-body';

  const p5 = document.createElement('p');
  p5.textContent =
    'Camisa confeccionada en lino. El corte es oversize y de caja cuadrada. Es de una estampa única llena de color, ideal para días de calor :) Es una prenda única, unisex y de edición limitada.';

  accordionBody1.appendChild(p5);
  accordionCollapse1.appendChild(accordionBody1);
  accordionItem1.appendChild(accordionHeader1);
  accordionItem1.appendChild(accordionCollapse1);

  const accordionItem2 = document.createElement('div');
  accordionItem2.className = 'accordion-item';

  const accordionHeader2 = document.createElement('h2');
  accordionHeader2.className = 'accordion-header';
  accordionHeader2.id = 'flush-headingTwo';

  const accordionButton2 = document.createElement('button');
  accordionButton2.className = 'accordion-button collapsed';
  accordionButton2.type = 'button';
  accordionButton2.setAttribute('data-bs-toggle', 'collapse');
  accordionButton2.setAttribute('data-bs-target', '#flush-collapseTwo');
  accordionButton2.setAttribute('aria-expanded', 'false');
  accordionButton2.setAttribute('aria-controls', 'flush-collapseTwo');
  accordionButton2.textContent = 'Cuidados para mejorar la vida de tu prenda';

  accordionHeader2.appendChild(accordionButton2);

  const accordionCollapse2 = document.createElement('div');
  accordionCollapse2.id = 'flush-collapseTwo';
  accordionCollapse2.className = 'accordion-collapse collapse';
  accordionCollapse2.setAttribute('aria-labelledby', 'flush-headingTwo');
  accordionCollapse2.setAttribute('data-bs-parent', '#accordionFlushExample');

  const accordionBody2 = document.createElement('div');
  accordionBody2.className = 'd-flex justify-content-evenly flex-wrap';

  const p6 = document.createElement('p');
  p6.className = 'p-4';
  p6.textContent =
    'Esta prenda esta diseñada para que perdure en el tiempo, ya que sus materiales son nobles de alta calidad. Para alargar su vida útil te recomendamos lavarla con agua fría, preferentemente a mano y utilizar plancha suave.';

  accordionBody2.appendChild(p6);
  accordionCollapse2.appendChild(accordionBody2);
  accordionItem2.appendChild(accordionHeader2);
  accordionItem2.appendChild(accordionCollapse2);

  accordion.appendChild(accordionItem1);
  accordion.appendChild(accordionItem2);

  accordionDiv.appendChild(accordion);
  col2.appendChild(accordionDiv);

  row.appendChild(col1);
  row.appendChild(col2);
  modalBody.appendChild(row);

  // Create modal footer
  const modalFooter = document.createElement('div');
  modalFooter.className = 'col-12 modal-footer';

  const addButton = document.createElement('button');
  addButton.type = 'button';
  addButton.className = 'btn shadow-sm btn-outline-dark w-100';
  addButton.textContent = 'Agregar al carrito';
    addButton.addEventListener('click', function () {
        clickBotonAgregarCarrito(id, parseInt(quantityInput.value));
        modalDetalle.hide();
    });

  modalFooter.appendChild(addButton);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);

  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);


    // Add the modal to the body
    document.body.appendChild(modal);
    modalDetalle = new bootstrap.Modal(modal);
    modalDetalle.show();
    modal.addEventListener('hidden.bs.modal', function () {
        modal.remove();
    });

  return modal;
}
