// THỰC HÀNH 1. Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.

let Input1 = "abcdef";
let Ouput1 = (Input1) => Input1.split("").reverse().join("");
console.log(Ouput1(Input1));





// THỰC HÀNH 2. Viết một function xoá các phần từ trùng lặp trong một mảng các số:

let Input2 = [1, 2, 3, 5, 4, 2, 6, 4];
let InputRemoveDup = (Input2) => {
  let Ouput2 = [];
  // let Ouput23 = [];
  Input2.forEach((item) => {
    !Ouput2.includes(item) ? Ouput2.push(item) : Ouput2
    // Ouput23.push(Input2.lastIndexOf(item))
  });
  return Ouput2;
}
console.log(InputRemoveDup(Input2));




// THỰC HÀNH 3.Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:

let Input3 = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]
let maxDup = (Input3) => {
  let Ouput3 = {};
  Input3.forEach((keys) => Ouput3[keys] = ++Ouput3[keys] || 1);
  // console.log(Ouput3);
  let findMaxKeys = Object.keys(Ouput3).reduce((a, b) => Ouput3[a] > Ouput3[b] ? a : b);
  // console.log(findMaxKeys);
  let Ouput4 = {
    value: parseInt(findMaxKeys),
    count: Ouput3[findMaxKeys]
  }
  return Ouput4;
}
console.log(maxDup(Input3));




// THỰC HÀNH 4. Viết một ứng dụng web danh bạ có giao diện và yêu cầu như sau:

function add_child() {
  let home = document.getElementById("home");

  let divbiger = document.getElementById("list");

  let divbig = document.createElement("div");

  let div1 = document.createElement("div");
  let div2 = document.createElement("div");

  let node11 = document.getElementById("inputName").value;
  let node22 = document.getElementById("inputNumber").value;
  let node1 = document.createTextNode(node11);
  let node2 = document.createTextNode(node22);

  div1.appendChild(node1);
  div2.appendChild(node2);

  divbig.appendChild(div1);
  divbig.appendChild(div2);

  divbiger.appendChild(divbig);

  home.appendChild(divbiger);

  divbig.classList.add("col-sm-12");
  divbig.classList.add("phone");
  div1.classList.add("col-sm-9");
  div1.classList.add("name");
  div2.classList.add("col-sm-3");
  div2.classList.add("number");
};


function sortTable() {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("list");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByClassName("phone");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByClassName("name")[0];
      y = rows[i + 1].getElementsByClassName("name")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
};

function myFunction() {
  let input, filter, list, phone, name, i, txtValue;
  input = document.getElementById("inputSearch");
  filter = input.value.toUpperCase();
  list = document.getElementById("list");
  phone = list.getElementsByClassName("phone");
  for (i = 0; i < phone.length; i++) {
    name = phone[i].getElementsByClassName("name")[0];
    if (name) {
      txtValue = name.textContent || name.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        phone[i].style.display = "";
      } else {
        phone[i].style.display = "none";
      }
    }
  }
};



function removeChildDup() {
  let numberList = document.getElementsByClassName("number");
  let numberListDel = [];
  let numberListDelDup = [];
  let numberListDelDupFil = [];

  for (let index = 0; index < numberList.length; index++) {
    numberListDel.push(numberList[index].outerText);
    // console.log(numberListDel);
  }

  numberListDel.forEach((item) => {
    !numberListDelDup.includes(item) ? numberListDelDup.push(item) : numberListDelDupFil.push(numberListDel.lastIndexOf(item))
  });
  // console.log(numberListDelDupFil);
  
  for (let index = 0; index < numberListDelDupFil.length; index++) {
    let delPhone = document.getElementsByClassName("phone");
    let list = document.getElementById("list");
    list.removeChild(delPhone[numberListDelDupFil[index]]);
    // console.log(list.removeChild(delPhone[numberListDelDupFil[index]]));
  }
}
