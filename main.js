const asideText = document.getElementById("aside-text");
const asideEmpty = document.getElementById("aside-empty");
const asideContent = document.getElementById("aside-content");
const encryptButton = document.getElementById("js-encrypt");
const decryptButton = document.getElementById("js-decrypt");
const inputText = document.getElementById("text");
const copyTextButton = document.getElementById("copy-text");
const keywords = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

function verifyEmpty() {
  if (returnStringToConvert().length === 0) {
    asideEmpty.classList.toggle("hidden");
    asideContent.classList.toggle("hidden");
  }
}

function returnStringToConvert() {
  return inputText.value;
}

function verifyUppercase(text) {
  return /[A-Z]/.test(text);
}

function verifySpecialLetters(text) {
  return /[^\w\s!?\s]/g.test(text);
}

encryptButton.addEventListener("click", (e) => {
  encodeText(returnStringToConvert());
  asideEmpty.classList.add("hidden");
  asideContent.classList.remove("hidden");
  verifyEmpty();
});

decryptButton.addEventListener("click", (e) => {
  decodeText(returnStringToConvert());
  asideEmpty.classList.add("hidden");
  asideContent.classList.remove("hidden");
  verifyEmpty();
});

function encodeText(text) {
  let encodedText = "";
  if (
    verifyUppercase(text) ||
    verifySpecialLetters(text) ||
    returnStringToConvert().length < 1
  ) {
    alert("Texto não válido!");
    verifyEmpty();
  } else {
    for (let i = 0; i < returnStringToConvert().length; i++) {
      if (
        returnStringToConvert()[i] === "a" ||
        returnStringToConvert()[i] === "e" ||
        returnStringToConvert()[i] === "i" ||
        returnStringToConvert()[i] === "o" ||
        returnStringToConvert()[i] === "u"
      ) {
        encodedText += keywords[returnStringToConvert()[i]];
      } else {
        encodedText += returnStringToConvert()[i];
      }
    }
    asideText.textContent = encodedText;
  }
}

function decodeText(text) {
  let decodedText = "";
  if (
    verifyUppercase(text) ||
    verifySpecialLetters(text) ||
    returnStringToConvert().length < 1
  ) {
    alert("Texto não válido!");
    verifyEmpty();
  } else {
    decodedText = returnStringToConvert()
      .replace(/\ai/g, "a")
      .replace(/\enter/g, "e")
      .replace(/\imes/g, "i")
      .replace(/\ober/g, "o")
      .replace(/\ufat/g, "u");
    asideText.textContent = decodedText;
  }
}

function copyText() {
  navigator.clipboard.writeText(asideText.textContent);
}

copyTextButton.addEventListener("click", (e) => {
  copyText();
});
