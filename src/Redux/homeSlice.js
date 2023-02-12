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
        isSkillsActive: false,
        isSkillsClosed: true, 
    },
    reducers: {
        changeAboutMeActive: (state, action) => {
            state.isAboutMeActive = action.payload
        },
        changeAboutMeClosed: (state, action) => {
            state.isAboutMeClosed = action.payload
        },
        changeContactMeActive: (state, action) => {
            state.isContactMeActive = action.payload
        },
        changeContactMeClosed: (state, action) => {
            state.isContactMeClosed = action.payload
        },
        changeOniActive: (state, action) => {
            state.isOniActive = action.payload
        },
        changeOniClosed: (state, action) => {
            state.isOniClosed = action.payload
        },
        changeProjectsActive: (state, action) => {
            state.isProjectsActive = action.payload
        },
        changeProjectsClosed: (state, action) => {
            state.isProjectsClosed = action.payload
        },
        changeSkillsActive: (state, action) => {
            state.isSkillsActive = action.payload
        },
        changeSkillsClosed: (state, action) => {
            state.isSkillsClosed = action.payload
        },
    },
})

export const { 
    changeAboutMeActive, 
    changeAboutMeClosed, 
    changeContactMeActive, 
    changeContactMeClosed,
    changeOniActive,
    changeOniClosed,
    changeProjectsActive,
    changeProjectsClosed,
    changeSkillsActive,
    changeSkillsClosed,
} = homeSlice.actions

export default homeSlice.reducer