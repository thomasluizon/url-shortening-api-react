import Links from '../Links/Links';

const LinkForm = () => {
   return (
      <div className="statistics__form">
         <form>
            <input type="text" placeholder="Shorten a link here..." />
            <button className="btn">Shorten it!</button>
         </form>
         <Links />
      </div>
   );
};

export default LinkForm;
