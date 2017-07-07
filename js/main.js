
function findBooks() {
	//console.log('the function runs')

	var userInput = document.getElementById('userInput')
	

	// userInput.value.innerHTML = ''

	$.ajax({
		url:"https://www.googleapis.com/books/v1/volumes?q=" + userInput.value,
		dataType: 'json',
		success: function(data){
			console.log(data)

			for(i = 0; i < data.items.length; i++) {

				var displayData = data.items[i].volumeInfo

				var newCol = document.createElement('div')
				var pic = document.createElement('img')
				var newH2 = document.createElement('h2')
				var newH3 = document.createElement('h3')
				var newH4 = document.createElement('h4')
				var newLink = document.createElement('a')

				// add classes
				newLink.className = 'btn btn-primary'
				newCol.className = 'col-md-6'
                newH2.className = 'textStyle'
                newH3.className = 'textStyle'
                newH4.className = 'textStyle'

				newH3.innerText = displayData.title
				newLink.innerText = 'Learn More'

				//add attributes
				newLink.href = displayData.infoLink
				newLink.setAttribute('target', 'blank')
                
                //display picture if there is 
				if(displayData.imageLinks){
					pic.src = displayData.imageLinks.thumbnail
				} else {
					pic.src = 'img/nobook.png'
					pic.setAttribute('width', '100')
				}

                //show an author
				if(displayData.authors) {
					newH2.innerHTML = displayData.authors[0]
				} else {
					newH3.innerHTML = 'no author found'
				}

                //display published date
				if(displayData.publishedDate) {
				newH4.innerHTML = displayData.publishedDate
				} else {
					newH4.innerHTML = 'no publish date found'
				}

				
				newCol.appendChild(pic)
				newCol.appendChild(newH2)
				newCol.appendChild(newH3)
                newCol.appendChild(newH4)
				newCol.appendChild(newLink)

				var results = document.getElementById('showResults')
				results.appendChild(newCol)

			}

		},
		type: "GET"

	})
	


}

//runs the function after click
var searchButton = document.getElementById('searchButton')
searchButton.addEventListener('click', findBooks, false)


































