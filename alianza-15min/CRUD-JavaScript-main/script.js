const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sID = document.querySelector('#m-id')
const sName = document.querySelector('#m-name')
const sSchedule = document.querySelector('#m-schedule')
const sStartdate = document.querySelector('#m-startdate')
const sGoals = document.querySelector('#m-goals')
const sProfile = document.querySelector('#m-profile')
const sMaterials = document.querySelector('#m-materials')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sID.value = itens[index].id
    sName.value = itens[index].name
    sSchedule.value = itens[index].schedule
    sStartdate.value = itens[index].startdate
    sGoals.value = itens[index].goals
    sProfile.value = itens[index].profile
    sMaterials.value = itens[index].materials
    id = index
  } else {
    sID.value = ''
    sName.value = ''
    sSchedule.value = ''
    sStartdate.value = ''
    sGoals.value = ''
    sProfile.value = ''
    sMaterials.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.schedule}</td>
    <td>${item.startdate}</td>
    <td>${item.goals}</td>
    <td>${item.profile}</td>
    <td>${item.materials}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sID.value == '' || sName.value == '' || sSchedule.value == ''|| sStartdate.value == ''
  || sGoals.value == ''|| sProfile.value == ''|| sMaterials.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].id = sID.value
    itens[id].name = sName.value
    itens[id].schedule = sSchedule.value
    itens[id].startdate = sStartdate.value
    itens[id].goals = sGoals.value
    itens[id].profile = sProfile.value
    itens[id].materials = sMaterials.value
  } else {
    itens.push({'id': sID.value, 'name': sName.value, 'schedule': sSchedule.value, 'startdate': sStartdate.value
    , 'goals': sGoals.value, 'profile': sProfile.value,  'materials': sMaterials.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()
