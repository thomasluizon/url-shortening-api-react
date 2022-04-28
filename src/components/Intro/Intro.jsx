const Intro = () => {
   return (
      <section id="intro">
         <div className="intro__desc">
            <h1>More than just shorter links</h1>
            <p>
               Build your brand’s recognition and get detailed insights on how
               your links are performing.
            </p>
            <button className="btn">Get Started</button>
         </div>
         <div className="intro__img">
            <img
               src="src/assets/imgs/illustration-working.svg"
               alt="A person using a computer"
            />
         </div>
      </section>
   );
};

export default Intro;
