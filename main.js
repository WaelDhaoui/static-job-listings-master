var li = document.querySelectorAll("li > ul li");

[...li].forEach(function(e) {
    e.addEventListener("click", function() {
        var search = document.querySelector(".search ul");
        var exist = 0;
        if(search.hasChildNodes()) {
            var ele = [...search.children];
            for(let i=0;i<ele.length; i++) {
                if(ele[i].textContent.trim().toUpperCase() == e.textContent.toUpperCase()) {
                    exist ++;
                    break;
                }
            }
        }
        if(exist == 0) {
            search.parentElement.style.display = "flex"; 
            var l = document.createElement("li");
            l.append(e.textContent);
            var img = document.createElement("img");
            img.src = "images/icon-remove.svg";
            img.alt = "remove";
            l.append(img);
            search.append(l);
            img.onclick = function() {
                if(this.parentElement.parentElement.children.length == 1)
                    search.parentElement.style.display = "none";
                this.parentElement.remove();
            }

            var show = [...document.querySelectorAll("body > ul > li")];
            var tabS = [...search.children];
            for(let i=0; i<show.length; i++) {
                var tabLi = [...show[i].lastElementChild.children];
                for(let j=0;j<tabS.length;j++) {
                    for(var k=0; k<tabLi.length; k++) {
                        if(tabS[j].textContent != tabLi[k].textContent) { 
                            show[i].style.display = "none";
                            // console.log(tabS[j].textContent + " " + tabLi[i].textContent)
                        } else {
                            show[i].style.display = "flex";
                            break;
                        }
                    }
                    if(k>=tabLi.length)
                        break;
                }
            }
            
        }
        
    })
});