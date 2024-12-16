import domReady from '@roots/sage/client/dom-ready';

/**
 * Application entrypoint
 */
domReady(async () => {
  // ...
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error);






document.addEventListener('DOMContentLoaded', function() {
    const messages = [
      'SYSTEM: NETWORK ONLINE 🗸',
      'INCOMING TRANSMISSION 🗸',
      'DATA STREAM ACTIVE 🗸',
      'NEURAL LINK ESTABLISHED 🗸',
      'CYBERSECURITY PROTOCOL: ENGAGED 🗸',
      'SYSTEM DIAGNOSTICS: OPTIMAL 🗸',
      'QUANTUM PROCESSING: ACTIVE ✔️'
    ];
  
    const ledContent = document.getElementById('ledContent');
    let currentMessageIndex = 0;
  
    function getNextMessage() {
      currentMessageIndex = (currentMessageIndex + 1) % messages.length;
      return messages[currentMessageIndex];
    }
  
    function initLedScreen() {
      ledContent.textContent = messages[0];
      
      ledContent.addEventListener('animationiteration', () => {
        ledContent.textContent = getNextMessage();
      });
    }
  
    initLedScreen();
  });

/* _____________________ */

document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('svg');
            
            // Toggle content
            content.classList.toggle('hidden');
            
            // Rotate icon
            icon.classList.toggle('rotate-180');
            
            // Optional: Close other open accordions
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    const otherContent = otherHeader.nextElementSibling;
                    const otherIcon = otherHeader.querySelector('svg');
                    
                    otherContent.classList.add('hidden');
                    otherIcon.classList.remove('rotate-180');
                }
            });
        });
    });
});




// 🔑 CONFIGURA AQUÍ LAS POSICIONES PREDETERMINADAS
        // Posición para escritorio
        const DESKTOP_DEFAULT_X = 26;
        const DESKTOP_DEFAULT_Y = 38;

        // Posición para móviles
        const MOBILE_DEFAULT_X = 26;
        const MOBILE_DEFAULT_Y = 38;

        // Obtener referencias a los elementos del DOM
        const lineX = document.getElementById('cursor-line-x');
        const lineY = document.getElementById('cursor-line-y');
        const point = document.getElementById('cursor-point');

        // Verificar si es un dispositivo móvil
        function isMobileDevice() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        // Obtener coordenadas predeterminadas
        function getDefaultCoordinates() {
            if (isMobileDevice()) {
                return { 
                    x: MOBILE_DEFAULT_X, 
                    y: MOBILE_DEFAULT_Y 
                };
            }
            return { 
                x: DESKTOP_DEFAULT_X, 
                y: DESKTOP_DEFAULT_Y 
            };
        }

        // Estado del cursor
        let isInsideWindow = false;

        // Función para establecer posición predeterminada con parpadeo
        function setDefaultPosition() {
            const { x, y } = getDefaultCoordinates();
            
            lineX.style.top = `${y}px`;
            lineY.style.left = `${x}px`;
            point.style.left = `${x}px`;
            point.style.top = `${y}px`;
            
            // Agregar clase de parpadeo
            point.classList.add('blink');
            
            isInsideWindow = false;
        }

        // Función de seguimiento del cursor con soporte para ratón y táctil
        function updateCursorPosition(e) {
            // Remover clase de parpadeo
            point.classList.remove('blink');

            // Manejar eventos tanto de ratón como táctiles
            const x = e.clientX || (e.touches && e.touches[0].clientX);
            const y = e.clientY || (e.touches && e.touches[0].clientY);

            if (x !== undefined && y !== undefined) {
                lineX.style.top = `${y}px`;
                lineY.style.left = `${x}px`;
                point.style.left = `${x}px`;
                point.style.top = `${y}px`;
                isInsideWindow = true;
            }
        }

        // Eventos para diferentes tipos de interacción
        window.addEventListener('mousemove', updateCursorPosition, { passive: true });
        window.addEventListener('touchmove', updateCursorPosition, { passive: true });

        // Manejar cuando se sale de la ventana
        window.addEventListener('mouseout', (e) => {
            if (e.relatedTarget === null) {
                setDefaultPosition();
            }
        });

        // Manejar salida de touch
        window.addEventListener('touchend', () => {
            setDefaultPosition();
        });

        // Establecer posición predeterminada al cargar la página
        window.addEventListener('load', setDefaultPosition);

        // Manejar redimensionamiento de ventana
        window.addEventListener('resize', () => {
            if (!isInsideWindow) {
                setDefaultPosition();
            }
        });



        
        
        
        
        /* script para el panel img css  */
        const popupContainer = document.getElementById('popupContainer');
  
    document.querySelectorAll('.building').forEach(building => {
      building.addEventListener('mouseenter', () => {
        const nodeName = building.getAttribute('data-node');
        popupContainer.innerHTML = `
      <div class="popup-node">${nodeName}</div>
      <div class="popup-description">Click to access ${nodeName.toLowerCase()} services</div>
    `; // Muestra el nombre del nodo en el contenedor
        popupContainer.classList.add('active'); // Activa el contenedor
      });
  
      building.addEventListener('mouseleave', () => {
        popupContainer.classList.remove('active'); // Oculta el contenedor al salir
      });
  
      building.addEventListener('click', () => {
        const subdomain = building.getAttribute('data-node').toLowerCase().replace(/ /g, '-') + '.example.com'; // Genera el subdominio
        window.location.href = `https://${subdomain}`;
      });
      
      
    });






