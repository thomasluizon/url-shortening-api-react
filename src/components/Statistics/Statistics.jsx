import LinkForm from '../LinkForm/LinkForm';

const Statistics = () => {
   return (
      <section id="statistics">
         <div className="container">
            <LinkForm />
            <div className="statistics__wrapper">
               <div className="statistics__desc">
                  <h2>Advanced Statistics</h2>
                  <p>
                     Track how your links are performing across the web with our
                     advanced statistics dashboard.
                  </p>
               </div>
               <div className="statistics__cards">
                  <div className="card">
                     <div className="card__img">
                        <img
                           src="src/assets/imgs/icon-brand-recognition.svg"
                           alt=""
                        />
                     </div>
                     <h3>Brand Recognition</h3>
                     <p>
                        Boost your brand recognition with each click. Generic
                        links don’t mean a thing. Branded links help instil
                        confidence in your content.
                     </p>
                  </div>
                  <div className="card second">
                     <div className="card__img">
                        <img
                           src="src/assets/imgs/icon-detailed-records.svg"
                           alt=""
                        />
                     </div>
                     <h3>Detailed Records</h3>
                     <p>
                        Gain insights into who is clicking your links. Knowing
                        when and where people engage with your content helps
                        inform better decisions.
                     </p>
                  </div>
                  <div className="card third">
                     <div className="card__img">
                        <img
                           src="src/assets/imgs/icon-fully-customizable.svg"
                           alt=""
                        />
                     </div>
                     <h3>Fully Customizable</h3>
                     <p>
                        Improve brand awareness and content discoverability
                        through customizable links, supercharging audience
                        engagement.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Statistics;
