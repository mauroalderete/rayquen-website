skills.arduino = {};

skills.arduino.title = "Arduino";
skills.arduino.img = "arduino/arduino.png";
skills.arduino.levels = ["arduino1","arduino2","arduino3","arduino4","arduino5","arduino6"];

workshops.arduino1 = {};
workshops.arduino1.skill = "arduino";
workshops.arduino1.level = 1
workshops.arduino1.name = "Arduino Prime"
workshops.arduino1.title = "Novato curioso"
workshops.arduino1.description = "Arduino es una excelente plataforma para"+
" iniciarse en la electrónica y la programación."+
" Se trata de una placa programable lista para recibir todas las instrucciones que"+
" vos puedas imaginar. Se usa para construir grandiosos sistemas, juegos y robots."+
"<br>En este taller aprenderás a armar tus primeros proyectos con Arduino."+
" Veremos cómo funciona, cómo programarlo y cómo usar las mejores herramientas." 
workshops.arduino1.durationLevel = 4 
workshops.arduino1.durationClass = "1:30";
workshops.arduino1.bonus = {};
workshops.arduino1.bonus.arduino = 1500; 
workshops.arduino1.bonus.robotica = 25;
workshops.arduino1.bonus.programacion = 10;
workshops.arduino1.bonus.electronica = 25;
workshops.arduino1.bonus.electricidad = 5;
workshops.arduino1.extrabonus = {};
workshops.arduino1.extrabonus.programacion = 18300;
workshops.arduino1.extrabonus.electronica = 7500;
workshops.arduino1.extrabonus.robotica = 1275;
workshops.arduino1.extrabonus.electricidad = 500;
workshops.arduino1.requires = {}
workshops.arduino1.prices = {};
workshops.arduino1.prices.clase = {};
workshops.arduino1.prices.mensual = {};
workshops.arduino1.prices.fulllevel = {};
workshops.arduino1.prices.clase.old = 250;
workshops.arduino1.prices.clase.bonus = 20;
workshops.arduino1.prices.clase.new = 200;
workshops.arduino1.prices.mensual.old = 1400;
workshops.arduino1.prices.mensual.bonus = 28;
workshops.arduino1.prices.mensual.new = 1000;
workshops.arduino1.prices.fulllevel.old = 1200;
workshops.arduino1.prices.fulllevel.bonus = 33;
workshops.arduino1.prices.fulllevel.new = 800;
workshops.arduino1.contents = [];
workshops.arduino1.contents[0] = "La plataforma Arduino";
workshops.arduino1.contents[1] = "Introducción a la electricidad";
workshops.arduino1.contents[2] = "Primeros componentes electrónicos";
workshops.arduino1.contents[3] = "Principios de la programación";
workshops.arduino1.contents[4] = "Secuencias de luces y actuadores";
workshops.arduino1.contents[5] = "Módulos para Arduino";

workshops.arduino2 = {};
workshops.arduino2.skill = "arduino";
workshops.arduino2.level = 2
workshops.arduino2.name = "Fundamentos"
workshops.arduino2.title = "Echando raíces"
workshops.arduino2.description = "En este segundo nivel estudiaremos con mayor profundidad la placa Arduino. \
Observaremos diferentes formas de encenderlas. Aprenderemos a utilizar las entredas y salidas de datos \
digitales y analógicos. Indagaremos más sobre como elegir los componentes electrónicos adecuados. \
Y aprenderemos nuevas estrategias de programación para resolver diversos problemas.<br>\
Construiremos algunos circuitos divertidos mientras exploramos y analizaremos como otras personas en el mundo utilizan Arduino.";
workshops.arduino2.durationLevel = 4 
workshops.arduino2.durationClass = "1:30";
workshops.arduino2.bonus = {};
workshops.arduino2.bonus.arduino = 3000; 
workshops.arduino2.bonus.robotica = 25;
workshops.arduino2.bonus.programacion = 10;
workshops.arduino2.bonus.electronica = 25;
workshops.arduino2.bonus.electricidad = 5;
workshops.arduino2.extrabonus = {};
workshops.arduino2.extrabonus.programacion = 18300;
workshops.arduino2.extrabonus.electronica = 7500;
workshops.arduino2.extrabonus.robotica = 1275;
workshops.arduino2.extrabonus.electricidad = 500;
workshops.arduino2.requires = { "arduino": workshops.arduino1.bonus.arduino }
workshops.arduino2.requires.arduino = 300;
workshops.arduino2.prices = {};
workshops.arduino2.prices.clase = {};
workshops.arduino2.prices.mensual = {};
workshops.arduino2.prices.fulllevel = {};
workshops.arduino2.prices.clase.old = 250;
workshops.arduino2.prices.clase.bonus = 20;
workshops.arduino2.prices.clase.new = 200;
workshops.arduino2.prices.mensual.old = 1400;
workshops.arduino2.prices.mensual.bonus = 28;
workshops.arduino2.prices.mensual.new = 1000;
workshops.arduino2.prices.fulllevel.old = 1200;
workshops.arduino2.prices.fulllevel.bonus = 33;
workshops.arduino2.prices.fulllevel.new = 800;
workshops.arduino2.contents = [];
workshops.arduino2.contents[0] = "Datos, información y señales.";
workshops.arduino2.contents[1] = "Entradas y salidas digitales";
workshops.arduino2.contents[2] = "Entradas y salidas analógicas";
workshops.arduino2.contents[3] = "La corriente electrica";
workshops.arduino2.contents[4] = "Leds y resistencias";
workshops.arduino2.contents[5] = "Los microcontroladores";
workshops.arduino2.contents[6] = "Cómo analizar proyectos Arduino en la red";

