import {useState, useEffect} from 'react';

const useLocalStorage = (initialValue = null) => {
    const key = "joblyKey"
    const initialLoginStatus = localStorage.getItem(key) || initialValue;
    const [item, setItem] = useState(initialLoginStatus);

    useEffect(function setLocalStorageKey() {
        if (item === null) {
            localStorage.removeItem(key);
          } else {
            localStorage.setItem(key, item);
          }
    }, [key, item]);
    
    return [item, setItem];
}

export default useLocalStorage;