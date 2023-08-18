import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export interface store_state_interface {
    currencies: {
        base_amount: number;
        target_amount: number;
        // user_target_amount???
        base_currency: string;
        target_currency: string;
        conversion_rate: number;
        status: string;
    }
}

export const get_conversions = createAsyncThunk(
    'currencies, get_conversions', 
    async (url: string) => {
        const response = await fetch(url);
        const data = await response.json();
        // need a way to access the specific currency string:
        console.log(data);
        const rate = data.data.currency;
        return rate
    }
)

const currencies_slice = createSlice({
    name: 'currencies',
    initialState: {
        base_amount: 1,
        target_amount: 1,
        // user_target_amount???
        base_currency: 'USD',
        target_currency: 'EUR',
        conversion_rate: 1,
        status: 'New page load'
    },
    reducers: {
        change_base_amount: (state, action) => {
            state.base_amount = action.payload;
        },
        change_target_amount: (state, action) => {
            state.target_amount = action.payload;
        },
        change_base_currency: (state, action) => {
            state.base_currency = action.payload;
        },
        change_target_currency: (state, action) => {
            state.target_currency = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(get_conversions.pending, (state) => {
                state.status = 'Loading...';
            })
            .addCase(get_conversions.fulfilled, (state, action) => {
                state.conversion_rate = action.payload;
                state.status = 'Success';
            })
            .addCase(get_conversions.rejected, (state, action) => {
                state.status = `Failed to load. ${action.payload}.`;
            })
    }
})

export const base_amount_selector = (state: store_state_interface) => {
    return state.currencies.base_amount;
}

export const target_amount_selector = (state: store_state_interface) => {
    return state.currencies.target_amount;
}

export const base_currency_selector = (state: store_state_interface) => {
    return state.currencies.base_currency;
}

export const target_currency_selector = (state: store_state_interface) => {
    return state.currencies.target_currency;
}

export const conversion_rate_selector = (state: store_state_interface) => {
    return state.currencies.conversion_rate;
}

export const status_selector = (state: store_state_interface) => {
    return state.currencies.status;
}

// action creators:
export const {change_base_amount, change_target_amount, change_base_currency, change_target_currency, } = currencies_slice.actions

export const currencies_reducer = currencies_slice.reducer;



// async function fetch_conversion() {
//     try {
//       const response = await fetch(`${API_BASE_URL}apikey=${API_KEY}&base_currency=${convert_currency}&currencies=${target_currency}`);
//       const data = await response.json();
//       console.log(data);
//       const rate: number = data.data[target_currency];
//       console.log(rate)
//       set_conversion_rate(rate);
//     } catch (error) {
//       alert(`Error getting currency conversion data: ${error}`);
//     }
// }

// function calculate_amount() {
//   console.log('convert_amount =', convert_amount, 'conversion_rate =', conversion_rate)
//   if(user_input_target_amount) {
//     set_convert_amount(user_input_target_amount / conversion_rate);
//     set_target_amount(user_input_target_amount);
//   } else {
//     set_target_amount(convert_amount * conversion_rate);
//   }
// } 