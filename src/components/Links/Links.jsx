const Links = props => {
   const copyLink = link => {
      try {
         navigator.clipboard.writeText(link);
         alert('Link copied to clipboard!');
      } catch (e) {
         alert('Error: browser not supported.');
      }
   };

   return (
      <ul className="links">
         {props.links.map(link => {
            return (
               <li key={link.id} data-aos="fade-up" className="links__link">
                  <p>{link.longLink}</p>
                  <div className="link__short-wrapper">
                     <p>{link.shortLink}</p>
                     <button
                        className="btn"
                        onClick={() => copyLink(link.shortLink)}
                     >
                        Copy
                     </button>
                  </div>
               </li>
            );
         })}
      </ul>
   );
};

export default Links;
