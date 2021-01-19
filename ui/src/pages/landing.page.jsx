import './landing.page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar,Button,Form,} from 'react-bootstrap';

export function LandingPage() {
	return (
		<Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" className="bg-light">
			<Navbar.Brand href="#landing" className="bg-dark">FamilyBudget</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
				<Nav className="mr-auto">
					<Nav.Link href="#landing">Landing</Nav.Link>
					<Nav.Link href="#dashboard">Dashboard</Nav.Link>
				</Nav>
				<Form inline>
					<Button variant="dark" className="mr-sm-2" >Sign  In </Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>

	);
}