import { useContext } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {
    logOutUser,
    loginUser,
    updateLoginInfo,
    isLoginLoading,
    loginInfo,
    LoginError,
  } = useContext(AuthContext);

  return (
    <div onSubmit={loginUser}>
      <Form>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Login</h2>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, email: e.target.value })
                }
              />
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, password: e.target.value })
                }
              />

              <Button variant="primary" type="submit">
                {isLoginLoading ? "Login..." : "Login"}
              </Button>

              {LoginError?.error && (
                <Alert variant="danger">
                  <p>{LoginError?.message}</p>
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Login;
