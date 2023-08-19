import { Form_Container } from './components/Form_Container';
import { ParticlesComponent } from './components/Particles_Componant';

const App = () => {

  return (
    <div className='app_container'>
      <h1>xchange</h1>
      <div className='form_container_wrapper'>
        <Form_Container />
      </div>
      <ParticlesComponent />
    </div >
  )
}

export default App
