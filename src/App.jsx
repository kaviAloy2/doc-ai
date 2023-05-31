import { BrowserRouter, HashRouter, Route, Routes, } from 'react-router-dom'
import './App.css'
import Login from './components/Login/Login'
import Account from './components/admin/Account/Account'
import Dashboard from './components/admin/Dashboard'
import Navbar from './components/doctor/01_Navbar/Navbar'


import Register from './components/Register/Register'
import PendingReq from './components/admin/Account/PendingReq'
import FormPage from './components/admin/Form/Form'
import ResearchForm from './components/admin/Form/ResearchForm'
import UserLogin from './components/Login/UserLogin'
import UserDetails from './components/Register/UserDetails'
import UpdateForm from './components/admin/Account/Form/UpdateForm'
import Otp_Login from './components/Login/Otp_Login'

import { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import About from './components/doctor/06_About_Us/About'
import Main from './components/doctor/00_Main/Main'
import Research from './components/doctor/03_Research/Research'
import Home from './components/doctor/02_Home/Home'
import Publication from './components/doctor/04_Publication/Publication'
import Contact from './components/doctor/07_Contact/Contact'

import {
    RingLoader,
    PropagateLoader,
    ScaleLoader,
    RiseLoader,
    SyncLoader,
    PuffLoader,
    HashLoader
} from "react-spinners/";
import NotFound from './components/Global/NotFound'
import BadRequest from './components/Global/BadRequest'
import Pubview from './components/doctor/04_Publication/Pubview'
import { useDispatch } from "react-redux";
import { isUserLogInReducers } from "./App/Slice/userSlice.js";



function App() {
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])
    const navbarList = ["Research", "Publication", "Projects", "About-Us", "Contact-Us"]
    const dispatch = useDispatch()
    const userId = sessionStorage.getItem("key")
    if (userId == null) {
        console.log("not loged In")
    } else {
        console.log("loged in")
        dispatch(isUserLogInReducers())
    }
    return (<>
        <BrowserRouter>
            <div>
                <Navbar />
            </div>
            {loading ?
                <div style={style}>
                    <iframe src="https://embed.lottiefiles.com/animation/138605" style={{mixBlendMode:'color-burn'}}></iframe>
                    {/* <HashLoader
                            color={'#FFFFDB'}
                            loading={loading}
                            size={150}
                            cssOverride={override}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            speedMultiplier={'0.69'}
                        /> */}
                    {/* <div class="loading">
                        <svg width="200px" height="200px">
                            <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
                            <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
                        </svg>
                    </div> */}
                    {/* <div class="loadingcontainer">
                        <div class="top">
                            <div class="square">
                                <div class="square">
                                    <div class="square">
                                        <div class="square">
                                            <div class="square"><div class="square">
                                            </div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="square">
                                <div class="square">
                                    <div class="square">
                                        <div class="square">
                                            <div class="square"><div class="square">
                                            </div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="left">
                            <div class="square">
                                <div class="square">
                                    <div class="square">
                                        <div class="square">
                                            <div class="square"><div class="square">
                                            </div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="square">
                                <div class="square">
                                    <div class="square">
                                        <div class="square">
                                            <div class="square"><div class="square">
                                            </div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div class="spinner"></div> */}
                </div>
                :
                <Routes>

                    {/* Testing path */}

                    <Route exact path='/UserLogin' element={<UserLogin />} />
                    <Route exact path='/UserDetails' element={<UserDetails />} />
                    <Route exact path='/otplogin' element={<Otp_Login />} />
                    <Route exact path='/404' element={<NotFound />} />
                    <Route exact path='/Pubview' element={<Pubview />} />
                    {/* Testing path ends */}
                    {/* <Route exact path='/form' element={<FormPage />}/> */}

                    {/*Home Page Sibngle routes*/}
                    <Route exact path="/" element={<Main />} />
                    {/* <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/Research" element={<Research/>}/>
                        <Route exact path='/Publication' element={<Publication/>}/>
                        <Route exact path='/Contact-Us' element={<Contact/>}/> */}
                    {/* <Route exact path='/About-Us' element={<About />} /> */}

                    {/* Testing path */}
                    <Route exact path='/PendingReq' element={<PendingReq />} />
                    <Route exact path='/UserLogin' element={<UserLogin />} />
                    <Route exact path='/UserDetails' element={<UserDetails />} />
                    <Route exact path='/otplogin' element={<Otp_Login />} />
                    {/* Testing path ends */}
                    <Route exact path='/form' element={<FormPage />} />

                    {/*Admin Route*/}
                    <Route exact path='/Dashboard/*' element={<Dashboard />} />
                    <Route exact path='/Account' element={<Account />} />
                    <Route exact path='/Dashboard/Form' element={<FormPage />} />
                    <Route exact path='/Dashboard/researchForm' element={<ResearchForm />} />

                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/register' element={<Register />} />


                    <Route exact path='/Account/*' element={<Account />} />
                    <Route exact path='/Account/PendingReq' element={<PendingReq />} />


                    {/* <Route exact path='/publisher'  element={<publisher/>}/>
        <Route exact path='/researcher'  element={<researcher/>}/> */}


                    {/* <Route exact path='/' */}
                </Routes>}

        </BrowserRouter>
    </>
    )
}

export default App
