
var general = document.getElementById("general")
var zeppelin = document.getElementById("zeppelin")
var contenedor = document.getElementById("contenedor")
var home = document.getElementById("home")
var cronograma = document.getElementById("cronograma")
var footer = document.getElementById("footer")
var footerImg = document.getElementById("footerImg")
var iconos = document.getElementById("iconos")

if(general || zeppelin) {
    home.remove(); 
    cronograma.style.visibility = 'hidden';
} 

const linksPorPais = {
  'arg': 'https://drive.google.com/file/d/17xPwHnK4oejdNTyS2uJmgd9G3Ed0bLxa/view',
    'uy': 'https://drive.google.com/file/d/1l_ZUNRsyrOqKKKFF_sxtq4OdbAIdTRqx/view',
    'cl': 'https://drive.google.com/file/d/1SxqmcdUAQEwN4tWAnWJC6Kl9P2PCS5xa/view',
    'pe': 'https://drive.google.com/file/d/18bOll8jEVcKSpiu64vaN7d8gJyyzCdbK/view',
    'ec': 'https://drive.google.com/file/d/1-t8U4D4MeHtHykWm3Axv5AEhA3FV0pth/view',
    'gt': 'https://drive.google.com/file/d/1sKHjXAwgVrBbdZX8A_M5iB13GzV5CNa-/view',
    'cr': 'https://drive.google.com/file/d/17cD0BDa7J8sGb8n6LmXV6ih7TQ4JS8Zp/view',
    'ni': 'https://drive.google.com/file/d/1zsFqcBMPBbASoce5bec0u_SiNbmam7ZP/view',
    'hn': 'https://drive.google.com/file/d/1wzEOMAuBZhCV_3-I81nGn3bhLrIhnKxI/view',
    've': 'https://drive.google.com/file/d/1O3N6jmIYJPesbnK0Tnrksm1ABqdcjC3X/view',
    'sv': 'https://drive.google.com/file/d/11LZHmNPk9DgokVKZLR3W1e3AptRSYF74/view',
    'do': 'https://drive.google.com/file/d/10fLwA_bC9nRU-cOAriXwtfEfyNWKAVb_/view',
    'pa': 'https://drive.google.com/file/d/1o1Te3d4TZ_NJFWlanXB30QwJOM7viF4v/view',
    'bo': 'https://drive.google.com/file/d/11n_Sk6ozO0pxfAlZfN_d3BoWBKGHowP2/view',
    'py': 'https://drive.google.com/file/d/1SPjSDfOwVNLd6AprAa0ym6hriBIjmzKC/view',
  
};

const videosPorPais = {
    'arg': 'uLiZO_S6wMM',
    'uy': 'wXcJu-YbhHQ',
    'cl': 'yvKWApVhgQg',
    'pe': 'ext6xGr_M5s',
    'ec': 'JXyu74Pi6oM',
    'gt': 'ta-dEqRKljU',
    'cr': '32OuI_VA5Hw',
    'ni': '9yRc_4X94zk',
    'hn': 'RMftSKgVCfk',
    've': 'IH0YL6A4xLE',
    'sv': 'lcKKFVqw97k',
    'do': 'o-r-KB7YAZk',
    'pa': '_RKXjzBOmXs',
    'bo': 'XpFRntN8oZI',
    'py': '3xkQaWNQ4jo',
};

function inicio() {
  if(home) {
      const paisDeseado = 'arg'; 
      cambiarVideo(paisDeseado);
        home.remove();
        cronograma.style.visibility = 'hidden';
        document.body.appendChild(zeppelin);
        zeppelin.style.marginBottom = "0";
        contenedor.style.marginBottom = "-6%";
        document.body.appendChild(general);
        document.body.appendChild(iconos)
        document.body.appendChild(footer)
        document.body.appendChild(footerImg)
    }
}

function cambiarVideo(pais) {
    const videoId = videosPorPais[pais];
    if (videoId) {
      const videoContainer = document.getElementById('muestra');
      videoContainer.innerHTML = `
        <iframe
          width="70%"
          height="100%"
          src="https://www.youtube.com/embed/${videoId}?autoplay=1"
          frameborder="0"
          allowfullscreen
        ></iframe>
      `;
      videoContainer.classList.add('principal');
      
      const linkCronograma = document.getElementById('cronograma-link');
      linkCronograma.href = linksPorPais[pais] || '#'; // Si no hay enlace disponible, redirige a #
      

        general.remove();
        zeppelin.remove();
        cronograma.remove();

        contenedor.appendChild(home);
        contenedor.appendChild(cronograma);
        contenedor.style.marginTop = '20px';
        contenedor.style.marginBottom = "0";
        cronograma.style.visibility = 'visible';
        cronograma.style.background = "white";
        cronograma.style.border = "solid 1px";
        

    } else {
      console.error('No se encontró un video para el país seleccionado.');
    }
  }
 
 


  