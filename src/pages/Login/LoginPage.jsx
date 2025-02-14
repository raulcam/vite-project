import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Logo from "../../assets/icon-logo.jpg";
import dentalImage from "../../assets/dental.jpg";
import {
  Container,
  ImageHolder,
  ImageSection,
  FormContainer,
  LogoLink,
  Subtitle,
  FormSection,
  CheckboxGroup,
  Title,
  FooterText,
  InputGroup,
  SubmitButton,
} from "../../auth/Login.styles";
import Translation from "../../auth/Traslations";
import api from "../../api/api";
import { useDispatch } from "react-redux";
import { singIn } from "../../reducers/auth";
import { useEffect } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lenguageDefault = "en";
  const dispatch = useDispatch();

  const changeLanguage = (lenguage = "es") => {
    if (lenguage == "en") return Translation.en;
    return Translation.es;
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      location.push("/");
    }
  }, [location]);

  const onSubmit = async (data) => {
    let body = {
      email: data.email,
      password: data.password,
    };
    try {
      let response = await api.post("/auth/login", body);
      if (response.status === 200) {
        await localStorage.setItem("@token", response.data.token);
        dispatch(singIn(response.data.token))
        navigate("/");
      }
    } catch (err) {
      console.log(err || "Error al iniciar sesión");
    }
  };

  return (
    <Container>
      <ImageSection>
        <ImageHolder style={{ backgroundImage: `url(${dentalImage})` }} />
      </ImageSection>
      <FormSection>
        <FormContainer>
          <LogoLink href="#">
            <img src={Logo} alt="Company Logo" />
          </LogoLink>
          <Title>{changeLanguage(lenguageDefault).companyName}</Title>
          <Subtitle>{changeLanguage(lenguageDefault).companySloga}</Subtitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <input
                type="email"
                {...register("email", {
                  required: true,
                })}
                placeholder={changeLanguage(lenguageDefault).email}
              />
            </InputGroup>
            <InputGroup>
              <input
                type="password"
                {...register("password", {
                  required: true,
                })}
                placeholder={changeLanguage(lenguageDefault).password}
              />
            </InputGroup>
            <CheckboxGroup>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="formCheck"
                />
                <label htmlFor="formCheck" className="form-check-label">
                  <small>{changeLanguage(lenguageDefault).rememberMe}</small>
                </label>
              </div>
            </CheckboxGroup>
            <SubmitButton type="submit">
              {changeLanguage(lenguageDefault).login}
            </SubmitButton>
          </form>
          <FooterText>
            <small>
              {changeLanguage(lenguageDefault).dontAccount}{" "}
              <a href="#">{changeLanguage(lenguageDefault).createAccunt}</a>
            </small>
          </FooterText>
        </FormContainer>
      </FormSection>
    </Container>
  );
};

export default LoginPage;
