const baseUrl= 'https://swapi.dev/api/people/'
async function getUsers() {
    try {
        let res = await fetch(baseUrl);
        return await res.json();
    } catch (error) {
        console.log(error);
    } 
}
async function declareUsers() {
    let users = await getUsers();
    console.log(users)
   let html = '';
    users.results.forEach((user,index) => {
        let htmlSegment = `
        <div class='center'>
        <img src="./images/./woman.jpg" >
        
        <div class="panel-group">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a data-toggle="collapse" href="#collapse-${index}">${user.name}</a>
                </h4>
              </div>
              <div id="collapse-${index}" class="panel-collapse collapse">
                <ul class="list-group">
                  <li class="list-group-item"><span>Name</span> : ${user.name}</li>
                  <li class="list-group-item"<span>Gender</span> : ${user.gender}</li>
                  <li class="list-group-item"><span>Height</span> : ${user.height}</li>
                </ul>
                <div class="panel-footer">Footer</div>
              </div>
            </div>
          </div>
        </div>
          `;
        html += htmlSegment;
    });
    let character = document.querySelector('.character');
    character.innerHTML = html
}
declareUsers();