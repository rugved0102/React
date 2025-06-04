import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    // yaha empty object issliye diya hai ki samjo fetch se koi data nhi aya to usee vo ek empty object lega
    // following iss method se automatically fetch call hojayega
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
        
    }, [currency])
    console.log(data);
    return data
    // We are **returning the `data` object** so any component using this hook gets access to the currency info.

}

export default useCurrencyInfo;

// mene ek functionality define ki aur pure method ko hi return kr diya

// .then((res) => setData(res[currency]))
// - Now from the entire JSON response, you're extracting only the part for the given currency.
// - Then storing it in `data` using `setData`.

// > Example:
// > If API returns:
// > ```json
// > {
// >   "usd": {
// >     "inr": 83.12,
// >     "eur": 0.91
// >   }
// > }
// > ```
// > You're saving just:
// > ```json
// > {
// >   "inr": 83.12,
// >   "eur": 0.91
// > }
// > ```

// ---

// ### ```js
//     console.log(data);
