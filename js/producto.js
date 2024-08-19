function crearCardProducto( id, nombre, descripcion, precio, categoria, imgSrc, imgAlt, descripcionLarga ) {
    // Crear el contenedor principal
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card shadow-sm mx-auto bg-light-sand';
    cardDiv.style.width = '18rem';

    // Crear la imagen
    const img = document.createElement('img');
    img.src = imgSrc;
    img.className = 'card-img-top img-fluid';
    img.alt = imgAlt;
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
        crearModalDetalle( id, nombre, descripcion, precio, categoria, imgSrc, imgAlt, descripcionLarga );
    }
    );

    // Crear el cuerpo de la tarjeta
    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card-body';

    // Crear el título
    const h3 = document.createElement('h3');
    h3.className = 'card-title fs-4 fw-bold';
    h3.textContent = nombre;
    h3.style.cursor = 'pointer';
    h3.addEventListener('click', function() {
        crearModalDetalle( id, nombre, descripcion, precio, categoria, imgSrc, imgAlt, descripcionLarga );
    }
    );

    // Crear la descripción
    const pDescripcion = document.createElement('p');
    pDescripcion.className = 'card-text';
    pDescripcion.textContent = descripcion;
    pDescripcion.style.cursor = 'pointer';
    pDescripcion.addEventListener('click', function() {
        crearModalDetalle( id, nombre, descripcion, precio, categoria, imgSrc, imgAlt, descripcionLarga );
    }
    );

    // Crear el precio
    const pPrecio = document.createElement('p');
    pPrecio.className = 'fs-3 fw-semibold';
    pPrecio.textContent = `$${precio}`;

    // Crear el botón
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn shadow-sm btn-outline-dark w-100 boton-agregar-carrito';
    button.textContent = 'Agregar al carrito';
    button.addEventListener('click', function() {
        clickBotonAgregarCarrito(id,1);
    });

    // Agregar los elementos al cuerpo de la tarjeta
    cardBodyDiv.appendChild(h3);
    cardBodyDiv.appendChild(pDescripcion);
    cardBodyDiv.appendChild(pPrecio);
    cardBodyDiv.appendChild(button);

    // Agregar la imagen y el cuerpo de la tarjeta al contenedor principal
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);

    return cardDiv;
}