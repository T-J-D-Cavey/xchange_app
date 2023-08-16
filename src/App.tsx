// this will eventually be imported and rendered by another currency_container component that includes all the text input logic:
import { Currency_Conversion_Container } from './components/Currency_Conversion_Container';

function App() {

  return (
    <>
      <Currency_Conversion_Container />
    </>
  )
}
// Will want a homepage with a 'current converter' button AND others such as 'Markets' linking out
// Will need react bootstrap form (select), and spinners for when API call is made

export default App
