const container = document.getElementById("container")

function addCard(textcontent,linkcontent) {
    const kart = document.createElement("div");
    const text = document.createElement("div");
    const link = document.createElement("p");
    const link1 = document.createElement("p")

    text.innerHTML = textcontent;
    link.href = "id.html#" + linkcontent;
    link.innerHTML = linkcontent;
    kart.append(text,link);
    container.append(kart);
    container.style.cssText=`
    display:flex;
    flex-direction:column;
    gap:20px;

    `
    kart.style.cssText=`
    display:flex;
    flex-direction:column;
    gap:8px;
    width:40%;
    margin:auto;
    border:1px solid hotpink;
    padding:20px;
    font-size:20px;
    color:pink;

    `   
}

fetch("http://localhost:3000/comments1")
.then((res) => res.json())
.then((data) => {
    data.forEach((kart) =>{
        addCard(kart.body, kart.postId);
    });
});