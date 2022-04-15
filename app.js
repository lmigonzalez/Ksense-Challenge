const api = 'https://jsonplaceholder.typicode.com/'
const waiting = document.getElementById('waiting')

let users =[ {
	name: 'luis',
	username: 'luismi',
	email: 'luismi@gmail.com',
	address: 'miami, fl',
	phone: 1234556789,
	website: 'luismi.com'

}]

const getUsers = () =>{

	waiting.innerText = " Waiting for data"

	fetch(`${api}users`)
	.then(res=>{
		return res.json()
	})
	.then(data=>{
		// console.log(data)
		makeUsers(data)
	})
	.catch(err=>{
		console.log(err)
	})
	.finally(() =>{ waiting.innerText = '' })
}


const makeUsers = (data)=>{
	

	data.forEach(element => {
	
		const button = document.createElement('button')
		const tr = document.createElement('tr')
		const tdName  = document.createElement('td')
		const tdUserName  = document.createElement('td')
		const tdEmail  = document.createElement('td')
		const tdPhone  = document.createElement('td')
		const tdWebsite  = document.createElement('td')

		const table = document.getElementById('table')
		


		tr.classList.add('table-row')
		tdName.classList.add('table-cell')
		tdUserName.classList.add('table-cell')
		tdEmail.classList.add('table-cell')
		tdPhone.classList.add('table-cell')
		tdWebsite.classList.add('table-cell')
		button.classList.add('button')
		

		tdName.innerText = element.name
		tdUserName.innerText = element.username
		tdEmail.innerText = element.email
		tdPhone.innerText = element.phone
		tdWebsite.innerText = element.website

		button.appendChild(tdName)
		tr.appendChild(button)
		tr.appendChild(tdUserName)
		tr.appendChild(tdEmail)
		tr.appendChild(tdPhone)
		tr.appendChild(tdWebsite)
		table.appendChild(tr)

		button.value = element.id

		button.addEventListener('click',() =>{
			getPost(parseInt(button.value, element.name))
		})
	});

} 

const getPost = (value, userName) =>{
	const posts = document.getElementById('post-section')
	fetch(`${api}posts`)
	.then(res=>{
		return res.json()
	})
	.then(data=>{
		
		let result = data.filter(element=>{
			return element.userId === value
		})
		posts.innerHTML = ""
		result.forEach(element=>{
			const div = document.createElement('div')
			const h3 = document.createElement('h3')
			const p = document.createElement('p')


			div.classList.add('post')
			
			
			h3.innerText = element.title
			p.innerText = element.body
			
			div.appendChild(h3)
			div.appendChild(p)
			
			posts.appendChild(div)
			
		})


	})
	.catch(err=>{
		console.log(err)
	})
	

}

getUsers()