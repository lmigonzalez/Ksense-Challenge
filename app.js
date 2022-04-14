const api = 'https://jsonplaceholder.typicode.com/'

let users =[ {
	name: 'luis',
	username: 'luismi',
	email: 'luismi@gmail.com',
	address: 'miami, fl',
	phone: 1234556789,
	website: 'luismi.com'

}]

const getUsers = () =>{
	fetch(`${api}users`)
	.then(res=>{
		return res.json()
	})
	.then(data=>{
		console.log(data)
		makeUsers(data)
	})
	.catch(err=>{
		console.log(err)
	})
}


const makeUsers = (data)=>{
	

	data.forEach(element => {
		const tr = document.createElement('tr')
		const tdName  = document.createElement('td')
		const tdUserName  = document.createElement('td')
		const tdEmail  = document.createElement('td')
		const tdPhone  = document.createElement('td')
		const tdWebsite  = document.createElement('td')
		const table = document.getElementById('table')
		tdName.innerText = element.name
		tdUserName.innerText = element.username
		tdEmail.innerText = element.email
		
		tdPhone.innerText = element.phone
		tdWebsite.innerText = element.website
		tr.appendChild(tdName)
		tr.appendChild(tdUserName)
		tr.appendChild(tdEmail)
		tr.appendChild(tdPhone)
		tr.appendChild(tdWebsite)
		table.appendChild(tr)
	});


	
} 

getUsers()