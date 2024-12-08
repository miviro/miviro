# Recepción de imágenes de satélites NOAA
Con un [RTL-SDR](https://www.rtl-sdr.com/), un ordenador y una antena podemos recibir imágenes de los satélites estadounidenses de clima [NOAA](https://www.star.nesdis.noaa.gov/goes/index.php) 15, 18, 19 y del ruso Meteor-M2 2. Esto fue mi proyecto de pandemia por lo que estaba limitado en cuanto a materiales.

![Satélite NOAA 19](/static/images/noaa/noaa_19.jpg)
## Antena
Para la antena opté por una antena Quadrifilar Helix Antenna (QFH) hecha de tubos PVC, con cable coaxial para recibir las señales de ~137Mhz, banda en la que transmiten APT los satélites previamente nombrados. Es una antena sencilla de hacer con muchos tutoriales online y apta para nuestro proyecto ya que recibe omnidireccionalmente. Así no necesitaremos hacer _tracking_ del satélite en el cielo.
![Antena](/static/images/noaa/antena.jpg)
## Software
Para averiguar cuándo realizarán una pasada uno de estos satélites, usé la aplicación [Look4Sat](https://github.com/rt-bishop/Look4Sat), que nos informa cuándo, por dónde y con qué frecuencia de _downlink_ pasará un satélite. Tiene en cuenta el efecto Doppler para mostrar la frecuencia, lo cual mejora nuestra calidad de imagen. En mi caso fue variando la frecuencia en la que grababa manualmente viendo la mostrada en la aplicación, pero se puede hacer mucho mejor conectado ambos programas.

Para recibir la señal, empleé [SDR#](https://airspy.com/download/).

Y para procesarla, no recuerdo exactamente el programa que usé, pero hay muchas alternativas, como [aptdec](https://github.com/Xerbo/aptdec).

## Imágenes
![Martes](/static/images/noaa/martes.png)
![Martessimple](/static/images/noaa/martessimple.png)

![Miercoleslineas](/static/images/noaa/miercoleslineas.png)
![Miercoles](/static/images/noaa/miercoles.png)

![noaalineas](/static/images/noaa/noaalineas.jpg)
![noaa](/static/images/noaa/noaa.jpg)

![proclineas](/static/images/noaa/proclineas.jpg)
![procnormal](/static/images/noaa/procnormal.jpg)
