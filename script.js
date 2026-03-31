const codes = {
  "99285": {
    description: "High-level emergency room visit for severe conditions",
    type: "Emergency Room"
  },
  "99283": {
    description: "Moderate-level emergency room visit",
    type: "Emergency Room"
  },
  "99281": {
    description: "Minor emergency visit",
    type: "Emergency Room"
  },
  "99213": {
    description: "Routine office visit for an existing patient",
    type: "Office Visit"
  },
  "99214": {
    description: "Detailed office visit for ongoing issues",
    type: "Office Visit"
  }
};

function explainCode() {
  const input = document.getElementById("codeInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (codes[input]) {
    resultDiv.innerHTML = `
      <strong>Description:</strong> ${codes[input].description}<br/>
      <strong>Type:</strong> ${codes[input].type}<br/>
      <em>Note: Costs vary depending on insurance.</em>
    `;
  } else {
    resultDiv.innerHTML = `<span style="color:red;">Code not recognized</span>`;
  }
}
resultDiv.classList.remove("show");

setTimeout(() => {
  if (codes[input]) {
    resultDiv.innerHTML = `
      <strong>Description:</strong> ${codes[input].description}<br/>
      <strong>Type:</strong> ${codes[input].type}<br/>
      <em>Note: Costs vary depending on insurance.</em>
    `;
  } else {
    resultDiv.innerHTML = `<span style="color:red;">Code not recognized</span>`;
  }

  resultDiv.classList.add("show");
}, 100);
document.getElementById("toggleTheme").onclick = () => {
  document.body.classList.toggle("dark");
};