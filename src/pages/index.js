import React from 'react';


import './index.css';
import Logo from '../images/Pennysmart-white.svg';
import SEO from '../components/seo';

const IndexPage = () => (
	<div className="community">
		<SEO title="Pennysmart Community" />
		<div className="row">
			<div className="col">
				<div className="community__image">	
					<a href="https://pennysmart.com" target="_blank" rel="noopener noreferrer" >
					<Logo />
					</a>
				</div>
			</div>
			<div className="col">
				<div className="community__text">
					<a
						className={`btn--primary top-button`}
						href="https://chat.whatsapp.com/HdJurJw9EDb9ezbk6PvggR"
						target="_blank"
						rel="noopener noreferrer" 
					>
						Join our community
					</a>
					<h1>
						Meet other <span>financially savvy</span> people in Accra.
					</h1>
					<p>
					We are students, working professionals, business founders, and local traders; our community represents a fine mix of amazing individuals.
					</p>
					<p>
					We host events that focuses on curated finance advice from experts, new ways to help you increase your income and improving your employability or promotion at work. 
					</p>
					<span>
						Benefits:
					</span>
					<ul>
						<li>
						Support from seasoned experts.
						</li>
						<li>
						Network with your peers in higher positions in their career.
						</li>
						<li>
						Access to skill training workshops and masterclasses.
						</li>
						<li>
						Belong to the top 5% of Ghanaians actively trying to  grow their net worth.
						</li>
					</ul>
					<a
						className={`btn--primary bottom-button`}
						href="https://chat.whatsapp.com/HdJurJw9EDb9ezbk6PvggR"
						target="_blank"
						rel="noopener noreferrer" 
					>
						Join our community
					</a>
				</div>
			</div>
		</div>
	</div>
);

export default IndexPage;
