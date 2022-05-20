import React, { useState } from "react";
import styled from "./Project.module.css";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import Modal from "react-modal";
const Project = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpen1, setIsOpen1] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);
	const [isOpen4, setIsOpen4] = useState(false);
	const [isOpen5, setIsOpen5] = useState(false);
	return (
		<div id="project">
			<h1 className={styled.mid}>Projects</h1>
			<div className={styled.width}>
				<div className={styled.left}>
					<img
						className={styled.img}
						src="http://charbhujatiles.com/upload/image1626182181.jpg"
						alt="logo"
					/>
				</div>
				<div className={styled.right}>
					<h4 className={styled.color}>Featured</h4>
					<h2>Urbane - Tiles + Stones</h2>
					<div className={styled.box}>
						<p>
							Urbane Tile LLP is a key player in the Indian ceramics industry.
							Urbane Tile LLP’s head office, manufacturing facilities, R&D
							department, are all located in Morbi (Gujarat) India.
							{/* <p className={styled.blue} onClick={() => setIsOpen(true)}>
								Read More
							</p> */}
						</p>
						<Modal className={styled.background} isOpen={isOpen}>
							<h1>Airbnb</h1>
							<p>
								Airbnb allows you to find places to stay directly from
								individuals in thousands of cities around the India.
							</p>
							<p>
								A website that allows users to rent or lease accommodation not
								limited to bed and breakfasts, hostels, homestays, apartments,
								rooms, or hotels.
								<h3>
									{" "}
									Tech Stack: React, Redux, Thunk, NodeJs, Mongoose, MongoDB,
									Express, Material UI, Axios
								</h3>
								A collaborative project in 5 days with 2 people
								<br />
								Roles & Responsibility: 1.A user can sign in or sing up 2.Google
								location API with google-maps to locate live places 3.i18next to
								translate a website from English to Hindi vice versa. 4.Build a
								backend with all functionality like fetching, mapping, sorting.
								5. Build Hotel List page 6.Build a host page to rent their
								property.
							</p>
							<button onClick={() => setIsOpen(false)} className={styled.btn}>
								Close
							</button>
						</Modal>
					</div>
					<h5>NodeJS || React || MongoDb || Redux || Express || Material UI</h5>
					<div className={styled.flex}>
						<a
							className={styled.size}
							href="http://www.urbane.global/"
							target="_blank"
						>
							{" "}
							<AiFillGithub className={styled.size} />
						</a>
						<a
							className={styled.size}
							href="http://www.urbane.global/"
							target="_blank"
						>
							<BiLink className={styled.size} />
						</a>
					</div>
				</div>
			</div>
			{/* ----project2 */}
			<div className={styled.width}>
				<div className={styled.left}>
					<img
						className={styled.img}
						src="https://i.pinimg.com/736x/13/ad/6d/13ad6d2b98496a16ae2d6f46bb3d9acb.jpg"
						alt="logo"
					/>
				</div>
				<div className={styled.right}>
					<h4 className={styled.color}>Featured</h4>
					<h2>Harpal Spices</h2>
					<div className={styled.box}>
						<p>
							Harpal spices is a masala manufacturing company from Bihar, India.
							With more than 500 varities of masala collections.
							{/* <p onClick={() => setIsOpen1(true)} className={styled.blue}>
								Read More
							</p> */}
						</p>
						<Modal className={styled.background} isOpen={isOpen1}>
							<h1>Haprpal Spices</h1>
							<p>
								This is the clone of LinkedIn, which is a web application
								primarily used for professional networking and career
								development. You can invite anyone to connect (and accept their
								invitations to connect with you), but they must have their own
								LinkedIn account to use the site. LinkedIn saves the connections
								that you make to a list called My Network.
							</p>
							<p>
								LinkedIn enables you to network with people and professional
								organizations in your industry.
								<h3> Tech Stack: React, Redux, Firebase, Styled-Components</h3>
								A collaborative project in 5 days with 4<br />
								people. Roles & Responsibility: Built a profile page of the
								user. Get and Post and Update data of profile page using
								firebase.
							</p>
							<button onClick={() => setIsOpen1(false)} className={styled.btn}>
								Close
							</button>
						</Modal>
					</div>
					<h5>React || Redux || Firebase || Styled-Components</h5>
					<div className={styled.flex}>
						<a
							href="https://harpalspices.com/"
							target="_blank"
							className={styled.size}
						>
							{" "}
							<AiFillGithub className={styled.size} />
						</a>
						<a
							href="https://harpalspices.com/"
							target="_blank"
							className={styled.size}
						>
							<BiLink className={styled.size} />{" "}
						</a>
					</div>
				</div>
			</div>
			{/* ----project3 */}
			<div className={styled.width}>
				<div className={styled.left}>
					<img
						className={styled.img}
						src="https://www.axwellgranito.com/wp-content/uploads/2020/02/ax.png"
						alt="logo"
					/>
				</div>
				<div className={styled.right}>
					<h4 className={styled.color}>Featured</h4>
					<h2>Axwell Granito</h2>
					<div className={styled.box}>
						<p>
							Established in the year 2016, AXWELL GRANITO PVT. LTD. has
							emerging & growing Double charge vitrified tiles brand in India.
							{/* <p onClick={() => setIsOpen2(true)} className={styled.blue}>
								Read More
							</p> */}
						</p>
						<Modal className={styled.background} isOpen={isOpen2}>
							<h1>Axwell Granito</h1>
							<p>
								Naukri.com is a recruitment platform that provides
								hiring-related services to corporates/recruiters, placement
								agencies and to company.
							</p>
							<p>
								The website allows job seekers to find the right job that
								matches their aspirations.
								<h3> Tech Stack: React, Redux, Thunk, Axios, JavaScript</h3>
								A collaborative project in 5 days with 3<br />
								people. Roles & Responsibility: Built a profile page of the
								user. Built a resume page and store information at the JSON
								server. Built a host page to post jobs with all required
								details. Built homepage with functionality.
							</p>
							<button onClick={() => setIsOpen2(false)} className={styled.btn}>
								Close
							</button>
						</Modal>
					</div>
					<h5>React || Redux || JSON server || FireBase || Thunk</h5>
					<div className={styled.flex}>
						<a
							href="https://www.axwellgranito.com/
              "
							target="_blank"
							className={styled.size}
						>
							{" "}
							<AiFillGithub className={styled.size} />
						</a>
						<a
							href="https://www.axwellgranito.com/
              "
							target="_blank"
							className={styled.size}
						>
							<BiLink className={styled.size} />{" "}
						</a>
					</div>
				</div>
			</div>
			{/* -------- project 4 */}
			<div className={styled.width}>
				<div className={styled.left}>
					<img
						className={styled.img}
						src="http://uind.in/wp-content/uploads/2016/03/14.jpg"
						alt="logo"
					/>
				</div>
				<div className={styled.right}>
					<h4 className={styled.color}>Featured</h4>
					<h2>Raja Border Tiles</h2>
					<div className={styled.box}>
						<p>
							Raja Border Tiles is an ceramic Step and Riser manufacturing
							company, producing collections which boast both innovative
							technical properties as well as innovative cutting edge designs.
							{/* <p className={styled.blue} onClick={() => setIsOpen3(true)}>
								Read More
							</p> */}
						</p>
						<Modal className={styled.background} isOpen={isOpen3}>
							<h1>Raja Border Tiles</h1>
							<p>
								Sudoku Solver is a Website that gives you the Solution of Every
								Sudoko Problem that you input and also you can visualize each
								step of how the sudoku is getting solved.
							</p>
							<p>
								A website that allows users to solve any sudoku problem
								<h3> Tech Stack: HTML, CSS, JavaScript</h3>
								Solo Project was done in 2 days.
								<br />
							</p>
							<button onClick={() => setIsOpen3(false)} className={styled.btn}>
								Close
							</button>
						</Modal>
					</div>
					<h5>HTML || CSS || JavaScript</h5>
					<div className={styled.flex}>
						<a
							className={styled.size}
							href="https://rajabordertiles.com/"
							target="_blank"
						>
							{" "}
							<AiFillGithub className={styled.size} />
						</a>
						<a
							className={styled.size}
							href="https://rajabordertiles.com/"
							target="_blank"
						>
							<BiLink className={styled.size} />
						</a>
					</div>
				</div>
			</div>
			{/* ------ project 5 */}
			<div className={styled.width}>
				<div className={styled.left}>
					<img
						className={styled.img}
						src="https://media.istockphoto.com/photos/professional-tiler-making-new-floor-picture-id1319403503?b=1&k=20&m=1319403503&s=170667a&w=0&h=vhjko9vLFi8tFnNil5qwxKZ5bPTieV_idKs50oTwb2k="
						alt="logo"
					/>
				</div>
				<div className={styled.right}>
					<h4 className={styled.color}>Featured</h4>
					<h2>Tilers</h2>
					<div className={styled.box}>
						<p>
							Tilers is a MISSION to offer quality and colourful living for
							everyone. Here at Tilers we design and produce our products with
							extraordinary enthusiasm.
							{/* <p className={styled.blue} onClick={() => setIsOpen4(true)}>
								Read More
							</p> */}
						</p>
						<Modal className={styled.background} isOpen={isOpen4}>
							<h1>Tilers</h1>
							<p>
								AirGarage helps churches and small businesses generate extra
								funding and income by renting out their unused parking spaces.
							</p>
							<p>
								A website that allows users to rent or lease accommodation not
								limited to bed and breakfasts, hostels, homestays, apartments,
								rooms, or hotels.
								<h3> Tech Stack: HTML, CSS, JavaScript</h3>
								A collaborative project in 5 days with 2 people
								<br />
								Roles & Responsibility: Make Navbar and Footer with responsive
								website.
							</p>
							<button onClick={() => setIsOpen4(false)} className={styled.btn}>
								Close
							</button>
						</Modal>
					</div>
					<h5>HTML || CSS || JavaScript</h5>
					<div className={styled.flex}>
						<a
							className={styled.size}
							href="https://tilers.co.in/#"
							target="_blank"
						>
							{" "}
							<AiFillGithub className={styled.size} />
						</a>
						<a
							className={styled.size}
							href="https://tilers.co.in/#"
							target="_blank"
						>
							<BiLink className={styled.size} />
						</a>
					</div>
				</div>
			</div>
			{/* ------ project 6 */}
			<div className={styled.width}>
				<div className={styled.left}>
					<img
						className={styled.img}
						src="https://camo.envatousercontent.com/f601b6bff0a0256763d047ef0db6918a1a3cbf20/68747470733a2f2f646f63756d656e742e6735706c75732e6e65742f696d616765735f6465736372697074696f6e2f686f6d6569642f7570646174652d6e65772d64656d6f2e6a7067"
						alt="logo"
					/>
				</div>
				<div className={styled.right}>
					<h4 className={styled.color}>Featured</h4>
					<h2>Cipher Tell</h2>
					<div className={styled.box}>
						<p>
							Cipher Tell is a on going project for Our client Mr. Ramesh for
							his Real Estate management.
							{/* <p className={styled.blue} onClick={() => setIsOpen5(true)}>
								Read More
							</p> */}
						</p>
						<Modal className={styled.background} isOpen={isOpen5}>
							<h1>Cipher Tell</h1>
							<p>
								Playing memory games can improve other brain functions, such as
								attention, concentration, and focus. Memory games give space to
								critical thinking and that helps children nurture their
								attention to detail. Memory games can improve visual
								recognition. ... A good short-term memory can improve a person's
								long-term memory too.
							</p>
							<p>
								A website that allows users to solve any memory game
								<h3> Tech Stack: React</h3>
								Solo Project was done in 1 days.
								<br />
							</p>
							<button onClick={() => setIsOpen5(false)} className={styled.btn}>
								Close
							</button>
						</Modal>
					</div>
					<h5>React</h5>
					<div className={styled.flex}>
						<a
							className={styled.size}
							href="https://ciphertell.com/"
							target="_blank"
						>
							{" "}
							<AiFillGithub className={styled.size} />
						</a>
						<a
							className={styled.size}
							href="https://ciphertell.com/"
							target="_blank"
						>
							<BiLink className={styled.size} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
