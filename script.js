// Función para generar las raíces de la tarjeta verde
function generateGreenRoots() {
    const container = document.getElementById('green-roots');
    
    // Si el contenedor no existe en la página, no ejecutamos nada
    if (!container) return;

    const numberOfRoots = 25; // ¡Aumentado a 25 para que sea más denso!

    for (let i = 0; i < numberOfRoots; i++) {
        const root = document.createElement('div');
        root.classList.add('root');
        
        // Parámetros aleatorios
        // Dentro del for de script.js:
        const skew = (Math.random() - 0.5) * 20; // Inclinación entre -10 y 10 grados
        root.style.setProperty('--skew', `${skew}deg`);
        const leftPos = Math.random() * 100;
        const height = 30 + Math.random() * 65; // Entre 30% y 95% de la tarjeta
        const delay = Math.random() * 0.6;      // Escalonamiento de salida
        const duration = 0.8 + Math.random() * 1.2; // Velocidad de crecimiento
        const width = 1 + Math.random() * 4;    // Grosor de la raíz

        // Aplicamos los estilos dinámicos
        root.style.left = `${leftPos}%`;
        root.style.height = `${height}%`;
        root.style.width = `${width}px`;
        
        // Variables CSS personalizadas para la animación
        root.style.setProperty('--delay', `${delay}s`);
        root.style.setProperty('--dur', `${duration}s`);
        
        container.appendChild(root);
    }
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', generateGreenRoots);

function generateFire() {
    const container = document.getElementById('orange-fire');
    if (!container) return;

    // Aumentamos a 40 llamas para que sea mucho más denso
    const numberOfFlames = 40; 

    for (let i = 0; i < numberOfFlames; i++) {
        const flame = document.createElement('div');
        flame.classList.add('flame');

        const leftPos = Math.random() * 100;
        // Alturas variadas para que unas lleguen más arriba que otras
        const height = 50 + Math.random() * 45; 
        const width = 15 + Math.random() * 25; 
        const delay = Math.random() * 1.5;
        // Duración más rápida para un fuego más intenso
        const duration = 0.6 + Math.random() * 0.5; 

        flame.style.left = `${leftPos}%`;
        flame.style.width = `${width}px`;
        flame.style.height = `${height}%`;
        flame.style.setProperty('--delay', `${delay}s`);
        flame.style.setProperty('--dur', `${duration}s`);

        container.appendChild(flame);
    }
}

// Llama a la función junto con la de las raíces
document.addEventListener('DOMContentLoaded', () => {
    generateGreenRoots();
    generateFire();
});

function generateBubbles() {
    const container = document.getElementById('blue-bubbles');
    if (!container) return;

    // Queremos que las burbujas se generen constantemente mientras el mouse está encima
    const card = container.closest('.tsunami-horizontal');
    let bubbleInterval;

    card.addEventListener('mouseenter', () => {
        bubbleInterval = setInterval(() => {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');

            // Posición y tamaño aleatorio
            const size = Math.random() * 15 + 5;
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const duration = Math.random() * 1 + 0.5;

            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${left}%`;
            bubble.style.top = `${top}%`;
            bubble.style.setProperty('--dur', `${duration}s`);

            container.appendChild(bubble);

            // Eliminar la burbuja después de que termine su animación de "pop"
            setTimeout(() => {
                bubble.remove();
            }, duration * 1000);
        }, 150); // Crea una burbuja cada 150ms
    });

    card.addEventListener('mouseleave', () => {
        clearInterval(bubbleInterval);
    });
}

// No olvides llamarla en tu DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    generateGreenRoots();
    generateFire();
    generateBubbles();
});

function generateLightning() {
    const container = document.getElementById('yellow-lightning');
    if (!container) return;

    const card = container.closest('.yellow-special');
    let isHovering = false;

    // Función recursiva para tiempos aleatorios
    function createBolt() {
        if (!isHovering) return;

        const bolt = document.createElement('div');
        bolt.classList.add('bolt');

        // Configuración de rayos más grandes y variados
        const leftPos = Math.random() * 100;
        const width = 3 + Math.random() * 8; // Más gruesos (3px a 11px)
        const height = 70 + Math.random() * 30; // Más largos (mínimo 70% de la tarjeta)
        const rotation = (Math.random() - 0.5) * 20; // Inclinación aleatoria

        bolt.style.left = `${leftPos}%`;
        bolt.style.width = `${width}px`;
        bolt.style.height = `${height}%`;
        bolt.style.transform = `rotate(${rotation}deg)`;

        container.appendChild(bolt);

        // Desaparece rápido para el efecto de impacto
        setTimeout(() => bolt.remove(), 150);

        // TIEMPO ALEATORIO: El próximo rayo caerá entre 100ms y 600ms
        const nextBoltTime = Math.random() * 500 + 100;
        setTimeout(createBolt, nextBoltTime);
    }

    card.addEventListener('mouseenter', () => {
        isHovering = true;
        createBolt();
    });

    card.addEventListener('mouseleave', () => {
        isHovering = false;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    generateGreenRoots();
    generateFire();
    generateBubbles();
    generateLightning(); // ¡No olvides esta!
});

// Asegúrate de cerrar bien la función de rayos
function generateLightning() {
    const container = document.getElementById('yellow-lightning');
    if (!container) return;

    const card = container.closest('.yellow-special');
    let isHovering = false;

    function createBolt() {
        if (!isHovering) return;
        const bolt = document.createElement('div');
        bolt.classList.add('bolt');
        // ... (tu lógica de posicionamiento)
        container.appendChild(bolt);
        setTimeout(() => bolt.remove(), 150);
        setTimeout(createBolt, Math.random() * 500 + 100);
    }

    card.addEventListener('mouseenter', () => {
        isHovering = true;
        createBolt();
    });
    card.addEventListener('mouseleave', () => isHovering = false);
}

function toggleDrawer() {
    const drawer = document.getElementById('sideDrawer');
    drawer.classList.toggle('open');
}

// Opcional: Cerrar al hacer click fuera del drawer
document.addEventListener('click', function(event) {
    const drawer = document.getElementById('sideDrawer');
    const handle = document.querySelector('.drawer-handle');
    if (!drawer.contains(event.target) && drawer.classList.contains('open')) {
        drawer.classList.remove('open');
    }
});