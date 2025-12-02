// creating DOM objects

const inputArea = document.getElementById("markdown-input");
const htmlArea = document.getElementById("html-output");
const outputArea = document.getElementById("preview");

const h1_regex = /^#\s+(.*)$/gm;
const h2_regex = /^##\s+(.*)$/gm;
const h3_regex = /^###\s+(.*)$/gm;
const strong_regex = /(\*\*|__)(.*?)\1/g;
const em_regex = /(\*|_)(.*?)\1/g;
const image_regex = /!\[([^\]]*)\]\(([^)]+)\)/g;
const link_regex = /\[([^\]]+)\]\(([^)]+)\)/g;
const quote_regex = /^>\s+(.*)$/gm;

function convertMarkdown() {
  let text = inputArea.value;
  text = text.replace(h1_regex, "<h1>$1</h1>");
  text = text.replace(h2_regex, "<h2>$1</h2>");
  text = text.replace(h3_regex, "<h3>$1</h3>");
  text = text.replace(strong_regex, "<strong>$2</strong>");
  text = text.replace(em_regex, "<em>$2</em>");
  text = text.replace(image_regex, '<img src="$2" alt="$1">');
  text = text.replace(link_regex, '<a href="$2">$1</a>');
  text = text.replace(quote_regex, "<blockquote>$1</blockquote>");

  return text;
}

inputArea.addEventListener("input", () => {
  let functionResult = "";
  htmlArea.textContent = "";
  outputArea.innerHTML = "";
  functionResult = convertMarkdown();
  htmlArea.textContent = functionResult;
  outputArea.innerHTML = functionResult;
});
