let cont = document.getElementById("post-container");
document.getElementById("search-btn").addEventListener("click", gettingData);
async function gettingData() {
  try {
    cont.innerHTML = "";
    let myval = document.getElementById("inp-val").value || " ";
    let myurl = `https://pixabay.com/api/?key=26024658-799a3442a3820e22653a95e85&q=${myval}&image_type=photo&pretty=true`;
    let res = await fetch(myurl);
    let mydata = await res.json();
    imageDisplay(mydata.hits);
  } catch (error) {
    console.log("error:", error);
  }
}
gettingData();
const imageDisplay = (data) => {
  data.forEach((item) => {
    let div = document.createElement("div");
    div.id = "data-cont";
    let img = document.createElement("img");
    img.src = item.previewURL;
    let div2 = document.createElement("div");
    div2.id = "data-post";
    let p = document.createElement("p");
    p.innerText = item.tags;
    let div6 = document.createElement("div");
    div6.id = "i-tags";
    let div3 = document.createElement("div");
    div3.innerHTML = `<i class="fas fa-arrow-alt-circle-up"></i> ${item.likes} <i class="fas fa-arrow-circle-down"></i>`;
    let div4 = document.createElement("div");
    div4.innerHTML = `<i class="fas fa-comment-alt"></i> ${item.comments}`;
    let div5 = document.createElement("div");
    div5.innerHTML = `<i class="fas fa-eye"></i> ${item.views}`;
    div6.append(div3, div4, div5);
    div2.append(p, div6);
    div.append(img, div2);
    cont.append(div);
  });
};