workshops.arduino3 = {};
workshops.arduino3.skill = "arduino";
workshops.arduino3.level = 3
workshops.arduino3.name = "BingBang: Expansión de Módulos"
workshops.arduino3.title = "Conquistador"
workshops.arduino3.description = "Arduino es una placa fantástica, pero lo es aún mas si lo combinamos"+
" con los numerosos módulos que se encuentran en el mercado. Módulos para mostrar datos,"+
" módulos para detectar calor, sonidos, colores, módulos para conectarse con otros dispositivos."+
" En este nivel veremos los 12 módulos para Arduino más populares. Aprenderemos a "+
" instalarlos en nuestros proyectos de la manera correcta. Veremos como crear los circuitos"+
" electrónicos ideales para"+
" encender nuestros módulos sin quemarlos en el intento. En cada clase utilizaremos "+
"cada módulo para realizar experimentos sorprendentes.";
workshops.arduino3.durationLevel = 8
workshops.arduino3.durationClass = "1:30";
workshops.arduino3.bonus = {};
workshops.arduino3.bonus.arduino = 4500; 
workshops.arduino3.bonus.robotica = 25;
workshops.arduino3.bonus.programacion = 10;
workshops.arduino3.bonus.electronica = 25;
workshops.arduino3.bonus.electricidad = 5;
workshops.arduino3.extrabonus = {};
workshops.arduino3.extrabonus.programacion = 18300;
workshops.arduino3.extrabonus.electronica = 7500;
workshops.arduino3.extrabonus.robotica = 1275;
workshops.arduino3.extrabonus.electricidad = 500;
workshops.arduino3.requires = { "arduino": 
    workshops.arduino1.bonus.arduino +
    workshops.arduino2.bonus.arduino  }
workshops.arduino3.prices = {};
workshops.arduino3.prices.clase = {};
workshops.arduino3.prices.mensual = {};
workshops.arduino3.prices.fulllevel = {};
workshops.arduino3.prices.clase.old = 250;
workshops.arduino3.prices.clase.bonus = 20;
workshops.arduino3.prices.clase.new = 200;
workshops.arduino3.prices.mensual.old = 1400;
workshops.arduino3.prices.mensual.bonus = 28;
workshops.arduino3.prices.mensual.new = 1000;
workshops.arduino3.prices.fulllevel.old = 1200;
workshops.arduino3.prices.fulllevel.bonus = 33;
workshops.arduino3.prices.fulllevel.new = 800;
workshops.arduino3.contents = [];
workshops.arduino3.contents[0] = "La tensión electrica";
workshops.arduino3.contents[1] = "Divisores de tensión";
workshops.arduino3.contents[2] = "Reguladores de tensión";
workshops.arduino3.contents[3] = "Módulos de sensado de variables atmosféricas";
workshops.arduino3.contents[4] = "Módulos de sonido";
workshops.arduino3.contents[5] = "Módulos electrómecanicos";
workshops.arduino3.contents[6] = "Módulos magneticos";
workshops.arduino3.contents[7] = "Módulos de visualización de datos";

