// módulos externos, los módulos externos son módulos que no hemos creado nosotros, sino que son módulos que vienen por defecto en Node.js o que hemos instalado a través de npm, estos no pueden ser ejecutados en la consola del navegador ya que son exclusivos de Node.js.
const os = require('os');

console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Free memory:', os.freemem());
console.log('Total memory:', os.totalmem());
