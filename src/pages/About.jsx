import "./About.css";
export default function About() {
  return (
    <div className="About">
      <h1>Perfume is the best thing</h1>

      <div className="image"></div>
      <div className="about">
        <img src="https://i.pinimg.com/564x/13/77/c5/1377c56ee18f20aea47079792a0ec8bf.jpg"></img>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="about">
            <img src="https://i.pinimg.com/236x/1b/92/e1/1b92e1420ff012479a458810493739cd.jpg"></img>
            <img src="https://i.pinimg.com/564x/80/8d/7f/808d7f8af18f2b61bcc6e7267a8c55d7.jpg"></img>
            {/*<img src="https://i.pinimg.com/564x/46/22/96/4622964e4a24c50758baed73e0ff8f96.jpg"></img>
            <img src="https://i.pinimg.com/564x/ad/b6/0e/adb60e01f49f3aa49ac89699309995f5.jpg"></img>
            <img src="https://i.pinimg.com/564x/f1/bc/7b/f1bc7b4d2013de5350d249474a0a0125.jpg"></img>*/}
          </div>
          <div className="col-6">
            <p>
              Cinéma by Yves Saint Laurent is an Oriental Floral fragrance for
              women. Cinema came out in 2004. Perfumer: Jacques Cavalier. Top
              notes are almond blossom, clementine and cyclamen; middle notes
              are jasmine, peony and amaryllis; base notes are vanilla, amber,
              benzoin and white musk.
            </p>
        </div>
        
          </div>
        </div>
      </div>

  );
}
