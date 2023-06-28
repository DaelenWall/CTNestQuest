import React from "react";

function Home(props) {

 const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
        const mutationResponse = await login({
            variables: { email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
    } catch (e) {
        console.log(e);
    }
    };
  return (
    <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
      </form>
  );
};

export default Home;