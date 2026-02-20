function submitData() {
  fetch("/submit", { method: "POST" })
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerText =
        "Status: " + data.status;
    });
}
