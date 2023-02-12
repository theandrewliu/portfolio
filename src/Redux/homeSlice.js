import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        isAboutMeActive: true,
        isAboutMeClosed: false,
        isContactMeActive: false,
        isContactMeClosed: true,
        isOniActive: false,
        isOniClosed: true,
        isProjectsActive: false,
        isProjectsClosed: true, 
    },
    reducers: {
        changeAboutMeActive: (state, action) => {
            state.isAboutMeActive = action.payload
        },
        changeAboutMeClosed: (state, action) => {
            state.isAboutMeClosed = action.payload
        }
    },
})

export const { changeAboutMeActive, changeAboutMeClosed } = homeSlice.actions

export default homeSlice.reducer