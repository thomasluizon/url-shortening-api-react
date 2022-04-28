const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <div className="header__nav-wrapper">
               <img src="src/assets/imgs/logo.svg" alt="Shortly logo" />
               <nav className="header__nav">
                  <ul>
                     <li>
                        <a href="#">Features</a>
                     </li>
                     <li>
                        <a href="#">Pricing</a>
                     </li>
                     <li>
                        <a href="#">Resources</a>
                     </li>
                  </ul>
               </nav>
            </div>
            <div className="header__login-wrapper">
               <a href="#">Login</a>
               <button className="btn" href="#">
                  Sign Up
               </button>
            </div>
         </div>
      </header>
   );
};

export default Header;
