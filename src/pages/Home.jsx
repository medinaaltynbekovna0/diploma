import  "./Home.css";
<Home></Home>
export default function Home() {
  return (
    <div className="Home">
      <h1>Welcome to my Perfume shop</h1>
      <video controls autoPlay="true" loop="true">
        <source 
        src="https://player.vimeo.com/external/374819500.sd.mp4?s=3ff467c214bfb8caf9b6a37c98f4925486273fda&profile_id=164&oauth2_token_id=57447761" />
      
      </video>
    </div>
  );
}
