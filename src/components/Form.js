import { h } from "preact";

const getAdress = value => {
  switch (value) {
    case "4":
      return "1 Avenue de l’Europe - 67300 Schiltigheim";
    case "3":
      return "2 Rue Drosbach - L-3372 Leudelange (LUXEMBOURG)";
    case "2":
      return "2 Rue Hegel (bâtiment le canal) - 59000 Lille";
  }
  return "48 rue Jacques Dulud - 92200 Neuilly sur Seine";
};

const handleInputChange = (inputName, onChange) => event =>
  onChange(inputName, event.target.value);

const handleAdresseChange = (selectName, onChange) => event =>
  onChange(selectName, getAdress(event.target.value));

export const Form = ({ data, onChange }) => (
  <form id="form-sign">
    <div class="fs-grp">
      <label>Prénom</label>
      <div class="fs-input">
        <input
          type="text"
          name="prenom"
          defaultValue={data.prenom}
          id="prenom"
          onKeyUp={handleInputChange("prenom", onChange)}
        />
      </div>
    </div>

    <div class="fs-grp">
      <label>Nom</label>
      <div class="fs-input">
        <input
          type="text"
          name="message"
          defaultValue={data.message}
          id="nom"
          onKeyUp={handleInputChange("message", onChange)}
        />
      </div>
    </div>

    <div class="fs-grp">
      <label>Poste</label>
      <div class="fs-input">
        <input
          type="text"
          name="poste"
          defaultValue={data.poste}
          id="poste"
          onKeyUp={handleInputChange("poste", onChange)}
        />
      </div>
    </div>

    <div class="fs-grp">
      <label>Téléphone</label>
      <div class="fs-input">
        <input
          type="text"
          name="phone"
          defaultValue={data.phone}
          id="phone"
          onKeyUp={handleInputChange("phone", onChange)}
        />
      </div>
    </div>

    <div class="fs-grp">
      <label>Téléphone #2 (optionnel)</label>
      <div class="fs-input">
        <input
          type="text"
          name="phone2"
          defaultValue={data.phone2}
          id="phone2"
          onKeyUp={handleInputChange("phone2", onChange)}
        />
      </div>
    </div>

    <div class="fs-grp">
      <label>Adresse</label>
      <div class="fs-input">
        <select
          name="ville"
          id="ville"
          onChange={handleAdresseChange("ville", onChange)}
        >
          <option value="" />
          <option value="1">Paris</option>
          <option value="2">Lille</option>
          <option value="3">Luxembourg</option>
          <option value="4">Strasbourg</option>
        </select>
      </div>
    </div>
  </form>
);
