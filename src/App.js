import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style.css';
import Home from './components/home';
import IncomeTrip from './components/income-trip';
import AddTrip from './components/add-trip';
import ListTransaction from './components/list-transaction';
import Payment from './components/payment';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './context/userContext';
import { API, setAuthToken } from './config/api';
import Details from './components/details';
import Profile from './components/profile';
import PrivateAdmin from './components/privateAdmin';
import AddCountry from './components/add-country';
import PrivateUser from './components/privateUser';

function App() {
  // const navigate = useNavigate()
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  const [state, dispatch] = useContext(UserContext);

  // useEffect(() => {
  //   // Redirect Auth
  //   if (state.isLogin == false) {
  //     navigate('/auth');
  //   } else {
  //     if (state.user.status == 'admin') {
  //       navigate('/complain-admin');
  //     } else if (state.user.status == 'customer') {
  //       navigate('/');
  //     }
  //   }
  // }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get('/login');
  
      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: 'AUTH_ERROR',
        });
      }
  
      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;
  
      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    checkUser();
  }, []);


  const [count, setCount] = useState(1)
  const [total, setTotal] = useState()
  const [idr, setIdr] = useState(0)
  
  // console.log(total);
  const handlePlusCount = () => {
    setCount(count + 1)
    setTotal(total + idr)
  }

  const handleMinCount = () => {
    if (count > 1) {
      setCount(count - 1)
      setTotal(total - idr)
      }
  }
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details 
          count={count}
          setCount={setCount}
          total={total}
          setTotal={setTotal}
          idr={idr}
          setIdr={setIdr} 
          handleMin={handleMinCount}
          handlePlus={handlePlusCount}
          />} />
        <Route element={<PrivateAdmin/>}>
          <Route path="/income-trip" element={<IncomeTrip />} />
          <Route path="/add-country" element={<AddCountry />} />
          <Route path="/add-trip" element={<AddTrip />} />
          <Route path="/list-transaction" element={<ListTransaction />} />
        </Route>

        <Route element={<PrivateUser/>}>
          <Route path="/payment/:id" element={<Payment count={count}/>} />
          <Route path="/profile" element={<Profile count={count} />} />
        </Route>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
