import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Home from './Home';
import Cart from './components/Cart/Cart';


function AppRoutes({ onAddToCart, totalItems, cart }){
    return(
        <BrowserRouter>
          <Routes>
            <Route index element={<Home onAddToCart={onAddToCart} totalItems={totalItems} />} />
            <Route path="cart" element={<Cart cart={cart} totalItems={totalItems} />} />
                {/* <Route path=":teamId" element={<Team />} />
                <Route path="new" element={<NewTeamForm />} />
                <Route index element={<LeagueStandings />} /> */}
          </Routes>
        </BrowserRouter>
      );
}

export default AppRoutes