import { useState } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [result, setResult] = useState("P4$5W0rD!");
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleChange = (e) => {
    setLength(Number(e.target.value));
  };

  const generatePassword = () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let characters = lowercase;
    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    setResult(password);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result).then(() => {
      alert("Password copied to clipboard!");
    });
  };

  return (
    <div className="bg-gray-900 text-white max-w-md mx-6 text-xl font-bold">
      <h1 className=" text-center text-3xl text-gray-400 pb-4 font-extrabold">
        Password Generator
      </h1>
      <div className="bg-gray-800 my-4 py-2 px-4 flex items-center justify-between">
        <span className="break-words text-wrap max-w-[22ch]">{result}</span>

        <svg
          onClick={copyToClipboard}
          fill="#000000"
          height="24px"
          width="24px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          stroke="23px"
          className="fill-blue-300 stroke-blue-300 hover:fill-white hover:stroke-white cursor-pointer transition-all duration-200 ease-in-out transform"
        >
          <g id="Text-files">
            <path
              d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
		C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
		c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
		h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
		C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
		c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
		c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
		 M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
		c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
		c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
		h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z"
            />
            <path
              d="M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
		c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
		C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z"
            />
            <path
              d="M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
		c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
		C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z"
            />
            <path
              d="M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
		s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
		S39.16465,29.4603004,38.6031494,29.4603004z"
            />
            <path
              d="M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
		s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
		S29.0059509,37.5872993,28.4444485,37.5872993z"
            />
          </g>
        </svg>
      </div>
      <div className="bg-gray-800 px-6 text-base">
        <div className="my-4 flex justify-between pt-4 ">
          <p>Character length</p>
          <span className="text-xl text-blue-300">{length}</span>
        </div>
        <input
          type="range"
          min="6"
          max="22"
          value={length}
          onChange={handleChange}
          className="w-full accent-blue-300"
        />
        <div className="my-4 pb-2">
          <div>
            <input
              type="checkbox"
              className="accent-blue-300"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
            <span> Include Uppercase Letters</span>
          </div>

          <div className="my-4">
            <input
              type="checkbox"
              className="accent-blue-300"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            <span> Include Numbers</span>
          </div>
          <div>
            <input
              type="checkbox"
              className="accent-blue-300"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
            <span> Include Symbols</span>
          </div>
          <button
            onClick={generatePassword}
            className="group hover:bg-gray-900 transition-all duration-200 ease-in-out transform my-8 text-2xl justify-center items-center gap-2 py-2 w-full text-center text-black bg-blue-300 border-blue-300 border-2 flex"
          >
            <p className="group-hover:text-white">Generate</p>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              stroke="3px"
              className="fill-black -rotate-90 stroke:black group-hover:stroke-white "
            >
              <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
