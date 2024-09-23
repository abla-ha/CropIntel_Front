import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    diseaseClass: null,
    confidence: null,
};

const diseaseSlice = createSlice({
    name: 'disease',
    initialState,
    reducers: {
        setDiseaseData: (state, action) => {
            state.diseaseClass = action.payload.diseaseClass;
            state.confidence = action.payload.confidence;
        },
    },
});

export const { setDiseaseData } = diseaseSlice.actions;

export default diseaseSlice.reducer;
