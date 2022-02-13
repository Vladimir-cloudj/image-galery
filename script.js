const navbar = document.getElementById('nav');
const brandName = document.getElementById('brand');
const searchKey = document.getElementById('searchKey');
// const searchBtn = document.getElementById('searchBtn');
const searchQuery = document.getElementById('searchQuery');
const column1 = document.getElementById('col-1');
const column2 = document.getElementById('col-2');
const column3 = document.getElementById('col-3');
const errorGrid = document.getElementById('errorGrid');
const modalBody = document.getElementById('modalBody');
const imageViewLink = document.getElementById('imageViewLink');

let orderByValue = ''

Api_Key = 'gDzIgtDcB7QqubeHOaeN-SxV1tBxPQF_LE1WuEeOjKQ'
apiUrl = 'https://api.unsplash.com/photos/?client_id=' + Api_Key + '&per_page=30&page=1';
searchUrl = 'https://api.unsplash.com/search/photos/?client_id=' + Api_Key + '&per_page=30&page=1&query=';

imageURLS = [];

window.onload = (event) => {
	fetchData();
}

const fetchData = async () => {
	const response = await (fetch(apiUrl).catch(handleError));
	const myJson = await response.json();

	var imageArrays = myJson;
	// console.log(myJson);
	imageArrays.forEach(element => {
		// console.log(element);
		// console.log(element.urls.regular);
		imageURLS.push(element.urls.regular);
	});
	displayImage()
}

var handleError = function(err) {
	console.warn(err);
	errorGrid.innerHTML = '<h4>Unable to fetch data ' + err + ' </h4>'
}

function displayImage() {
	errorGrid.innerHTML='';
	if (imageURLS.length === 0) {
		errorGrid.innerHTML = '<h4>Unable to fetch data ' + err + ' </h4>'
		return;
	}
	column1.innerHTML = '';
	column2.innerHTML = '';
	column3.innerHTML = '';

	imageURLS.forEach((url,index) => {
		var image = document.createElement('img');
		image.src = url;
		image.className = 'mt-3';
		image.setAttribute('width', '100%');
		image.setAttribute('onckick', 'displayFullImage(this.src)');

		if ((index + 1) % 3 === 0) {
			column1.appendChild(image);
		}
		if ((index + 2) % 3 === 0) {
			column2.appendChild(image);
		}
		if ((index + 3) % 3 === 0) {
			column3.appendChild(image);
		}
	});
}
function displayFullImage(src) {
	var image = document.createElement('img');
	image.src = src;
	image.className = 'mt-3';
	image.setAttribute('width', '100%')

	modalBody.innerHTML = '';
	modalBody.appendChild(image);
	imageViewLink.href = src;

	var myModal = new bootstrap.Modal(document.getElementById('modal'), {
		
	})
	myModal.show();
}

// searchBtn.addEventListener('click', function() {
// 	if (searchKey.value != '') {
// 		// searchUrl += searchKey.value;
// 		fetchSearchData(searchKey.value);
// 	}
// });


const fetchSearchData = async (key) => {

	imageURLS = [];
	const response = await (fetch(searchUrl + key).catch(handleError));
	const myJson = await response.json();

	console.log(myJson);
	var imageArrays = myJson.results;
	imageArrays.forEach(element => {
		console.log(element.urls.regular);
		imageURLS.push(element.urls.regular);
	});
	displayImage()
}

function orderBy() {
	orderByValue = document.getElementById('orderby').value
	imageURLS = [];
	if (searchkey!='') {
		fetchSearchData();
	} else {
		fetchData();
	}
}

searchKey.onsubmit = function(event) {
	// var searchValue = this.search.value;
	// // process
	// return false;
	// event.preventDefault()
}
searchKey.addEventListener('keydown', function(event) {
	if (event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
		// console.log('ffffffffffffffff');
		// searchBtn.click();
		fetchSearchData(searchKey.value);
	}
})




let result1 = 'Вёрстка +10 \nна странице есть несколько фото и строка поиска +5 \n в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5'
let result2 = 'При загрузке приложения на странице отображаются полученные от API изображения +10 \n Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API +10'
let result3 = 'Поиск +30 \n при открытии приложения курсор находится в поле ввода +5 \n есть placeholder +5 \n автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) +5 \n поисковый запрос можно отправить нажатием клавиши Enter +5 \n после отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода +5 \n в поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5(не сделал)'
let result4 = 'Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10(+5)'
let result5 = 'итого: 60'
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
