function include()
{
    const SEPARATOR = "/";
    const SERVER = "http://127.0.0.1:5500/";
    const POSTSFOLDER = "posts/";
    const EXTENSION = ".json";

    const categories = document.querySelectorAll('[data-include-category]');

    categories.forEach(element =>
    {
        const category = element.getAttribute("data-include-category");
        const post = element.getAttribute("data-include-post");

        if(category && post)
        {
            fetch(SERVER + POSTSFOLDER + category + SEPARATOR + post + EXTENSION)
                .then(response => response.text())
                .then((data) =>
                {
                    const postDatas = JSON.parse(data);
                    
                    const title = document.createElement("h3");
                    title.classList.add("postTitle");
                    title.textContent = postDatas.postTitle;
                    
                    const infos = document.createElement("ul");
                    infos.classList.add("postInfos");
                    const date = document.createElement("li");
                    date.classList.add("date");
                    date.textContent = postDatas.postInfos.date;
                    const author = document.createElement("li");
                    author.classList.add("author");
                    author.textContent = postDatas.postInfos.author;
                    infos.appendChild(date);
                    infos.appendChild(author);

                    const content = document.createElement("p");
                    content.classList.add("content");
                    content.textContent = postDatas.content;

                    element.appendChild(title);
                    element.appendChild(infos);
                    element.appendChild(content);
                })
        }
    })
}

setTimeout(include(), 0);