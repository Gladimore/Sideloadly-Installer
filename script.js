//=https://download2448.mediafire.com/314gy86chysgsiV13Jy_OKfd7FfqE2DlUaqpksWl9Wss39bm4wX8GsVJW6laMdpkgmvl26HQYxX4HZCwjBIN3h_eKigVhtJ4VBjvqNB_d_yNCtHAl0dlqth-TnlzXIigmJyl-7DT-SYxG-cVymWU91-IVsXnLcDytPjwK3oVisbSYHbO/ajr2gzt3g929oxs/ArceusX1_Prod.ipa

const container = document.querySelector('.center')
const input = container.querySelector('input[type="text"]')
const button = container.querySelector('button')

let db = false
const df_text = button.innerText

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

button.addEventListener('click', function() {
  const valid = isValidHttpUrl(input.value)
  if (!db && valid) {
    db = true

    console.log('clicked')
    button.innerText = "Proccessing"

    window.open(`sideloadly:?&xs=${input.value}`)
    db = false
    button.innerText = df_text
  } else if (!valid) {
    alert('Has to be a valid link')
  }
})