workshops.arduino4 = {};
workshops.arduino4.skill = "arduino";
workshops.arduino4.level = 4
workshops.arduino4.name = "Ardubótica"
workshops.arduino4.title = "I Choose You!"
workshops.arduino4.description = "Utilizando los módulos vistos en el nivel anterior nos introduciremos\
 en el maravilloso mundo de la Robótica con Arduino.<br>\
Construiremos robots moviles biomórficos, brazos robóticos y robots competitivos.<br>\
Durante el transcurso de los desafios del nivel exploraremos formas de utilizar los distintos tipos de motores. \
Veremos algunas estrategias de programación usuales para afrontar el problema del movimiento. \
Ademas daremos un vistazo a la construcción y diseño de estructuras usando las herramientas del taller de modding.";
workshops.arduino4.durationLevel = 12;
workshops.arduino4.durationClass = "1:30";
workshops.arduino4.bonus = {};
workshops.arduino4.bonus.arduino = 6000; 
workshops.arduino4.bonus.robotica = 25;
workshops.arduino4.bonus.programacion = 10;
workshops.arduino4.bonus.electronica = 25;
workshops.arduino4.bonus.electricidad = 5;
workshops.arduino4.extrabonus = {};
workshops.arduino4.extrabonus.programacion = 18300;
workshops.arduino4.extrabonus.electronica = 7500;
workshops.arduino4.extrabonus.robotica = 1275;
workshops.arduino4.extrabonus.electricidad = 500;
workshops.arduino4.requires = { "arduino": 
    workshops.arduino1.bonus.arduino +
    workshops.arduino2.bonus.arduino +
    workshops.arduino3.bonus.arduino  }
workshops.arduino4.prices = {};
workshops.arduino4.prices.clase = {};
workshops.arduino4.prices.mensual = {};
workshops.arduino4.prices.fulllevel = {};
workshops.arduino4.prices.clase.old = 250;
workshops.arduino4.prices.clase.bonus = 20;
workshops.arduino4.prices.clase.new = 200;
workshops.arduino4.prices.mensual.old = 1400;
workshops.arduino4.prices.mensual.bonus = 28;
workshops.arduino4.prices.mensual.new = 1000;
workshops.arduino4.prices.fulllevel.old = 1200;
workshops.arduino4.prices.fulllevel.bonus = 33;
workshops.arduino4.prices.fulllevel.new = 800;
workshops.arduino4.contents = [];
workshops.arduino4.contents[0] = "La Robótica con Arduino";
workshops.arduino4.contents[1] = "Tipos y funcionamiento de motores";
workshops.arduino4.contents[2] = "Engranajes y motorreductores";
workshops.arduino4.contents[3] = "Sistemas de control de movimiento";
workshops.arduino4.contents[4] = "Las competencias de Robótica en Argentina";
workshops.arduino4.contents[5] = "Robot Velocista";
workshops.arduino4.contents[6] = "Robot de Sumo";
workshops.arduino4.contents[7] = "Futbol de Robots";
workshops.arduino4.contents[7] = "Diseño y mecanizado";

workshops.arduino5 = {};
workshops.arduino5.skill = "arduino";
workshops.arduino5.level = 5
workshops.arduino5.name = "Ardutalk"
workshops.arduino5.title = "Tecno Diplomático"
workshops.arduino5.description = "Los módulos de Arduino sumado a las etapas de potencia y la facilidad de su programación ofrecen \
una extraordinaria forma de interactuar con el mundo. Pero... ¿Qué sucede cuando le damos a Arduino la capacidad de hablar con otros \
dispositivos?<br> \
En este nivel veremos los principales mecanismos que brinda Arduino para comunicarse e intercambiar información con otros sistemas \
como computadoras personales, celulares y otros sistemas embebidos.<br> \
Exploraremos los protocolos de comunicación sus ventajas y cuando utilizarlos mediante medios físicos e inalámbricos.<br> \
Al mismo tiempo, como Arduino no se comunicará solo, aprenderemos a diseñar, construir y programar diversas interfaces para PC \
que nos ayudarán a monitorear e intarcambiar información con nuestros sistemas.";
workshops.arduino5.durationLevel = 12
workshops.arduino5.durationClass = "1:30";
workshops.arduino5.bonus = {};
workshops.arduino5.bonus.arduino = 7500; 
workshops.arduino5.bonus.robotica = 25;
workshops.arduino5.bonus.programacion = 10;
workshops.arduino5.bonus.electronica = 25;
workshops.arduino5.bonus.electricidad = 5;
workshops.arduino5.extrabonus = {};
workshops.arduino5.extrabonus.programacion = 18300;
workshops.arduino5.extrabonus.electronica = 7500;
workshops.arduino5.extrabonus.robotica = 1275;
workshops.arduino5.extrabonus.electricidad = 500;
workshops.arduino5.requires = { "arduino": 
    workshops.arduino1.bonus.arduino +
    workshops.arduino2.bonus.arduino +
    workshops.arduino3.bonus.arduino +
    workshops.arduino4.bonus.arduino  }
