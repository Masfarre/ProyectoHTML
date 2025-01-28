// Función para alternar la visibilidad del campo de búsqueda
function toggleSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.classList.toggle('header__search-active');
    if (searchInput.style.display === "none" || searchInput.style.display === "") {
        searchInput.style.display = "inline-block";
        searchInput.focus();
    } else {
        searchInput.style.display = "none";
    }
}

// Función para alternar entre modo claro y oscuro
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        themeIcon.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        body.classList.add("dark-mode");
        themeIcon.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
}

// Aplicar el tema guardado al cargar la página
const currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("theme-icon").textContent = "🌙";
}

// Actualizar precios de criptomonedas usando la API de CoinGecko
const cryptoTableBody = document.querySelector(".main__crypto-table tbody");

// API endpoint para obtener los precios
const apiEndpoint = "https://api.coingecko.com/api/v3/simple/price";
const cryptoList = ["bitcoin", "ethereum", "ripple", "litecoin", "cardano"];

async function fetchCryptoPrices() {
    try {
        // Llamada a la API para obtener precios y cambios de 24 horas
        const response = await fetch(`${apiEndpoint}?ids=${cryptoList.join(",")}&vs_currencies=usd&include_24hr_change=true`);
        const data = await response.json();

        // Limpia la tabla para evitar duplicados
        cryptoTableBody.innerHTML = "";

        // Actualiza la tabla con los nuevos datos
        cryptoList.forEach((crypto) => {
            const price = data[crypto]?.usd || "N/A";
            const change24h = data[crypto]?.usd_24h_change || 0;

            // Crear una fila para cada criptomoneda
            const row = `
        <tr>
          <td>${crypto.charAt(0).toUpperCase() + crypto.slice(1)}</td>
          <td>$${price.toLocaleString()}</td>
          <td style="color: ${change24h >= 0 ? 'green' : 'red'};">
            ${change24h.toFixed(2)}%
          </td>
        </tr>
      `;
            cryptoTableBody.innerHTML += row;
        });
    } catch (error) {
        console.error("Error fetching crypto prices:", error);
    }
}

// Actualizar precios cada minuto
fetchCryptoPrices();
setInterval(fetchCryptoPrices, 60000); // 60000ms = 1 minuto

function toggleFAQ(button) {
    const answer = button.parentElement.nextElementSibling;
    const isOpen = answer.classList.contains("open");

    // Cerrar todas las respuestas abiertas
    document.querySelectorAll(".faq__answer").forEach((ans) => {
        ans.classList.remove("open");
        ans.previousElementSibling.querySelector("button").setAttribute("aria-expanded", "false");
    });

    // Abrir la respuesta seleccionada si no estaba abierta
    if (!isOpen) {
        answer.classList.add("open");
        button.setAttribute("aria-expanded", "true");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Función para obtener las criptomonedas más subidas en 24h
    const fetchTopGainers = () => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=percent_change_24h&per_page=10&page=1')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Verificar los datos de la API
                const cryptoList = document.getElementById('crypto-list');
                cryptoList.innerHTML = ''; // Limpiar lista antes de añadir nuevos elementos
                if (data && data.length > 0) {
                    data.forEach(coin => {
                        const li = document.createElement('li');
                        li.classList.add('main__crypto-item');
                        li.innerHTML = `
                            <span>${coin.name}</span>
                            <span>${coin.price_change_percentage_24h.toFixed(2)}%</span>
                        `;
                        cryptoList.appendChild(li);
                    });
                } else {
                    console.error('No se recibieron datos de criptomonedas.');
                }
            })
            .catch(error => {
                console.error('Error al obtener los datos de la API:', error);
            });
    };

    // Función para obtener las 100 criptomonedas más conocidas para el selector
    const fetchTop100Cryptos = () => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
            .then(response => response.json())
            .then(data => {
                const cryptoSelect = document.getElementById('crypto-select');
                cryptoSelect.innerHTML = ''; // Limpiar el selector antes de añadir nuevos elementos
                if (data && data.length > 0) {
                    data.forEach(coin => {
                        const option = document.createElement('option');
                        option.value = coin.id;
                        option.innerText = coin.name;
                        cryptoSelect.appendChild(option);
                    });
                } else {
                    console.error('No se recibieron datos de criptomonedas.');
                }
            })
            .catch(error => {
                console.error('Error al obtener los datos de las 100 criptomonedas:', error);
            });
    };

    // Llamar a las funciones al cargar la página
    fetchTopGainers();
    fetchTop100Cryptos();

    // Actualizar cada 20 segundos
    setInterval(() => {
        fetchTopGainers();
        fetchTop100Cryptos();
    }, 20000); // 20000ms = 20 segundos
});
