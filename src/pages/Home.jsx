import  "./Home.css";
<Home></Home>
export default function Home() {
  return (
    <div className="Home">
      <h1>Welcome to my Perfume shop</h1>
      <video  autoPlay="true" loop="true">
        <source 
        src="https://player.vimeo.com/external/374819500.sd.mp4?s=3ff467c214bfb8caf9b6a37c98f4925486273fda&profile_id=164&oauth2_token_id=57447761" />
      </video>
      <section class="page-section cta">
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 mx-auto">
                        <div class="cta-inner bg-faded text-center rounded">
                            <h2 class="section-heading mb-4">
                                <span class="section-heading-upper">What is perfumery for?</span>
                                <span class="section-heading-lower"></span>
                            </h2>
             <p class="mb-0">When we put on a fragrance,it starts to work in two directions-it becomes a kind of signal that tells others information about our mood; becomes a factor that raises self-esteem, makes you feel more attractive</p>
                        </div>
                    </div>
                  </div>
               </div>
           </section>
        </div>        
  );
}
