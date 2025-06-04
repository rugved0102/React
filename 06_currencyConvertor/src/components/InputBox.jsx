import React from 'react'
import { useState, useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,

    className = "",
}) {
   const amountInputId = useId() // unique id dega sirf
    // yaha do type ki css use hui hai ek string ke format me aur ye `` ke andar so `` ke andar wali me hum user se jo input le rahe hai className through vo css dalenge
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))
// Let’s say the user types 500.

// This happens:

// onChange fires.

// We take the 500 from the input.

// Convert it from "500" (text) to 500 (number).

// Call the parent’s function:
// onAmountChange(500)
                    }
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onCurrencyChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                        </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

// jab aap kisi be jsx pe loop laga rahe ho to aapko ek key pass karni hi padegi
// performance lani hai andar loop ke elements ko repeat karne ke liye to aapko key pass karni hi chahiye
// React renders a virtual DOM (a lightweight JavaScript version of the real DOM) and compares the old version with the new version to decide what changed.

// This comparison is called "Reconciliation."

// Now imagine:
// Without key, React sees a list of <option> elements and says:

// “I don’t know exactly which element was what before — maybe I’ll just destroy and recreate them all to be safe.”

// This is fine for small lists…
// But imagine a list of 1000+ currencies, or a complex UI.

// It would:

// Re-render all the <option> tags

// Recreate all the DOM nodes again

// Waste time and slow down performance
// React uses the key like a unique ID tag for each item.
// When you change selection from "usd" to "inr", React says:

// “Ah! I know each option by its key. Only the selected value changed — no need to touch the rest of the list. I’ll just update the selected item.”