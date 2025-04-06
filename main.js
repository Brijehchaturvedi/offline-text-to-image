<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Offline Text to Image AI Tool</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>🖼️ Text to Image Generator (Offline)</h1>
    <input type="text" id="prompt" placeholder="Enter your prompt here..." />
    <button onclick="generateImage()">Generate Image</button>
    <div id="loader" class="hidden">⏳ Generating...</div>
    <div id="result"></div>
  </div>

  <!-- Load TinyT2I WASM-based AI engine -->
  <script src="t2i.js"></script>
  <script>
    async function generateImage() {
      const prompt = document.getElementById('prompt').value;
      const resultDiv = document.getElementById('result');
      const loader = document.getElementById('loader');

      if (!prompt) {
        alert("Please enter a prompt");
        return;
      }

      loader.classList.remove('hidden');
      resultDiv.innerHTML = '';

      try {
        const imageBlob = await window.t2i.generate(prompt);
        const imageURL = URL.createObjectURL(imageBlob);
        loader.classList.add('hidden');
        resultDiv.innerHTML = `<img src="${imageURL}" alt="Generated Image" />`;
      } catch (err) {
        loader.classList.add('hidden');
        alert("Error generating image: " + err.message);
      }
    }
  </script>
</body>
</html>
