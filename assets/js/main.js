/**
 * main.js
 * * Este archivo contiene scripts personalizados para el sitio web MUSKA | Home & Deco.
 * Se ejecuta una vez que el DOM está completamente cargado.
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('¡MUSKA | Home & Deco: JavaScript cargado correctamente!');

    // --- Funcionalidad para botones "Agregar al Carrito" ---
    // Selecciona todos los botones con la clase 'btn-add-to-cart'
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

    // Itera sobre cada botón y añade un 'event listener'
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Previene el comportamiento por defecto del botón (ej. envío de formulario si estuviera dentro de uno)
            event.preventDefault();

            // Obtiene el título del producto de la tarjeta más cercana
            const productCard = this.closest('.product-card, .product-item');
            let productName = 'Producto'; // Valor por defecto

            if (productCard) {
                const titleElement = productCard.querySelector('.card-title');
                if (titleElement) {
                    productName = titleElement.textContent;
                }
            }
            
            // Muestra una alerta simple
            alert(`"${productName}" ha sido añadido al carrito.`);
            console.log(`Producto "${productName}" añadido al carrito.`);
        });
    });

    // --- Script para la validación del formulario de Contacto ---
    // Este script se mantiene en el HTML del contacto.html para su correcta ejecución
    // ya que interactúa directamente con el DOM y las clases de Bootstrap.
    // Sin embargo, si quisieras externalizarlo, lo harías aquí.
    // (function () {
    //     'use strict'
    //     var forms = document.querySelectorAll('.needs-validation')
    //     Array.prototype.slice.call(forms)
    //         .forEach(function (form) {
    //             form.addEventListener('submit', function (event) {
    //                 if (!form.checkValidity()) {
    //                     event.preventDefault()
    //                     event.stopPropagation()
    //                 }
    //                 form.classList.add('was-validated')
    //             }, false)
    //         })
    // })()
});