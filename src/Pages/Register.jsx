import { useEffect, useRef, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userRegister } from '../Store';
export default function Register() {
	const { status, error, user } = useSelector((state) => state.auth);
	console.log(status, error, user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		if (status === 'succeeded') navigate('/otp');
	}, [status]);

	const [formData, setFormData] = useState({
		userName: '',
		firstName: '',
		lastName: '',
		phoneNo: null,
		email: '',
		password: '',
		matchPassword: '',
	});
	const idRef = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('handlesubmit');
		const {
			userName,
			firstName,
			lastName,
			phoneNo,
			email,
			password,
			matchPassword,
		} = formData;
		if (
			!userName.trim() ||
			!firstName.trim() ||
			!lastName.trim() ||
			!phoneNo.trim() ||
			!email.trim() ||
			!password.trim() ||
			!matchPassword.trim()
		)
			return alert('invalid credentials . please enter values');

		if (phoneNo.trim().toString().length !== 10)
			return alert('invalid phone no.please enter valid no');
		if (password.trim().length < 8)
			return alert('password minimum length must be 8');
		if (password.trim() !== matchPassword.trim())
			return alert('password need to match');

		console.log('handlesubmit success');

		dispatch(userRegister(formData));
	};
	let content;
	if (status === 'pending')
		content = (
			<span className='bg-warning'>
				<h1>...</h1>
			</span>
		);
	if (status === 'failed') content = <span className='bg-danger'>{error}</span>;
	if (status === 'succeeded')
		content = <span className='bg-success'>{user}</span>;

	return (
		<div>
			<Container>
				<Row className='vh-100 d-flex justify-content-center align-items-center'>
					<Col
						md={8}
						lg={6}
						xs={12}>
						<div className='border border-3 border-primary'></div>
						{content}
						<Card className='shadow'>
							<Card.Body>
								<div className='mb-3 mt-md-4'>
									<h2 className='fw-bold mb-2 text-uppercase '>
										Brand<br></br>
										<small
											className={`${
												status === 'pending'
													? 'bg-warning'
													: status === 'succeeded'
													? 'bg-success'
													: status === 'failed'
													? 'bg-danger'
													: 'bg-light'
											} text-white`}>
											Status:{status}
										</small>
									</h2>
									<p className=' mb-5'>Please enter your login and password!</p>
									<div className='mb-3'>
										<Form
											onSubmit={handleSubmit}
											ref={idRef}>
											<Form.Group className='mb-3'>
												<Form.Label className='text-center'>
													User Name
												</Form.Label>
												<Form.Control
													type='text'
													name='userName'
													placeholder='Enter User Name'
													min={5}
													max={8}
													required
													value={formData.userName}
													onChange={(e) =>
														setFormData((pre) => ({
															...pre,
															userName: e.target.value,
														}))
													}
												/>
											</Form.Group>

											<Form.Group className='mb-3'>
												<Form.Label className='text-center'>
													First Name
												</Form.Label>
												<Form.Control
													type='text'
													name='firstName'
													placeholder='Enter First Name'
													required
													value={formData.firstName}
													onChange={(e) =>
														setFormData((pre) => ({
															...pre,
															firstName: e.target.value,
														}))
													}
												/>
											</Form.Group>
											<Form.Group className='mb-3'>
												<Form.Label className='text-center'>
													Last Name
												</Form.Label>
												<Form.Control
													type='text'
													name='lastName'
													placeholder='Enter Last Name'
													required
													value={formData.lastName}
													onChange={(e) =>
														setFormData((pre) => ({
															...pre,
															lastName: e.target.value,
														}))
													}
												/>
											</Form.Group>
											<Form.Group className='mb-3'>
												<Form.Label className='text-center'>
													Phone No
												</Form.Label>
												<Form.Control
													type='number'
													name='phoneNo'
													placeholder='Enter Phone Number'
													required
													min={10}
													value={formData.phoneNo}
													onChange={(e) =>
														setFormData((pre) => ({
															...pre,
															phoneNo: e.target.value,
														}))
													}
												/>
											</Form.Group>
											<Form.Group className='mb-3'>
												<Form.Label className='text-center'>
													Email address
												</Form.Label>
												<Form.Control
													type='email'
													name='email'
													placeholder='Enter email'
													required
													value={formData.email}
													onChange={(e) =>
														setFormData((pre) => ({
															...pre,
															email: e.target.value,
														}))
													}
												/>
											</Form.Group>
											<Form.Group
												className='mb-3'
												controlId='formBasicPassword'>
												<Form.Label>Password</Form.Label>
												<Form.Control
													type='password'
													name='password'
													placeholder='Password'
													required
													min={8}
													value={formData.password}
													onChange={(e) =>
														setFormData((pre) => ({
															...pre,
															password: e.target.value,
														}))
													}
												/>
											</Form.Group>
											<Form.Group
												className='mb-3'
												controlId='formBasicPassword'>
												<Form.Label>c Password</Form.Label>
												<Form.Control
													type='password'
													name='matchPassword'
													placeholder='Password'
													required
													min={8}
													value={formData.matchPassword}
													onChange={(e) =>
														setFormData((pre) => ({
															...pre,
															matchPassword: e.target.value,
														}))
													}
												/>
											</Form.Group>
											<Form.Group
												className='mb-3'
												controlId='formBasicCheckbox'>
												<p className='small'>
													<a
														className='text-primary'
														href='#!'>
														already have an account?
													</a>
												</p>
											</Form.Group>
											<div className='d-grid'>
												<Button
													variant='primary'
													disabled={status === 'pending'}
													type='submit'>
													Register
												</Button>
											</div>
										</Form>
										<div className='mt-3'>
											<p className='mb-0  text-center'>
												Don't have an account?{' '}
												<a
													href="{''}"
													className='text-primary fw-bold'>
													Login
												</a>
											</p>
										</div>
									</div>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
