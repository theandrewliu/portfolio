import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        isAboutMeActive: true,
        isAboutMeClosed: false,
        isAboutMeMax: false,
        AboutMeOnTaskbar: true,
        isContactMeActive: false,
        isContactMeClosed: true,
        isContactMeMax: false,
        ContactMeOnTaskbar: false,
        isOniActive: false,
        isOniClosed: true,
        isOniMax: false,
        OniOnTaskbar: false,
        isProjectsActive: false,
        isProjectsClosed: true,
        isProjectsMax: false,
        ProjectsOnTaskbar: false,
        isSkillsActive: false,
        isSkillsClosed: true,
        isSkillsMax: false,
        SkillsOnTaskbar: false,
        globalZ:10, 
    },
    reducers: {
        changeAboutMeActive: (state, action) => {
            state.isAboutMeActive = action.payload
        },
        changeAboutMeClosed: (state, action) => {
            state.isAboutMeClosed = action.payload
        },
        changeAboutMeMax: (state, action) => {
            state.isAboutMeMax = action.payload
        },
        changeAboutMeOnTaskbar: (state, action) => {
            state.AboutMeOnTaskbar = action.payload
        },
        changeContactMeActive: (state, action) => {
            state.isContactMeActive = action.payload
        },
        changeContactMeClosed: (state, action) => {
            state.isContactMeClosed = action.payload
        },
        changeContactMeMax: (state, action) => {
            state.isContactMeMax = action.payload
        },
        changeContactMeOnTaskbar: (state, action) => {
            state.ContactMeOnTaskbar = action.payload
        },
        changeOniActive: (state, action) => {
            state.isOniActive = action.payload
        },
        changeOniClosed: (state, action) => {
            state.isOniClosed = action.payload
        },
        changeOniMax: (state, action) => {
            state.isOniMax = action.payload
        },
        changeOniOnTaskbar: (state, action) => {
            state.OniOnTaskbar = action.payload
        },
        changeProjectsActive: (state, action) => {
            state.isProjectsActive = action.payload
        },
        changeProjectsClosed: (state, action) => {
            state.isProjectsClosed = action.payload
        },
        changeProjectsMax: (state, action) => {
            state.isProjectsMax = action.payload
        },
        changeProjectsOnTaskbar: (state, action) => {
            state.ProjectsOnTaskbar = action.payload
        },
        changeSkillsActive: (state, action) => {
            state.isSkillsActive = action.payload
        },
        changeSkillsClosed: (state, action) => {
            state.isSkillsClosed = action.payload
        },
        changeSkillsMax: (state, action) => {
            state.isSkillsMax = action.payload
        },
        changeSkillsOnTaskbar: (state, action) => {
            state.SkillsOnTaskbar = action.payload
        },
        changeAllActiveToFalse: (state) => {
            state.isSkillsActive = false
            state.isAboutMeActive = false
            state.isOniActive = false
            state.isProjectsActive = false
            state.isContactMeActive = false
        },
        changeAllToClosed: (state) => {
            state.isAboutMeClosed = true
            state.isContactMeClosed = true
            state.isOniClosed = true
            state.isProjectsClosed = true
            state.isSkillsClosed = true
        },
        incrementGlobalZ: (state) => {
            state.globalZ++
            console.log(state.globalZ)
        }
    },
})

export const { 
    changeAboutMeActive, 
    changeAboutMeClosed,
    changeAboutMeMax,
    changeAboutMeOnTaskbar, 
    changeContactMeActive, 
    changeContactMeClosed,
    changeContactMeMax,
    changeContactMeOnTaskbar,
    changeOniActive,
    changeOniClosed,
    changeOniMax,
    changeOniOnTaskbar,
    changeProjectsActive,
    changeProjectsClosed,
    changeProjectsMax,
    changeProjectsOnTaskbar,
    changeSkillsActive,
    changeSkillsClosed,
    changeSkillsMax,
    changeSkillsOnTaskbar,
    changeAllActiveToFalse,
    changeAllToClosed,
    incrementGlobalZ,
} = homeSlice.actions

export default homeSlice.reducer