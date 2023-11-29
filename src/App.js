// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import {useContext, createContext, useState, useEffect} from 'react'
import {HashRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom'

export default function App(){
	return (
		<div>
			<Snippet/>
			<hr></hr>
			<Snippet2 />
			<hr></hr>
			<Snippet3></Snippet3>
			<hr></hr>
			<Snippet4/>
			<hr></hr>
			<Snippet5/>
			<hr></hr>
			<Snippet6></Snippet6>
			<hr></hr>
			<SnippetTest></SnippetTest>
			<hr></hr>
			<Snippet7></Snippet7>
			<hr></hr>
			<Snippet8></Snippet8>
			<hr></hr>
			<Snippet9></Snippet9>
			<hr></hr>
			<Snippet10></Snippet10>
			<hr></hr>
			<Snippet11></Snippet11>
			<hr></hr>
			<Snippet12></Snippet12>
			<hr></hr>
			<Snippet13></Snippet13>
			<hr></hr>
			<Snippet14></Snippet14>
			<hr></hr>
		</div>
	)
}

function Snippet(){
  	return <h1>hello again</h1>
}

function Snippet2(){
  	return <h2>another hello</h2>
}

function Snippet3(){
	return(
		<form>
			<h1>google</h1>
			<input
				type="search"
				id="search"
				name="q"
				className="class1 class2"
				style={{outline: "none"}}
				placeholder="test"
				autoComplete="off"
			/>
		</form>
	)
}

function Snippet4(){
	return(
		<div>
			<h3>jsx fragments</h3>
			<ul>
				<li>item1</li>
				<li>item2</li>
				<li>item3</li>
				<li>item4</li>
			</ul>
		</div>
	)
}

function Snippet5(){
	const cat = {
		name: "aa",
		age: 2,
		home: null,
		sound: function(){
			return "ss"
		}
	}
	
	return(
		<ul>
			<li>name: {cat.name}</li>
			<li>age: {cat.age}</li>
			<li>home: {cat.home}</li>
			<li>sound: {cat.sound()}</li>
		</ul>
	)
}

function Snippet6(){
	return(
		<>
			<h2>conditionals</h2>

			<h4>&& (and)</h4>
			<p>{true && "condition1"}</p>
			<p>{false && "condition2"}</p>

			<h4>|| (or)</h4>
			<p>{true || "condition1"}</p>
			<p>{false || "condition2"}</p>

			<h4>? (ternary)</h4>
			<p>{true ? "condition1" : "condition2"}</p>
			<p>{false ? "condition1" : "condition2"}</p>
		</>
	)
}

function SnippetTest(){
	return <h1>snippet test</h1>
}

function Snippet7(){
	const beers = [
		{
			name: "qq",
			origin: "ww"
		},
		{
			name: "aa",
			origin: "ss"
		},
		{
			name: "zz",
			origin: "xx"
		}
	]

	const beerList = beers.map((beer) => 
		<li key={beer.name}>{beer.name}, {beer.origin}</li>
	)
	
	return(
		<>
			<h1>beers</h1>
			<ul>
				{beerList}
			</ul>
		</>
	)
}

function Snippet8(){


	// [1,2,3,4,5]
	// [[1,2], [3,4], [5,6]] [2][0]

	// let test = {
	// 	key: "value",
	// 	key2: "value2",
	// 	key3: "value3"
	// }

	// test.key2
	// test[key3]


	const beers = [	{name: "qq",origin: "ww",available: true},
					{name: "aa",origin: "ss",available: false},
					{name: "zz",origin: "xx",available: true}]

	// for(let i = 0; i < beers.length; i++){
	// 	<tr key={beer[i].name}>
	// 		<td>{beer[i].name}</td>
	// 		<td>{beer[i].origin}</td>
	// 		<td>{beer[i].available ? "yes" : "no"}</td>
	// 	</tr>
	// }

	const beerTable = beers.map((beer) => {
		return(
			<tr key={beer.name}>
				<td>{beer.name}</td>
				<td>{beer.origin}</td>
				<td>{beer.available ? "yes" : "no"}</td>
			</tr>
		)
	})

	return(
		<>
			<h1>beer table</h1>
			<table border="1">
				<tr>
					<th>name</th>
					<th>origin</th>
					<th>available</th>
				</tr>
				{beerTable}
			</table>
		</>
		
	)
}

function Video({video}){
	return(
		<>
			<h1>{video.id}</h1>
			<h3>{video.title}</h3>
			<img src={video.source} alt="cat"></img>
		</>
	)
}

function Comments({comments}){
	let comment = comments.slice(0).reverse().map((c) => {
		return <li>{c.id} && {c.content}</li>
	})

	return(
		<ul>
			{comment}
		</ul>
	)
}

function SuggestedVideo({sv}){
	let sugvid = sv.map((s) => {
		return <li>{s.id} && {s.content}</li>
	})

	return(
		<ul>
			{sugvid}
		</ul>
	)
}


function Snippet9(){
	const video = {
		id: 'v0',
		title: 'title a',
		source: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGfpQ3m-QWiXgCBJJbrcUFdNdWAhj7rcUqjeNUC6eKcXZDAtWm'
	}
	
	const comments = [
		{id: 'c1', content: 'content1'},
		{id: 'c2', content: 'content2'},
		{id: 'c3', content: 'content3'}
	]
	
	const suggestedVideos = [
		{id: 'v1', content: 'content11'},
		{id: 'v2', content: 'content22'},
		{id: 'v3', content: 'content33'}
	]

	return(
		<>
			<h2>youtube</h2>
			<Video video={video}></Video>

			<hr></hr>

			<h4>comments</h4>
			<Comments comments={comments}></Comments>

			<hr></hr>

			<h4>suggested</h4>
			<SuggestedVideo sv={suggestedVideos}></SuggestedVideo>
		</>
	)
}

function Snippet10(){
	let [sub, setSub] = useState(true)

	function subFunc(){
		setSub(!sub)
	}

	return(
		<>
			<h1>sub button</h1>
			<button onClick={subFunc}>{sub ? "sub now": "subscribing"}</button>
		</>
	)
}

function Home(){
	return <h1>home</h1>
}

function Posts(){
	return(
		<>
			<h1>posts</h1>
			<ul>
				<li>
					<Link to="/posts/post/p0">post 1</Link>
				</li>
				<li>
					<Link to="/posts/post/p1">post 2</Link>
				</li>
			</ul>
		</>
	)
}

function Post(){
	const {postId} = useParams()

	return(
		<>
			<h1>title</h1>
			<p>{postId}</p>
		</>
	)
}

function About(){
	return <h1>about</h1>
}

function NotFound(){
	return <h1>404 not found</h1>
}

function Snippet11(){
	return(
		<Router>
			<nav>
				<ul>
					<li>
						<Link to="/">home</Link>
					</li>
					<li>
						<Link to="/about">about</Link>
					</li>
					<li>
						<Link to="/posts">posts</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="about" element={<About></About>}></Route>
				<Route path="posts" element={<Posts></Posts>}></Route>
				<Route path="posts/post/:postId" element={<Post></Post>}></Route>
				<Route path="*" element={<NotFound></NotFound>}></Route>
			</Routes>
		</Router>
	)
}

const AuthContext = createContext()

function AuthProvider({children}){
	const [user, setUser] = useState(null)

	const value = {user, setUser}

	return(
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}

function AuthStatus(){
	const {user, setUser} = useContext(AuthContext)

	return user ? (
		<p>
			hello {user}. {"\t\t"}
			<button onClick={() => setUser(null)}>logout</button>
		</p>
	) : (
		<p>log in</p>
	)
}

function AuthRequired({children}){
	let {user, setUser} = useContext(AuthContext)
	let [username, setUsername] = useState("")

	function handleSubmit(e){
		e.preventDefault()

		setUser(username)
	}

	if(!user){
		return(
			<form onSubmit={handleSubmit}>
				<h1>login</h1>
				<input
					type="text"
					name="username"
					onChange={(e) => setUsername(e.target.value)}
					required
				>
				</input>
				<button type="submit">login</button>
			</form>
		)
	}

	return children
}

function Home1(){
	return <h1>home 1</h1>
}

function Posts1(){
	return(
		<>
			<h1>posts 1</h1>
			<ul>
				<li>
					<Link to="/post/p0">post 1</Link>
				</li>
				<li>
					<Link to="/post/p1">post 2</Link>
				</li>
			</ul>
		</>
	)
}

function Post1(){
	const {postId} = useParams()

	return(
		<>
			<h1>post 1</h1>
			<p>{postId}</p>
		</>
	)
}

function NotFound1(){
	return <h1>not found 1</h1>
}

function Snippet12(){
	return(
		<>
			<Router>
				<AuthProvider>
					<nav>
						<ul>
							<li>
								<Link to="/">home1</Link>
							</li>
							<li>
								<Link to="/posts">posts1</Link>
							</li>
						</ul>
					</nav>

					<AuthStatus></AuthStatus>

					<Routes>
						<Route index element={<Home1></Home1>}></Route>
						<Route path="posts" element={<Posts1></Posts1>}></Route>
						<Route path="post/:postId" element={
							<AuthRequired>
								<Post1></Post1>
							</AuthRequired>
						}></Route>
						<Route path="*" element={<NotFound1></NotFound1>}></Route>
					</Routes>
				</AuthProvider>
			</Router>
		</>
	)
}

function Snippet13(){
	const [count, setCount] = useState(0)

	useEffect(() => {
		console.log("rendering time: " + new Date().toLocaleTimeString())
	}, [])

	return(
		<>
			<h3>use effect hook</h3>
			<p>{count}</p>
			<button onClick={() => setCount(count+1)}>+</button>
		</>
	)
}

function fetchData(){
	const DATA = {
		username: "profile username",
		image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2v8jGQFEHwDE0bEIm2Sofs-0n5RUWyiNtY_JQw46IozVB-YPU",
		bio: "profile bio"
	}

	const promise = new Promise((res, rej) => {
		setTimeout(() => {
			res(DATA)
		}, 2000)
	})

	return promise
}

function Snippet14(){
	const [error, setError] = useState(null)
	const [isLoaded, setIsLoaded] = useState(false)
	const [profile, setProfile] = useState(null)

	useEffect(() => {
		fetchData()
			.then(data => {
				setProfile(data)
			})
			.catch(error => {
				setError(error)
			})
			.finally(() => setIsLoaded(true))
	}, [])

	if(error){
		return <p>fetching profile failed</p>
	}

	if(!isLoaded){
		return <p>fetching profile...</p>
	}

	return(
		<>
			<h1>profile</h1>
			<img
				src={profile.image}
				alt={profile.username}
				style={{
					width: '100px',
					height: '100px',
					objectFit: 'cover',
					border: '1px solid blue',
					borderRadius: '50%'
				}}
			></img>
			<h3>{profile.username}</h3>
			<p>{profile.bio}</p>
		</>
	)
}