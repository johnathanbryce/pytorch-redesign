import "./App.css";
import { useState } from "react";

import ContentCard from "./components/ContentCard";

function App() {
  const [isActive, setisActive] = useState("PyTorch");

  const exitHandler = () => {
    alert(
      "Clicking this x would return the user to the main PyTorch page and close this pop-up installation modal"
    );
  };

  return (
    <div>
      <div>
        <button className="exit" onClick={exitHandler}>
          &#10006;
        </button>
      </div>
      <div>
        {isActive === "PyTorch" && (
          <ContentCard
            title="PyTorch"
            option1="Stable (1.11.0)"
            option2="Preview(Nightly)"
            option3="LTS(1.8.2)"
            clickHandler={() => setisActive("YourOS")}
          />
        )}
        {isActive === "YourOS" && (
          <ContentCard
            title="YourOS"
            option1="Linux"
            option2="Mac"
            option3="Windows"
            clickHandler={() => setisActive("Package")}
          />
        )}
        {isActive === "Package" && (
          <ContentCard
            title="Package"
            option1="Conda"
            option2="Pip"
            option3="LibTorch"
            option4="Source"
            clickHandler={() => setisActive("Language")}
          />
        )}
        {isActive === "Language" && (
          <ContentCard
            title="Language"
            option1="Python"
            option2="C++/Java"
            clickHandler={() => setisActive("Compute Platform")}
          />
        )}

        {isActive === "Compute Platform" && (
          <ContentCard
            title="Compute Platform"
            option1="CUDA 10.2"
            option2="CUDA 11.3"
            option3="ROCM 4.2 (beta)"
            option4="CPU"
            clickHandler={() => setisActive("Run This Command")}
          />
        )}

        {isActive === "Run This Command" && (
          <ContentCard
            title="Run This Command"
            command="Download command would depend on the users step-by-step selection, ex:   conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch"
            clickHandler={() => setisActive("PyTorch")}
          />
        )}
      </div>
    </div>
  );
}

export default App;
