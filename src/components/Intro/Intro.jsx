const Intro = () => {
   return (
      <section id="intro">
         <div className="intro__desc">
            <h1 data-aos="fade-right">More than just shorter links</h1>
            <p data-aos="fade-up" data-aos-delay="100">
               Build your brand’s recognition and get detailed insights on how
               your links are performing.
            </p>
            <button className="btn" data-aos="fade-up" data-aos-delay="100">
               Get Started
            </button>
         </div>
         <div className="intro__img" data-aos-delay="100" data-aos="fade-left">
            <img
               src="src/assets/imgs/illustration-working.svg"
               alt="A person using a computer"
            />
         </div>
      </section>
   );
};

export default Intro;
