import Form from 'react-bootstrap/Form';

export function Currency_To_Convert_Form() {
    return (
      <div>
        <Form.Group controlId='currency_to_convert'>
            <Form.Label>Currency to convert:</Form.Label>
            <div className='flex'>
                <input type='number'/>
                <Form.Select id='currency_to_convert' size="lg">
                  <option value='USD'>US dollar (USD)</option>
                  <option value='EUR'>Euro (EUR)</option>
                  <option value='JPY'>Japanese yen (JPY)</option>
                  <option value='GBP'>Pound sterling (GBP)</option>
                  <option value='AUD'>Australian dollar (AUD)</option>
                  <option value='CAD'>Canadian dollar (CAD)</option>
                  <option value='CHF'>Swiss franc (CHF)</option>
                  <option value='CNH'>Chinese renminbi (CNH)</option>
                  <option value='HKD'>Hong Kong dollar (HKD)</option>
                  <option value='NZD'>New Zealand dollar (NZD)</option>
                </Form.Select>
            </div>
        </Form.Group>
      </div>
    );
}