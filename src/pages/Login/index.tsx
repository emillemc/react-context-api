import FormLogin from "../../components/Form/Login";
import { Section, Container, Content } from "./style";

const Login = () => {
  return (
    <Section>
      <Container>
        <Content>
          <div className="header">
            <h4>Welcome!</h4>
            <h2>Join The Community</h2>
          </div>
          <FormLogin />
        </Content>
      </Container>
    </Section>
  );
};
export default Login;
