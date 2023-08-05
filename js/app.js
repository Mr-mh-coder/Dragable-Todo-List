alert('This site is not responsive for mobiles screen!!');

const addBtn = document.querySelector('#add_btn');
const closeBtn = document.getElementsByClassName('btn close-modal');
const modal = document.querySelector('.modal');
const submit = document.querySelector('#todo_submit');
const status = document.querySelectorAll('.status');
status.forEach(function(event){
       event.setAttribute('ondrop', 'Droping(event)');
       event.setAttribute('ondragover', 'DrangHandler(event)');
});
addBtn.addEventListener('click', function(){
   modal.style.top = '15%';
   document.querySelector('#todo_input').value = '';
});
closeBtn[0].addEventListener('click', function(){
    modal.style.top = '-50%';
});

submit.addEventListener('click', function(){
    let todoInput = document.querySelector('#todo_input').value;
    modal.style.top = '-50%';
    if(!todoInput || !isNaN(todoInput)){
         alert('Please Enter correctly!!')
    }else{
      AddTodo(todoInput);
    }

});


function AddTodo(newTodo){
  const newDiv = document.createElement('div');
  newDiv.className = 'todo';
  newDiv.setAttribute('id', newTodo);
  newDiv.setAttribute('draggable', 'true');
  newDiv.append(newTodo);
  const newSpan = document.createElement('span');
  newSpan.className = 'close';
  newSpan.innerHTML = '&times;';
  newDiv.append(newSpan);
  const statusColumn = document.querySelector('.status');
  statusColumn.append(newDiv);
  newSpan.addEventListener('click', function(){
    newDiv.remove();
  });
  newDiv.addEventListener('dragstart', function(event){
    event.dataTransfer.setData('elemID', event.target.id);
    })

  
}

function Droping(event){
 let targetId = event.dataTransfer.getData('elemID');
 let targetElem = document.getElementById(targetId);

 event.target.append(targetElem);
}

function DrangHandler(event){
  event.preventDefault()
}