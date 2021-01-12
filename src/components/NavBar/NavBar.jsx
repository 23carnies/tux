import React from 'react';
import * as N from '../TuxComponents/NavComponents';
import * as U from '../TuxComponents/UniversalComponents';
 
const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {!user ? (
        <N.Nav>
        {/* View Not Logged In */}

          {/* Color Bar */}
          <U.ColorBlock tuxBlue></U.ColorBlock>
          <U.ColorBlock tuxYellow></U.ColorBlock>
          <U.ColorBlock tuxWhite></U.ColorBlock>
          <U.ColorBlock tuxGrey></U.ColorBlock>
          <U.ColorBlock tuxBlack></U.ColorBlock>
          <U.ColorBlock tuxRed></U.ColorBlock>

          <N.NavRow2>
          {/* Logo */}
          <N.NavLink href="/">
            <N.Logo src="/images/logo.png" alt="Tux Logo"></N.Logo>
          </N.NavLink>
          <N.NavLink right href="/login">
            Log In
          </N.NavLink>
          <N.NavLink  href="/signup">
            Sign Up
          </N.NavLink>
          <N.NavLink  href="/manager-dashboard">
            Manager
          </N.NavLink>
          <N.NavLink  href="/activity/heuristics">
            Heuristics
          </N.NavLink>
        </N.NavRow2>
        </N.Nav>
        
      ) : user.userPermissions === 0 ?
        <N.Nav>
          {/* Color Bar */}
          <U.ColorBlock tuxBlue></U.ColorBlock>
          <U.ColorBlock tuxYellow></U.ColorBlock>
          <U.ColorBlock tuxWhite></U.ColorBlock>
          <U.ColorBlock tuxGrey></U.ColorBlock>
          <U.ColorBlock tuxBlack></U.ColorBlock>
          <U.ColorBlock tuxRed></U.ColorBlock>

        <N.NavRow2>
        {/* Logo */}
        <N.NavLink href="/">

        <N.Logo src="/images/logo.png" alt="Tux Logo"></N.Logo>
        </N.NavLink>

          <N.NavLink  href="/activities">
            Activities
          </N.NavLink>
          <N.NavLink right href=" ">
            {user.name}
          </N.NavLink>
          <N.NavLink  href=" " onClick={handleLogout}>
            LogOut
          </N.NavLink>

        </N.NavRow2>
        </N.Nav>
      : user.userPermissions === 100 ? (
        <N.Nav>
          {/* Color Bar */}
          <U.ColorBlock tuxBlue></U.ColorBlock>
          <U.ColorBlock tuxYellow></U.ColorBlock>
          <U.ColorBlock tuxWhite></U.ColorBlock>
          <U.ColorBlock tuxGrey></U.ColorBlock>
          <U.ColorBlock tuxBlack></U.ColorBlock>
          <U.ColorBlock tuxRed></U.ColorBlock>

        <N.NavRow2>
        {/* Logo */}
        <N.NavLink href="/">
          <N.Logo src="/images/logo.png" alt="Tux Logo"></N.Logo>
        </N.NavLink>
          <N.NavLink right href=" ">
            {user.name}
          </N.NavLink>
          <N.NavLink left href="/activities/create ">
            Create Activity
          </N.NavLink>
          <N.NavLink href="/activities">
            Activities
          </N.NavLink>
          <N.NavLink farRight href=" " onClick={handleLogout}>
            Log Out
          </N.NavLink>
        </N.NavRow2>
        </N.Nav>
      )
      :
      <p>You need a navbar</p>}
    </>
  );
};

export default NavBar;