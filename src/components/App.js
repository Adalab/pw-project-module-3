import '../styles/App.css';
import { useState } from 'react';

function App() {

  const [dataCard, setDataCard] = useState({
    palette: "1",
    name: "",
    job: ""
  });

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;

    /*if (inputName === "name") {
      setDataCard({
        ...dataCard,
        name: inputValue
      }
      )
    } else if (inputName === "job") {
      setDataCard({
        ...dataCard,
        job: inputValue
      }
      )
    }*/

    setDataCard({
      ...dataCard,
      [inputName]: inputValue
    });



  }

  return (
    <>
      <header className="header">
        <h1 className="title--big">Awesome profile cards</h1>
      </header>

      <main className="page">
        <section className="preview fancy-border">
          <button><i className="far fa-trash-alt" aria-hidden="true"></i> Reset</button>
          <article className="js_preview preview__card fancy-border">
            <div className="preview__header">
              <h2 className="preview__name js__preview_name">{dataCard.name || `Nombre y Apellidos`}</h2>
              <h3 className="preview__job js__preview_job">Front-end developer</h3>
            </div>
            <div className="preview__photo js__profile-image"></div>

            <nav>
              <a className="preview__icon" href="">
                <i className="fas fa-phone"></i>
              </a>
              <a className="preview__icon js__preview_email" href="">
                <i className="far fa-envelope"></i>
              </a>
              <a className="preview__icon" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="preview__icon" href="">
                <i className="fab fa-github-alt"></i>
              </a>
            </nav>
          </article>
        </section>
        <form className="form fancy-border">
          <fieldset className="form__box js__section_desing">
            <legend className="form__heading js__title_design">
              <i className="far fa-object-ungroup" aria-hidden="true"></i>
              <h2>Diseña</h2>
              <i className="fas fa-chevron-up" aria-hidden="true"></i>
            </legend>
            <div className="form__designinput">
              <label>Colores</label>
              <ul className="form_paletteslist">
                <li className="first_palette">
                  <label htmlFor="palette1">
                    <input
                      checked={dataCard.palette === "1"}
                      onChange={handleInput}
                      id="palette1"
                      type="radio"
                      name="palette"
                      className="js_radio js_radio-1 input_palette"
                      value="1" />
                  Paleta 1
                  <div className="colorOne palette"></div>
                    <div className="colorTwo palette"></div>
                    <div className="colorThree palette"></div>
                  </label>
                </li>

                <li className="second_palette">
                  <label htmlFor="palette2">
                    <input
                      id="palette2"
                      onChange={handleInput}

                      checked={dataCard.palette === "2"}
                      type="radio"
                      name="palette"
                      className="js_radio js_radio-2 input_palette"
                      value="2" />
                  Paleta 2
                  <div className="colorOne palette"></div>
                    <div className="colorTwo palette"></div>
                    <div className="colorThree palette"></div>
                  </label>
                </li>

                <li className="third_palette">
                  <label htmlFor="palette3">
                    <input
                      id="palette3"
                      onChange={handleInput}

                      type="radio"
                      checked={dataCard.palette === "3"}
                      name="palette"
                      className="js_radio js_radio-3 input_palette"
                      value="3" />
                  Paleta 3
                  <div className="colorOne palette"></div>
                    <div className="colorTwo palette"></div>
                    <div className="colorThree palette"></div>
                  </label>
                </li>
              </ul>

            </div>
          </fieldset>

          <fieldset className="form__box">
            <legend className="form__heading js__title_fill">
              <i className="far fa-keyboard" aria-hidden="true"></i>
              <h2>Rellena</h2>
              <i className="fas fa-chevron-down" aria-hidden="true"></i>
            </legend>
            <div className="form__fillinput">
              <ul className="js__allInputs">
                <li className="form__item">
                  <label htmlFor="name">Nombre completo</label>
                  <input
                    className="js_input js_name"
                    type="text"
                    name="name"
                    id="name"
                    value={dataCard.name}
                    onChange={handleInput}
                    placeholder="Ej: Sally Jill" />
                </li>
                <li className="form__item">
                  <label htmlFor="job">Puesto</label>
                  <input
                    className="js_input js_job"
                    type="text"
                    name="job"
                    id="job"
                    value={dataCard.job}
                    onChange={handleInput}
                    placeholder="Ej: Front-end unicorn" />
                </li>

                <li className="form__item--photo fancy-border bdr-red">
                  <label className="form__photolabel" htmlFor="photo">Imagen de perfil</label>
                  <label htmlFor="photo" className="form__photobutton js__profile-trigger">Añadir imagen</label>

                  <input
                    className="form__photoinput js__profile-upload-btn"
                    type="file"
                    name="photo"
                    id="photo" />

                  <span className="form__photothumb js__profile-preview"></span>
                </li>

                <li className="form__item">

                  <label htmlFor="email">Email</label>

                  <input
                    className="js_input js_email"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Ej. sally.hill@email.com" />

                </li>
                <li className="form__item">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    className="js_input"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholer="Ej. 555-55-55-55" />
                </li>
                <li className="form__item">
                  <label htmlFor="linkedin">Linkedin</label>
                  <input
                    className="js_input"
                    type="text"
                    name="linkedin"
                    id="linkedin"
                    placeholder="Ej. linkedin.com/in/sally-hill" />
                </li>
                <li className="form__item">
                  <label htmlFor="github">Github</label>
                  <input
                    className="js_input"
                    type="text"
                    name="github"
                    id="github"
                    placeholder="Ej. @Sally-Hill" />
                </li>
              </ul>
            </div>
          </fieldset>

          <fieldset className="form__box">
            <legend className="form__heading">
              <i className="fas fa-share-alt" aria-hidden="true"></i>
              <h2>Comparte</h2>
              <i className="fas fa-chevron-down" aria-hidden="true"></i>
            </legend>
            <div className="form__shareinput">
              <button className="js_create_button"><i className="far fa-address-card" aria-hidden="true"></i>Crear tarjeta</button>

            </div>
          </fieldset>
        </form>
      </main>

      <footer className="footer">
        Awesome profile cards &#x1F952; &copy;2021
      <img className="footer__logo" src="./assets/images/logo-adalab.png" alt="Logo Adalab" />
      </footer>
    </>
  );
}

export default App;
