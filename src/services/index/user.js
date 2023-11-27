import axios from "axios";
const signup = async ({ name, email, password }) => {
  try {
    const {} = await axios.options("/api/users/register");
  } catch (error) {}
};
