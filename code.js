fetch("http://starlord.hackerearth.com/gamesarena")
.then(response => response.json())
.then(data => {

    var category = document.getElementById("category");

    var order = document.getElementById("order");

    var search = document.getElementById("searchByName");
    var name,orderBy,x,y,remover,k;

    category.addEventListener("change", function() {
        name = category.value;
        order.addEventListener("change", function() {
            orderBy = order.value;
            if(name === "Name") {
                if(orderBy === "Ascending") {
                    for(x=1;x<data.length;x++) {
                        for(y=1;y<data.length;y++) {
                            if(data[x].title.localeCompare(data[y].title)<0) {
                                var temp = data[x];
                                data[x]=data[y];
                                data[y]=temp;
                            }
                        }
                    }
                    remover.remove();
                    formCards(data);
                }

                if(orderBy === "Descending") {
                    for(x=1;x<data.length;x++) {
                        for(y=1;y<data.length;y++) {
                            if(data[x].title.localeCompare(data[y].title)>0) {
                                var temp = data[x];
                                data[x]=data[y];
                                data[y]=temp;
                            }
                        }
                    }
                    remover.remove();
                    formCards(data);
                }
            }
            if(name === "Platform") {
                if(orderBy === "Ascending") {
                    for(x=1;x<data.length;x++) {
                        for(y=1;y<data.length;y++) {
                            if(data[x].platform.localeCompare(data[y].platform)<0) {
                                var temp = data[x];
                                data[x]=data[y];
                                data[y]=temp;
                            }
                        }
                    }
                    remover.remove();
                    formCards(data);
                }
                if(orderBy === "Descending") {
                    for(x=1;x<data.length;x++) {
                        for(y=1;y<data.length;y++) {
                            if(data[x].platform.localeCompare(data[y].platform)>0) {
                                var temp = data[x];
                                data[x]=data[y];
                                data[y]=temp;
                            }
                        }
                    }
                    remover.remove();
                    formCards(data);
                }
            }
            if(name === "Score") {
                if(orderBy === "Ascending") {
                    for(x=1;x<data.length;x++) {
                        for(y=1;y<data.length;y++) {
                            if((data[x].score+"").localeCompare(data[y].score+"")<0) {
                                var temp = data[x];
                                data[x]=data[y];
                                data[y]=temp;
                            }
                        }
                    }
                    remover.remove();
                    formCards(data);
                }
                if(orderBy === "Descending") {
                    for(x=1;x<data.length;x++) {
                        for(y=1;y<data.length;y++) {
                            if((data[x].score+"").localeCompare(data[y].score+"")>0) {
                                var temp = data[x];
                                data[x]=data[y];
                                data[y]=temp;
                            }
                        }
                    }
                    remover.remove();
                    formCards(data);
                }
            }
        })
    })

    search.addEventListener("keydown", function() {
        newData = ["sample"];
        if(search!=' ') {
            for(k=1;k<data.length;k++) {
                if(data[k].title.toLowerCase().includes(search.value.toLowerCase())) {
                    newData.push(data[k]);
                }
            }
            remover.remove();
            formCards(newData);
        }
    });

    function formCards(modifiedData) {

        remover = getElement("div");
        remover.className = "remove";
        for(var i=1;i<modifiedData.length;i++) {

            var details = document.getElementById("game_info");

            details.appendChild(remover);

            var card = getElement("div");
            card.className = "card";

            var poster = getElement("img");
            poster.className = "game_image";
            poster.src = "https://robohash.org/"+modifiedData[i].title;

            var hr = getElement("hr");

            var title = getElement("div");
            title.id = "title";
            title.innerHTML = modifiedData[i].title;

            var platform = getElement("div");
            platform.id = "platform";
            platform.innerHTML = modifiedData[i].platform;

            var additional = getElement("div");
            additional.className = "additional";

            var table = getElement("table");

            var row1 = getElement("tr"); 

            remover.appendChild(card);
            card.appendChild(poster);
            card.appendChild(hr);
            card.appendChild(title);
            card.appendChild(platform);
            card.appendChild(additional);

            additional.appendChild(table);
            table.appendChild(row1);
            var headers = ["score", "genre", "editor"]

            for(var j=0;j<3;j++) {
                var header = getElement("td");  
                header.className = "th";
                header.innerHTML = headers[j];
                row1.appendChild(header);
            }

            var row2 = getElement("tr");

            table.appendChild(row2);


            for(j=0;j<3;j++) {
                var values = getElement("td");
                if(j==0) values.innerHTML = modifiedData[i].score;
                if(j==1) values.innerHTML = modifiedData[i].genre;
                if(j==2) {
                    var star = getElement("img");
                    star.className="star";
                    if(modifiedData[i].editors_choice === "Y") star.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";
                    else star.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png";
                    values.appendChild(star);
                }
                row2.appendChild(values);
            }
        }
        function getElement(elementName) {
            return document.createElement(elementName);
        }
    }
    formCards(data);

})
/*
console.log("new call");
$.ajax({
    url: "http://starlord.hackerearth.com/gamesarena",
    jsonp: "callback",
    dataType: "json",
  }).done(function(data) {
    if(data !== null && typeof(data) !== 'object') {
      data = JSON.parse(data);
    }  
    console.log(data);
});
*/