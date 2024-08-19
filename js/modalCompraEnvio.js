let modalCompraEnvio;

function createModalCompraEnvio() {
    // Create button to open modal
    const openModalButton = document.createElement('button');
    openModalButton.type = 'button';
    openModalButton.className = 'btn btn-primary';
    openModalButton.setAttribute('data-bs-toggle', 'modal');
    openModalButton.setAttribute('data-bs-target', '#checkoutModal');
    openModalButton.textContent = 'Abrir Modal de Compra';
  
    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'checkoutModal';
    modal.tabIndex = -1;
    modal.setAttribute('aria-labelledby', 'checkoutModalLabel');
    modal.setAttribute('aria-hidden', 'true');
  
    // Create modal dialog
    const modalDialog = document.createElement('div');
    modalDialog.className = 'modal-dialog modal-lg';
  
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
  
    // Create modal header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
  
    const modalTitle = document.createElement('h5');
    modalTitle.className = 'modal-title';
    modalTitle.id = 'checkoutModalLabel';
    modalTitle.textContent = 'Realizar Compra';
  
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('data-bs-dismiss', 'modal');
    closeButton.setAttribute('aria-label', 'Close');
  
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);
  
    // Create modal body
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
  
    const form = document.createElement('form');
    form.className = 'row g-3';
  
    // Create sections and inputs
    const sections = [
      {
        title: 'Datos para la compra',
        fields: [
          { label: 'Nombre', type: 'text', id: 'firstName', placeholder: 'Ana', required: true },
          { label: 'Apellido', type: 'text', id: 'lastName', placeholder: 'Pérez', required: true },
          { label: 'Correo', type: 'email', id: 'email', placeholder: 'email@correo.com', required: true }
        ]
      },
      {
        title: 'Datos de pago',
        fields: [
          { label: 'Nombre del titular de la tarjeta', type: 'text', id: 'cardHolder', required: true },
          { label: 'DNI del titular', type: 'text', id: 'dniHolder', required: true },
          { label: 'Número de tarjeta', type: 'text', id: 'cardNumber', required: true },
          { label: 'Vencimiento', type: 'text', id: 'cardExpiry', placeholder: 'MM/AA', required: true },
          { label: 'Código de seguridad', type: 'text', id: 'cardCVC', required: true },
          { label: 'Número de cuotas (solo crédito)', type: 'select', id: 'installments', options: ['1 Cuota', '3 Cuotas', '6 Cuotas', '12 Cuotas'] }
        ]
      },
      {
        title: 'Medios de envío',
        fields: [
          { label: 'Retirar en el local(Gratis). Gorriti 4588 - Palermo.', type: 'radio', id: 'pickUpOption', name: 'shippingOption', value: 'pickup', checked: true },
          { label: 'Punto de Retiro - Av. Triunvirato 4356', type: 'radio', id: 'PuntoRetiroOption', name: 'shippingOption', value: 'retiro' }
        ]
      }
    ];
  
    sections.forEach(section => {
      const sectionTitle = document.createElement('div');
      sectionTitle.className = 'col-12';
      const sectionTitleText = document.createElement('h6');
      sectionTitleText.className = 'fw-bold';
      sectionTitleText.textContent = section.title;
      sectionTitle.appendChild(sectionTitleText);
      form.appendChild(sectionTitle);
  
      section.fields.forEach(field => {
        const fieldContainer = document.createElement('div');
        fieldContainer.className = field.type === 'select' ? 'col-xxl-6' : 'col-xxl-6';
  
        const label = document.createElement('label');
        label.className = 'form-label';
        label.setAttribute('for', field.id);
        label.textContent = field.label;
  
        let input;
        if (field.type === 'select') {
          input = document.createElement('select');
          input.className = 'form-select border-dark-orange';
          input.id = field.id;
          field.options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            input.appendChild(optionElement);
          });
        } else if (field.type === 'radio') {
          input = document.createElement('input');
          input.className = 'form-check-input';
          input.type = field.type;
          input.id = field.id;
          input.name = field.name;
          input.value = field.value;
          if (field.checked) input.checked = true;
  
          const radioLabel = document.createElement('label');
          radioLabel.className = 'form-check-label';
          radioLabel.setAttribute('for', field.id);
          radioLabel.textContent = field.label;
  
          fieldContainer.className = 'col-xxl-12';
          fieldContainer.appendChild(input);
          fieldContainer.appendChild(radioLabel);
          form.appendChild(fieldContainer);
          return;
        } else {
          input = document.createElement('input');
          input.className = 'form-control border-dark-orange';
          input.type = field.type;
          input.id = field.id;
          if (field.placeholder) input.placeholder = field.placeholder;
          if (field.required) input.required = true;
        }
  
        fieldContainer.appendChild(label);
        fieldContainer.appendChild(input);
        form.appendChild(fieldContainer);
      });
    });
  
    // Create delivery address section
    const deliveryAddress = document.createElement('div');
    deliveryAddress.id = 'deliveryAddress';
    deliveryAddress.className = 'mt-3 col-xxl-12';
    deliveryAddress.style.display = 'none';
  
    const addressFields = [
      { label: 'Calle', type: 'text', id: 'street' },
      { label: 'Altura', type: 'text', id: 'streetNumber' },
      { label: 'Depto (opcional)', type: 'text', id: 'apartment' },
      { label: 'Código Postal', type: 'text', id: 'postalCode' },
      { label: 'Ciudad', type: 'text', id: 'city' },
      { label: 'País', type: 'text', id: 'country' }
    ];
  
    addressFields.forEach(field => {
      const fieldContainer = document.createElement('div');
      fieldContainer.className = 'mb-3';
  
      const label = document.createElement('label');
      label.className = 'form-label';
      label.setAttribute('for', field.id);
      label.textContent = field.label;
  
      const input = document.createElement('input');
      input.className = 'form-control border-dark-orange';
      input.type = field.type;
      input.id = field.id;
  
      fieldContainer.appendChild(label);
      fieldContainer.appendChild(input);
      deliveryAddress.appendChild(fieldContainer);
    });
  
    form.appendChild(deliveryAddress);
    modalBody.appendChild(form);
  
    // Create modal footer
    const modalFooter = document.createElement('div');
    modalFooter.className = 'modal-footer';
  
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.className = 'btn shadow-sm btn-outline-dark';
    cancelButton.setAttribute('data-bs-dismiss', 'modal');
    cancelButton.textContent = 'Cancelar';
  
    const purchaseButton = document.createElement('button');
    purchaseButton.type = 'button';
    purchaseButton.className = 'btn shadow-sm btn-outline-dark';
    purchaseButton.textContent = 'Realizar compra';
  
    modalFooter.appendChild(cancelButton);
    modalFooter.appendChild(purchaseButton);
  
    // Append all parts to modal content
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
  
    // Append modal content to modal dialog
    modalDialog.appendChild(modalContent);
  
    // Append modal dialog to modal container
    modal.appendChild(modalDialog);
  
    // Append modal and button to body
    document.body.appendChild(openModalButton);
    document.body.appendChild(modal);
  
    // Initialize and show the modal using Bootstrap's modal API
    modalCompraEnvio = new bootstrap.Modal(modal);
    modalCompraEnvio.show();
  }