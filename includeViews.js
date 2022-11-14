const SERVER = "http://127.0.0.1:5500/";

function include()
{
  const includes = document.querySelectorAll('[data-include-view]');
  includes.forEach(element =>
    {
      const includeName = element.getAttribute("data-include-view");
      const file = 'views/' + includeName + '.html';
      fetch(SERVER+file)
        .then(response => response.text())
        .then((data) =>
        {
          element.innerHTML = data;

          if(includeName==="header")
          {
            const actualPage = SERVER + element.parentElement.getElementsByClassName("categoryTitle")[0].innerText.toLowerCase().replace(/ /g, '') + ".html";
            console.log(actualPage);
            if(actualPage!==SERVER+ 'homepage.html')
            {
              const listOfA = element.getElementsByTagName("a");
        
              const a = Array.from(listOfA).find((function(a)
              {
                return a.href.toLowerCase().replace("%20", '')===actualPage;
              }));
              a.parentElement.classList.add("activePage");
            }
          }
        })
    })
}

setTimeout(include(), 0);