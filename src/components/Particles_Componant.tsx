import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import type { Container, Engine } from "tsparticles-engine";
import {useCallback} from 'react'
import dollar_bill from '../assets/dollar_bill.png'

export const ParticlesComponent: React.FC = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
      await loadFull(engine)
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
      await console.log(container);
    }, []);

    return (

        <div className='particles_container'>
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                "fullScreen": { "enable": true, "zIndex": -1}, 
                "background":{ "color":"#000" },
                "particles": {
                  "number": {
                    "value": 40,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": "#ffffff"
                  },
                  "shape": {
                    "type": "image",
                    "stroke": {
                      "width": 0,
                      "color": "#ffffff"
                    },
                    "polygon": {
                      "nb_sides": 6
                    },
                    "image": {
                      "src": dollar_bill,
                      "width": 500,
                      "height": 500
                    }
                  },
                  "opacity": {
                    "value": 0.6,
                    "random": false,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 20,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#1a652a",
                    "opacity": 1,
                    "width": 2
                  },
                  "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": true,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "window",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "grab"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "repulse"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 400,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 600,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }}
              />
        </div>
    )
}

