import React from "react";
import Card from "./Card";

const Form = (props) => {
  return (
    <>
      <form>
        <label className="form__label" htmlFor="name">
          Nombre:
        </label>
        <input id="name" type="text" onChange={props.handleChange} />
        <label className="form__label" htmlFor="description">
          Descripción:
        </label>
        <textarea
          id="description"
          type="text"
          rows="10"
          cols="30"
          value={props.description}
          onChange={props.handleChange}
        />
        <label className="form__label" htmlFor="lang">
          Idioma:
        </label>
        <select
          id="lang"
          name="lang"
          value={props.lang}
          onChange={props.handleChange}
        >
          <option value="Español" name="lang">
            Español
          </option>
          <option value="Inglés" name="lang">
            Inglés
          </option>
          <option value="Francés" name="lang">
            Francés
          </option>
        </select>
      </form>
      <Card
        name={props.name}
        description={props.description}
        lang={props.lang}
      />
    </>
  );
};

export default Form;
