import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../components/Home/Home.js';
import Menu from '../components/Menu/Menu.js';
import Contact from '../components/Contact/Contact.js';
import Admin from '../components/Admin/Admin.js';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/admin' element={<Admin/>}/>
            </Routes>
        </BrowserRouter>
    )
}
