import React from 'react';
import Logo from '../images/Pennysmart-white.svg';

import './index.css';
import SEO from '../components/seo';

const IndexPage = () => (
	<div className="community">
		<SEO />
		<div className="row">
			<div class="col">
				<div className="community__image">
          <Logo />
        </div>
			</div>
			<div class="col">
				<div className="community__text">
					<h1>
						Meet other <span>financially savvy</span> people in Accra.
					</h1>
					<p>
						We are students, working professionals, business founders, and local traders; our community
						represents a fine mix of amazing individuals. We host members to amazing events and we invite
						you to join us on this wonderful journey to groom the next wealthy generation of Africans. </p>
              <p> We
						host events on savings and investment approaches, building and creating wealth, and improvement
						or addition of new skill sets. </p>
            <p> Our Team focuses on choosing carefully curated finance advice and
						experts, determining new ways to help you increase your income and improving your employability
						or promotion at work. </p>
            <button class="btn--primary">
              Join our community
            </button>
				</div>
			</div>
		</div>
	</div>
);

export default IndexPage;
