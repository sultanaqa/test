const container = document.getElementById("container")

function addCard(textcontent,linkcontent) {
    const kart = document.createElement("div");
    const text = document.createElement("div");
    const link = document.createElement("a")

    text.innerHTML = textcontent;
    link.href = "id.html#" + linkcontent;
    link.innerHTML = "a" + linkcontent;
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

fetch("https://northwind.vercel.app/api/categories")
.then((res) => res.json())
.then((data) => {
    data.forEach((kart) =>{
        addCard(kart.name, kart.id);
    });
});