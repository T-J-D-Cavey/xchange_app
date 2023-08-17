import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const get_conversions = createAsyncThunk(
    'currencies, get_conversions', 
    async (url: string) => {
        const response = await fetch(url);
        const data = await response.json();
        // need a way to access the specific currency string:
        const rate = data.data.currency;
        return rate
    }
)

const currencies_slice = createSlice({
    name: 'currencies',
    initialState: {
        base_amount: '',
        target_amount: '',
        // user_target_amount???
        base_currency: 'USD',
        target_currency: 'EUR',
        conversion_rate: 1,
        status: 'null'
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
            })
            .addCase(get_conversions.rejected, (state, action) => {
                state.status = `Failed to load. ${action.payload}.`;
            })
    }
})
