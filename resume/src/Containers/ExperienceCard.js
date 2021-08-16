import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { Fade } from "react-reveal";

const ExperienceCard = ({ experience }) => {
	return (
		<Fade right duration={1000} distance="40px">
			<Card style = {{width: "540px", height: "410px"}} className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h5 className="text-info">
								{experience.name}
							</h5>
							<h6>{experience.subHeader}</h6>
							<Badge color="info" className="mr-1">
								{experience.duration}
							</Badge>
							<p className="description mt-3">{experience.desc}</p>
							<ul>
								{experience.descBullets
									? experience.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default ExperienceCard;