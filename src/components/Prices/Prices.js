import React from 'react'
import './Prices.css'


const Prices = (prop) => {
  return (
    <div id={prop.t} className='prices' >
        <h2>Prices</h2>
        <h3>API Pricing</h3>
        <p>Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>
        <table>
            <tr>
                <th>API</th>
                <th>MODEL</th>
                <th>Price per 1K tokens</th>
            </tr>
            <tr>
                <td>OpenAI</td>
                <td>GPT-3.5</td>
                <td>$0.002</td>
            </tr>
            <tr>
                <td>OpenAI</td>
                <td>GPT-4</td>
                <td>$0.03</td>
            </tr>
            <tr>
                <td>Together AI</td>
                <td>Llama-2-70b</td>
                <td>$0.0008</td>
            </tr>
            <tr>
                <td>Together AI</td>
                <td>Llama-2-13b</td>
                <td>$0.0006</td>
            </tr>
        </table>
        <h3>Token Estimation</h3>
        <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
        <h3>Billing</h3>
        <p>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
    </div>
  )
}

export default Prices
