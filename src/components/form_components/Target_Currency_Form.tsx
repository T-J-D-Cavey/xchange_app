import Form from 'react-bootstrap/Form';
import { Image_Store } from '../../assets/Image_Store';

export function Target_Currency_Form () {
    return (
        <div>
            <Form.Group controlId='target_currency'>
                <Form.Label>Target currency:</Form.Label>
                <div className='flex'>
                    {/* we actually want to key into Image_Store dynamically based on the select state */}
                    <img src={Image_Store.USD}></img>
                    <input type='number'/>
                    <Form.Select id='target_currency' size="lg">
                      <option value='EUR'>Euro (EUR)</option>
                      <option value='JPY'>Japanese yen (JPY)</option>
                      <option value='GBP'>Pound sterling (GBP)</option>
                      <option value='AUD'>Australian dollar (AUD)</option>
                      <option value='CAD'>Canadian dollar (CAD)</option>
                      <option value='CHF'>Swiss franc (CHF)</option>
                      <option value='CNH'>Chinese renminbi (CNH)</option>
                      <option value='HKD'>Hong Kong dollar (HKD)</option>
                      <option value='NZD'>New Zealand dollar (NZD)</option>
                      <option value='USD'>US dollar (USD)</option>
                    </Form.Select>
                </div>
            </Form.Group>
        </div>
    )
}