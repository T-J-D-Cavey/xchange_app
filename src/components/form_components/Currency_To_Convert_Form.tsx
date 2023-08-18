import Form from 'react-bootstrap/Form';

export const Currency_To_Convert_Form = () => {

    function changeAmountHandler(e: React.ChangeEvent<HTMLInputElement>) {
      e.preventDefault();
      const input = e.target.value;
      if(+input < 0) {
        alert('Please enter a positive number to be converted.')
      } else {
      }
    }

    function changeCurrencyHandler(e: React.ChangeEvent<HTMLSelectElement>) {
      e.preventDefault();
      const input = e.target.value;
    }

    return (
      <div>
        <Form.Group controlId='currency_to_convert'>
            <Form.Label>Currency to convert:</Form.Label>
            <div className='flex'>
                <input type='number' value={convert_amount} onChange={changeAmountHandler}/>
                <Form.Select id='currency_to_convert' size="lg" onChange={changeCurrencyHandler}>
                  <option value='USD'>US dollar (USD)</option>
                  <option value='JPY'>Japanese yen (JPY)</option>
                  <option value='GBP'>Pound sterling (GBP)</option>
                  <option value='AUD'>Australian dollar (AUD)</option>
                  <option value='CAD'>Canadian dollar (CAD)</option>
                  <option value='CHF'>Swiss franc (CHF)</option>
                  <option value='CNH'>Chinese renminbi (CNH)</option>
                  <option value='HKD'>Hong Kong dollar (HKD)</option>
                  <option value='NZD'>New Zealand dollar (NZD)</option>
                  <option value='EUR'>Euro (EUR)</option>
                </Form.Select>
            </div>
        </Form.Group>
      </div>
    );
}