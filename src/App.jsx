import React from "react";
import "./App.css";
import Card from "./components/card.jsx";
import List from "./components/list.jsx";

function App() {
  return (
    <div className="App">
      <Card
        img="https://th.bing.com/th/id/R.602c674bfe6dc6d91dbf36f04207a26c?rik=3g491NDAn%2fv4Zg&pid=ImgRaw&r=0"
        name="React"
        title="Point fort de React"
        backgroundColor="#0ab5e9"
      />
      <List firstArgument="Manipulation du Dom" secondArgument="Langage non typé et synchrone"/>
      <Card
        img="https://th.bing.com/th/id/R.adbac78231c9a2ff5c21aaa32dd4e1e4?rik=jWTUkOKwKIk7jg&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2017%2f05%2fphp_emblem.png&ehk=gbX0plW%2fbqAeSR4cWmkL44R%2bUWxCpG3CL%2b2V4KHQlpQ%3d&risl=&pid=ImgRaw&r=0"
        name="PHP"
        title="Point fort de PHP"
        backgroundColor="#515f9c"
      />
      <List firstArgument="Accès à la BDD" secondArgument="Connexion utilisateur"/>
    </div>
  );
}

export default App;
