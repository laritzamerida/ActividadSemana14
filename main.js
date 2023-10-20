const lines = [
    'Lorem ipsum dolor sit amet',
    'Odio morbi quis commodo odio aenean sed adipiscing diam donec.',
    'Id leo in vitae turpis massa sed elementum tempus',
    'Lorem donec massa sapien faucibus et molestie ac',
  ];
  
  function upText() {
    const line1 = document.getElementById('linea1');
    const line2 = document.getElementById('linea2');
    const line3 = document.getElementById('linea3');
    const line4 = document.getElementById('linea4');
  
    const randomLine1 = lines[Math.floor(Math.random() * lines.length)];
    const randomLine2 = lines[Math.floor(Math.random() * lines.length)];
    const randomLine3 = lines[Math.floor(Math.random() * lines.length)];
    const randomLine4 = lines[Math.floor(Math.random() * lines.length)];

    line1.innerText = randomLine1;
    line2.innerText = randomLine2;
    line3.innerText = randomLine3;
    line4.innerText = randomLine4;
  
  }
  
  // Llama a la función para establecer el texto inicial
  upText();
  
  // Cambia el texto cada 2 segundos
  setInterval(function() {
    $('#carouselExample').carousel('next');
    upText();
  }, 2000);

