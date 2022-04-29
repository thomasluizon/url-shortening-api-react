import { useEffect, useState } from 'react';
import Links from '../Links/Links';

const LinkForm = () => {
   const [inputValue, setInputValue] = useState('');
   const [formError, setFormError] = useState(false);
   const [links, setLinks] = useState(
      JSON.parse(localStorage.getItem('links')) || []
   );
   const [loading, setLoading] = useState(false);

   const handleSubmit = e => {
      e.preventDefault();
      if (inputValue === '') {
         setFormError(true);
      } else {
         addShortLink();
      }
   };

   async function addShortLink() {
      setFormError(false);

      try {
         await fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
            .then(res => res.json())
            .then(res => {
               const longLink = inputValue;
               setInputValue('');
               const hasLink = links.some(link => link.longLink == longLink);
               if (!hasLink) {
                  setLoading(true);

                  const shortLink = res.result.short_link;
                  const linkObject = {
                     id: links.length + 1,
                     shortLink,
                     longLink,
                  };

                  setLinks(prevState => [linkObject, ...prevState]);
                  setLoading(false);
               } else {
                  alert('Link has already been shortened!');
               }
            });
      } catch (e) {
         setLoading(false);
         alert('Invalid link or not allowed');
      }
   }

   useEffect(() => {
      localStorage.setItem('links', JSON.stringify(links));
   }, [links]);

   return (
      <div className="statistics__form" data-aos="fade-up">
         <form onSubmit={e => handleSubmit(e)}>
            <input
               value={inputValue}
               onChange={e => setInputValue(e.target.value)}
               type="text"
               placeholder="Shorten a link here..."
               className={formError ? 'error' : ''}
            />
            <button className={`btn ${loading ? 'disabled' : ''}`}>
               {loading ? 'loading...' : 'Shorten it!'}
            </button>
            {formError && <p className="error-text">Please add a link</p>}
         </form>
         <Links links={links} />
      </div>
   );
};

export default LinkForm;
