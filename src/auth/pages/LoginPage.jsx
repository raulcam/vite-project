import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sigIn } from "../../reducers/auth";
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
} from "../styles/Login.styles";
import Translation from "../Traslations";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lenguageDefault = "en";

  const changeLanguage = (lenguage = "es") => {
    if (lenguage == "en") return Translation.en;
    return Translation.es;
  };

  // Simulación de autenticación

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await localStorage.setItem("@token", data.pass);
      dispatch(sigIn(data.pass));
      navigate("/");
    } catch (error) {
      console.log(error);
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
                {...register("name", {
                  required: true,
                })}
                type="text"
                placeholder={changeLanguage(lenguageDefault).username}
              />
            </InputGroup>
            <InputGroup>
              <input
                type="password"
                {...register("pass", {
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
