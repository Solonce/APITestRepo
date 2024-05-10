const url = window.location.href
const file_location = 'https://Solonce.github.io/APITestRepo/assignSEO.js'

function setMetaTag(name, content) {
	let metaTag = document.querySelector(`meta[name="${name}"]`);
	if (metaTag) {
		metaTag.content = content
	} else {
		metaTag = document.createElement('meta');
		metaTag.name = name
		metaTag.content = content
		if(metaTag.content != ""){
			document.head.appendChild(metaTag)
		}
	}
}

fetch(file_location)
.then(response => response.json())
.then(data => {
	setMetaTag("keywords", data[url].keywords);
	setMetaTag("description", data[url].description);
})
.catch(error => console.error("Error loading the keywords:", error));