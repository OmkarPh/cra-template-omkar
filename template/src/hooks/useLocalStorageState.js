import { useState } from 'react';


export default useLocalStorageState = (key, defaultValue, parseJson=true) => {

  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get key from local storage
      const item = window.localStorage.getItem(key);

      // Return string as it is in case user specified
      if(!parseJson)
          return item ? item : defaultValue;

      // Parse string to json rest of the time
      return item ? JSON.parse(item) : defaultValue;

    } catch (error) {
      console.log(error);
      console.log("The above error occured most probably because someone tampered with localstorage !");
      return defaultValue;
    }
  });


  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      // Save state
      setStoredValue(valueToStore);

      // Set string as it is in case user specified
      if(!parseJson)
        return window.localStorage.setItem(key, valueToStore);
        
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}