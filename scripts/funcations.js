const getvalue = (elementid) => {
   let value = document.getElementById(elementid).value;

   value = parseFloat(value);
   document.getElementById(elementid).value = "";

   return value;
};

const setInnertext = (elementid, setvalue) => {
   let setid = document.getElementById(elementid);
   let value = setvalue.toFixed();
   setid.innerText = value;
};

const addcalcutaion = (areaname, base, height, areavalue) => {
   let setelement = document.getElementById("add-calculations");
   let li = document.createElement("li");
   li.innerHTML = `${areaname} 1/<sub>2</sub> x ${base} x ${height} = ${areavalue}cm<sup>2</sup> `;
   li.classList.add("bg-[#1090d81a]");
   li.classList.add("rounded-md");
   li.classList.add("py-2");
   li.classList.add("px-1");
   li.classList.add("lg:text-[15px]");
   li.classList.add("md:text-[12px]");

   let span = document.createElement("span");
   span.innerHTML = "&#10006";
   span.classList.add("cursor-pointer");
   span.classList.add("float-right");
   span.classList.add("text-xl");
   span.classList.add("pr-1");
   li.appendChild(span);

   setelement.appendChild(li);
   saveData();
};

document
   .getElementById("add-calculations")
   .addEventListener("click", function (event) {
      if (event.target.tagName === "SPAN") {
         event.target.parentElement.remove();
         saveData();
      }
   });

const addcalcutaionfor_baseOr_height = (areaname, base, height, areavalue) => {
   let setelement = document.getElementById("add-calculations");
   let li = document.createElement("li");
   li.innerHTML = `${areaname} ${base} x ${height} = ${areavalue}cm<sup>2</sup> `;
   li.classList.add("bg-[#1090d81a]");
   li.classList.add("rounded-md");
   li.classList.add("py-2");
   li.classList.add("px-1");
   li.classList.add("lg:text-[15px]");
   li.classList.add("md:text-[12px]");
   let span = document.createElement("span");
   span.innerHTML = "&#10006";
   span.classList.add("cursor-pointer");
   span.classList.add("float-right");
   span.classList.add("text-xl");
   span.classList.add("pr-1");
   li.appendChild(span);

   setelement.appendChild(li);

   saveData();
};

const addcalcutaionforEllipse = (areaname, base, height, areavalue) => {
   let setelement = document.getElementById("add-calculations");
   let li = document.createElement("li");

   li.innerHTML = `${areaname} 3.14 x ${base} x ${height} = ${areavalue.toFixed(
      2
   )}cm<sup>2</sup> `;
   li.classList.add("bg-[#1090d81a]");
   li.classList.add("rounded-md");
   li.classList.add("py-2");
   li.classList.add("px-1");
   li.classList.add("lg:text-[15px]");
   li.classList.add("md:text-[12px]");
   let span = document.createElement("span");
   span.innerHTML = "&#10006";
   span.classList.add("cursor-pointer");
   span.classList.add("float-right");
   span.classList.add("text-xl");
   span.classList.add("pr-1");

   li.appendChild(span);

   setelement.appendChild(li);
   saveData();
};

let element = document.getElementById("add-calculations");

const saveData = () => {
   localStorage.setItem("data", element.innerHTML);
};

const ShowData = () => {
   element.innerHTML = localStorage.getItem("data");
};
ShowData();
