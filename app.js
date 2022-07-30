const gifForm = document.querySelector('#searchGif');
const gifInput = document.querySelector('#keyTerm');
const gifList = document.querySelector('.gifs');
const remove = document.querySelector('.remove');

gifForm.addEventListener('submit', function(e){
    e.preventDefault();
    getData(gifInput.value);
    gifInput.value = ' ';
})

remove.addEventListener('click', function(e){
    e.preventDefault();
    gifList.innerHTML = '';
})

async function getData(searchTerm) {
    let resultsCount = 0;
    try {
    const _key = 'JLWCjAgkiycv4APB05yItNNNlt7CHPId';
    const term = searchTerm;
    const response = await axios.get('https://api.giphy.com/v1/gifs/search',
        {params:
            {
                q: term,
                api_key: _key
            }
        });

        for(let gif of response.data.data){
            resultsCount++
            console.log(gif);
        }
        let random = Math.floor(Math.random() * resultsCount);
        const newLi = document.createElement('LI');
         newLi.classList.add('gifLi');
         newLi.innerHTML = (`<img src='${response.data.data[random].images.original.url}' width=300 height=150>`)
         gifList.append(newLi);


    } catch(e) {
        console.log('No Gifs found for your search!')
    }
}
