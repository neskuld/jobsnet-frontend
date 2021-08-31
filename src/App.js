import React, { useState, useEffect} from "react";
import styled, { createGlobalStyle} from "styled-components";
import axios from 'axios';
import Logo from './JobsNET-logo.png';


const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
`;

const Header = styled.div`
	display: flex;
	position: absolute;
	width: 100vw;
	height: 12vh;
	left: 0px;
	top: 0px;
	background: #034860;
	justify-content: space-between;
	padding: 25px 50px;

	h1 {
		color: #ffffff;
	}

	ul {
		display: flex;
		justify-content: space-evenly;
		list-style: none;
		font-weight: 300;
		font-style: italic;
		font-size: 20px;
	}

	li, a {
		display: inline;
		text-decoration: none;
		color: #ffffff;
		padding: 10px;
		transition: 300ms;
	}

	a:hover {
		color: black;
	}
`;

const Body = styled.div`
	align-content: center;
	p {
		text-align: center;
		margin-top: 10px;
	}
`;

const Descricao = styled.div`
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 40%;
`;

const Imagem = styled.img`
	margin-top: 15vh;
	margin-bottom: 30px;
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 40%;
	width: 13vw;
`;

const Formulario = styled.fieldset`
	background: #ffffff;
	border: 1px solid #000000;
	border-radius: 3px;
	box-sizing: border-box;
	box-shadow: 0.5vw 0.5vw 4px rgba(0, 0, 0, 0.25);
	margin: 40px 18vw;
	padding: 1vw;
	width: 60vw;

	input {
		border: 1px solid black;
		border-radius: 3px;
	}
`;

const LinhaPreta = styled.div`
	border-top: 1px solid black;
	margin: 5px 20px;
`;

const TituloSecao = styled.h4`
	margin-left: 2vw;
`;

const Inputs = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 10px;
	justify-content: space-between;
`;

const InputIndividual = styled.div`
	padding: 5px;

	label {
		padding: 5px;
	}
`;

const Responsividade = styled.div`
	@media only screen and (max-width: 768px) {
		h1 {
			font-size: 1.5rem;
			margin: 0;
			padding: 2vw;
			margin-left: 2vw;
		}

		li {
			padding: 2vw;
		}
	}

	@media only screen and (max-width: 480px) {
		h1 {
			font-size: 1.5rem;
			margin: 0;
			padding: 0.5vw;
		}

		li {
			padding: 0.5vw;
			left: 1vw;
		}
	}
`;

const DivBotao = styled.div`
	display: flex;
	align-items: center;
	margin-left: 40%;
`;


const Botao = styled.button`
	box-shadow: inset 0px 1px 0px 0px #54a3f7;
	background: linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
	background-color: #007dc1;
	border-radius: 3px;
	border: 1px solid #124d77;
	display: inline-block;
	cursor: pointer;
	color: #ffffff;
	font-family: Arial;
	font-size: 13px;
	padding: 10px 20px;
	margin: 10px;
	text-decoration: none;
	text-shadow: 0px 1px 0px #154682;
	transition: 300ms;
	&:hover {
		background: linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);
		background-color: #0061a7;
		color: black;
	}
	&:active {
		position: relative;
		top: 1px;
	}
`;

const SpanErro = styled.span`
	display: ${(props) => (props.isError ? 'block' : 'none')};
	color: red;
	text-align: center;
`
const SpanErroCPF = styled.span`
	display: ${(props) => (props.isErrorCpf ? "block" : "none")};
	color: red;
	text-align: center;
`;

const SpanSucesso = styled.span`
	display: ${(props) => (props.isSuccess ? "block" : "none")};
	color: green;
	text-align: center;
`;


