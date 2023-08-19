import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import {useCallback} from 'react'

export const ParticlesComponent: React.FC = () => {

    const particlesLoaded = useCallback(async container => {
      const returnedContainer = await container;
    }, []);

    const particlesInit = useCallback(async engine => {
        await loadFull(engine)
    }, []);

    return (

        <div className='particles_container'>
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{ "fullScreen": true, "background":{ "image":"linear-gradient(0deg, #5D3FD3 0%, #B2EBF2 100%)" }, "particles":{ "number":{ "value":50, "density":{ "enable":true, "value_area":600 } }, "color":{ "value":"#ffffff" }, "shape": { "type": "circle", "stroke":{ "width":0, "color":"#000000" }, "polygon":{ "nb_sides":5 } }, "opacity":{ "value":0.25, "random":true, "anim":{ "enable":false, "speed":4, "opacity_min":0.1, "sync":false } }, "size":{ "value":29, "random":true, "anim":{ "enable":false, "speed":4, "size_min":0.1, "sync":false } }, "line_linked":{ "enable":false, "distance":300, "color":"#ffffff", "opacity":0, "width":0 }, "move":{ "enable":true, "speed":0.9, "direction":"top", "straight":true, "out_mode":"out", "bounce":false, "attract":{ "enable":false, "rotateX":600, "rotateY":1200 } } }, "interactivity":{ "detect_on":"canvas", "events":{ "onhover":{ "enable":true, "mode":"attract" }, "onclick":{ "enable":true, "mode":"repulse" }, "resize":true }, "modes":{ "grab":{ "distance":800, "line_linked":{ "opacity":1 } }, "bubble":{ "distance":790, "size":79, "duration":2, "opacity":0.8, "speed":3 }, "repulse":{ "distance":400, "duration":0.4 }, "push":{ "particles_nb":4 }, "remove":{ "particles_nb":2 } } }, "retina_detect":true}}
              />
        </div>
    )
}