const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

check.addEventListener("click", () => {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
    if(!input.value) {
      alert("Please provide a phone number");
    } else if (regex.test(input.value)) {
      results.innerText = `Valid US number: ${input.value}`;
    } else {
      results.innerText = `Invalid US number: ${input.value}`;
    }
  });

clear.addEventListener("click", () => {
    results.innerHTML = "";
  });

  /*
  regex: ^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$

  optional 1 with a space => capture group (1\s?)?
  3 random digits with opt parenthesis => (\(\d{3}\)|\d{3})
  3 digits with a space a hyphen or no space => ([\s-]?) \d{3}
  a space a hyphen or no space => ([\s-]?)
  4 random digits => \d{4}
  */