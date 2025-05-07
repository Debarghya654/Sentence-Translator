const inputText = document.querySelector('#input-text');
const outputText = document.querySelector('#output-text');
const buttonTranslate = document.querySelector('#btn-translate');
const languageSelect = document.querySelector('#language-select');

const BASE_URL = "https://api.funtranslations.com/translate/";

function getApiUrl(lang, text) {
	const encoded = encodeURIComponent(text.trim());
	return `${BASE_URL}${lang}.json?text=${encoded}`;
}

function errorHandle(error) {
	alert("Something went wrong. Please try again later.");
	console.error("Translation Error:", error);
}

function clickHandler() {
	const text = inputText.value;
	const language = languageSelect.value;

	if (!text.trim()) {
		alert("Please enter text to translate.");
		return;
	}

	const url = getApiUrl(language, text);
	fetch(url)
		.then(res => res.json())
		.then(json => {
			outputText.value = json.contents.translated;
		})
		.catch(errorHandle);
}

buttonTranslate.addEventListener("click", clickHandler);
