import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        isAboutMeActive: true,
        isAboutMeClosed: false,
        isAboutMeMax: false,
        AboutMeOnTaskbar: true,
        AboutMeOrder: 10,
        AboutMeZ: 10,
        isContactMeActive: false,
        isContactMeClosed: true,
        isContactMeMax: false,
        ContactMeOnTaskbar: false,
        ContactMeOrder: 10,
        ContactMeZ: 10,
        isOniActive: false,
        isOniClosed: true,
        isOniMax: false,
        OniOnTaskbar: false,
        OniOrder: 10,
        OniZ: 10,
        isProjectsActive: false,
        isProjectsClosed: true,
        isProjectsMax: false,
        ProjectsOnTaskbar: false,
        ProjectsOrder: 0,
        ProjectsZ:0,
        isSkillsActive: false,
        isSkillsClosed: true,
        isSkillsMax: false,
        SkillsOnTaskbar: false,
        SkillsOrder:10,
        SkillsZ:10,
        globalZ:10,
        isStartActive: false, 
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
        setAboutMeOrder:(state)=>{
            state.AboutMeOrder = state.globalZ
        },
        setAboutMeZ:(state)=>{
            state.AboutMeZ = state.globalZ
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
        setContactMeOrder:(state) => {
            state.ContactMeOrder = state.globalZ
        },
        setContactMeZ:(state) => {
            state.ContactMeZ = state.globalZ
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
        setOniOrder: (state) =>{
            state.OniOrder = state.globalZ
        },
        setOniZ: (state) =>{
            state.OniZ = state.globalZ
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
        setProjectsOrder: (state) =>{
            state.ProjectsOrder = state.globalZ
        },
        setProjectsZ:(state) =>{
            state.ProjectsZ = state.globalZ
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
        setSkillsOrder:(state) =>{
            state.SkillsOrder = state.globalZ
        },
        setSkillsZ:(state) => {
            state.SkillsZ = state.globalZ
        },

        changeAllActiveToFalse: (state) => {
            state.isSkillsActive = false
            state.isAboutMeActive = false
            state.isOniActive = false
            state.isProjectsActive = false
            state.isContactMeActive = false
            state.isStartActive = false
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
        },
        changeStartActive:(state, action) => {
            state.isStartActive = action.payload
        }
    },
})

export const { 
    changeAboutMeActive, 
    changeAboutMeClosed,
    changeAboutMeMax,
    changeAboutMeOnTaskbar,
    setAboutMeOrder,
    setAboutMeZ, 
    changeContactMeActive, 
    changeContactMeClosed,
    changeContactMeMax,
    changeContactMeOnTaskbar,
    setContactMeOrder,
    setContactMeZ,
    changeOniActive,
    changeOniClosed,
    changeOniMax,
    changeOniOnTaskbar,
    setOniOrder,
    setOniZ,
    changeProjectsActive,
    changeProjectsClosed,
    changeProjectsMax,
    changeProjectsOnTaskbar,
    setProjectsOrder,
    setProjectsZ,
    changeSkillsActive,
    changeSkillsClosed,
    changeSkillsMax,
    changeSkillsOnTaskbar,
    setSkillsOrder,
    setSkillsZ,
    changeAllActiveToFalse,
    changeAllToClosed,
    incrementGlobalZ,
    changeStartActive,
} = homeSlice.actions

export default homeSlice.reducer