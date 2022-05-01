import { useRef } from 'react';

const Links = props => {
   const button = useRef([]);

   const copyLink = link => {
      let el = button.current.filter(e => e.key == link.longLink)[0];
      let mutateEl = el.el;
      mutateEl.innerText = 'Copied!';
      mutateEl.style.backgroundColor = '#3b3054';
      mutateEl.disabled = true;

      setTimeout(() => {
         mutateEl.innerText = 'Copy';
         mutateEl.style.backgroundColor = null;
         mutateEl.disabled = false;
      }, 1000);

      try {
         navigator.clipboard.writeText(link.shortLink);
      } catch (e) {
         alert('Error: browser not supported.');
      }
   };

   return (
      <ul className="links">
         {props.links.map((link, i) => {
            return (
               <li key={link.id} data-aos="fade-up" className="links__link">
                  <p>{link.longLink}</p>
                  <div className="link__short-wrapper">
                     <p>{link.shortLink}</p>
                     <button
                        className="btn"
                        ref={el => {
                           button.current[i] = {
                              el,
                              key: link.longLink,
                           };
                        }}
                        onClick={() => copyLink(link)}
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
