import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        //---------About Me-------------
        isAboutMeActive: true,
        isAboutMeClosed: false,
        isAboutMeMax: false,
        AboutMeOnTaskbar: true,
        AboutMeOrder: 10,
        AboutMeZ: 10,
        //-----------Contact Me------------
        isContactMeActive: false,
        isContactMeClosed: true,
        isContactMeMax: false,
        ContactMeOnTaskbar: false,
        ContactMeOrder: 10,
        ContactMeZ: 10,
        //---------Oni--------------------
        isOniActive: false,
        isOniClosed: true,
        isOniMax: false,
        OniOnTaskbar: false,
        OniOrder: 10,
        OniZ: 10,
        //----------Projects---------------
        isProjectsActive: false,
        isProjectsClosed: true,
        isProjectsMax: false,
        ProjectsOnTaskbar: false,
        ProjectsOrder: 0,
        ProjectsZ:0,
        //----------Skills---------------------
        isSkillsActive: false,
        isSkillsClosed: true,
        isSkillsMax: false,
        SkillsOnTaskbar: false,
        SkillsOrder:10,
        SkillsZ:10,
        //---------Z index and Order--------------
        globalZ:10,
        //----------Start Button------------------
        isStartActive: false,
        //----------Screen Size----------------
        screenSize: { width:0, height:0 },
        //----------------Fetch Stuff-------------
        isFetchClosed: true,
        isFetchActive: false,
        isFetchMax: false,
        FetchZ: 10,
        FetchOrder: 10,
        FetchOnTaskbar: false,
        //-----------Individual Projects-----------
        ////--------CommonCrave----------
        isCommonCraveClosed: true,
        isCommonCraveActive: false,
        isCommonCraveMax: false,
        CommonCraveZ: 10,
        CommonCraveOrder: 10,
        CommonCraveOnTaskbar: false,
        ////---------OverRated------------
        isOverRatedClosed: true,
        isOverRatedActive: false,
        isOverRatedMax: false,
        OverRatedZ: 10,
        OverRatedOrder: 10,
        OverRatedOnTaskbar: false,
        ////---------Portfolio------------
        isPortfolioClosed: true,
        isPortfolioActive: false,
        isPortfolioMax: false,
        PortfolioZ: 10,
        PortfolioOrder: 10,
        PortfolioOnTaskbar: false,
    },
    reducers: {
        //--------------About Me--------------
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
        //---------------Contact Me----------------
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
        //--------------Oni----------------
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
        //------------Projects---------------
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
        //-------------Skills----------------
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
        //----------------Common Crave Project----------------
        changeCommonCraveActive: (state, action) => {
            state.isCommonCraveActive = action.payload
        },
        changeCommonCraveClosed: (state, action) => {
            state.isCommonCraveClosed = action.payload
        },
        changeCommonCraveMax: (state, action) => {
            state.isCommonCraveMax = action.payload
        },
        changeCommonCraveOnTaskbar: (state, action) => {
            state.CommonCraveOnTaskbar = action.payload
        },
        setCommonCraveOrder:(state) =>{
            state.CommonCraveOrder = state.globalZ
        },
        setCommonCraveZ:(state) => {
            state.CommonCraveZ = state.globalZ
        },
        //---------------------OverRated Project-----------
        changeOverRatedActive: (state, action) => {
            state.isOverRatedActive = action.payload
        },
        changeOverRatedClosed: (state, action) => {
            state.isOverRatedClosed = action.payload
        },
        changeOverRatedMax: (state, action) => {
            state.isOverRatedMax = action.payload
        },
        changeOverRatedOnTaskbar: (state, action) => {
            state.OverRatedOnTaskbar = action.payload
        },
        setOverRatedOrder:(state) =>{
            state.OverRatedOrder = state.globalZ
        },
        setOverRatedZ:(state) => {
            state.OverRatedZ = state.globalZ
        },
        //---------------------Portfolio Project-----------
        changePortfolioActive: (state, action) => {
            state.isPortfolioActive = action.payload
        },
        changePortfolioClosed: (state, action) => {
            state.isPortfolioClosed = action.payload
        },
        changePortfolioMax: (state, action) => {
            state.isPortfolioMax = action.payload
        },
        changePortfolioOnTaskbar: (state, action) => {
            state.PortfolioOnTaskbar = action.payload
        },
        setPortfolioOrder:(state) =>{
            state.PortfolioOrder = state.globalZ
        },
        setPortfolioZ:(state) => {
            state.PortfolioZ = state.globalZ
        },
        //---------Universal------------
        changeAllActiveToFalse: (state) => {
            state.isSkillsActive = false
            state.isAboutMeActive = false
            state.isOniActive = false
            state.isProjectsActive = false
            state.isContactMeActive = false
            state.isStartActive = false
            state.isCommonCraveActive = false
            state.isOverRatedActive = false
            state.isPortfolioActive = false
            //----------------Fetch Stuff------------------
            state.isFetchActive = false
        },
        changeAllToClosed: (state) => {
            state.isAboutMeClosed = true
            state.isContactMeClosed = true
            state.isOniClosed = true
            state.isProjectsClosed = true
            state.isSkillsClosed = true
            state.isCommonCraveClosed = true
            state.isOverRatedClosed = true
            state.isPortfolioClosed = true
            //-----------------Fetch Stuff--------------------
            state.isFetchClosed = true
        },
        incrementGlobalZ: (state) => {
            state.globalZ++
        },
        changeStartActive:(state, action) => {
            state.isStartActive = action.payload
        },
        setScreenSize: (state, action) => {
            state.screenSize = action.payload
        },
        //---------------------------------------------------------------
        //----------------Fetch Stuff-----------------------
        changeFetchActive: (state, action) => {
            state.isFetchActive = action.payload
        },
        changeFetchClosed: (state, action) => {
            state.isFetchClosed = action.payload
        },
        changeFetchOnTaskbar: (state, action) => {
            state.FetchOnTaskbar = action.payload
        },
        changeFetchMax: (state, action) => {
            state.isFetchMax = action.payload
        },
        setFetchZ: (state) => {
            state.FetchZ = state.globalZ
        },
        setFetchOrder: (state) => {
            state.FetchOrder = state.globalZ
        }
    },
})

