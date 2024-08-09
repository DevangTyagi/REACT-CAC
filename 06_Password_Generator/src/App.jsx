import { useState, useCallback, useEffect ,useRef} from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState("");

  // Ref Hook
  const passwordRef = useRef(null)
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallowed) str += "0123456789";
    if (charallowed) str += "!@#$%^&*(){}[]~";

    for (let index = 1; index <=length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberallowed, charallowed, setpassword]); //(fn,depencites in array)
  
  const copypasswordtoclipboard = useCallback(() => {
   window.navigator.clipboard.writeText(password)
  },[password])
  
  useEffect(() => {
  PasswordGenerator()
  },[length, numberallowed, charallowed, PasswordGenerator])
  return (
    <>  
        <div className="w-full max-w-md mx-auto  shadow-md rounded-lg p-4 my-8 text-orange-500 bg-slate-800">
          <h1 className="text-white text-center mx-6 mt-3 mb-4">
            Password generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="password"
              readOnly
              ref={passwordRef}
            />
            <button
            onClick={copypasswordtoclipboard}
            className="outlinee-none bg-blue-700 text-white px-3 py-0.5 shrink">copy</button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex item-center gap-x-1">
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {setlength(e.target.value)}}
               />
               <label>Length:{length}</label>
            </div>
            <div className="flex item-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked={numberallowed}
              id="numberInput"
              onChange={() => {
                setnumberallowed((prev) => !prev)
              }}
               />
               <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex item-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked={charallowed}
              id="charInput"
              onChange={() => {
                setcharallowed((prev) => !prev)
              }}
               />
               <label htmlFor="charInput">Character</label>
            </div>
          </div>

        </div>     
    </>
  );
}

export default App;