const App = () => {
	const fetchAddress = async () => {
    const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    setForm({
		...form,
		logradouro: address.data.logradouro,
		bairro: address.data.bairro,
		cidade: address.data.localidade
	});
  };

  const createCandidate = async (candidate) => { 
	try {  
	const user = await axios.post("https://st-jobsnet-backend.herokuapp.com/register",
		form
	);
	if (user.status === 200) {
		setDeuCerto(true);
		setDeuErro(false); 
		}
	} catch (error) {
		setDeuErro(true);
	}
  };
	
  const [form, setForm] = useState({
	name: '',
	position: '',
	birth: '',
	civil: '',
	gender:'',
    logradouro: '',
	cep: '',
	bairro: '',
	cidade: '',
	email: '',
	telefone: '',
	identidade: '',
	cpf: '',
	veiculo: '',
	cnh: '',
  });

	
  const [deuErro, setDeuErro] = useState(false);

  const [deuCerto, setDeuCerto] = useState(false);
	
  return (
		<>
			<Responsividade>
				<GlobalStyle />
				<Header>
					<h1>JobsNET</h1>
					<ul>
						<li>
							<a href="https://github.com/neskuld" target="blank">
								Github
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/anacaroline-oliveirasilva/"
								target="blank"
							>
								LinkedIn
							</a>
						</li>
					</ul>
				</Header>
				<Body>
					<Descricao>
						<Imagem src={Logo} />
						<LinhaPreta />
						<p>
							Especialista em recrutamento e seleção de
							profissionais nas mais diversas áreas.
						</p>
						<p>
							O melhor site de mentira para cadastrar seu
							currículo e não conseguir emprego porque o site é de
							mentira! Feito como desafio de encerramento do curso
							Start-Tech da Gama Academy em parceria com a Ambev.
						</p>
					</Descricao>
					<Formulario>
						<TituloSecao>Dados Pessoais:</TituloSecao>
						<LinhaPreta />
						<Inputs>
							{/* NOME */}
							<InputIndividual>
								<label htmlFor="name">Nome:</label>
								<input
									onChange={(e) => {
										setForm({
											...form,
											name: e.target.value,
										});
									}}
									value={form.name}
									placeholder="Nome Completo"
								></input>
							</InputIndividual>
							{/* CARGO */}
							<InputIndividual>
								<label htmlFor="position">
									Cargo Pretendido:
								</label>
								<input
									onChange={(e) => {
										setForm({
											...form,
											position: e.target.value,
										});
									}}
									value={form.position}
									placeholder="Cargo Pretendido"
								></input>
							</InputIndividual>
							{/* NASCIMENTO */}
							<InputIndividual>
								<label htmlFor="birth">
									Data de Nascimento:
								</label>
								<input
									type="Date"
									onChange={(e) => {
										setForm({
											...form,
											birth: e.target.value,
										});
									}}
									value={form.birth}
								></input>
							</InputIndividual>
							{/* ESTADO CIVIL */}
							<InputIndividual>
								<label htmlFor="civil">Estado Civil:</label>
								<select
									name="civil"
									onChange={(e) => {
										setForm({
											...form,
											civil: e.target.value,
										});
									}}
									value={form.civil}
								>
									<option default>-----</option>
									<option value={"Não informado"}>
										Não Informado
									</option>
									<option value={"Solteiro"}>
										Solteiro(a)
									</option>
									<option value={"Casado"}>Casado(a)</option>
									<option value={"Divorciado/Separado"}>
										Divorciado(a)/Separado(a)
									</option>
									<option value={"Viúvo"}>Viúvo(a)</option>
								</select>
							</InputIndividual>
							{/* GENERO */}
							<InputIndividual>
								<label htmlFor="gender">Gênero:</label>
								<select
									name="gender"
									onChange={(e) => {
										setForm({
											...form,
											gender: e.target.value,
										});
									}}
									value={form.gender}
								>
									<option default>
										-----
									</option>
									<option value={"Não informado"}>
										Não Informado
									</option>
									<option value={"Feminino"}>Feminino</option>
									<option value={"Masculino"}>
										Masculino
									</option>
									<option value={"Não-binárie"}>
										Não-binárie
									</option>
									<option value={"Outro"}>Outro</option>
								</select>
							</InputIndividual>
							{/* CEP */}
							<InputIndividual>
								<label htmlFor="cep">CEP:</label>
								<input
									onBlur={() => {
										fetchAddress();
									}}
									onChange={(e) => {
										setForm({
											...form,
											cep: e.target.value,
										});
									}}
									value={form.cep}
									placeholder="CEP"
								></input>
							</InputIndividual>
							{/* ENDEREÇO */}
							<InputIndividual>
								<label htmlFor="endereco">Endereço:</label>
								<input
									onChange={(e) => {
										setForm({
											...form,
											logradouro: e.target.value,
										});
									}}
									value={form.logradouro}
									placeholder="Endereço"
								></input>
							</InputIndividual>
							{/* BAIRRO */}
							<InputIndividual>
								<label htmlFor="bairro">Bairro:</label>
								<input
									onChange={(e) => {
										setForm({
											...form,
											bairro: e.target.value,
										});
									}}
									value={form.bairro}
									placeholder="Endereço"
								></input>
							</InputIndividual>
							{/* CIDADE */}
							<InputIndividual>
								<label htmlFor="cidade">Cidade:</label>
								<input
									onChange={(e) => {
										setForm({
											...form,
											cidade: e.target.value,
										});
									}}
									value={form.cidade}
									placeholder="Cidade"
								></input>
							</InputIndividual>
							{/* TELEFONE */}
							<InputIndividual>
								<label htmlFor="telefone">Telefone:</label>
								<input
									onChange={(e) => {
										setForm({
											...form,
											telefone: e.target.value,
										});
									}}
									value={form.telefone}
									placeholder="Telefone"
								></input>
							</InputIndividual>
							{/* EMAIL */}
							<InputIndividual>
								<label htmlFor="email">E-mail:</label>
								<input
									onChange={(e) => {
										setForm({
											...form,
											email: e.target.value,
										});
									}}
									value={form.email}
									placeholder="email"
								></input>
							</InputIndividual>
						</Inputs>
						<TituloSecao>Documentos:</TituloSecao>
						<LinhaPreta />
						<Inputs>
							{/* IDENTIDADE */}
							<InputIndividual>
								<label htmlFor="identidade">Identidade:</label>
								<input
									onChange={(e) => {
										setForm({
											...form,
											identidade: e.target.value,
										});
									}}
									value={form.identidade}
									placeholder="Identidade"
								></input>
							</InputIndividual>
							{/* CPF */}
							<InputIndividual>
								<label htmlFor="cpf">CPF:</label>
								<input
									onChange={(e) => {
										setForm({
											...form,
											cpf: e.target.value,
										});
									}}
									value={form.cpf}
									placeholder="CPF"
								></input>
							</InputIndividual>
							{/* VEÍCULOS */}
							<InputIndividual>
								<label htmlFor="veiculo">Possui Veículo:</label>
								<select
									name="veiculo"
									onChange={(e) => {
										setForm({
											...form,
											veiculo: e.target.value,
										});
									}}
									value={form.veiculo}
								>
									<option default>-----</option>
									<option value={"Não possui"}>
										Não Possuo
									</option>
									<option value={"Carro"}>
										Possuo carro
									</option>
									<option value={"Moto"}>Possuo moto</option>
									<option value={"Ambos"}>
										Possuo carro e moto
									</option>
									<option value={"Outro"}>
										Possuo outro veículo
									</option>
								</select>
							</InputIndividual>
							{/* CNH */}
							<InputIndividual>
								<label htmlFor="cnh">Possui CNH:</label>
								<select
									name="cnh"
									onChange={(e) => {
										setForm({
											...form,
											cnh: e.target.value,
										});
									}}
									value={form.cnh}
								>
									<option default>-----</option>
									<option value={"Não possui"}>
										Não Possuo
									</option>
									<option value={"CNH A"}>Categoria A</option>
									<option value={"CNH B"}>Categoria B</option>
									<option value={"CNH AB"}>
										Categoria AB
									</option>
									<option value={"CNH C+"}>
										Categoria C ou mais
									</option>
									<option value={"CNH AC+"}>
										Categoria AC ou mais
									</option>
								</select>
							</InputIndividual>
						</Inputs>
						<DivBotao>
							<Botao
								type="submit"
								onClick={() => createCandidate()}
							>
								Enviar
							</Botao>
							<Botao
								type="clear"
								onClick={() => window.location.reload()}
							>
								Limpar
							</Botao>
						</DivBotao>
						<SpanErro isError={deuErro}>
							Erro! CPF duplicado ou campos sem preenchimento.
						</SpanErro>
						<SpanSucesso isSuccess={deuCerto}>
							Currículo cadastrado com sucesso!
						</SpanSucesso>
					</Formulario>
				</Body>
			</Responsividade>
		</>
  );
}

export default App;
