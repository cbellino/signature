import { h, Component } from "preact";

import { Form } from "./Form";
import { Preview } from "./Preview";

export class App extends Component {
  state = {
    data: {
      prenom: "Dwight",
      message: "Schrute",
      poste: "Assistant to the Regional Manager",
      phone: "I have no need for phones",
      phone2: "",
      ville: "1725 Slough Avenue in Scranton, PA",
    },
  };

  updateData = (inputName, value) => {
    console.log("inputName, value", inputName, value);
    this.setState(({ data }) => ({
      data: { ...data, [inputName]: value },
    }));
  };

  render() {
    const { data } = this.state;

    return (
      <div id="app">
        <div class="bann">
          <img src="https://weare.sfeir.com/wp-content/uploads/2017/05/logo.png" />
        </div>
        <div class="bann2">
          Crée ta signature personnalisée SFEIR pour ton compte mail !
        </div>
        <div class="maindiv">
          <Form data={data} onChange={this.updateData} />
        </div>
        <Preview data={data} />
      </div>
    );
  }
}
