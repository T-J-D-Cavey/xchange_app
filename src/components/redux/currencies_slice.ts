import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export interface store_state_interface {
    currencies: {
        base_amount: number;
        target_amount: number;
        user_target_amount_boolean: boolean;
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
        const firstKey = Object.keys(data.data)[0];
        const rate = data.data[firstKey];
        console.log('Fetch request sent');
        return rate
    }
    )
    
    const currencies_slice = createSlice({
        name: 'currencies',
        initialState: {
            base_amount: 0,
            target_amount: 0,
            user_target_amount_boolean: false,
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
        change_user_target_amount_boolean: (state, action) => {
            state.user_target_amount_boolean = action.payload;
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

export const user_target_amount_boolean_selector = (state: store_state_interface) => {
    return state.currencies.user_target_amount_boolean;
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

export const {change_base_amount, change_target_amount, change_user_target_amount_boolean, change_base_currency, change_target_currency, } = currencies_slice.actions

export const currencies_reducer = currencies_slice.reducer;
