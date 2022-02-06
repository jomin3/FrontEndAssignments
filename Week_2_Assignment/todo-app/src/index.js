// import "styles.css";

//object containing all the tasks
let allTasks = [];
let counter = 0;

getSelect = function (taskid) {
  reqdArray = allTasks.filter((item) => {
    return item["id"] == taskid;
  });
  let Obj = reqdArray[0];
  return Obj;
};
//function to edit task
editTask = function (taskid) {
  reqdArray = allTasks.filter((item) => {
    return item["id"] == taskid;
  });
  if (reqdArray[0]["editStatus"] == false) {
    reqdArray[0]["editStatus"] = true;
    let editEL = reqdArray[0]["editEL"];

    // editEL.removeAttribute("readonly", 0);
    editEL.classList.remove("readonly");
  } else {
    console.log("inelse");
    reqdArray[0]["editStatus"] = false;
    let editEL = reqdArray[0]["editEL"];
    // editEL.setAttribute("readonly", "readonly");
    editEL.classList.add("readonly");
  }
};

MarkComplete = function (taskid) {
  reqdArray = allTasks.filter((item) => {
    return item["id"] == taskid;
  });
  let Obj = reqdArray[0];
  if (Obj.status == false) {
    Obj.status = true;
    let statusEl = Obj.statusEL;
    statusEl.setAttribute("src", "src/completed.png");
  } else {
    Obj.status = false;
    let statusEl = Obj.statusEL;
    statusEl.setAttribute("src", "src/circle.png");
  }
  updateRem();
};

deleteTask = function (taskid) {
  reqdArray = allTasks.filter((item) => {
    return item["id"] == taskid;
  });
  let Obj = reqdArray[0];
  console.log(Obj);
  Obj.taskpresent = false;
  Obj.ParentEL.remove();
  updateRem();
};

updateRem = function () {
  //   let Obj = getSelect(taskid);
  reqdArray = allTasks.filter((item) => {
    return item["taskpresent"] == true && item["status"] == false;
  });
  document.getElementById(
    "updation"
  ).textContent = `${reqdArray.length} tasks left `;
};

//adding the task and assigning event listeners and ids to each task and pushing this info to objects array
document.querySelector(".adder").addEventListener("click", () => {
  counter++;
  let taskid = "task" + counter;
  let input = document.getElementById("task").value;
  document.getElementById("task").value = "";
  let parentDiv = document.querySelector(".todo");
  let newTask = document.createElement("div");
  newTask.setAttribute("class", "addedtask");
  newTask.setAttribute("id", "taskid");
  let imgone = document.createElement("img");
  imgone.setAttribute("src", "src/circle.png");
  imgone.setAttribute("id", "taskid");

  let imgtwo = document.createElement("img");
  imgtwo.setAttribute("src", "src/minus-button.png");
  imgtwo.setAttribute("id", "taskid");
  imgtwo.addEventListener("click", () => {
    console.log(taskid);
    editTask(taskid);
  });

  let imgthree = document.createElement("img");
  imgthree.setAttribute("src", "src/check.png");
  imgthree.setAttribute("id", "taskid");
  imgthree.addEventListener("click", () => {
    console.log("jomin");
    MarkComplete(taskid);
  });
  let imgfour = document.createElement("img");
  imgfour.setAttribute("src", "src/delete.png");
  imgfour.setAttribute("id", "taskid");
  imgfour.addEventListener("click", () => {
    console.log(parentDiv);
    deleteTask(taskid);
  });
  let content = document.createElement("input");
  content.setAttribute("type", "addtask");
  content.setAttribute("class", "readonly");
  content.setAttribute("id", "addtask");
  content.setAttribute("value", input);
  parentDiv.appendChild(newTask);
  newTask.append(imgone);
  newTask.append(content);
  newTask.append(imgtwo);
  newTask.append(imgthree);
  newTask.append(imgfour);
  //   console.log(newTask);
  let taskObject = {
    id: taskid,
    ParentEL: newTask,
    deleteEL: imgfour,
    editEL: content,
    markAsDoneEL: imgthree,
    statusEL: imgone,
    status: false,
    editStatus: false,
    taskpresent: true,
  };
  allTasks.push(taskObject);
  updateRem();
});

// document.querySelector("");
document.getElementById("clear").addEventListener("click", () => {
  reqdArray = allTasks.map((item) => {
    if (item.status == true && item.taskpresent == true) {
      let id = item.id;
      deleteTask(id);
    }
  });
});
document.getElementById("completed").addEventListener("click", () => {
  reqdArray = allTasks.map((item) => {
    if (item.status == false && item.taskpresent == true) {
      item.ParentEL.classList.add("hide");
    } else if (item.status == true && item.taskpresent == true) {
      item.ParentEL.classList.remove("hide");
    }
  });
});

document.getElementById("active").addEventListener("click", () => {
  reqdArray = allTasks.map((item) => {
    if (item.status == true && item.taskpresent == true) {
      item.ParentEL.classList.add("hide");
    } else if (item.status == false && item.taskpresent == true) {
      item.ParentEL.classList.remove("hide");
    }
  });
});

document.getElementById("all").addEventListener("click", () => {
  reqdArray = allTasks.map((item) => {
    if (item.taskpresent == true) {
      item.ParentEL.classList.remove("hide");
    }
  });
});

//JQUERY DRAGGABLE

// $(function () {
//   $("#tasklist").sortable({
//     update: function (event, ui) {
//       getIdsOfImages();
//     }, //end update
//   });
// });

// function getIdsOfImages() {
//   var values = [];
//   $(".addedtask").each(function (index) {
//     values.push($(this).attr("id").replace("task", ""));
//   });
// }
