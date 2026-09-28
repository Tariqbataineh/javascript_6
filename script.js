const menuDiv = document.getElementById("menu");


fetch("menu.json")

.then(response => response.json())

.then(data => { 
    localStorage.setItem("menu", JSON.stringify(data));

    for(let i = 0; i < data.length; i++){

        menuDiv.innerHTML += `
        
        <div>
            <h3>${data[i].name}</h3>

            <p>Price: ${data[i].price}</p>
           
            <p> Available:  ${data[i].availability}  </p>  </div>  `;  }});