export const { 
    //--------------About Me--------
    changeAboutMeActive, 
    changeAboutMeClosed,
    changeAboutMeMax,
    changeAboutMeOnTaskbar,
    setAboutMeOrder,
    setAboutMeZ,
    //-------------Contact Me----------- 
    changeContactMeActive, 
    changeContactMeClosed,
    changeContactMeMax,
    changeContactMeOnTaskbar,
    setContactMeOrder,
    setContactMeZ,
    //-------------Oni---------------
    changeOniActive,
    changeOniClosed,
    changeOniMax,
    changeOniOnTaskbar,
    setOniOrder,
    setOniZ,
    //-----------Projects-----------
    changeProjectsActive,
    changeProjectsClosed,
    changeProjectsMax,
    changeProjectsOnTaskbar,
    setProjectsOrder,
    setProjectsZ,
    //---------Skills--------------
    changeSkillsActive,
    changeSkillsClosed,
    changeSkillsMax,
    changeSkillsOnTaskbar,
    setSkillsOrder,
    setSkillsZ,
    //--------Common Crave Project-------
    changeCommonCraveActive,
    changeCommonCraveClosed,
    changeCommonCraveMax,
    changeCommonCraveOnTaskbar,
    setCommonCraveOrder,
    setCommonCraveZ,
    //--------OverRated Project--------
    changeOverRatedActive,
    changeOverRatedClosed,
    changeOverRatedMax,
    changeOverRatedOnTaskbar,
    setOverRatedOrder,
    setOverRatedZ,
    //----------Portfolio Project--------
    changePortfolioActive,
    changePortfolioClosed,
    changePortfolioMax,
    changePortfolioOnTaskbar,
    setPortfolioOrder,
    setPortfolioZ,
    //----------Universal------------
    changeAllActiveToFalse,
    changeAllToClosed,
    incrementGlobalZ,
    changeStartActive,
    setScreenSize,
    //---------------------Fetch Stuff----------------
    changeFetchActive,
    changeFetchClosed,
    changeFetchMax,
    changeFetchOnTaskbar,
    setFetchZ,
    setFetchOrder,
} = homeSlice.actions

export default homeSlice.reducer