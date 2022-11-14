
import './App.css';
import Maravillas from './components/Maravillas';


function App() {
  return (
    <div className='App'>
      <div className= 'contenedor-principal'>
      <h1>Estas son las siete maravillas del mundo</h1>
      <Maravillas 
        nombre='La Gran Muralla'
        pais='China'
        imagen='chinese-wall'
        texto='La Gran Muralla china es una antigua fortificación china,construida y reconstruida entre el siglo v a. C. y el siglo xvi para proteger la frontera norte del Imperio chino durante las sucesivas dinastías imperiales de los ataques de los nómadas xiongnu de Mongolia y Manchuria.'/>
      <Maravillas 
        nombre='Chichen Itza'
        pais='Mexico'
        imagen='chichen-itza'
        texto= 'Chichen Itza  es uno de los principales sitios arqueológicos mayas de la península de Yucatán, en México. Se encuentra a escasos 2.5 km de la localidad de Pisté, en el municipio de Tinum, en el estado de Yucatán, al sureste del país.'/>
      <Maravillas 
        nombre='Machu Pichu'
        pais='Peru'
        imagen='machu-pichu'
        texto='Es el nombre contemporáneo que se da a una llacta —antiguo poblado incaico andino— construida antes del Siglo XV, ubicada en la Cordillera Oriental del sur del Perú, en la cadena montañosa de Los Andes a 2430 metros sobre el nivel del mar.'/>
      <Maravillas 
        nombre='Cristo Redentor'
        pais='Brasil'
        imagen='cristo-redentor'
        texto='El Cristo Redentor o Cristo del Corcovado es una estatua art déco que representa a Jesús de Nazaret, con los brazos abiertos, mostrando a la ciudad de Río de Janeiro, Brasil.
        La estatua tiene una altura de treinta metros sobre un pedestal de ocho metros. Este monumento fue inaugurado el 12 de octubre de 1931 después de aproximadamente 5 años de construcción.'/>
      <Maravillas 
        nombre='Coliseo Romano'
        pais='Italia'
        imagen='colisseum'
        texto='El nombre original del Coliseo era Amphitheatrum Flavium (Anfiteatro Flavio), y se le dio por haber sido construido en el reinado de los emperadores de la dinastía Flavia, después del reinado del emperador Nerón. Curiosamente, este nombre no era exclusivo del Coliseo, ya que Vespasiano y Tito, constructores del Coliseo, también edificaron un anfiteatro que lleva el mismo nombre en el municipio de Puteoli (nombre moderno Pozzuoli). La denominación Anfiteatro Flavio todavía se utiliza hoy en día, pero la estructura es más conocida popularmente como Coliseo. En la antigüedad también es posible que los romanos se refirieran al Coliseo por el nombre no oficial Amphitheatrum Caesareum, aunque este nombre podría haber sido estrictamente poético.' />
      <Maravillas 
        nombre= 'Petra'
        pais='Jordania'
        imagen='petra-jordania'
        texto='Petra es un importante enclave arqueológico en Jordania y la capital del antiguo reino nabateo, cuyos pobladores la llamaban Raqmu.  El nombre de Petra proviene del griego πέτρα, que significa piedra.El asentamiento de Petra se localiza en un valle angosto, al este del valle de la Aravá que se extiende desde el mar Muerto hasta el Golfo de Aqaba. Los restos más célebres de Petra son sin duda sus construcciones labradas en la misma roca del valle (hemispeos), en particular, los edificios conocidos como el Khazneh (el Tesoro) y el Deir (el Monasterio).'/>
      <Maravillas 
        nombre='Taj Mahal'
        pais='India'
        imagen='taj-mahal'
        texto='El Taj Mahal es un monumento funerario construido entre 1632 y 1648 en la ciudad de Agra, estado de Uttar Pradesh (India), a orillas del río Yamuna, por el emperador musulmán Shah Jahan de la dinastía mogol. El imponente conjunto de edificios se erigió en honor de su esposa favorita, Arjumand Banu Begum —más conocida como Mumtaz Mahal— que murió en el parto de su decimocuarto hijo.'/>
        
          
      </div>
    </div>
  );
}

export default App;
