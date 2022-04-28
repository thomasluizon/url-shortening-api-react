const Links = props => {
   return (
      <ul className="links">
         <li className="links__link">
            <p>https://google.com</p>
            <div className="link__short-wrapper">
               <p>bit.ly/3Hbdgew</p>
               <button className="btn">Copy</button>
            </div>
         </li>
      </ul>
   );
};

export default Links;