workshops.arduino5.prices = {};
workshops.arduino5.prices.clase = {};
workshops.arduino5.prices.mensual = {};
workshops.arduino5.prices.fulllevel = {};
workshops.arduino5.prices.clase.old = 250;
workshops.arduino5.prices.clase.bonus = 20;
workshops.arduino5.prices.clase.new = 200;
workshops.arduino5.prices.mensual.old = 1400;
workshops.arduino5.prices.mensual.bonus = 28;
workshops.arduino5.prices.mensual.new = 1000;
workshops.arduino5.prices.fulllevel.old = 1200;
workshops.arduino5.prices.fulllevel.bonus = 33;
workshops.arduino5.prices.fulllevel.new = 800;
workshops.arduino5.contents = [];
workshops.arduino5.contents[0] = "Telemática";
workshops.arduino5.contents[1] = "Protocolos Series en profundiad: I2C, SPI";
workshops.arduino5.contents[2] = "Comunicación en paralelo";
workshops.arduino5.contents[3] = "Comunicación por infrarrojo";
workshops.arduino5.contents[4] = "Módulos RF: Wenshing, APC200";
workshops.arduino5.contents[5] = "Diseño y programación de Interfaces con Processing";
workshops.arduino5.contents[6] = "Bluetooth";

workshops.arduino6 = {};
workshops.arduino6.skill = "arduino";
workshops.arduino6.level = 6
workshops.arduino6.name = "Ardu + IOT"
workshops.arduino6.title = "Sabio de la conectividad"
workshops.arduino6.description = "Como no podia ser de otra manera incursionaremos en el sistema de conectividad que lo revolucionó todo. \
 Utilizando diferentes módulos ethernet y wifi veremos como conectar Arduino a Internet y disponer de sus datos desde cualquier parte del mundo.<br>\
 Arduino + Cloud Services conforman la base principal para desarrollar tecnología emergente bajo la filosofia de la Internet de las Cosas.<br>\
 Crearemos servidores portables con Arduino y exploraremos las diferencias y ventajas de conectar Arduino con uno de los servicios en la nube\
 más potentes: Firebase.<br>\
 ";
workshops.arduino6.durationLevel = 8
workshops.arduino6.durationClass = "1:30";
workshops.arduino6.bonus = {};
workshops.arduino6.bonus.arduino = 8500; 
workshops.arduino6.bonus.robotica = 25;
workshops.arduino6.bonus.programacion = 10;
workshops.arduino6.bonus.electronica = 25;
workshops.arduino6.bonus.electricidad = 5;
workshops.arduino6.extrabonus = {};
workshops.arduino6.extrabonus.programacion = 18300;
workshops.arduino6.extrabonus.electronica = 7500;
workshops.arduino6.extrabonus.robotica = 1275;
workshops.arduino6.extrabonus.electricidad = 500;
workshops.arduino6.requires = { "arduino": 
    workshops.arduino1.bonus.arduino +
    workshops.arduino2.bonus.arduino +
    workshops.arduino3.bonus.arduino +
    workshops.arduino4.bonus.arduino +
    workshops.arduino5.bonus.arduino  }
workshops.arduino6.prices = {};
workshops.arduino6.prices.clase = {};
workshops.arduino6.prices.mensual = {};
workshops.arduino6.prices.fulllevel = {};
workshops.arduino6.prices.clase.old = 250;
workshops.arduino6.prices.clase.bonus = 20;
workshops.arduino6.prices.clase.new = 200;
workshops.arduino6.prices.mensual.old = 1400;
workshops.arduino6.prices.mensual.bonus = 28;
workshops.arduino6.prices.mensual.new = 1000;
workshops.arduino6.prices.fulllevel.old = 1200;
workshops.arduino6.prices.fulllevel.bonus = 33;
workshops.arduino6.prices.fulllevel.new = 800;
workshops.arduino6.contents = [];
workshops.arduino6.contents[0] = "Ethernet Shield";
workshops.arduino6.contents[1] = "ESP8266";
workshops.arduino6.contents[2] = "Firebase";
workshops.arduino6.contents[3] = "Conección con Firebase";
workshops.arduino6.contents[4] = "Cloud Functions";
workshops.arduino6.contents[4] = "Proyecto IOT";
