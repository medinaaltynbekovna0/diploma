import "./Home.css";
<Home></Home>;
export default function Home() {
  return (
    <div className="Home">
      <h1>Welcome to my Perfume shop</h1>
      {/*<video autoPlay loop>
        <source src="https://player.vimeo.com/external/374819500.sd.mp4?s=3ff467c214bfb8caf9b6a37c98f4925486273fda&profile_id=164&oauth2_token_id=57447761" />
      </video>*/}
      <div className="container"> 
       <div className="row">
         <div className="col-6">
          <img src="https://i.pinimg.com/474x/ae/02/26/ae02261d72d5c410c0c61e88ca9db0ac.jpg" alt="" />
         <img src="https://i.pinimg.com/564x/a7/ef/01/a7ef01dc69f0dcc6a869ff90f59f7feb.jpg" alt="" />
         <img src="https://i.pinimg.com/564x/bb/9c/88/bb9c88668913d817290eb0fde30b1514.jpg" alt="" />
        </div>
       </div>
      </div>
      <section className="page-section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner bg-faded text-center rounded">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">
                    What is perfumery for?
                  </span>
                  <span className="section-heading-lower"></span>
                </h2>
                <p className="mb-0">
                  When we put on a fragrance,it starts to work in two
                  directions-it becomes a kind of signal that tells others
                  information about our mood; becomes a factor that raises
                  self-esteem, makes you feel more attractive
                </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
